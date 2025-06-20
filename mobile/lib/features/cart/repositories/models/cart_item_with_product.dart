import 'package:mobile/features/products/repositories/models/product.dart';

class CartItemWithProduct {
  final String id;
  final String productId;
  final int amount;
  final Product product;

  CartItemWithProduct({
    required this.id,
    required this.productId,
    required this.amount,
    required this.product,
  });

  factory CartItemWithProduct.fromJson(Map<String, dynamic> json) {
    return CartItemWithProduct(
      id: json['id'] as String,
      productId: json['productId'] as String,
      amount: json['amount'] as int,
      product: Product.fromJson(json['product'] as Map<String, dynamic>),
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'productId': productId,
      'amount': amount,
      'product': product.toJson(),
    };
  }

  CartItemWithProduct copyWith({
    String? id,
    String? productId,
    int? amount,
    Product? product,
  }) {
    return CartItemWithProduct(
      id: id ?? this.id,
      productId: productId ?? this.productId,
      amount: amount ?? this.amount,
      product: product ?? this.product,
    );
  }
}
