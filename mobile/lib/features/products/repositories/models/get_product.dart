import 'package:mobile/features/products/repositories/models/product.dart';

class GetProductRequestParams {
  final String productId;

  GetProductRequestParams({required this.productId});

  Map<String, dynamic> toJson() => {
        'productId': productId,
      };
}

class GetProductResponse {
  final Product product;

  GetProductResponse({required this.product});

  factory GetProductResponse.fromJson(Map<String, dynamic> json) =>
      GetProductResponse(
        product: Product.fromJson(json),
      );

  Map<String, dynamic> toJson() => product.toJson();
}
