import 'package:flutter/material.dart';

class BackToProductsButton extends StatelessWidget {
  const BackToProductsButton({super.key});

  @override
  Widget build(BuildContext context) {
    return TextButton.icon(
      onPressed: () {
        Navigator.of(context).pop();
      },
      icon: const Icon(Icons.chevron_left),
      label: const Text('Voltar para produtos'),
      style: TextButton.styleFrom(
        padding: EdgeInsets.zero,
        alignment: Alignment.centerLeft,
        foregroundColor: Colors.blue[600],
        textStyle: const TextStyle(fontSize: 16),
      ),
    );
  }
}
