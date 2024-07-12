import { HiOutlineMenu } from "react-icons/hi";
import { PiMastodonLogoBold } from "react-icons/pi";

const Header = () => {
  return (
    <div className="head">
      <div className="logo-content">
        <li className="logo">
          <PiMastodonLogoBold fontSize={30} />
        </li>
        <li className="logo-name">lossless</li>
      </div>
      <li className="menu">
        <button>
          <HiOutlineMenu fontSize={20} color="white" />
        </button>
      </li>
    </div>
  );
};

export default Header;
