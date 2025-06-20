import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mobile/features/products/states/index/products_state_provider.dart';
import 'package:mobile/widgets/ui/pagination.dart';

class ProductsPagination extends ConsumerWidget {
  const ProductsPagination({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final productsState = ref.watch(productsNotifierProvider);

    return Pagination(
      page: productsState.page,
      totalPages: productsState.totalPages,
      toFirstPage: productsState.page > 1
          ? () => ref.read(productsNotifierProvider.notifier).toFirstPage()
          : null,
      toPreviousPage: productsState.page > 1
          ? () => ref.read(productsNotifierProvider.notifier).toPreviousPage()
          : null,
      toNextPage: productsState.page < productsState.totalPages
          ? () => ref.read(productsNotifierProvider.notifier).toNextPage()
          : null,
      toLastPage: productsState.page < productsState.totalPages
          ? () => ref.read(productsNotifierProvider.notifier).toLastPage()
          : null,
    );
  }
}
