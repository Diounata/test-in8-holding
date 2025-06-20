import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mobile/features/cart/states/cart/cart_items_state_provider.dart';
import 'package:mobile/features/cart/widgets/cart/cart_item_card.dart';
import 'package:mobile/features/cart/widgets/cart/finish_order_button.dart';
import 'package:mobile/widgets/ui/pagination.dart';

class CartPage extends ConsumerStatefulWidget {
  const CartPage({super.key});

  @override
  ConsumerState<CartPage> createState() => _CartPage();
}

class _CartPage extends ConsumerState<CartPage> {
  @override
  void initState() {
    super.initState();
    Future.microtask(() {
      ref.read(cartItemsNotifierProvider.notifier).listProducts();
    });
  }

  @override
  Widget build(BuildContext context) {
    final cartItemsState = ref.watch(cartItemsNotifierProvider);

    if (cartItemsState.cartItems.isEmpty) {
      return const Center(
        child: Text(
          'Seu carrinho está vazio.',
          style: TextStyle(fontSize: 18.0),
        ),
      );
    }

    return ListView(
      padding: const EdgeInsets.fromLTRB(20, 24, 20, 20),
      children: [
        const Text(
          'Carrinho',
          style: TextStyle(
            fontSize: 24.0,
            fontWeight: FontWeight.bold,
          ),
        ),
        const SizedBox(height: 20.0),
        ...cartItemsState.cartItems.map((item) => CartItemCard(
              product: item.product,
              amount: item.amount,
              incrementAmount: () {
                ref
                    .read(cartItemsNotifierProvider.notifier)
                    .updateCartItemAmount(item.id, item.amount + 1);
              },
              decrementAmount: () {
                if (item.amount == 1) {
                  ref
                      .read(cartItemsNotifierProvider.notifier)
                      .removeCartItem(item.id);
                } else {
                  ref
                      .read(cartItemsNotifierProvider.notifier)
                      .updateCartItemAmount(item.id, item.amount - 1);
                }
              },
            )),
        const SizedBox(height: 20),
        Pagination(
          page: cartItemsState.page,
          totalPages: cartItemsState.totalPages,
          toFirstPage: () {
            ref.read(cartItemsNotifierProvider.notifier).toFirstPage();
          },
          toPreviousPage: () {
            ref.read(cartItemsNotifierProvider.notifier).toPreviousPage();
          },
          toNextPage: () {
            ref.read(cartItemsNotifierProvider.notifier).toNextPage();
          },
          toLastPage: () {
            ref.read(cartItemsNotifierProvider.notifier).toLastPage();
          },
        ),
        const FinishOrderButton(),
      ],
    );
  }
}
