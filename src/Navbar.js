import image from "./earth.png";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navi">
      <img src={image} alt="earth" className="earth" />
      <h1 className="navHeader">my travel journal</h1>
    </div>
  );
}
