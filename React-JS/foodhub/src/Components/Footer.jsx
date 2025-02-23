import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-title">DelishEats &copy; {new Date().getFullYear()}</p>
        <p className="footer-description">Fast and fresh food delivered to your doorstep!</p>
        
        <div className="footer-social">
          <a href="#" className="social-icon"><FaFacebook size={24} /></a>
          <a href="#" className="social-icon"><FaTwitter size={24} /></a>
          <a href="#" className="social-icon"><FaInstagram size={24} /></a>
        </div>
        
        <div className="footer-links">
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
          <a href="#" className="footer-link">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
