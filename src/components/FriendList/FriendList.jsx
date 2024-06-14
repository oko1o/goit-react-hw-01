import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

export default function FriendList({ friends }) {
  const friendsElements = friends.map(friend => {
    return (
      <li key={friend.id} className={css.friendListWrapper}>
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      </li>
    );
  });
  return <ul className={css.friendList}>{friendsElements}</ul>;
}
