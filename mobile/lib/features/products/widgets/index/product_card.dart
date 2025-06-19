import 'package:flutter/material.dart';
import 'package:mobile/features/products/repositories/models/product.dart';
import 'package:mobile/utils/format_currency.dart';

class ProductCard extends StatelessWidget {
  final Product product;

  const ProductCard({super.key, required this.product});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 12),
      child: SizedBox(
        width: double.infinity,
        child: Column(
          children: [
            LayoutBuilder(
              builder: (BuildContext context, BoxConstraints constraints) {
                final double maxWidth = constraints.maxWidth;
                return Image.network(
                  product.image,
                  width: maxWidth,
                  height: maxWidth,
                  fit: BoxFit.cover,
                  frameBuilder:
                      (context, child, frame, wasSynchronouslyLoaded) {
                    return ClipRRect(
                      borderRadius: BorderRadius.circular(16),
                      child: child,
                    );
                  },
                  errorBuilder: (context, error, stackTrace) {
                    return ClipRRect(
                      borderRadius: BorderRadius.circular(16),
                      child: Container(
                        width: maxWidth,
                        height: maxWidth,
                        color: Colors.grey[300],
                        child: const Center(
                          child: Icon(
                            Icons.broken_image,
                            size: 48,
                            color: Colors.grey,
                          ),
                        ),
                      ),
                    );
                  },
                );
              },
            ),
            const SizedBox(height: 12),
            Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  product.name,
                  style: const TextStyle(
                    fontWeight: FontWeight.w500,
                    fontSize: 18,
                    height: 1.3,
                  ),
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                ),
                const SizedBox(height: 6),
                Text(
                  CurrencyFormatter.formatWithSymbol(
                      double.parse(product.price)),
                  style: const TextStyle(
                    fontWeight: FontWeight.w500,
                    fontSize: 18,
                    height: 1.3,
                  ),
                ),
                const SizedBox(height: 6),
                Text(
                  product.description,
                  style: const TextStyle(
                    color: Color(0xFF475793),
                    height: 1.4,
                  ),
                  maxLines: 3,
                  overflow: TextOverflow.ellipsis,
                ),
              ],
            )
          ],
        ),
      ),
    );
  }
}
