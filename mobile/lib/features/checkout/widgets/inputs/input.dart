import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:mobile/features/checkout/widgets/inputs/masked_text_input_formatter.dart';

class Input extends StatefulWidget {
  final String label;
  final TextEditingController controller;
  final String? description;
  final String? mask;
  final TextInputType? keyboardType;
  final String? Function(String?)? validator;

  const Input({
    super.key,
    required this.label,
    required this.controller,
    this.description,
    this.mask,
    this.keyboardType,
    this.validator,
  });

  @override
  State<Input> createState() => _InputState();
}

class _InputState extends State<Input> {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            widget.label,
            style: const TextStyle(
              fontWeight: FontWeight.w500,
              color: Color(0xFF0D0F1C),
            ),
          ),
          const SizedBox(height: 8),
          TextFormField(
            controller: widget.controller,
            keyboardType: widget.keyboardType,
            inputFormatters: widget.mask != null
                ? [
                    FilteringTextInputFormatter.digitsOnly,
                    MaskedTextInputFormatter(mask: widget.mask!),
                  ]
                : null,
            decoration: InputDecoration(
              border: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8.0),
                borderSide: const BorderSide(color: Color(0xFFE0E0E0)),
              ),
              enabledBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8.0),
                borderSide: const BorderSide(color: Color(0xFFE0E0E0)),
              ),
              focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(8.0),
                borderSide: const BorderSide(color: Color(0xFF5C6BC0)),
              ),
              filled: true,
              fillColor: Colors.white,
              contentPadding:
                  const EdgeInsets.symmetric(horizontal: 12, vertical: 8),
            ),
            validator: widget.validator,
          ),
          if (widget.description != null)
            Padding(
              padding: const EdgeInsets.only(top: 4.0),
              child: Text(
                widget.description!,
                style: const TextStyle(fontSize: 12, color: Colors.grey),
              ),
            ),
        ],
      ),
    );
  }
}
