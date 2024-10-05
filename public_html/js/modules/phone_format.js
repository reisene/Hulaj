"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
/**
 * @description Formats phone numbers input into a text field with a specific format,
 * separating digits every three characters with spaces. It achieves this by listening
 * for input changes and modifying the formatted value accordingly.
 */
function phoneFormatter() {
  // Formats phone input.
  $('#phone').on('input', function phoneInput() {
    // Formats phone numbers as user types.
    var value = $(this).val().replace(/\D/g, ''); // Remove all non-digit characters
    if (value.length === 9) {
      var formattedValue = '';
      for (var i = 0; i < value.length; i++) {
        if (i > 0 && i % 3 === 0) {
          formattedValue += ' ';
        }
        formattedValue += value[i];
      }
      $(this).val(formattedValue);
    }
  });
}
;
var _default = exports["default"] = phoneFormatter;
//# sourceMappingURL=phone_format.js.map
