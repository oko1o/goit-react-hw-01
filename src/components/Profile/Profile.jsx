import css from './Profile.module.css';

const {
  container,
  profileSection,
  profilePhoto,
  userName,
  userTag,
  userLocation,
  statsSection,
  userStat,
} = css;

export default function Profile({ name, tag, location, image, stats }) {
  const liMarkUp = Object.entries(stats).map(([key, value]) => (
    <li key={key} className={userStat}>
      <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
      <span>{value}</span>
    </li>
  ));

  return (
    <div className={container}>
      <div className={profileSection}>
        <img src={image} alt={`${name} avatar`} className={profilePhoto} />
        <p className={userName}>{name}</p>
        <p className={userTag}>@{tag}</p>
        <p className={userLocation}>{location}</p>
      </div>
      <ul className={statsSection}>{liMarkUp}</ul>
    </div>
  );
}
