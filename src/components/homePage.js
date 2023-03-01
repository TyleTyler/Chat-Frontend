import { useUserContext } from "../hooks/useUserContext";
import Friend from "./friend";

const HomePage = () => {
    const {user} = useUserContext()
    // console.log(user._doc.friends)
    return (<div className="homePage">
        <section className="friendsBar"> 
            <div> <h1>Friends </h1> <div className="addFriendLogo"/></div> 
            {user._doc.friends.map(friend => (<Friend user = {friend}/>))}
        </section>
        <section className="chatSection"> </section>        
    </div>);
}
 
export default HomePage;