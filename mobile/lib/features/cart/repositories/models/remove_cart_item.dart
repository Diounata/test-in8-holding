class RemoveCartItemRequestParams {
  final String cartItemId;

  RemoveCartItemRequestParams({
    required this.cartItemId,
  });

  Map<String, dynamic> toJson() {
    return {
      'cartItemId': cartItemId,
    };
  }
}
