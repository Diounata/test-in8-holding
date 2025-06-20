import 'package:mobile/features/orders/repositories/models/order.dart';

class ListOrdersRequestParams {
  final int? page;
  final int? itemsPerPage;
  final String? name;

  ListOrdersRequestParams({
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

class ListOrdersResponse {
  final int page;
  final int itemsPerPage;
  final List<Order> items;
  final int totalItems;
  final int totalPages;

  ListOrdersResponse({
    required this.page,
    required this.itemsPerPage,
    required this.items,
    required this.totalItems,
    required this.totalPages,
  });

  factory ListOrdersResponse.fromJson(Map<String, dynamic> json) =>
      ListOrdersResponse(
        page: json['page'] ?? 1,
        itemsPerPage: json['itemsPerPage'] ?? 5,
        items: (json['items'] as List<dynamic>? ?? [])
            .map((item) => Order.fromJson(item as Map<String, dynamic>))
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
