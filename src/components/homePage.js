import { useState } from "react";
import { useFetch} from "../hooks/useFetch"
import { useUserContext } from "../hooks/useUserContext";
import Friend from "./friend";

const HomePage = () => {
    const {user} = useUserContext()
    const [addFriendPopUp, setAddFriendPopUp] = useState(false)
    const [friendCode, setFriendCode] = useState(null)
    const {isPending, data, fetchData, error} = useFetch()
  


    return (<div className="homePage">
        <section className="friendsBar"> 
            <div> <h1>Friends </h1> <div className="addFriendLogo" onClick={() => {setAddFriendPopUp(!addFriendPopUp)}}/></div>
                {addFriendPopUp && <form className="addFriendPopUp" onSubmit={(e)=>{
                    e.preventDefault()
                    fetchData(`/chatAPI/user/sendRequest/${user._doc.email}/${friendCode}`)
                    console.log(data)
                }}> 
                <div className="codeInput"><input type="text"  value = {friendCode} onChange={(input) => {setFriendCode(input.target.value)}}/> </div> 
            </form>}
            {data && <div> Sent!</div>}
            {user._doc.friends.map(friend => (<Friend user = {friend}/>))}
        </section>
        <section className="chatSection"> </section>        
    </div>);
}
 
export default HomePage;