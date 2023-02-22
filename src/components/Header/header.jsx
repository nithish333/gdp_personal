import "../Header/header.css";
import logo from "../../assets/nwconflogo.png"

const Header = ()=>{
    return(
        <>
        <div className="header">
            <div className="logoBox">
            <img src={logo} alt="Northwest conference logo" className="nwlogo"/>
            <h3 className="logoName">NORTHWEST CONFERENCE</h3>
            </div>
            <div>
            <ul className="menu">
                <li className="menuItem"><a href="#" className="menuLink">HOME</a></li>
                <li className="menuItem"><a href="#" className="menuLink">SUBMIT PAPER</a></li>
                <li className="menuItem"><a href="#" className="menuLink">COMMITEE MEMBER</a></li>
                <li className="menuItem"><a href="#" className="menuLink">EVENTS</a></li>
                <li className="menuItem"><a href="#" className="menuLink">LOGIN</a></li>
            </ul>
            </div>
        </div>
        </>
    )
}

export default Header;