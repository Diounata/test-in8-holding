class CartItem {
  final String id;
  final String productId;
  final int amount;

  CartItem({
    required this.id,
    required this.productId,
    required this.amount,
  });

  factory CartItem.fromJson(Map<String, dynamic> json) {
    return CartItem(
      id: json['id'] as String,
      productId: json['productId'] as String,
      amount: json['amount'] as int,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'productId': productId,
      'amount': amount,
    };
  }
}
