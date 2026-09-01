function describeValue(value) {
  const type = typeof value;
  const truthiness = value ? "truthy" : "falsy";
  return `${type} | ${truthiness}`;
}

console.log(describeValue("0"));
console.log(describeValue(NaN));
console.log(describeValue(null));


//describeValue("0") — a string that looks like zero
//describeValue(NaN) — what does typeof NaN give?
//describeValue(null) — remember the strange thing we saw in class