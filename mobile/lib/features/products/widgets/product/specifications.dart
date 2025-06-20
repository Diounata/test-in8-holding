import 'package:flutter/material.dart';
import 'package:mobile/features/products/repositories/models/product.dart';
import 'package:mobile/features/products/widgets/product/specification_item.dart';

class Specifications extends StatelessWidget {
  final Product product;

  const Specifications({super.key, required this.product});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const Padding(
          padding: EdgeInsets.symmetric(vertical: 8.0),
          child: Text(
            'Especificações',
            style: TextStyle(
              fontSize: 18,
              fontWeight: FontWeight.bold,
              color: Color(0xFF0d0f1c),
            ),
          ),
        ),
        SpecificationItem(label: 'Categoria', value: product.category),
        SpecificationItem(label: 'Material', value: product.material),
      ],
    );
  }
}
