import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mobile/features/products/states/product/product_state_provider.dart';
import 'package:mobile/features/products/widgets/product/back_to_products_button.dart';
import 'package:mobile/features/products/widgets/product/product_image.dart';
import 'package:mobile/features/products/widgets/product/product_info.dart';
import 'package:mobile/features/products/widgets/product/product_purchase_section.dart';
import 'package:mobile/widgets/layout/appbar.dart';

class ProductPage extends ConsumerStatefulWidget {
  final String? productId;

  const ProductPage({super.key, required this.productId});

  @override
  ConsumerState<ProductPage> createState() => _ProductPageState();
}

class _ProductPageState extends ConsumerState<ProductPage> {
  @override
  void initState() {
    super.initState();
    if (widget.productId != null) {
      Future.microtask(() {
        ref
            .read(productNotifierProvider.notifier)
            .getProduct(widget.productId!);
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    final productState = ref.watch(productNotifierProvider);

    return Scaffold(
      appBar: const AppBarWidget(),
      body: ListView(
        padding: const EdgeInsets.symmetric(vertical: 8, horizontal: 16),
        children: [
          const Padding(
            padding: EdgeInsets.only(top: 16.0),
            child: BackToProductsButton(),
          ),
          if (productState.isLoading)
            const Center(child: CircularProgressIndicator())
          else if (productState.error != null)
            Center(child: Text('Erro: ${productState.error}'))
          else if (productState.product == null)
            const Text('Produto não encontrado')
          else ...[
            ProductImage(image: productState.product!.image),
            const SizedBox(height: 16),
            ProductInfo(product: productState.product!),
            ProductPurchaseSection(
              product: productState.product!,
              amount: productState.amount,
              incrementAmount:
                  ref.read(productNotifierProvider.notifier).incrementAmount,
              decrementAmount:
                  ref.read(productNotifierProvider.notifier).decrementAmount,
              addCartItem: () {
                ref.read(productNotifierProvider.notifier).addCartItem(context);
              },
            ),
          ],
        ],
      ),
    );
  }
}
