import getData from "../utils/getData";

const Favorites = async () => {
  let books = await getData();
  let favorites = JSON.parse(localStorage.getItem("favorites"));
  books = books.books.filter((r) => favorites.includes(r.isbn13));
  const view = `
      <div class="">
          <h2> <span class="heart"></span> Lista de libros favoritos</h2> 
      </div>
      <div class="container">
      ${books
        .map(
          (book) => `
      <article class="Character-item">
              <img src="${book.image}" alt="${book.title}">
              <h2>${book.title}</h2>
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

export default Favorites;
