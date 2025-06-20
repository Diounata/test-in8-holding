import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mobile/features/cart/repositories/cart_items_repository.dart';
import 'package:mobile/features/products/repositories/products_repository.dart';
import 'package:mobile/features/products/states/product/product_state.dart';

final productProvider = StateProvider<ProductState>((ref) {
  return ProductState();
});

final productNotifierProvider =
    StateNotifierProvider<ProductNotifier, ProductState>((ref) {
  final productsRepository = ProductsRepository();
  final cartItemsRepository = CartItemsRepository();
  return ProductNotifier(
    productsRepository,
    cartItemsRepository,
  );
});
