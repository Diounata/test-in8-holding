import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mobile/features/cart/states/cart/cart_items_state_provider.dart';
import 'package:mobile/widgets/layout/tabs_navigation.dart';

class CartButton extends ConsumerStatefulWidget {
  const CartButton({super.key});

  @override
  ConsumerState<CartButton> createState() => _CartButton();
}

class _CartButton extends ConsumerState<CartButton> {
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

    return Stack(
      alignment: Alignment.center,
      children: [
        IconButton(
          onPressed: () {
            Navigator.of(context).pushReplacement(
              MaterialPageRoute(
                builder: (context) => const TabsNavigationWidget(
                  currentIndex: 1,
                ),
              ),
            );
          },
          icon: const Icon(
            Icons.shopping_cart_outlined,
            color: Colors.black,
            size: 24,
          ),
        ),
        Positioned(
          top: 4,
          right: 5,
          child: Container(
            padding: const EdgeInsets.symmetric(
              horizontal: 4,
              vertical: 1,
            ),
            decoration: BoxDecoration(
              color: Colors.blue,
              borderRadius: BorderRadius.circular(12),
            ),
            constraints: const BoxConstraints(
              minWidth: 20,
            ),
            child: Text(
              (cartItemsState.totalItems ?? 0) > 9
                  ? '+9'
                  : (cartItemsState.totalItems ?? 0).toString(),
              style: const TextStyle(
                color: Colors.white,
                fontSize: 12,
                fontWeight: FontWeight.bold,
              ),
              textAlign: TextAlign.center,
            ),
          ),
        ),
      ],
    );
  }
}
