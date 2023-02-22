import "../Footer/footer.css"
import logo from "../../assets/logo.jpg"
import { Facebook,Linkedin,Mail,Youtube,Instagram } from "react-feather";
export const Footer = ()=>{
    return(
        <>
        <div className="footer">
            <div className="footerLeft">
                <img src={logo} alt="logo" className="logo"/>
                <h2 className="title">Northwest Conference 2023</h2>
                <p className="address">800 University Drive</p>
                <p className="address">
                    Maryville, MO 64468 USA 
                </p>
            </div>
            <div className="footerRight">
                <h2 style={{fontSize:"20px"}}>Useful Links</h2>
                <div className="abouticon" style={{marginTop:"20px"}}>
                    <Facebook size={20}/>
                    <p className="iconName">Facebook</p>
                </div>
                <div className="abouticon">
                    <Linkedin size={20}/>
                    <p className="iconName">LinkedIn</p>
                </div>
                <div className="abouticon">
                    <Mail size={20}/>
                    <p className="iconName">Email</p>
                </div> 
                <div className="abouticon">
                    <Youtube size={20}/>
                    <p className="iconName">Youtube</p>
                </div>
                <div className="abouticon">
                    <Instagram size={20}/>
                    <p className="iconName">Instagram</p>
                </div>
            </div>
        </div>
        </>
    )
}