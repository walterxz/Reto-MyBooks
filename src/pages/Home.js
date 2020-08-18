import getData from "../utils/getData";

const Home = async () => {
  const books = await getData();
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  if (!favorites) {
    favorites = [];
  }
  const view = `
    <div class="Characters">
        ${books.books.map((book) => `
        <article class="Character-item">
            <a href="#/">
                <img src="${book.image}" alt="${book.title}">
                <h2>${book.title}</h2>
            </a>
            <span class="${
              favorites.find((r) => r === book.isbn13) ? "heart" : "heart-empty"
            }" data-id="${book.isbn13}" data-name="${book.title}"></span>  
        </article>
        `
          )
          .join("")}
    </div>
    `;
  return view;
};

export default Home;
