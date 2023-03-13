const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <img className="logo pt-5" src="/img/logo.svg" alt="Logo" />
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
      </ul>
      <form className="d-flex me-5" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <form className="d-flex ms-5" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  </div>
</nav>

  );
};

export default NavBar;



{/* <div className="Navbar">
      <div>
        
      </div>
      <div className="container-inputs">
      <div className="container-input ">
        <input
          type="text"
          className="input inputId"
          placeholder="Type a location Id..."
        />
        <button className="button buttonId" type="button" id="">
          Search
        </button>
      </div>
      <div className="container-ubication">
        <input
          type="text"
          className="input inputubication"
          placeholder="Type a Ubication..."
        />
        <button className="button buttonUbication" type="button" id="">
          Search
        </button>
      </div>
      </div>
    </div> */}
