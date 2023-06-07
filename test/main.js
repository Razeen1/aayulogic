// // To experiment with error handling, "threshold" values cause errors randomly
// const THRESHOLD_A = 5; // can use zero 0 to guarantee error

// function tetheredGetNumber(resolve, reject) {
//   setTimeout(() => {
//     const randomInt = Date.now();
//     const value = randomInt % 10;
//     if (value < THRESHOLD_A) {
//       resolve(value);
//     } else {
//       reject(`Too large: ${value}`);
//     }
//   }, 500);
// }

// function determineParity(value) {
//   const isOdd = value % 2 === 1;
//   return { value, isOdd };
// }

// function troubleWithGetNumber(reason) {
//   const err = new Error("Trouble getting number", { cause: reason });
//   console.error(err);
//   throw err;
// }

// function promiseGetWord(parityInfo) {
//   return new Promise((resolve, reject) => {
//     const { value, isOdd } = parityInfo;
//     if (value >= THRESHOLD_A - 1) {
//       reject(`Still too large: ${value}`);
//     } else {
//       parityInfo.wordEvenOdd = isOdd ? "odd" : "even";
//       resolve(parityInfo);
//     }
//   });
// }

// new Promise(tetheredGetNumber)
//   .then(determineParity, troubleWithGetNumber)
//   .then(promiseGetWord)
//   .then((info) => {
//     console.log(`Got: ${info.value}, ${info.wordEvenOdd}`);
//     return info;
//   })
//   .catch((reason) => {
//     if (reason.cause) {
//       console.error("Had previously handled error");
//     } else {
//       console.error(`Trouble with promiseGetWord(): ${reason}`);
//     }
//   })
//   .finally((info) => console.log("All done"));
// function sumAll(arr) {
//   arr.sort((a, b) => a - b);
//   console.log(arr);
//   let b = 0;
//   for (let i = arr[0]; i <= arr[1]; i++) {
//     b = b + i;
//     console.log(b);
//   }
//   return b;
// }

// console.log(sumAll([5, 10]));
// function diffArray(arr1, arr2) {
//   let difference = arr1
//                  .filter(x => !arr2.includes(x))
//                  .concat(arr2.filter(x => !arr1.includes(x)));
//                  return difference;
// }

// diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// function destroyer(args) {
//   let a = [];
//   for (i = 1; i <= arguments.length - 1; i++) {
//     a.push(arguments[i]);
//   }
//   // for (i = 1; i <= arguments.length - 1; i++) {
//   let d = arguments[0].filter((x) => !a.includes(x));
//   // }
//   console.log(d);
// }

// destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// function whatIsInAName(collection, source) {
//   let ab = Object.getOwnPropertyNames(source);
//   console.log(ab);
//   const souceKeys = Object.keys(source);
//   console.log(
//     collection.filter((obj) => {
//       for (let i = 0; i < souceKeys.length; i++) {
//         if (obj[souceKeys[i]] !== source[souceKeys[i]]) {
//           return false;
//         }
//       }
//       return true;
//     })
//   );
// }

// whatIsInAName(
//   [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
//   { apple: 1, bat: 2 }
// );

// function spinalCase(str) {
//   console.log(str.replace(/([a-z])([A-Z])|[_|\s|*]+/g, "$1-$2").toLowerCase());
// }

// spinalCase("AllThe_small*Things");
// function spinalCase(str) {
//   let a = str.match(/^[^aeiou]+/);
//   console.log(a);
// }
// spinalCase("helo");

// function translatePigLatin(str) {
//   let consonantRegex = /[^aeiou]+/i;
//   let myConsonants = str.match(consonantRegex);
//   console.log(myConsonants);
//   return myConsonants !== null
//     ? str.replace(consonantRegex, "").concat(myConsonants).concat("ay")
//     : str.concat("way");
// }

// console.log(translatePigLatin("cccAcCdconsonant"));

// function myReplace(str, before, after) {
//   let i = str.indexOf(before);
//   console.log(str[i] == str[i].toUpperCase());
//   if (str[i] == str[i].toUpperCase()) {
//     str = str.replace(before, after[0].toUpperCase() + after.slice(1));
//   } else {
//     str = str.replace(before, after.toLowerCase());
//   }

//   console.log(str);
// }

// myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "Leaped");
// function pairElement(str) {
//   let a = str.split("");
//   let b = [];
//   for (i = 0; i < str.length; i++) {
//     switch (a[i]) {
//       case "A":
//         b.push(["A", "T"]);
//         break;
//       case "T":
//         b.push(["T", "A"]);
//         break;
//       case "C":
//         b.push(["C", "G"]);
//         break;
//       case "G":
//         b.push(["G", "C"]);
//         break;

//       default:
//         break;
//     }
//   }
//   return b;
// }

// console.log(pairElement("GCG"));
// function fearNotLetter(str) {
//   let newarr = str.split("");
//   for (let i = 0; i < str.length - 1; i++) {
//     // console.log(newarr[i].charCodeAt(0));
//     if (newarr[i].charCodeAt(0) + 1 != newarr[i + 1].charCodeAt(0)) {
//       return String.fromCharCode(newarr[i].charCodeAt(0) + 1);
//       // newarr.push(String.fromCharCode(newarr[i].charCodeAt(0) + 1));
//     }
//   }
// }

// console.log(fearNotLetter("abce"));
// function uniteUnique() {
//   let a = [];
//   for (i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//     a = a.concat(arguments[i]);
//   }
//   a = [...new Set(a)];
//   return a;
//   //   let difference = arr1
//   //   .filter((x) => !arr2.includes(x))
//   //   .concat(arr2.filter((x) => !arr1.includes(x)));
//   // return difference;
// }

// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
// function convertHTML(str) {
//   for (i = 0; i < str.length; i++) {
//     switch (str[i]) {
//       case "&":
//         str = str.slice(0, i) + "&amp;" + str.slice(i + 1);
//         break;
//       case ">":
//         str = str.slice(0, i) + "&gt;" + str.slice(i + 1);
//         break;
//       case "<":
//         str = str.slice(0, i) + "&lt;" + str.slice(i + 1);
//         break;
//       case '"':
//         str = str.slice(0, i) + "&quot;" + str.slice(i + 1);
//         break;
//       case "'":
//         str = str.slice(0, i) + "&apos;" + str.slice(i + 1);
//         break;
//       default:
//         break;
//     }
//   }
//   return str;
// }

// console.log(convertHTML("Hamburgers < Pizza < Tacos"));

// function sumFibs(num) {
//   let n1 = 0,
//     n2 = 1,
//     nextTerm = 0;
//   let a = [];
//   while (n1 <= num) {
//     a.push(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
//   }
//   let count = 0;
//   for (i = 0; i < a.length; i++) {
//     if (a[i] % 2 != 0) {
//       count += a[i];
//     }
//   }
//   return count;
// }

// console.log(sumFibs(75025));

// function sumPrimes(num) {
//   let c = 0,
//     d = 0;
//   let isPrime = true;
//   for (let i = 2; i <= num; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if (isPrime) {
//       d = d + i;
//     }
//     isPrime = true;
//   }
//   return d;
// }

// sumPrimes(977);

// function smallestCommons(arr) {
//   let min = 0,
//     max = 0;
//   if (arr[0] < arr[1]) {
//     min = arr[0];
//     max = arr[1];
//   } else {
//     min = arr[1];
//     max = arr[0];
//   }
//   function range(min, max) {
//     var arr = [];
//     for (var i = min; i <= max; i++) {
//       arr.push(i);
//     }
//     return arr;
//   }

//   function gcd(a, b) {
//     return !b ? a : gcd(b, a % b);
//   }

//   function lcm(a, b) {
//     return (a * b) / gcd(a, b);
//   }

//   var multiple = min;
//   range(min, max).forEach(function (n) {
//     multiple = lcm(multiple, n);
//   });

//   return multiple;
// }
// console.log(smallestCommons([1, 5]));
// function dropElements(arr, func) {
//   for (i = 0; i < arr.length; i++) {
//     console.log(arr.length);
//     if (func(arr[i])) {
//       let arr2 = arr.slice(i);
//       return arr2;
//     }
//   }
//   return [];
// }

// console.log(
//   dropElements([0, 1, 0, 1], function (n) {
//     return n === 1;
//   })
// );
// function steamrollArray(arr) {
//   const flattenedArray = [];
//   // Loop over array contents
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       // Recursively flatten entries that are arrays
//       //  and push into the flattenedArray
//       flattenedArray.push(...steamrollArray(arr[i]));
//     } else {
//       // Copy contents that are not arrays
//       flattenedArray.push(arr[i]);
//     }
//   }
//   return flattenedArray;
// }

// test here
// console.log(steamrollArray([1, [2], [3, [[4]]]]));

