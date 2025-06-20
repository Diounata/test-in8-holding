import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:mobile/features/cart/repositories/models/add_cart_item.dart';

class CartItemsRepository {
  final String baseUrl = 'http://10.0.2.2:4000/cart-items';

  Future<void> addCartItem(AddCartItemRequestBody body) async {
    final uri = Uri.parse(baseUrl);
    final response = await http.post(
      uri,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode(body.toJson()),
    );
    if (response.statusCode == 201 || response.statusCode == 200) return;
    throw Exception('Erro ao adicionar produto ao carrinho');
  }
}
