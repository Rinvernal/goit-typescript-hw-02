import s from './Profile.module.css'

const Profile = props => {
  return (
    <div className={s.wrapper}>
      <div className={s.profile}>
        <div className={s.person}>
          <img src={props.img} alt="User avatar" className={s.avatar} />
          <p className={s.name}>{props.name}</p>
          <p className={s.p}>@{props.tag}</p>
          <p className={s.p}>{props.location}</p>
        </div>

        <ul className={s.list}>
          <li className={s.item}>
            <span className={s.key}>Followers</span>
            <span className={s.value}>{props.stats.followers}</span>
          </li>
          <li className={s.item}>
            <span className={s.key}>Views</span>
            <span className={s.value}>{props.stats.views}</span>
          </li>
          <li className={s.item}>
            <span className={s.key}>Likes</span>
            <span className={s.value}>{props.stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Profile;