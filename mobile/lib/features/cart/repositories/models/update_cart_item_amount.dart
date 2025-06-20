class UpdateCartItemAmountRequestBody {
  final int amount;

  UpdateCartItemAmountRequestBody({
    required this.amount,
  });

  Map<String, dynamic> toJson() {
    return {
      'amount': amount,
    };
  }
}

class UpdateCartItemAmountRequestParams {
  final String cartItemId;

  UpdateCartItemAmountRequestParams({
    required this.cartItemId,
  });

  Map<String, dynamic> toJson() {
    return {
      'cartItemId': cartItemId,
    };
  }
}
