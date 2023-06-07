fetch(
  "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"
)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    mapByCountry(data);
  });

function mapByCountry(data) {
  let countryObject = {};
  let arr = [...new Set(data.map((x) => x.country))].sort();
  arr.forEach((element) => {
    let d = data.filter((jData) => jData.country == element);
    countryObject[element] = [...d];
  });
  console.log(countryObject);
}
