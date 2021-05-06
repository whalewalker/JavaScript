romanNumeral = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

const getNumeral = (value) => {
  let key = value.toUpperCase();
  for (key in romanNumeral) {
    if (Object.hasOwnProperty.call(romanNumeral, key)) {
      return romanNumeral[key];
    }
  }
};
