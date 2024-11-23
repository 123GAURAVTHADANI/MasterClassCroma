import { FaLocationDot } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaUser } from "react-icons/fa";

function Header() {
  return (
    <header>
      <img
        src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg"
        alt="preview"
      />
      <div className="flex">
        <GiHamburgerMenu />
        Menu
      </div>
      <input type="text" placeholder="Search" />
      <div className="flex">
        <span classsName="flex">
          <FaLocationDot />
          Mumbai , 450001
        </span>
        <span>
          <FaUser />
        </span>
      </div>
    </header>
  );
}

export default Header;
