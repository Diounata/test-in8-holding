class AddCartItemRequestBody {
  final String productId;
  final int amount;

  AddCartItemRequestBody({
    required this.productId,
    required this.amount,
  });

  Map<String, dynamic> toJson() {
    return {
      'productId': productId,
      'amount': amount,
    };
  }
}
