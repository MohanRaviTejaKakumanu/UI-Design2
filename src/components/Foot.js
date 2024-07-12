import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { ImFacebook2 } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

const Foot = () => {
  return (
    <div className="foot">
      <div className="foot-content">
        <p>supported chains</p>
      </div>

      <div className="foot-images">
        <FaLinkedin fontSize={20} />
        <IoLogoWhatsapp fontSize={20} />
        <ImFacebook2 fontSize={20} />
        <FaTwitter fontSize={20} />
        <FaSnapchatGhost fontSize={20} />
      </div>
    </div>
  );
};

export default Foot;
