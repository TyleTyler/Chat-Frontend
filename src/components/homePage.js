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
    const {activeComponent, activeSetting} = useActiveContext()
    const handleFriend = (id, action)=>{
        window.location.reload()
        fetchData(`/chatAPI/user/${action}Req/${user._doc._id}/${id}`)

    }


    return (<div className="homePage">
            {activeSetting && <div> Settings </div>}
            <section className="friendsBar"> 
                <div onClick={()=>{setAddFriendPopUp(!addFriendPopUp)}}> <h1>Friends </h1> <div className= { user._doc.friendRequest.length >= 1 ? "addFriendLogo notif" : "addFriendLogo"} onClick={() => {setAddFriendPopUp(!addFriendPopUp)}}/></div>
                {addFriendPopUp && 
                <form className= "addFriendPopUp" onSubmit={(e)=>{
                        e.preventDefault()
                        fetchData(`/chatAPI/user/sendRequest/${user._doc.email}/${friendCode}`)
                    }}> 
                    <div className="codeInput"><input type="text"  value = {friendCode} onChange={(input) => {setFriendCode(input.target.value)}}/> </div>
                    <section className="incomingRequests"> Incoming Requests 
                        {user._doc.friendRequest.map(request => 
                            (<div> <h1>{request.username} </h1> <section className="requestSection"><div className="requestOption" onClick={(e)=>{handleFriend(e, request._id, "accept")}}/> <div className="requestOption" onClick={(e)=>{handleFriend(e, request._id, "reject")}}/></section> </div>))
                        }
                    </section> 
                </form>}
            {data && <div> Sent!</div>}
                {addFriendPopUp && <FriendRequest />}
                {user._doc.friends.map(friend => (<Friend user = {friend}/>))}
            </section>    
            {activeComponent == null && <section className="chatSection inactive"> <div className="inactivePic"/> <div>Start a conversation with a friend! </div> <span onClick={() => {setAddFriendPopUp(!addFriendPopUp)} }> or Add a friend</span> </section>}        
    </div>);
}
 
export default HomePage;