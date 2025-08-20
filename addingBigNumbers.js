function add(a, b) {
  return (BigInt(a) + BigInt(b)).toString();
}

console.log(add("12345678901234567890", "98765432109876543210"));
