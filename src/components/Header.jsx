const Header = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-dark bg-dark fixed-top p-3">
      <button
        className="btn btn-outline-light d-md-none"
        onClick={toggleSidebar}
      >
        ☰
      </button>
      <span className="navbar-brand ms-2 ">ASSIGNMENT PROJECT</span>
    </nav>
  );
};

export default Header;
