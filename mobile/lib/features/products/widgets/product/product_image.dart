import 'package:flutter/material.dart';

class ProductImage extends StatelessWidget {
  final String image;

  const ProductImage({super.key, required this.image});

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (BuildContext context, BoxConstraints constraints) {
        final double maxWidth = constraints.maxWidth;
        return Image.network(
          image,
          width: maxWidth,
          height: maxWidth,
          fit: BoxFit.cover,
          frameBuilder: (context, child, frame, wasSynchronouslyLoaded) {
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
    );
  }
}
