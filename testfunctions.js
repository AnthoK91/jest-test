function capitalise(string) {
  return string.toUpperCase();
}

function sum(a, b) {
  return a + b;
}

function reverseString(string) {
  let arr = [];
  for (let index = string.length; index >= 0; index--) {
    arr.push(string[index]);
  }
  return arr.join("");
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

function caesarCipher(string, number) {
  const alp = "abcdefghijklmnopqrstuvwxyz";
  let lowerString = string.toLowerCase();
  const isUpperCase = (str) => str === str.toUpperCase();
  const arr = [];

  for (let index = 0; index < string.length; index++) {
    let alphaNum = alp.indexOf(lowerString[index]);
    if (alphaNum === -1) {
      arr.push(string[index]);
    } else if (alphaNum + number >= 26 && alphaNum + number - 26 <= 26) {
      arr.push(alp[alphaNum + number - 26]);
    } else {
      arr.push(alp[alphaNum + number]);
    }
    if (isUpperCase(string[index])) {
      let item = arr.pop();
      item = item.toUpperCase();
      arr.push(item);
    }
  }
  return arr.join("");
}

function analyseArray(arr) {
  return {
    average: arr.reduce((a, b) => a + b) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
}

export {
  capitalise,
  sum,
  reverseString,
  calculator,
  caesarCipher,
  analyseArray,
};
