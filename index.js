function formatNaira() {
  const nairaSymbol = "\u{020A6}";
  let sum = 0;
  let value;
  if (arguments.length === 0) {
    return nairaSymbol + 0;
  }
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  value = nairaSymbol + new Intl.NumberFormat("en-US").format(sum);
  return value;
}

module.exports = formatNaira;
