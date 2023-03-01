import userPFP from "../public/user.png"

const Friend = ({user}) => {
    const {username} =  user
    return ( <section className="friendSection"><img src={userPFP} className="pfp"/> <div className="userPFP"/> {username} </section> );
}
 
export default Friend;