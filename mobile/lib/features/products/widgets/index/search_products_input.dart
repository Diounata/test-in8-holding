import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mobile/features/products/states/index/products_state_provider.dart';

class SearchProductsInput extends ConsumerWidget {
  const SearchProductsInput({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final controller = TextEditingController();

    return Container(
      margin: const EdgeInsets.symmetric(vertical: 12),
      child: SizedBox(
        height: 48,
        child: Row(
          children: [
            Expanded(
              child: TextField(
                controller: controller,
                decoration: InputDecoration(
                  filled: true,
                  fillColor: const Color(0xFFE6E9F4),
                  hintText: 'Buscar produtos por nome',
                  prefixIcon: const Icon(Icons.search),
                  border: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(8),
                    borderSide: BorderSide.none,
                  ),
                  contentPadding:
                      const EdgeInsets.symmetric(vertical: 0, horizontal: 12),
                ),
                onSubmitted: (value) {
                  ref
                      .read(productsNotifierProvider.notifier)
                      .filterByName(value);
                },
              ),
            ),
            const SizedBox(width: 12),
            SizedBox(
              width: 48,
              height: double.infinity,
              child: DecoratedBox(
                decoration: BoxDecoration(
                  color: Colors.blue,
                  borderRadius: BorderRadius.circular(8),
                ),
                child: IconButton(
                  onPressed: () {
                    final text = controller.text.trim();
                    ref
                        .read(productsNotifierProvider.notifier)
                        .filterByName(text);
                  },
                  icon: const Icon(Icons.search, color: Colors.white),
                  padding: EdgeInsets.zero,
                  splashColor: Colors.transparent,
                  highlightColor: Colors.transparent,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
