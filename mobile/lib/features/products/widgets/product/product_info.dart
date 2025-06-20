import 'package:flutter/material.dart';
import 'package:mobile/features/products/repositories/models/product.dart';
import 'package:mobile/features/products/widgets/product/specifications.dart';
import 'package:mobile/utils/format_currency.dart';

class ProductInfo extends StatelessWidget {
  final Product product;

  const ProductInfo({super.key, required this.product});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          product.name,
          style: const TextStyle(
            fontSize: 22,
            fontWeight: FontWeight.bold,
            color: Color(0xFF0d0f1c),
          ),
        ),
        Padding(
          padding: const EdgeInsets.only(top: 4.0, bottom: 12.0),
          child: Text(
            product.description,
            style: const TextStyle(
              fontSize: 16,
              color: Color(0xFF0d0f1c),
            ),
          ),
        ),
        Padding(
          padding: const EdgeInsets.only(bottom: 12.0),
          child: Text(
            CurrencyFormatter.formatWithSymbol(double.parse(product.price)),
            style: const TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.w600,
              color: Color(0xFF0d0f1c),
            ),
          ),
        ),
        Specifications(product: product),
      ],
    );
  }
}
