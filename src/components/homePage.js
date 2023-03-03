import { useUserContext } from "../hooks/useUserContext";
import Friend from "./friend";
import { useState } from "react";
import FriendRequest from "./friendRequest";
import { useActiveContext } from "../hooks/userActiveContext";

const HomePage = () => {
    const {user} = useUserContext()
    const [friendPopUp, setFriendPopUp] = useState(false)
    const {activeComponent} = useActiveContext()
    return (<div className="homePage">
            <section className="friendsBar"> 
                <div onClick={()=>{setFriendPopUp(!friendPopUp)}}> <h1>Friends </h1> <div className="addFriendLogo"/></div> 
                {friendPopUp && <FriendRequest />}
                {user._doc.friends.map(friend => (<Friend user = {friend}/>))}
            </section>    
            {activeComponent == null && <section className="chatSection"> Not Active </section>}        
    </div>);
}
 
export default HomePage;