import items from "pages/pageDirectory";

export const toPascalCase = (string) =>
  `${string}`
    .normalize("NFD")
    .toLowerCase()
    .replace(new RegExp(/[-_]+/, "g"), " ")
    .replace(new RegExp(/[^\w\s]/, "g"), "")
    .replace(
      new RegExp(/\s+(.)(\w*)/, "g"),
      (_$1, $2, $3) => `${$2.toUpperCase() + $3}`
    )
    .replace(new RegExp(/\w/), (s) => s.toUpperCase());

export const location = (path = "/") => {
  const [PCCategory, PCSubcategory] = path
    .split("/")
    .slice(1);
  if (!PCCategory) return ["Home", ""];
  const categoryObject = items.find(
    (item) => toPascalCase(item.name) === PCCategory
  );
  const category = categoryObject ? categoryObject.name : "";
  const subcategory = categoryObject
    ? categoryObject.items.find((item) => toPascalCase(item) === PCSubcategory)
    : "";
  return [category, subcategory];
};

export const debounce = (callback, wait) => {
  let timeout;
  return (...args) => {
    const context = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => callback.apply(context, args), wait);
  };
};

export const hexToRgba = (hex, opacity) => {
  const leadingZeros = (hex) => 6 - hex.toString(16).length;
  const hexString = "0".repeat(leadingZeros(hex)) + hex.toString(16);
  const r = parseInt(hexString.slice(0, 2), 16);
  const g = parseInt(hexString.slice(2, 4), 16);
  const b = parseInt(hexString.slice(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity || 1})`;
};

export const factorialArray = (n) => {
  const array = [1];
  for (let i = 1; i <= n; i++) {
    array.push(array[i - 1] * i);
  }
  return array;
};

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

export const reduceFraction = (numerator, denominator) => {
  const gcdDenominator = gcd(numerator, denominator);
  return {
    numerator: numerator / gcdDenominator,
    denominator: denominator / gcdDenominator,
  };
};
