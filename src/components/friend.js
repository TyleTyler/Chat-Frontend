import { useEffect, useState } from "react";
import { useActiveContext } from "../hooks/userActiveContext";
import userPFP from "../public/user.png"

const Friend = ({user}) => {
    const {activeComponent, activate, activeSetting, setSettings } = useActiveContext()
    const {username} =  user
    const [active, setActive] = useState(false);
    useEffect(()=>{
        if(activeComponent == user._id){
            setActive(true)
        }
        else{setActive(false)}
    }, [activeComponent])

    return ( <section className={ active ? 'friendSection activated' : 'friendSection'} 
    onClick={(e) => {
        activate(user._id)
        if(activeComponent == user._id){
            setActive(false)
            activate(null)
        }
      }}
    onContextMenu={(e)=>{
        e.preventDefault()
        
        setSettings({ user })
    }}><img src={userPFP} className="pfp"/> <div className="userPFP"/> {username} </section> );
}
 
export default Friend;