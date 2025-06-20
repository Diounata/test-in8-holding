import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mobile/features/cart/repositories/cart_items_repository.dart';
import 'package:mobile/features/cart/repositories/models/cart_item_with_product.dart';
import 'package:mobile/features/cart/repositories/models/list_cart_items.dart';
import 'package:mobile/features/cart/repositories/models/remove_cart_item.dart';
import 'package:mobile/features/cart/repositories/models/update_cart_item_amount.dart';

class CartItemsState {
  final List<CartItemWithProduct> cartItems;
  final int page;
  final int? totalItems;
  final int totalPages;
  final bool isLoading;
  final String? error;

  CartItemsState({
    this.cartItems = const [],
    this.page = 1,
    this.totalItems = 0,
    this.totalPages = 1,
    this.isLoading = false,
    this.error,
  });

  CartItemsState copyWith({
    List<CartItemWithProduct>? cartItems,
    int? page,
    int? totalItems,
    int? totalPages,
    bool? isLoading,
    String? error,
  }) {
    return CartItemsState(
      cartItems: cartItems ?? this.cartItems,
      page: page ?? this.page,
      totalItems: totalItems ?? this.totalItems,
      totalPages: totalPages ?? this.totalPages,
      isLoading: isLoading ?? this.isLoading,
      error: error,
    );
  }
}

class CartItemNotifier extends StateNotifier<CartItemsState> {
  final CartItemsRepository cartItemsRepository;

  CartItemNotifier(this.cartItemsRepository)
      : super(CartItemsState(cartItems: []));

  Future<void> listProducts() async {
    try {
      state = state.copyWith(isLoading: true, error: null);

      final result = await cartItemsRepository.listProducts(
        ListCartItemsRequestParams(page: state.page),
      );

      state = state.copyWith(
        isLoading: false,
        cartItems: result.items,
        page: result.page,
        totalItems: result.totalItems,
        totalPages: result.totalPages,
      );
    } catch (e) {
      state = state.copyWith(error: e.toString(), isLoading: false);
    }
  }

  Future<void> updateCartItemAmount(
    String cartItemId,
    int amount,
  ) async {
    if (state.isLoading) return;
    state = state.copyWith(isLoading: true, error: null);
    try {
      final cartItemIndex =
          state.cartItems.indexWhere((item) => item.id == cartItemId);

      if (cartItemIndex == -1) {
        throw Exception('Cart item not found in cart');
      }

      await cartItemsRepository.updateCartItemAmount(
        UpdateCartItemAmountRequestParams(cartItemId: cartItemId),
        UpdateCartItemAmountRequestBody(amount: amount),
      );

      final updatedCartItems = List<CartItemWithProduct>.from(state.cartItems);
      final oldItem = updatedCartItems[cartItemIndex];
      updatedCartItems[cartItemIndex] = oldItem.copyWith(amount: amount);

      state = state.copyWith(
        cartItems: updatedCartItems,
        isLoading: false,
      );
    } catch (e) {
      state = state.copyWith(error: e.toString(), isLoading: false);
    }
  }

  Future<void> removeCartItem(String cartItemId) async {
    if (state.isLoading) return;
    state = state.copyWith(isLoading: true, error: null);
    try {
      await cartItemsRepository.removeCartItem(
        RemoveCartItemRequestParams(cartItemId: cartItemId),
      );
      await listProducts();
    } catch (e) {
      state = state.copyWith(error: e.toString(), isLoading: false);
    }
  }

  void toFirstPage() {
    if (state.page <= 1 || state.isLoading) return;
    state = state.copyWith(
      isLoading: true,
      error: null,
      page: 1,
    );
    listProducts();
  }

  void toPreviousPage() {
    if (state.page <= 1 || state.isLoading) return;
    state = state.copyWith(
      isLoading: true,
      error: null,
      page: state.page - 1,
    );
    listProducts();
  }

  void toNextPage() {
    if (state.page >= state.totalPages || state.isLoading) return;
    state = state.copyWith(
      isLoading: true,
      error: null,
      page: state.page + 1,
    );
    listProducts();
  }

  void toLastPage() {
    if (state.page >= state.totalPages || state.isLoading) return;
    state = state.copyWith(
      isLoading: true,
      error: null,
      page: state.totalPages,
    );
    listProducts();
  }
}
