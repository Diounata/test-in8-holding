import 'package:flutter/material.dart';
import 'package:mobile/features/products/repositories/models/product.dart';
import 'package:mobile/features/products/widgets/product/product_amount_selector.dart';
import 'package:mobile/features/products/widgets/product/product_image.dart';
import 'package:mobile/utils/format_currency.dart';

class CartItemCard extends StatelessWidget {
  final Product product;
  final int amount;
  final VoidCallback incrementAmount;
  final VoidCallback decrementAmount;

  const CartItemCard({
    super.key,
    required this.product,
    required this.amount,
    required this.incrementAmount,
    required this.decrementAmount,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 4.0),
      padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8.0),
      constraints: const BoxConstraints(minHeight: 72.0),
      decoration: const BoxDecoration(
        color: Color(0xFFf8f9fc),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          Expanded(
            child: Row(
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                SizedBox(
                  width: 56.0,
                  height: 56.0,
                  child: ProductImage(image: product.image),
                ),
                const SizedBox(width: 12.0),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        product.name,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(
                          color: Color(0xFF0d0f1c),
                          fontSize: 16,
                          fontWeight: FontWeight.w500,
                          height: 1.5,
                        ),
                      ),
                      Text(
                        CurrencyFormatter.formatWithSymbol(
                          double.parse(product.price),
                        ),
                        maxLines: 2,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(
                          color: Color(0xFF47569e),
                          fontSize: 14,
                          fontWeight: FontWeight.normal,
                          height: 1.5,
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          ProductAmountSelector(
            amount: amount,
            incrementAmount: incrementAmount,
            decrementAmount: decrementAmount,
          ),
        ],
      ),
    );
  }
}
