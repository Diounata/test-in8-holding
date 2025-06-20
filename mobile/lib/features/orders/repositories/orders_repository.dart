import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:mobile/features/orders/repositories/models/finish_order.dart';
import 'package:mobile/features/orders/repositories/models/list_orders.dart';

class OrdersRepository {
  final String baseUrl = 'http://10.0.2.2:4000/orders';

  Future<ListOrdersResponse> listOrders(ListOrdersRequestParams params) async {
    final uri = Uri.parse(baseUrl).replace(queryParameters: params.toJson());
    final response = await http.get(uri);
    if (response.statusCode == 200) {
      return ListOrdersResponse.fromJson(jsonDecode(response.body));
    }
    throw Exception('Erro ao listar pedidos');
  }

  Future<void> finishOrder(FinishOrderRequestBody body) async {
    final uri = Uri.parse('$baseUrl/finish');
    final response = await http.post(
      uri,
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode(body.toJson()),
    );
    if (response.statusCode == 201) return;
    throw Exception('Erro ao finalizar pedido');
  }
}
