import { useState } from "react";
import NavigatorBStyle from "./NavigatorB.module.css";
import { AiOutlineHome, AiOutlineCompass, AiOutlineMessage, AiOutlineCamera, AiOutlineUp } from 'react-icons/ai';

export default function NavigatorB({bg="black"}){
    const [buttonState, setButtonstate] = useState("home")
    return(
        <div style={{backgroundColor:bg}} className={NavigatorBStyle.NavigationContainer}>
            <center><div className={NavigatorBStyle.NavigationBar}></div></center>
            <div className={NavigatorBStyle.navigateBox}>

                <button onClick={() => setButtonstate("home")} className={NavigatorBStyle.NavigateButton}>
                    <center>
                        <AiOutlineHome className={buttonState == "home" ? NavigatorBStyle.iconActive : NavigatorBStyle.icon}/>
                        <AiOutlineUp className={buttonState == "home" ? NavigatorBStyle.UparrowVisible : NavigatorBStyle.UparrowHidden}/>
                    </center>
                </button>

                <button onClick={() => setButtonstate("compass")} className={NavigatorBStyle.NavigateButton}>
                    <center>
                        <AiOutlineCompass className={buttonState == "compass" ? NavigatorBStyle.iconActive : NavigatorBStyle.icon}/>
                        <AiOutlineUp className={buttonState == "compass" ? NavigatorBStyle.UparrowVisible : NavigatorBStyle.UparrowHidden}/>
                    </center>
                </button>

                <button onClick={() => setButtonstate("message")} className={NavigatorBStyle.NavigateButton}>
                    <center>
                        <AiOutlineMessage className={buttonState == "message" ? NavigatorBStyle.iconActive : NavigatorBStyle.icon}/>
                        <AiOutlineUp className={buttonState == "message" ? NavigatorBStyle.UparrowVisible : NavigatorBStyle.UparrowHidden}/>
                    </center>
                </button>

                <button onClick={() => setButtonstate("camera")} className={NavigatorBStyle.NavigateButton}>
                    <center>
                        <AiOutlineCamera className={buttonState == "camera" ? NavigatorBStyle.iconActive : NavigatorBStyle.icon}/>
                        <AiOutlineUp className={buttonState == "camera" ? NavigatorBStyle.UparrowVisible : NavigatorBStyle.UparrowHidden}/>
                    </center>
                </button>
                
            </div>
        </div>
    )
}