// function binaryAgent(str) {
//   let binarr = str.split(" ");
//   let stt = "";
//   binarr.forEach((element) => {
//     stt += String.fromCharCode(parseInt(element, 2));
//   });
//   return stt;
// }

// binaryAgent(
//   "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
// );

// function truthCheck(collection, pre) {
//   for (i = 0; i < collection.length; i++) {
//     if (!collection[i][pre]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(
//   truthCheck(
//     [
//       { name: "Quincy", role: "Founder", isBot: false },
//       { name: "Naomi", role: "", isBot: false },
//       { name: "Camperbot", role: "Bot", isBot: true },
//     ],
//     "isBot"
//   )
// );

// function addTogether(a) {
//   let c = 0;
//   for (i = 0; i < arguments.length; i++) {
//     if (typeof arguments[i] != "number") {
//       return undefined;
//     }
//   }
//   if (arguments.length <= 1) {
//     if (typeof a != "number") {
//       return undefined;
//     }
//     return function (b) {
//       if (typeof b != "number") {
//         return undefined;
//       }
//       console.log(b);
//       return a + b;
//     };
//   }
//   for (i = 0; i < arguments.length; i++) {
//     c += arguments[i];
//   }
//   return c;
// }

// console.log(addTogether(2)([3]));

// const Person = function (firstAndLast) {
//   let last = firstAndLast.split(" ")[1];
//   let fullname = firstAndLast;
//   this.getFirstName = function () {
//     return fullname.split(" ")[0];
//   };
//   this.getLastName = function () {
//     return fullname.split(" ")[1];
//   };
//   this.getFullName = function () {
//     return fullname;
//   };
//   this.setFirstName = function (first) {
//     fullname = first + " " + fullname.split(" ")[1];
//   };
//   this.setLastName = function (last) {
//     fullname = fullname.split(" ")[0] + " " + last;
//   };
//   this.setFullName = function (firstAndLast) {
//     fullname = firstAndLast;
//   };
//   return firstAndLast;
// };

// const bob = new Person("Bob Ross");
// bob.setFullName("Hello Man");
// console.log(bob.getFirstName());
// console.log(bob.getFullName());
// console.log(Object.keys(bob).length);

// function orbitalPeriod(arr) {
//   const GM = 398600.4418;
//   const earthRadius = 6367.4447;
//   let b = [];
//   for (i = 0; i < arr.length; i++) {
//     let ac = arr[i]["avgAlt"] + earthRadius;
//     console.log(ac);
//     let c = Math.round(2 * Math.PI * Math.sqrt(Math.pow(ac, 3) / GM));
//     b.push({ name: arr[i]["name"], orbitalPeriod: c });
//   }

//   return b;
// }

// orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);

// function palindrome(str) {
//   let b = str.replace(/([^\w]|[\s]|[_])+/g, "").toLowerCase();
//   console.log(b);
//   let c = b.split("");
//   let rev = [];
//   for (let i = 0; i < b.length / 2; i++) {
//     if (b[i] !== b[b.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(palindrome("My age is 0, 0 si ega ym."));

// function convertToRoman(num) {
//   const digits = String(num).split("").map(Number).reverse();
//   console.log(digits);
//   len = digits.length;
//   let arr = [];
//   console.log(digits[3]);
//   function forTh() {
//     if (digits[3] < 4) {
//       for (i = 0; i < digits[0]; i++) {
//         arr.push("M");
//       }
//     } else return undefined;
//   }
//   function forHu() {
//     if (digits[2] < 4) {
//       for (i = 0; i < digits[2]; i++) {
//         arr.push("C");
//       }
//     } else if (digits[2] == 4) {
//       arr.push("CD");
//     } else if (digits[2] == 9) {
//       arr.push("CM");
//     } else{
//       for (i = 0; i < digits[2]; i++) {
//         arr.push("D");
//       }
//     }
//   }
//   if (digits.length == 4) {
//     if (digits[0] < 4) {
//       for (i = 0; i < digits[0]; i++) {
//         arr.push("M");
//       }
//     } else return undefined;
//   }
//   if (digits.length == 3) {
//     if (digits[0] < 4) {
//       for (i = 0; i < digits[0]; i++) {
//         arr.push("C");
//       }
//     } else return undefined;
//   }
//   if (digits.length == 2) {
//     if (digits[0] < 4) {
//       for (i = 0; i < digits[0]; i++) {
//         arr.push("C");
//       }
//     } else return undefined;
//   }
//   if (digits.length == 1) {
//     if (digits[0] < 4) {
//       for (i = 0; i < digits[0]; i++) {
//         arr.push("C");
//       }
//     } else return undefined;
//   }
//   console.log(arr);
// }

