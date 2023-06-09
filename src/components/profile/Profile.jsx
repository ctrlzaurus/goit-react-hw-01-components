import PropTypes from 'prop-types';

const Profile = ({username, tag, location, avatar, stats:{followers, views, likes}}) => {
    return(
        <div className='profile'>
            <div className='description'>
                <img
                   src={avatar}
                   alt='User avatar'
                   className='avatar'
                />
                <p className='name'>{username}</p>
                <p className='tag'>@{tag}</p>
                <p className='location'>{location}l</p>
            </div>
            <ul className ='stats'>
              <li className='stats-item'>
                <span className='label'>Followers</span>
                <span className='quantity'>{followers}</span>
              </li>
              <li className='stats-item'>
                <span className='label'>Views</span>
                <span className='quantity'>{views}</span>
              </li>
              <li className='stats-item'>
                <span className='label'>Likes</span> 
                <span className='quantity'>{likes}</span>
              </li>
            </ul>
        </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number)
}

export default Profile;