import css from './FriendList.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <li className='friends-item'>
         {isOnline ? (  
          <span className={css.offLine}>.</span>
         ) : (
          <span className={css.online}>.</span>
         )
         }
          <img className='friends-avatar' src={avatar} alt='User avatar' width='48' />
          <p className='friends-name'>{name}</p>
        </li>
    )
}

export default FriendListItem;

// {`status ${isOnline ? 'online' : null}`}