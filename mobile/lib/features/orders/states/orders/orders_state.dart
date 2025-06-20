import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mobile/features/orders/repositories/models/list_orders.dart';
import 'package:mobile/features/orders/repositories/models/order.dart';
import 'package:mobile/features/orders/repositories/orders_repository.dart';

class OrdersState {
  final List<Order> orders;
  final int page;
  final int? totalItems;
  final int totalPages;
  final bool isLoading;
  final String? error;

  OrdersState({
    this.orders = const [],
    this.page = 1,
    this.totalItems = 0,
    this.totalPages = 1,
    this.isLoading = false,
    this.error,
  });

  OrdersState copyWith({
    List<Order>? orders,
    int? page,
    int? totalItems,
    int? totalPages,
    bool? isLoading,
    String? error,
  }) {
    return OrdersState(
      orders: orders ?? this.orders,
      page: page ?? this.page,
      totalItems: totalItems ?? this.totalItems,
      totalPages: totalPages ?? this.totalPages,
      isLoading: isLoading ?? this.isLoading,
      error: error,
    );
  }
}

class OrderNotifier extends StateNotifier<OrdersState> {
  final OrdersRepository ordersRepository;

  OrderNotifier(this.ordersRepository) : super(OrdersState(orders: []));

  Future<void> listOrders() async {
    try {
      state = state.copyWith(isLoading: true, error: null);

      final result = await ordersRepository.listOrders(
        ListOrdersRequestParams(page: state.page),
      );

      state = state.copyWith(
        isLoading: false,
        orders: result.items,
        page: result.page,
        totalItems: result.totalItems,
        totalPages: result.totalPages,
      );
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
    listOrders();
  }

  void toPreviousPage() {
    if (state.page <= 1 || state.isLoading) return;
    state = state.copyWith(
      isLoading: true,
      error: null,
      page: state.page - 1,
    );
    listOrders();
  }

  void toNextPage() {
    if (state.page >= state.totalPages || state.isLoading) return;
    state = state.copyWith(
      isLoading: true,
      error: null,
      page: state.page + 1,
    );
    listOrders();
  }

  void toLastPage() {
    if (state.page >= state.totalPages || state.isLoading) return;
    state = state.copyWith(
      isLoading: true,
      error: null,
      page: state.totalPages,
    );
    listOrders();
  }
}
