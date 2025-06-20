import 'package:flutter/material.dart';

class SpecificationItem extends StatelessWidget {
  final String label;
  final String value;

  const SpecificationItem(
      {super.key, required this.label, required this.value});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 16.0),
      decoration: const BoxDecoration(
        border: Border(
          top: BorderSide(color: Color(0xFFced2e9), width: 1.0),
        ),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Expanded(
            flex: 2,
            child: Text(
              label,
              style: const TextStyle(
                fontSize: 14,
                color: Color(0xFF47569e),
              ),
            ),
          ),
          Expanded(
            flex: 5,
            child: Text(
              value,
              style: const TextStyle(
                fontSize: 14,
                color: Color(0xFF0d0f1c),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
