import { useState } from "react";
import { useFetch} from "../hooks/useFetch"
import { useUserContext } from "../hooks/useUserContext";
import Friend from "./friend";
import FriendRequest from "./friendRequest";
import { useActiveContext } from "../hooks/userActiveContext";

const HomePage = () => {
    const {user} = useUserContext()
    const [addFriendPopUp, setAddFriendPopUp] = useState(false)
    const [friendCode, setFriendCode] = useState(null)
    const {isPending, data, fetchData, error} = useFetch()
    const {activeComponent} = useActiveContext()
    console.log( user._doc.friendRequest.length );
    return (<div className="homePage">
            <section className="friendsBar"> 
                <div onClick={()=>{setAddFriendPopUp(!addFriendPopUp)}}> <h1>Friends </h1> <div className= { user._doc.friendRequest.length >= 1 ? "addFriendLogo notif" : "addFriendLogo"} onClick={() => {setAddFriendPopUp(!addFriendPopUp)}}/></div>
                {addFriendPopUp && <form className= "addFriendPopUp" onSubmit={(e)=>{
                    e.preventDefault()
                    fetchData(`/chatAPI/user/sendRequest/${user._doc.email}/${friendCode}`)
                    console.log(data)
                }}> 
                <div className="codeInput"><input type="text"  value = {friendCode} onChange={(input) => {setFriendCode(input.target.value)}}/> </div> 
            </form>}
            {data && <div> Sent!</div>}
                {addFriendPopUp && <FriendRequest />}
                {user._doc.friends.map(friend => (<Friend user = {friend}/>))}
            </section>    
            {activeComponent == null && <section className="chatSection inactive"> <div className="inactivePic"/> <div>Start a conversation with a friend! </div> <span onClick={() => {setAddFriendPopUp(!addFriendPopUp)} }> or Add a friend</span> </section>}        
    </div>);
}
 
export default HomePage;