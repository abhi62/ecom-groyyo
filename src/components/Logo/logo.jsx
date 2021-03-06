import { LogoIcon } from "../../icons/LogoIcon/index";

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo-l-section">
        <div className="logo-icon-section">
          <LogoIcon />
        </div>
      </div>

      <div className="logo-r-section">
        <div className="logo-n-section">
          <h1 className="logo-text">
            <span>groyyo-ecom</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Logo;
