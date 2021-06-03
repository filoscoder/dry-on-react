// Parameter> $inputValue: string
// Output> "xxx-xxxx-xxxx"
export const phoneMask = (inputValue = "") =>
  inputValue
    .replace(/\D/g, "")
    .replace(/(\d{1,3})(\d{1,4})?(\d{1,4})?/g, function (_, a, b, c) {
      return c ? `${a}-${b}-${c}` : b ? `${a}-${b}` : `${a}`;
    });
