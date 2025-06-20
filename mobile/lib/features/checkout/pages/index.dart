import 'package:flutter/material.dart';
import 'package:mobile/features/checkout/widgets/inputs/input.dart';
import 'package:mobile/features/checkout/widgets/inputs/state_select.dart';
import 'package:mobile/features/checkout/widgets/inputs/submit_button.dart';
import 'package:mobile/features/orders/repositories/orders_repository.dart';
import 'package:mobile/features/orders/repositories/models/finish_order.dart';
import 'package:mobile/widgets/layout/appbar.dart';

class CheckoutPage extends StatefulWidget {
  const CheckoutPage({super.key});

  @override
  State<CheckoutPage> createState() => _CheckoutPageState();
}

class _CheckoutPageState extends State<CheckoutPage> {
  final _formKey = GlobalKey<FormState>();
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _phoneController = TextEditingController();
  final TextEditingController _addressController = TextEditingController();
  final TextEditingController _cityController = TextEditingController();
  final TextEditingController _zipCodeController = TextEditingController();
  String? _selectedState;

  Future<void> _onSubmit() async {
    if (_formKey.currentState?.validate() ?? false) {
      OrdersRepository ordersRepository = OrdersRepository();

      await ordersRepository.finishOrder(FinishOrderRequestBody(
        email: _emailController.text,
        phone: _phoneController.text.replaceAll(RegExp(r'\D'), ''),
        address: _addressController.text,
        city: _cityController.text,
        state: _selectedState.toString(),
        zipCode: _zipCodeController.text.replaceAll(RegExp(r'\D'), ''),
      ));

      if (!context.mounted) return;

      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          backgroundColor: Colors.blue,
          content: Text(
            'Pedido finalizado com sucesso!',
            style: TextStyle(
              color: Colors.white,
            ),
          ),
        ),
      );
    }
    return;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: const AppBarWidget(),
      body: SingleChildScrollView(
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 24, horizontal: 28),
          constraints: const BoxConstraints(maxWidth: 500),
          child: SizedBox(
            width: double.infinity,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'Checkout',
                  style: TextStyle(
                    fontSize: 30,
                    fontWeight: FontWeight.bold,
                    color: Color(0xFF0D0F1C),
                  ),
                ),
                const SizedBox(height: 20),
                Form(
                  key: _formKey,
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text(
                        'Informações de pagamento',
                        style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.bold,
                          letterSpacing: -0.015,
                          color: Color(0xFF0D0F1C),
                        ),
                      ),
                      const SizedBox(height: 12),
                      Input(
                        label: 'E-mail',
                        controller: _emailController,
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return 'E-mail é obrigatório';
                          }
                          if (!RegExp(r'^[^@]+@[^@]+\.[^@]+').hasMatch(value)) {
                            return 'E-mail inválido';
                          }
                          return null;
                        },
                      ),
                      Input(
                        label: 'Telefone',
                        controller: _phoneController,
                        mask: '(##) #####-####',
                        keyboardType: TextInputType.phone,
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return 'Telefone é obrigatório';
                          }
                          if (value.length < 15) return 'Telefone inválido';
                          return null;
                        },
                      ),
                      Input(
                        label: 'Endereço',
                        controller: _addressController,
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return 'Endereço é obrigatório';
                          }
                          return null;
                        },
                      ),
                      Input(
                        label: 'Cidade',
                        controller: _cityController,
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return 'Cidade é obrigatória';
                          }
                          return null;
                        },
                      ),
                      StateSelect(
                        onChanged: (String? newValue) {
                          setState(() {
                            _selectedState = newValue;
                          });
                        },
                        selectedValue: _selectedState,
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return 'Estado é obrigatório';
                          }
                          if (value.length != 2) {
                            return 'UF deve conter duas letras';
                          }
                          return null;
                        },
                      ),
                      Input(
                        label: 'CEP',
                        controller: _zipCodeController,
                        mask: '#####-###',
                        keyboardType: TextInputType.number,
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return 'CEP é obrigatório';
                          }
                          if (value.length < 9) return 'CEP inválido';
                          return null;
                        },
                      ),
                      const SizedBox(height: 16),
                      Align(
                        alignment: Alignment.centerRight,
                        child: SubmitButton(
                          onPressed: _onSubmit,
                          onSubmitChildren: 'Finalizando',
                          child: const Text(
                            'Finalizar compra',
                            textAlign: TextAlign.center,
                            overflow: TextOverflow.ellipsis,
                            style: TextStyle(
                              fontSize: 16,
                              fontWeight: FontWeight.bold,
                              letterSpacing: 0.015,
                            ),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
