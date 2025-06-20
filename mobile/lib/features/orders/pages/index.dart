import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mobile/features/orders/states/orders/orders_state_provider.dart';
import 'package:mobile/features/orders/widgets/order_card.dart';
import 'package:mobile/widgets/ui/pagination.dart';

class OrdersPage extends ConsumerStatefulWidget {
  const OrdersPage({super.key});

  @override
  ConsumerState<OrdersPage> createState() => _OrdersPage();
}

class _OrdersPage extends ConsumerState<OrdersPage> {
  @override
  void initState() {
    super.initState();
    Future.microtask(() {
      ref.read(ordersNotifierProvider.notifier).listOrders();
    });
  }

  @override
  Widget build(BuildContext context) {
    final ordersState = ref.watch(ordersNotifierProvider);

    return ListView(
      padding: const EdgeInsets.fromLTRB(20, 24, 20, 20),
      children: [
        const Text(
          'Pedidos',
          style: TextStyle(
            fontSize: 24.0,
            fontWeight: FontWeight.bold,
          ),
        ),
        const SizedBox(height: 8.0),
        Text(
          'Visualize os seus pedidos feitos na plataforma.',
          style: TextStyle(
            fontSize: 16,
            color: Colors.black.withOpacity(0.6),
            fontWeight: FontWeight.w400,
          ),
        ),
        const SizedBox(height: 20.0),
        if (ordersState.orders.isEmpty)
          const Center(child: Text('Nenhum pedido encontrado.'))
        else
          ...ordersState.orders.map(
            (order) => OrderCard(
              orderId: order.id,
              date: order.createdAt,
              total: double.parse(order.totalPrice),
            ),
          ),
        const SizedBox(height: 20),
        Pagination(
          page: ordersState.page,
          totalPages: ordersState.totalPages,
          toFirstPage: () {
            ref.read(ordersNotifierProvider.notifier).toFirstPage();
          },
          toPreviousPage: () {
            ref.read(ordersNotifierProvider.notifier).toPreviousPage();
          },
          toNextPage: () {
            ref.read(ordersNotifierProvider.notifier).toNextPage();
          },
          toLastPage: () {
            ref.read(ordersNotifierProvider.notifier).toLastPage();
          },
        ),
      ],
    );
  }
}
