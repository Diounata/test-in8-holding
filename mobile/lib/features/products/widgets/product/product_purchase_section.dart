import 'package:flutter/material.dart';
import 'package:mobile/features/products/repositories/models/product.dart';
import 'package:mobile/features/products/widgets/product/product_amount_selector.dart';

class ProductPurchaseSection extends StatelessWidget {
  final Product product;
  final int amount;
  final VoidCallback incrementAmount;
  final VoidCallback decrementAmount;
  final VoidCallback addCartItem;

  const ProductPurchaseSection({
    super.key,
    required this.product,
    required this.amount,
    required this.incrementAmount,
    required this.decrementAmount,
    required this.addCartItem,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 16.0),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          ProductAmountSelector(
            amount: amount,
            incrementAmount: incrementAmount,
            decrementAmount: decrementAmount,
          ),
          const SizedBox(height: 16.0),
          ElevatedButton(
            onPressed: addCartItem,
            style: ElevatedButton.styleFrom(
              minimumSize: const Size.fromHeight(48),
              backgroundColor: Colors.blue,
              foregroundColor: Colors.white,
              padding: const EdgeInsets.symmetric(horizontal: 20),
            ),
            child: const Text(
              'Adicionar ao carrinho',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.bold,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
