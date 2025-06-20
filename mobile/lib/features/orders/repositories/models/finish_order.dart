class FinishOrderRequestBody {
  final String email;
  final String phone;
  final String address;
  final String city;
  final String state;
  final String zipCode;

  FinishOrderRequestBody({
    required this.email,
    required this.phone,
    required this.address,
    required this.city,
    required this.state,
    required this.zipCode,
  });

  Map<String, dynamic> toJson() {
    return {
      'email': email,
      'phone': phone,
      'address': address,
      'city': city,
      'state': state,
      'zipCode': zipCode,
    };
  }
}
