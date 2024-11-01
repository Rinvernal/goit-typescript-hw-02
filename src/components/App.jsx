import Profile from "./Profile/Profile";
import userData from "../userData.json";
import friends from "../friends.json"
import FriendList from "./FriendList/FriendList"
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "../transactions.json"

const App = () => {
  return (
    <div>
      <Profile 
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        img={userData.avatar}
        stats={userData.stats}
      />
      <FriendList 
        friends={friends}/>
      <TransactionHistory
        items={transactions}/>
    </div>
      
  )
}

export default App;