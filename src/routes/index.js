import Header from "../templates/Header";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import Favorites from "../pages/Favorites";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/": Home,
  "/favorites": Favorites,
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");
  header.innerHTML = await Header();
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();

  let favs = document.getElementsByClassName("heart-empty");
  for (let item of favs) {
    item.addEventListener("click", function () {
      let favorites = [];
      if (localStorage.getItem("favorites")) {
        favorites = JSON.parse(localStorage.getItem("favorites"));
      }
      alert(`Agregaste ${this.dataset.name} a favoritos`);
      favorites.push(this.dataset.id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      window.location.reload(true);
    });
  }

  let unliked = document.getElementsByClassName("heart");
  for (let item of unliked) {
    item.addEventListener("click", function () {
      let favorites = [];
      if (localStorage.getItem("favorites")) {
        favorites = JSON.parse(localStorage.getItem("favorites"));
      }
      alert(`Borraste ${this.dataset.name} de favoritos`);
      favorites = favorites.filter((e) => e !== this.dataset.id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      window.location.reload(true);
    });
  }
};

export default router;