// console.log(convertToRoman(1323));

// roman Numerals
// function convertToRoman(num) {
//   let decNum = num;
//   let romNum = "";
//   const decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
//   const rom = [
//     "M",
//     "CM",
//     "D",
//     "CD",
//     "C",
//     "XC",
//     "L",
//     "XL",
//     "X",
//     "IX",
//     "V",
//     "IV",
//     "I",
//   ];
//   for (i = 0; i < rom.length; i++) {
//     while (decimal[i] <= decNum) {
//       romNum += rom[i];
//       decNum -= decimal[i];
//       console.log(11);
//     }
//   }
//   return romNum;
// }
// console.log(convertToRoman(1723));

// function rot13(str) {
//   let c = str.split("");
//   let d = [];
//   for (i = 0; i < str.length; i++) {
//     if (/[A-Z]/.test(c[i])) {
//       a = str.charCodeAt(i) + 13;
//       if (a > 90) {
//         a = 64 + (a - 90);
//       }
//       d[i] = String.fromCharCode(a);
//     } else {
//       d[i] = c[i];
//     }
//   }
//   return d.join("");
// }

// rot13("SERR PBQR PNZC?");

// function telephoneCheck(str) {
//   let b = str.replace(/([^\w]|[\s]|[_])+/g, "").toLowerCase();
//   console.log(b);
//   let numArr = b.split("");
//   console.log(numArr.length);
//   if (numArr.length == 11 || numArr.length == 10) {
//     if (numArr[0] == 1 || numArr.length == 10) {
//       return true;
//     }
//     return false;
//   }
//   return false;
// }
// "555-555-5555"
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// let str = "555 555-5555";
// // const reg = /^(\([0-9]{3}\)|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/;
// const reg = /^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$/;
// console.log(reg);
// console.log(reg.test(str));
// // console.log(telephoneCheck("(555)-555-5555"));

function checkCashRegister(price, cash, cid) {
  var change = cash - price; //change due
  let totalCash = 0; //variable to hold total cash in register
  let cidReverse = [...cid].reverse();
  let temp = []; //temp arr to hold each chnage from currency unit
  let cashValue = {
    //object to show base currency unit values
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  let changeDue = {
    //object with status & change to be returned
    status: "",
    change: [],
  };

  cid.forEach((element) => {
    //get total cash in register
    totalCash += element[1];
  });
  totalCash = parseFloat(totalCash.toFixed(2)); //2 decimal places

  //function to check if currency unit can offset some change
  function cashUnit(unit, index) {
    //unit param-> reference cashValue obj and index param-> reference cid unit amount
    let unitTotal = cidReverse[index][1]; //get currency unit total from cid
    let amount = Math.floor(change / cashValue[unit]) * cashValue[unit]; //check max possible amount that can be offset from change
    if (unitTotal > 0) {
      //check if some change can be paid from this unit
      if (unitTotal >= amount) {
        //indicates there's enough unitTotal to offset max possible amount
        change -= amount; //subtract amount taken from change
        change = parseFloat(change.toFixed(2));
        return amount; //amount taken from this unit
      } else {
        //Not enough unitTotal, hence use all
        change -= unitTotal; //subtract unitTotal from change since all unitTotal was used
        change = parseFloat(change.toFixed(2));
        return unitTotal; //amount taken from this unit which == full unitTotal
      }
    } else {
      //No change can be taken from this unit
      return 0;
    }
  }

  //function to implement cashUnit() for each unit

  function getChange() {
    let changeOwed = cash - price; //full amount of change due
    for (let [index, value] of cidReverse.entries()) {
      let changeGotten = cashUnit(value[0], index);
      if (changeGotten > 0) {
        //add change amount gotten per unit
        temp.push([value[0], changeGotten]);
      }
      if (change === 0) {
        break;
      } //terminate if change has been derived
    }
    if (totalCash < changeOwed || change !== 0) {
      changeDue.status = "INSUFFICIENT_FUNDS";
    } else if (totalCash == changeOwed) {
      changeDue.status = "CLOSED";
      changeDue.change = [...cid];
    } else {
      changeDue.status = "OPEN";
      changeDue.change = [...temp];
    }
  }

  getChange();
  return changeDue;
}
checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
