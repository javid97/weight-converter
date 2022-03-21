const input = document.getElementById("input");
const result = document.getElementById("result");
const inputOption = document.getElementById("input-options");
const resultOption = document.getElementById("result-options");

input.addEventListener("keyup", () => {
  setResult(result, input.value, inputOption.value, resultOption.value);
});

resultOption.addEventListener("change", () => {
  setResult(result, input.value, inputOption.value, resultOption.value);
});

inputOption.addEventListener("change", () => {
  setResult(result, input.value, inputOption.value, resultOption.value);
});

result.addEventListener("keyup", () => {
  setResult(input, result.value, inputOption.value, resultOption.value);
});

const setResult = (element, mass, massType, convertTo) => {
  element.value = converter(mass, massType, convertTo);
};

const converter = (mass, massType, converTo) => {
  if (massType === "ounce" && converTo === "gram") return mass * 28.35;
  if (massType === "pound" && converTo === "gram") return mass * 454;
  if (massType === "stone" && converTo === "gram") return mass * 6350;
  if (massType === "kilogram" && converTo === "gram") return mass * 1000;
  if (massType === "gram" && converTo === "gram") return mass;

  if (massType === "ounce" && converTo === "pound") return mass / 16;
  if (massType === "pound" && converTo === "pound") return mass;
  if (massType === "stone" && converTo === "pound") return mass * 14;
  if (massType === "kilogram" && converTo === "pound") return mass * 2.205;
  if (massType === "gram" && converTo === "pound") return mass * 454;

  if (massType === "ounce" && converTo === "ounce") return mass;
  if (massType === "pound" && converTo === "ounce") return mass * 16;
  if (massType === "stone" && converTo === "ounce") return mass * 224;
  if (massType === "kilogram" && converTo === "ounce") return mass * 35.274;
  if (massType === "gram" && converTo === "ounce") return mass / 28.35;

  if (massType === "ounce" && converTo === "stone") return mass / 224;
  if (massType === "pound" && converTo === "stone") return mass / 14;
  if (massType === "stone" && converTo === "stone") return mass;
  if (massType === "kilogram" && converTo === "stone") return mass * 6.35;
  if (massType === "gram" && converTo === "stone") return mass / 6350;

  if (massType === "ounce" && converTo === "kilogram") return mass / 35.274;
  if (massType === "pound" && converTo === "kilogram") return mass / 2.205;
  if (massType === "stone" && converTo === "kilogram") return mass * 6.35;
  if (massType === "kilogram" && converTo === "kilogram") return mass;
  if (massType === "gram" && converTo === "kilogram") return mass / 1000;
};
