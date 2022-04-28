import logo from "../assets/images/logo_short.png";
import styles from '../styles/footer.module.css'

const Footer = () => {
  return (
    <div className={`${styles.footer} container-fluid bg-light p-3`}>
      <hr />
      <footer className="d-flex justify-content-between align-items-center">
        <div className="logo">
          <img height="40" src={logo} alt="Logo" />
        </div>
        <div>
          <span>&copy; Renato Dias from SoulCode Academy</span>
        </div>
        <div className="contacts d-flex">
          <div className="m-2">
            <a target='_blank' rel="noreferrer" href="https://github.com/rdfn37">
              <i className="bi bi-github fs-2 text-dark"></i>
            </a>
          </div>
          <div className="m-2">
            <a target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/renato-dias-30489a181/">
              <i className="bi bi-linkedin fs-2 text-dark"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
