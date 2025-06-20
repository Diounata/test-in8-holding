import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mobile/features/cart/pages/index.dart';
import 'package:mobile/features/products/pages/index.dart';
import 'package:mobile/widgets/layout/appbar.dart';

class TabsNavigationWidget extends ConsumerStatefulWidget {
  final int currentIndex;
  const TabsNavigationWidget({super.key, this.currentIndex = 0});

  @override
  ConsumerState<TabsNavigationWidget> createState() =>
      _TabsNavigationWidgetState();
}

class _TabsNavigationWidgetState extends ConsumerState<TabsNavigationWidget> {
  late int currentIndex;

  final List<Widget> pages = const [
    HomePage(),
    CartPage(),
    Center(child: Text('Pedidos')),
  ];

  @override
  void initState() {
    super.initState();
    currentIndex = widget.currentIndex;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const AppBarWidget(),
      body: pages[currentIndex],
      bottomNavigationBar: BottomNavigationBar(
        onTap: (index) {
          setState(() {
            currentIndex = index;
          });
        },
        currentIndex: currentIndex,
        items: const [
          BottomNavigationBarItem(
            icon: Icon(Icons.home_outlined),
            label: 'Início',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.shopping_cart_outlined),
            label: 'Carrinho',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.inventory_2_outlined),
            label: 'Pedidos',
          ),
        ],
      ),
    );
  }
}
