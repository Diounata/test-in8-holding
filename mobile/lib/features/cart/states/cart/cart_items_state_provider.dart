import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mobile/features/cart/repositories/cart_items_repository.dart';
import 'package:mobile/features/cart/states/cart/cart_items_state.dart';

final cartitemsProvider = StateProvider<CartItemsState>((ref) {
  return CartItemsState(cartItems: []);
});

final cartItemsNotifierProvider =
    StateNotifierProvider<CartItemNotifier, CartItemsState>((ref) {
  final cartItemsRepository = CartItemsRepository();
  return CartItemNotifier(cartItemsRepository);
});
