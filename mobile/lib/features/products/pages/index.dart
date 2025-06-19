import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mobile/features/products/widgets/index/product_card.dart';
import 'package:mobile/features/products/states/products_state_provider.dart';
import 'package:mobile/features/products/widgets/index/products_pagination.dart';
import 'package:mobile/features/products/widgets/index/search_products_input.dart';
import 'package:mobile/widgets/appbar.dart';
import 'package:mobile/widgets/bottom_navigation.dart';

class HomePage extends ConsumerStatefulWidget {
  const HomePage({super.key});

  @override
  ConsumerState<HomePage> createState() => _HomePageState();
}

class _HomePageState extends ConsumerState<HomePage> {
  @override
  void initState() {
    super.initState();
    Future.microtask(() {
      ref.read(productsNotifierProvider.notifier).listProducts();
    });
  }

  @override
  Widget build(BuildContext context) {
    final productsState = ref.watch(productsNotifierProvider);

    return Scaffold(
      appBar: const AppBarWidget(),
      body: ListView(
        padding: const EdgeInsets.symmetric(horizontal: 28, vertical: 24),
        children: [
          const SearchProductsInput(),
          Container(
            margin: const EdgeInsets.symmetric(vertical: 12),
            child: const Text(
              'Produtos',
              style: TextStyle(fontSize: 24, fontWeight: FontWeight.bold),
            ),
          ),
          if (productsState.isLoading) const Center(child: CircularProgressIndicator())
          else if (productsState.error != null) Center(child: Text('Erro: ${productsState.error}'))
          else if (productsState.products.isEmpty) const Text('Nenhum produto encontrado')
          else
            ...productsState.products
                .map((product) => ProductCard(product: product))
                .toList(),
          const ProductsPagination()
        ],
      ),
      bottomNavigationBar: const BottomNavigationBarWidget(),
    );
  }
}
