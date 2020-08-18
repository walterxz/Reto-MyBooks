import getData from "../utils/getData";

const Home = async () => {
  const books = await getData();
  console.log(books)
  const view = `
    <div class="Characters">
        ${books.books.map(book=>`
        <article class="Character-item">
            <a href="#/">
                <img src="${book.image}" alt="${book.title}">
                <h2>${book.title}</h2>
            </a>
            <span class="heart"></span>  
            <span class="heart-empty"></span>  
        </article>
        `).join('')}
    </div>
    `;
  return view;
};

export default Home;
