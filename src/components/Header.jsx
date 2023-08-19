import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const homePage = location.pathname === "/" ? true : false;
  
  const headerOnClick = () => {
    if(homePage){
        //TODO: Refresh
        console.log('refresh')
    }
    else{
        navigate(-1)
    }
  };

  return (
    <>
      <header className="header">
        <button className="header-button" onClick={headerOnClick}>
          {homePage ? "Refresh" : "Back"}
        </button>
        <div className="app-name">
          <h1>User App</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
