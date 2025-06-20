import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:mobile/features/products/repositories/models/list_products.dart';
import 'package:mobile/features/products/repositories/models/product.dart';
import 'package:mobile/features/products/repositories/products_repository.dart';

class ProductsState {
  final List<Product> products;
  final int page;
  final int totalPages;
  final String? nameFilter;
  final bool isLoading;
  final String? error;

  ProductsState({
    this.products = const [],
    this.page = 1,
    this.totalPages = 1,
    this.nameFilter,
    this.isLoading = false,
    this.error,
  });

  ProductsState copyWith({
    List<Product>? products,
    int? page,
    int? totalPages,
    String? nameFilter,
    bool? isLoading,
    String? error,
  }) {
    return ProductsState(
      products: products ?? this.products,
      page: page ?? this.page,
      totalPages: totalPages ?? this.totalPages,
      nameFilter: nameFilter ?? this.nameFilter,
      isLoading: isLoading ?? this.isLoading,
      error: error,
    );
  }
}

class ProductNotifier extends StateNotifier<ProductsState> {
  final ProductsRepository productsRepository;

  ProductNotifier(this.productsRepository) : super(ProductsState(products: []));

  Future<void> listProducts() async {
    try {
      state = state.copyWith(isLoading: true, error: null);

      final result = await productsRepository.listProducts(
        ListProductsRequestParams(page: state.page, name: state.nameFilter),
      );

      state = state.copyWith(
        isLoading: false,
        products: result.items,
        page: result.page,
        totalPages: result.totalPages,
      );
    } catch (e) {
      state = state.copyWith(error: e.toString(), isLoading: false);
    }
  }

  void filterByName(String name) {
    state = ProductsState(nameFilter: name);
    listProducts();
  }

  void toFirstPage() {
    if (state.page <= 1 || state.isLoading) return;
    state = state.copyWith(
      isLoading: true,
      error: null,
      page: 1,
    );
    listProducts();
  }

  void toPreviousPage() {
    if (state.page <= 1 || state.isLoading) return;
    state = state.copyWith(
      isLoading: true,
      error: null,
      page: state.page - 1,
    );
    listProducts();
  }

  void toNextPage() {
    if (state.page >= state.totalPages || state.isLoading) return;
    state = state.copyWith(
      isLoading: true,
      error: null,
      page: state.page + 1,
    );
    listProducts();
  }

  void toLastPage() {
    if (state.page >= state.totalPages || state.isLoading) return;
    state = state.copyWith(
      isLoading: true,
      error: null,
      page: state.totalPages,
    );
    listProducts();
  }
}
