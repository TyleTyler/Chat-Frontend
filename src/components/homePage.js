import { useRef, useState } from "react";
import { useFetch} from "../hooks/useFetch"
import { useUserContext } from "../hooks/useUserContext";
import Friend from "./friend";
import { useActiveContext } from "../hooks/userActiveContext";
import { useRemoveFriend } from "../hooks/useRemoveFriend";


const HomePage = () => {
    const {user} = useUserContext()
    const [addFriendPopUp, setAddFriendPopUp] = useState(false)
    const [requestsPopUp, setRequestPopUp] = useState(false)
    const [friendCode, setFriendCode] = useState(null)
    const {isPending, data, fetchData, error} = useFetch()
    const {removeFriend} = useRemoveFriend()
    const {activeComponent, activate, activeSetting, setSettings} = useActiveContext()
    const settingBox = useRef()
    const handleFriend = (id, action)=>{
        fetchData(`/chatAPI/user/${action}Req/${user._doc._id}/${id}`)

    }
    const disableSetting = (pointer) =>{
        if(!activeSetting){
            return false;
        }
        
        const settingBounds = settingBox.current.getBoundingClientRect()
        if((pointer.clientX >= settingBounds.x && pointer.clientX <= settingBounds.x + settingBounds.width) && (pointer.clientY >= settingBounds.y && pointer.clientY <= settingBounds.y + settingBounds.height) ){
            return false;
        }
        setSettings(null)
    }


    

    return (<div onClick= {(e)=>disableSetting(e)}   className="homePage">

            {activeSetting && <section className="quickSettings" style={{left: `${activeSetting.x}px`, top:`${activeSetting.y}px` }}ref={settingBox}> 
                <div> Profile </div>
                <hr/>
                <div onClick={()=>{activate(activeSetting.user._id)
                     setSettings(null)}}> Message </div>
                <hr/>
                <div> Nickname </div>
                <hr/>
                <div onClick={()=>{navigator.clipboard.writeText(activeSetting.user.friendCode)
                    alert(`Copied ${activeSetting.user.username}'s Code` )
                    setSettings(null)}}> Copy ID </div>
                <hr/>
                <div className="criticalAction"> Block </div>
                <hr/>
                <div className="criticalAction" onClick={(e)=>{
                    removeFriend(activeSetting.user._id, user._doc._id)
                    setSettings(null)
                    window.location.reload()
                    }}> Remove </div>
             </section>}


            <section className="friendsBar"> 
                <div onClick={()=>{setAddFriendPopUp(!addFriendPopUp)}}> <h1>Friends </h1> <div className= { user._doc.friendRequest.length >= 1 ? "addFriendLogo notif" : "addFriendLogo"} onClick={() => {setAddFriendPopUp(!addFriendPopUp)}}/></div>
                {addFriendPopUp && 
                <form className= "addFriendPopUp" onSubmit={(e)=>{
                        e.preventDefault()
                        fetchData(`/chatAPI/user/sendRequest/${user._doc.email}/${friendCode}`)
                    }}> 
                    <div className="codeInput"><input type="text"  value = {friendCode} onChange={(input) => {setFriendCode(input.target.value)}}/> </div>
                    <div className="requestPopUp" data-state="uncollapsed" onClick={(e)=>{
                        setRequestPopUp(!requestsPopUp)
                        if(e.currentTarget.dataset.state === "uncollapsed"){
                            e.currentTarget.classList.add("turnRight")
                            e.currentTarget.classList.remove("turnLeft")
                            e.currentTarget.dataset.state = "collapsed"
                        }else{
                            e.currentTarget.classList.add("turnLeft")
                            e.currentTarget.classList.remove("turnRight")
                            e.currentTarget.dataset.state = "uncollapsed"
                        }
                    }}/>
                    { requestsPopUp && <section className="incomingRequests"> Incoming Requests 
                        {user._doc.friendRequest.map(request => 
                            (<div> <h1>{request.username} </h1> <section className="requestSection"><div className="requestOption" onClick={(e)=>{handleFriend( request._id, "accept")}}/> <div className="requestOption" onClick={(e)=>{handleFriend(request._id, "reject")}}/></section> </div>))
                        }
                    </section> }
                </form>}
            {/* {data && <div> Sent!</div>} */}
                {user._doc.friends.map(friend => (<Friend user = {friend}/>))}
            </section>    
            {activeComponent == null && <section className="chatSection inactive"> <div className="inactivePic"/> <div>Start a conversation with a friend! </div> <span onClick={() => {setAddFriendPopUp(!addFriendPopUp)} }> or Add a friend</span> </section>}        
    </div>);
}
 
export default HomePage;