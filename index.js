function formatNaira() {
  const nairaSymbol = "\u{020A6}";
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return nairaSymbol + new Intl.NumberFormat("en-US").format(sum);
}

module.exports = formatNaira;
