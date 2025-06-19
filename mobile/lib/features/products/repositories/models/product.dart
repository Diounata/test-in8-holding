class Product {
  final String id;
  final String name;
  final String description;
  final String image;
  final String category;
  final String material;
  final String price;
  final String? discountPrice;

  Product({
    required this.id,
    required this.name,
    required this.description,
    required this.image,
    required this.category,
    required this.material,
    required this.price,
    this.discountPrice,
  });

  factory Product.fromJson(Map<String, dynamic> json) {
    return Product(
      id: json['id'] as String,
      name: json['name'] as String,
      description: json['description'] as String,
      image: json['image'] as String,
      category: json['category'] as String,
      material: json['material'] as String,
      price: json['price'] as String,
      discountPrice: json['discountPrice'] as String?,
    );
  }

  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'description': description,
      'image': image,
      'category': category,
      'material': material,
      'price': price,
      'discountPrice': discountPrice,
    };
  }
}
