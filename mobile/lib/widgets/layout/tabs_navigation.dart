import 'package:flutter/material.dart';
import 'package:mobile/features/products/pages/index.dart';
import 'package:mobile/widgets/layout/appbar.dart';

class TabsNavigationWidget extends StatefulWidget {
  const TabsNavigationWidget({super.key});

  @override
  State<TabsNavigationWidget> createState() => _TabsNavigationWidgetState();
}

class _TabsNavigationWidgetState extends State<TabsNavigationWidget> {
  int currentIndex = 0;

  List<Widget> pages = [
    const HomePage(),
    const Center(child: Text('Carrinho')),
    const Center(child: Text('Pedidos')),
  ];

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
