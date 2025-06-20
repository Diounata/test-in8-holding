import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:mobile/features/products/repositories/models/product.dart';
import 'models/list_products.dart';

class ProductsRepository {
  final String baseUrl = 'http://10.0.2.2:4000/products';

  Future<ListProductsResponse> listProducts(
      ListProductsRequestParams params) async {
    final uri = Uri.parse(baseUrl).replace(queryParameters: params.toJson());
    final response = await http.get(uri);
    if (response.statusCode == 200) {
      return ListProductsResponse.fromJson(jsonDecode(response.body));
    }
    throw Exception('Erro ao listar produtos');
  }

  Future<Product> getProduct({required String productId}) async {
    final uri = Uri.parse('$baseUrl/$productId');
    final response = await http.get(uri);
    if (response.statusCode == 200) {
      return Product.fromJson(jsonDecode(response.body));
    }
    throw Exception('Erro ao obter produto');
  }
}
