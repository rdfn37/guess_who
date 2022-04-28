import logo_full from '../assets/images/logo_full.png'

const Header = () => { 
  return (
    <div className="container-fluid bg-dark p-4">
      <img height='40px' src={logo_full} alt="Logo" />
    </div>
  );
};

export default Header;
