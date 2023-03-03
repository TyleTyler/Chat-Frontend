import { useEffect, useState } from "react";
import { useActiveContext } from "../hooks/userActiveContext";
import userPFP from "../public/user.png"

const Friend = ({user}) => {
    const {activeComponent, activate } = useActiveContext()
    const {username} =  user
    const [active, setActive] = useState(false);
    useEffect(()=>{
        if(activeComponent == user._id){
            setActive(true)
        }
        else{setActive(false)}
    }, [activeComponent])

    return ( <section data-key = {user._id} className={ active ? 'friendSection activated' : 'friendSection'} onClick={(e) => {
        activate(e.target.dataset.key)
        console.log(e.target.classList)
        if(activeComponent == e.target.dataset.key){
            // e.target.classList.toggle("deactivated")
            // setTimeout(()=>e.target.classList.toggle("deactivated"), 100)
            setActive(false)
            activate(null)
        }
      }}><img src={userPFP} className="pfp"/> <div className="userPFP"/> {username} </section> );
}
 
export default Friend;