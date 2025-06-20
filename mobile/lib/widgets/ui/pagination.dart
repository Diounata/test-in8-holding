import 'package:flutter/material.dart';

class Pagination extends StatelessWidget {
  final int page;
  final int totalPages;
  final VoidCallback? toFirstPage;
  final VoidCallback? toPreviousPage;
  final VoidCallback? toNextPage;
  final VoidCallback? toLastPage;

  const Pagination({
    super.key,
    required this.page,
    required this.totalPages,
    this.toFirstPage,
    this.toPreviousPage,
    this.toNextPage,
    this.toLastPage,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.symmetric(vertical: 12),
      child: Column(
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              IconButton(
                onPressed: page > 1 ? toFirstPage : null,
                disabledColor: Colors.grey,
                icon: const Icon(Icons.first_page),
              ),
              IconButton(
                onPressed: page > 1 ? toPreviousPage : null,
                disabledColor: Colors.grey,
                icon: const Icon(Icons.chevron_left),
              ),
              IconButton(
                onPressed: page < totalPages ? toNextPage : null,
                disabledColor: Colors.grey,
                icon: const Icon(Icons.chevron_right),
              ),
              IconButton(
                onPressed: page < totalPages ? toLastPage : null,
                disabledColor: Colors.grey,
                icon: const Icon(Icons.last_page),
              ),
            ],
          ),
          const SizedBox(height: 8),
          Text(
            'Página $page de $totalPages',
          ),
        ],
      ),
    );
  }
}
