import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mobile/features/orders/repositories/orders_repository.dart';
import 'package:mobile/features/orders/states/orders/orders_state.dart';

final ordersProvider = StateProvider<OrdersState>((ref) {
  return OrdersState(orders: []);
});

final ordersNotifierProvider =
    StateNotifierProvider<OrderNotifier, OrdersState>((ref) {
  final ordersRepository = OrdersRepository();
  return OrderNotifier(ordersRepository);
});
