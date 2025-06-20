import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mobile/features/cart/repositories/cart_items_repository.dart';
import 'package:mobile/features/cart/repositories/models/add_cart_item.dart';
import 'package:mobile/features/products/repositories/models/product.dart';
import 'package:mobile/features/products/repositories/products_repository.dart';
import 'package:mobile/widgets/layout/tabs_navigation.dart';

class ProductState {
  final Product? product;
  final int amount;
  final bool isLoading;
  final String? error;

  ProductState({
    this.product,
    this.amount = 1,
    this.isLoading = false,
    this.error,
  });

  ProductState copyWith({
    Product? product,
    int? amount,
    bool? isLoading,
    String? error,
  }) {
    return ProductState(
      product: product ?? this.product,
      amount: amount ?? this.amount,
      isLoading: isLoading ?? this.isLoading,
      error: error,
    );
  }
}

class ProductNotifier extends StateNotifier<ProductState> {
  final ProductsRepository productsRepository;
  final CartItemsRepository cartItemsRepository;

  ProductNotifier(this.productsRepository, this.cartItemsRepository)
      : super(ProductState());

  Future<void> getProduct(String productId) async {
    try {
      state = state.copyWith(isLoading: true, error: null);

      final result = await productsRepository.getProduct(productId: productId);

      state = state.copyWith(
        isLoading: false,
        product: result,
        amount: 1,
      );
    } catch (e) {
      state = state.copyWith(error: e.toString(), isLoading: false);
    }
  }

  Future<void> addCartItem(BuildContext context) async {
    try {
      state = state.copyWith(isLoading: true, error: null);

      if (state.product == null) {
        state = state.copyWith(
          isLoading: false,
          error: 'Product is not loaded.',
        );
        return;
      }

      await cartItemsRepository.addCartItem(
        AddCartItemRequestBody(
          productId: state.product!.id,
          amount: state.amount,
        ),
      );

      state = state.copyWith(
        isLoading: false,
      );

      if (!context.mounted) return;

      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          backgroundColor: Colors.blue,
          content: Text(
            'Produto adicionado ao carrinho!',
            style: TextStyle(
              color: Colors.white,
            ),
          ),
        ),
      );
      Navigator.of(context).pushReplacement(
        MaterialPageRoute(builder: (context) => const TabsNavigationWidget()),
      );
    } catch (e) {
      state = state.copyWith(error: e.toString(), isLoading: false);
    }
  }

  void incrementAmount() {
    state = state.copyWith(amount: state.amount + 1);
  }

  void decrementAmount() {
    if (state.amount > 1) {
      state = state.copyWith(amount: state.amount - 1);
    }
  }
}
