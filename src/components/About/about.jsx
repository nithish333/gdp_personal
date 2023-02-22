import about from "../../assets/about.png"
import "../About/about.css"
import CountUp from 'react-countup';

const About = ()=>{
    return(
        <>
        <div className="about">
            <div className="aboutLeft">
            <h2 className="aboutTitle">About the Conference</h2>
            <p className="aboutDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, amet corrupti enim fuga quo eum voluptas vitae sit similique dolores veritatis rerum eveniet nisi provident neque natus impedit consequatur commodi.</p>
            <p className="aboutDescription">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, amet corrupti enim fuga quo eum voluptas vitae sit similique dolores veritatis rerum eveniet nisi provident neque natus impedit consequatur commodi.</p>
            <p className="aboutDescription">Conference on 14th August, 2023.</p>
            <div className="btn knowMore">
                <a href="#" className="knowMoreLink">KNOW MORE</a>
                
            </div>
            {/* <div className="knowMoreHover"></div> */}
            </div>
            <div className="aboutRight">
            <img src={about} alt="About conference" className="aboutImage"/>
            </div>
        </div>
            <div className="countBox">
            <div className="paperCount">
                <CountUp end={1234} delay={2} className="count" duration={3} />
                <p className="countDescription">Total Papers Submitted</p>
            </div>
            <div className="paperCount">
                <CountUp end={14} className="count" delay={2} duration={3} />
                <p className="countDescription">Total technologies covered</p>
            </div>
            <div className="paperCount">
                <CountUp end={2374} className="count" delay={2} duration={3}/>
                <p className="countDescription">Total Attendance</p>
            </div>
            </div>
        
        </>
    )
}

export default About;