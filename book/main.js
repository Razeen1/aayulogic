// let countrySelect = "Nepal";
// let langSelect = "French";

fetch(
  "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    // searchByCountry(data, countrySelect);
    // searchByLanguage(data, langSelect);
    toArray(data);
  });

function toArray(data) {
  let countryObject = {};
  let arr = [...new Set(data.map((x) => x.country))];
  arr.forEach((element) => {
    let d = data.filter((jData) => jData.country == element);
    countryObject[element] = [...d];
  });
  console.log(countryObject);
}

// function getuniqueCountry(data) {
//   let arr = data.map((x) => x.country);
//   return [...new Set(arr)];
// }

// function searchByCountry(data, countryName) {
//   let d = data.filter((element) => element.country == countryName);
//   return d;
// }

// function searchByLanguage(data, languageName) {
//   let count = 0;
//   console.log(languageName + " the books are: ") + "/n";
//   console.log("S.N\tAuthor\tTitle\tNo Pages\tPublished Year\tCountry\tLink");
//   for (i = 0; i < data.length; i++) {
//     if (data[i].language == languageName) {
//       count += 1;
//       console.log(
//         count +
//           "\t" +
//           data[i].author +
//           "\t" +
//           data[i].title +
//           "\t" +
//           data[i].pages +
//           "\t" +
//           data[i].year +
//           "\t" +
//           data[i].country +
//           "\t" +
//           data[i].link
//       );
//     }
//   }
//   if (count > 0) {
//     console.log("No of books: " + count);
//   } else {
//     console.log("None");
//   }
// }
