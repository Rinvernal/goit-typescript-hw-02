import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css'
const FriendList = ({friends}) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {friends.map(friend => (
          <li key={friend.id} className={s.item}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        ))}
      </ul>
    </div>
  )
} 

export default FriendList;