import { useState } from "react";
import NavigatorAStyle from "./NavigatorA.module.css";
import { AiOutlineHome, AiOutlineCompass, AiOutlineMessage, AiOutlineCamera } from 'react-icons/ai';

export default function NavigatorA({bg ="black",activeColor="white"}){

    const [buttonState, setButtonstate] = useState("home")

    return(
        <div style={{backgroundColor:bg}} className={NavigatorAStyle.NavigationContainer}>
            <div className={NavigatorAStyle.navigateBox}>
                <button onClick={() => setButtonstate("home")} style={{backgroundColor: buttonState === "home" ? activeColor : bg}} className={NavigatorAStyle.NavigateButton}><AiOutlineHome style={{color: buttonState == "home" ? bg : activeColor}} className={NavigatorAStyle.icon}/></button>
                <button onClick={() => setButtonstate("compass")} style={{backgroundColor: buttonState == "compass" ? activeColor : bg,}} className={NavigatorAStyle.NavigateButton}><AiOutlineCompass style={{color: buttonState == "compass" ? bg : activeColor}} className={NavigatorAStyle.icon}/></button>
                <button onClick={() => setButtonstate("message")} style={{backgroundColor: buttonState == "message" ? activeColor : bg}} className={NavigatorAStyle.NavigateButton}><AiOutlineMessage style={{color: buttonState == "message" ? bg : activeColor}} className={NavigatorAStyle.icon}/></button>
                <button onClick={() => setButtonstate("camera")} style={{backgroundColor: buttonState == "camera" ? activeColor : bg}}  className={NavigatorAStyle.NavigateButton}><AiOutlineCamera style={{color: buttonState == "camera" ? bg : activeColor}} className={NavigatorAStyle.icon}/></button>
            </div>
        </div>
    )
}
