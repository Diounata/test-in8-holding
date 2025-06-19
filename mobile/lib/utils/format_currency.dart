import 'package:intl/intl.dart';

class CurrencyFormatter {
  static final _formatter = NumberFormat("#,##0.00", "pt_BR");

  static String format(double amount) => _formatter.format(amount);

  static String formatWithSymbol(double amount) =>
      'R\$ ${_formatter.format(amount)}';
}
