import { useEffect, useState } from "react";
import { useActiveContext } from "../hooks/userActiveContext";
import userPFP from "../public/user.png"

const Chat = ({chat}) => {
    const {activeComponent, activate, activeSetting, setSettings } = useActiveContext()
    const {chatName} =  chat
    const [active, setActive] = useState(false);
    useEffect(()=>{
        if(activeComponent == chat._id){
            setActive(true)
        }
        else{setActive(false)}
    }, [activeComponent])

    return ( <section className={ active ? 'friendSection activated' : 'friendSection'} 
    onClick={(e) => {
        activate(chat._id)
        if(activeComponent == chat._id){
            setActive(false)
            activate(null)
        }
      }}
    onContextMenu={(e)=>{
        e.preventDefault()
        setSettings({ chat, x: e.clientX, y: e.clientY})
    }}><img src={userPFP} className="pfp"/> <div className="userPFP"/> {chatName} </section> );
}
 
export default Chat;