import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({friends}) => {
    return (
        <ul className='friend-list'>
          {friends.map(({avatar, name, isOnline, id}) => (
            <FriendListItem 
              avatar={avatar}
              name={name}
              isOnline={isOnline}
              key={id}
            />
           ))}
        </ul>
    )
}

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.string,
}

export default FriendList;