import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import userData from '../../userData.json';
import friends from '../../friends.json';
import transactions from '../../transactions.json';
import '../../main.css';

const { username, tag, location, avatar, stats } = userData;

export default function App() {
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
