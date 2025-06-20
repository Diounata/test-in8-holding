import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:mobile/features/cart/repositories/models/add_cart_item.dart';
import 'package:mobile/features/cart/repositories/models/list_cart_items.dart';
import 'package:mobile/features/cart/repositories/models/remove_cart_item.dart';
import 'package:mobile/features/cart/repositories/models/update_cart_item_amount.dart';

class CartItemsRepository {
  final String baseUrl = 'http://10.0.2.2:4000/cart-items';

  Future<ListCartItemsResponse> listProducts(
      ListCartItemsRequestParams params) async {
    final uri = Uri.parse(baseUrl).replace(queryParameters: params.toJson());
    final response = await http.get(uri);
    if (response.statusCode == 200) {
      return ListCartItemsResponse.fromJson(jsonDecode(response.body));
    }
    throw Exception('Erro ao listar itens do carrinho');
  }

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

  Future<void> updateCartItemAmount(
    UpdateCartItemAmountRequestParams params,
    UpdateCartItemAmountRequestBody body,
  ) async {
    final uri = Uri.parse('$baseUrl/amount/${params.cartItemId}');
    final response = await http.patch(
      uri,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode(body.toJson()),
    );
    if (response.statusCode == 200) return;
    throw Exception('Erro ao atualizar a quantidade do item no carrinho');
  }

  Future<void> removeCartItem(RemoveCartItemRequestParams params) async {
    final uri = Uri.parse('$baseUrl/${params.cartItemId}');
    final response = await http.delete(uri);
    if (response.statusCode == 200) return;
    throw Exception('Erro ao remover item do carrinho');
  }
}
