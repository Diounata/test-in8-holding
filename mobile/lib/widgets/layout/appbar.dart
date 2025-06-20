import 'package:flutter/material.dart';
import 'package:mobile/features/cart/widgets/cart_button.dart';
import 'package:mobile/widgets/layout/tabs_navigation.dart';

class AppBarWidget extends StatelessWidget implements PreferredSizeWidget {
  const AppBarWidget({super.key});

  @override
  Size get preferredSize => const Size.fromHeight(64);

  @override
  Widget build(BuildContext context) {
    return Material(
      elevation: 4,
      color: Colors.white,
      child: SafeArea(
        child: Container(
          height: 64,
          padding: const EdgeInsets.symmetric(horizontal: 16),
          child: Row(
            children: [
              GestureDetector(
                  onTap: () {
                    if (ModalRoute.of(context)?.settings.name == '/home') {
                      return;
                    }
                    Navigator.of(context).pushReplacement(
                      MaterialPageRoute(
                        builder: (context) => const TabsNavigationWidget(),
                      ),
                    );
                  },
                  child: Row(
                    children: [
                      Image.asset(
                        'assets/images/logo.png',
                        height: 32,
                      ),
                      const SizedBox(width: 16),
                      const Align(
                        alignment: Alignment.centerLeft,
                        child: Text(
                          'Shopmart',
                          style: TextStyle(
                            fontSize: 24,
                            fontWeight: FontWeight.bold,
                            color: Colors.black,
                          ),
                        ),
                      )
                    ],
                  )),
              const Expanded(
                child: SizedBox(),
              ),
              const CartButton(),
            ],
          ),
        ),
      ),
    );
  }
}
