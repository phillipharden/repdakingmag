import '../styles/footer.css';
import Logo from '../assets/RDKWorldwide.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <div className="d-flex flex-column text-center align-items-center">
        <div>
          <img src={Logo} alt="Rep Da King Magazine logo" />

          <ul className="p-0">
            <li>
              <a href="tel:+18001234567">800 123 4567</a>
            </li>
            <li>
              <a href="mailto:info@repdakingworldwide.com">
                info@repdakingworldwide.com
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-uppercase mt-5">Connect with us!</h4>
          <div classname="d-flex justify-content-between align-items-center">
            <ul className="social-links d-flex justify-content-center p-0">
              <li className="px-2">
                <a
                  href="https://www.facebook.com/RepDaKingTV"
                  target="blank"
                  className="facebook icon"
                >
                  Facebook
                </a>
              </li>
              <li className="px-1">
                <a
                  href="https://www.youtube.com/@repdakingtv"
                  target="blank"
                  className="youtube icon"
                >
                  YouTube
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://www.instagram.com/repdakingmag/"
                  target="blank"
                  className="instagram icon"
                >
                  Instagram
                </a>
              </li>
              <li className="px-2">
                <a
                  href="https://twitter.com/RepDaKingMag"
                  target="blank"
                  className="twitterx icon"
                >
                  Twitter X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center copyright">
          &copy; {currentYear} Rep Da King Magazine | All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
