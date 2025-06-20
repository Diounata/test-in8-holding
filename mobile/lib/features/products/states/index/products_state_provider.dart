import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mobile/features/products/repositories/products_repository.dart';
import 'package:mobile/features/products/states/index/products_state.dart';

final productsProvider = StateProvider<ProductsState>((ref) {
  return ProductsState(products: []);
});

final productsNotifierProvider =
    StateNotifierProvider<ProductNotifier, ProductsState>((ref) {
  final productsRepository = ProductsRepository();
  return ProductNotifier(productsRepository);
});
