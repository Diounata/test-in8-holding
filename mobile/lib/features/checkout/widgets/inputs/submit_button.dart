import 'package:flutter/material.dart';

class SubmitButton extends StatefulWidget {
  final Widget child;
  final String onSubmitChildren;
  final VoidCallback onPressed;

  const SubmitButton({
    super.key,
    required this.child,
    required this.onSubmitChildren,
    required this.onPressed,
  });

  @override
  State<SubmitButton> createState() => _SubmitButtonState();
}

class _SubmitButtonState extends State<SubmitButton> {
  bool _isLoading = false;

  Future<void> _handlePress() async {
    setState(() {
      _isLoading = true;
    });
    try {
      await Future.delayed(const Duration(milliseconds: 500));
      widget.onPressed();
    } finally {
      setState(() {
        _isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: _isLoading ? null : _handlePress,
      style: ElevatedButton.styleFrom(
        minimumSize: const Size(double.infinity, 48),
        backgroundColor: Colors.blue,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(8.0),
        ),
      ),
      child: _isLoading
          ? Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const SizedBox(
                  width: 20,
                  height: 20,
                  child: CircularProgressIndicator(
                    strokeWidth: 2,
                    valueColor: AlwaysStoppedAnimation<Color>(Colors.white),
                  ),
                ),
                const SizedBox(width: 8),
                Text(
                  widget.onSubmitChildren,
                  style: const TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                    letterSpacing: 0.015,
                  ),
                ),
              ],
            )
          : DefaultTextStyle.merge(
              style: const TextStyle(color: Colors.white),
              child: widget.child,
            ),
    );
  }
}
