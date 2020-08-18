const Header = () => {
  const view = `
        <div class="Header-main">
            <div class="Header-logo">
                <h1>
                    <a href="/">
                        My Book
                    </a>
                </h1>
            </div>
            <div class="Header-nav">
                <a href="#/about/">
                    About
                </a>
                <a href="#/favorites/">
                    Mis favoritos
                </a>
            </div>
        </div>
    `;
  return view;
};

export default Header;
