import 'package:flutter/material.dart';

class ProductAmountSelector extends StatelessWidget {
  final int amount;
  final VoidCallback incrementAmount;
  final VoidCallback decrementAmount;

  const ProductAmountSelector({
    super.key,
    required this.amount,
    required this.incrementAmount,
    required this.decrementAmount,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16.0, vertical: 12.0),
      decoration: BoxDecoration(
        color: const Color(0xFFf8f9fc),
        borderRadius: BorderRadius.circular(8.0),
      ),
      child: Row(
        mainAxisSize: MainAxisSize.min,
        children: [
          InkWell(
            onTap: decrementAmount,
            child: Container(
              height: 40,
              width: 40,
              decoration: BoxDecoration(
                color: const Color(0xFFced2e9),
                borderRadius: BorderRadius.circular(6.0),
              ),
              alignment: Alignment.center,
              child: const Text(
                '-',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: Color(0xFF47569e),
                ),
              ),
            ),
          ),
          const SizedBox(width: 8.0),
          SizedBox(
            width: 40,
            child: Text(
              amount.toString(),
              textAlign: TextAlign.center,
              style: const TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.bold,
                color: Color(0xFF0d0f1c),
              ),
            ),
          ),
          const SizedBox(width: 8.0),
          InkWell(
            onTap: incrementAmount,
            child: Container(
              height: 40,
              width: 40,
              decoration: BoxDecoration(
                color: const Color(0xFFced2e9),
                borderRadius: BorderRadius.circular(6.0),
              ),
              alignment: Alignment.center,
              child: const Text(
                '+',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: Color(0xFF47569e),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
