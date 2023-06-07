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
  [...new Set(data.map((x) => x.country))].sort().forEach((element) => {
    countryObject[element] = [
      ...data.filter((jData) => jData.country == element),
    ];
  });
  console.log(countryObject);
}
