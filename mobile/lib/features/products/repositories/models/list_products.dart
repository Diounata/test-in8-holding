import 'package:mobile/features/products/repositories/models/product.dart';

class ListProductsRequestParams {
  final int? page;
  final int? itemsPerPage;
  final String? name;

  ListProductsRequestParams({
    this.page,
    this.itemsPerPage,
    this.name,
  });

  Map<String, dynamic> toJson() => {
        if (page != null) 'page': page.toString(),
        if (itemsPerPage != null) 'itemsPerPage': itemsPerPage.toString(),
        if (name != null && name!.isNotEmpty) 'query': 'name=$name',
      };
}

class ListProductsResponse {
  final int page;
  final int itemsPerPage;
  final List<Product> items;
  final int totalItems;
  final int totalPages;

  ListProductsResponse({
    required this.page,
    this.itemsPerPage = 10,
    required this.items,
    required this.totalItems,
    required this.totalPages,
  });

  factory ListProductsResponse.fromJson(Map<String, dynamic> json) =>
      ListProductsResponse(
        page: json['page'] ?? 1,
        itemsPerPage: json['itemsPerPage'] ?? 10,
        items: (json['items'] as List<dynamic>? ?? [])
            .map((item) => Product.fromJson(item as Map<String, dynamic>))
            .toList(),
        totalItems: json['totalItems'] ?? 0,
        totalPages: json['totalPages'] ?? 0,
      );

  Map<String, dynamic> toJson() => {
        'page': page,
        'itemsPerPage': itemsPerPage,
        'items': items.map((item) => item.toJson()).toList(),
        'totalItems': totalItems,
        'totalPages': totalPages,
      };
}
