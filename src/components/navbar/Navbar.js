import img from "../../img/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={img} alt="logo" />
      </div>
      <div className="buttons">
        <div className="btn-1">HOROSCOPE</div>
        <div className="btn-1">DAILY</div>
        <div className="btn-1">TAROT</div>
        <div className="btn-1">ARTICLE</div>
        <div className="btn-1">CONTACT</div>
      </div>
    </div>
  );
};

export default Navbar;
