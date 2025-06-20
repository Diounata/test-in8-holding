import 'package:flutter/services.dart';

class MaskedTextInputFormatter extends TextInputFormatter {
  final String mask;

  MaskedTextInputFormatter({required this.mask});

  @override
  TextEditingValue formatEditUpdate(
      TextEditingValue oldValue, TextEditingValue newValue) {
    if (newValue.text.isEmpty) {
      return newValue.copyWith(text: '');
    }

    String newText = '';
    int maskIndex = 0;
    int valueIndex = 0;

    while (maskIndex < mask.length && valueIndex < newValue.text.length) {
      if (mask[maskIndex] == '#') {
        newText += newValue.text[valueIndex];
        valueIndex++;
      } else {
        newText += mask[maskIndex];
      }
      maskIndex++;
    }

    return newValue.copyWith(
      text: newText,
      selection: TextSelection.collapsed(offset: newText.length),
    );
  }
}
