import css from './FriendListItem.module.css';

const { friendListItem, friendListItemName, friendListItemStatus, isOffline } =
  css;

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={friendListItem}>
      <img src={avatar} alt={`${name}'s avatar`} width="48" />
      <p className={friendListItemName}>{name}</p>
      <p
        className={
          isOnline
            ? `${friendListItemStatus}`
            : `${friendListItemStatus} ${isOffline}`
        }
      >
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}
