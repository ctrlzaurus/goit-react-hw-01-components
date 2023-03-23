import user from '../data/user.json';
import Profile from './profile/Profile';

import stats from '../data/data.json';
import Statistics from './statistics/Statistics';

import friends from '../data/friends.json';
import FriendList from './friendList/FriendList';

import transactions from '../data/transactions.json';
import TransactionHistory from './transactions/TransactionHistory';


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={'Upload stats'} stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  )
}
