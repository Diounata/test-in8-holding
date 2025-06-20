import 'package:mobile/features/cart/repositories/models/cart_item_with_product.dart';

class ListCartItemsRequestParams {
  final int? page;
  final int? itemsPerPage;
  final String? name;

  ListCartItemsRequestParams({
    this.page,
    this.itemsPerPage = 5,
    this.name,
  });

  Map<String, dynamic> toJson() => {
        if (page != null) 'page': page.toString(),
        if (itemsPerPage != null) 'itemsPerPage': itemsPerPage.toString(),
        if (name != null && name!.isNotEmpty) 'query': 'name=$name',
      };
}

class ListCartItemsResponse {
  final int page;
  final int itemsPerPage;
  final List<CartItemWithProduct> items;
  final int totalItems;
  final int totalPages;

  ListCartItemsResponse({
    required this.page,
    this.itemsPerPage = 5,
    required this.items,
    required this.totalItems,
    required this.totalPages,
  });

  factory ListCartItemsResponse.fromJson(Map<String, dynamic> json) =>
      ListCartItemsResponse(
        page: json['page'] ?? 1,
        itemsPerPage: json['itemsPerPage'] ?? 5,
        items: (json['items'] as List<dynamic>? ?? [])
            .map((item) =>
                CartItemWithProduct.fromJson(item as Map<String, dynamic>))
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
