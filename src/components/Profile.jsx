import { useState } from 'react';
import { profile, achievements, updates } from '../../data';
import Cards from './Cards';
import UpdatesFeed from './UpdatesFeed';
import './ProfileHeader.css';

const ProfileHeader = ({ profile }) => {
  return (
    <div className="profile-header">
      <div className="avatar">
        <img src="./../assets/avatar.png" alt={`${profile.name}`} />
      </div>
      <h1 className="name">{profile.name}</h1>
      <p className="followers-info">
        {profile.numberFollowing} following • {profile.numberOfFollowers}{' '}
        followers
      </p>
    </div>
  );
};

export default function Profile() {
  const [profileData, setProfileData] = useState(profile);
  const [achievementsData, setAchievementsData] = useState(achievements);
  const [updatesData, setUpdatesData] = useState(updates);

  return (
    <div>
      <ProfileHeader profile={profileData} />
      <Cards achievements={achievementsData} />
      <UpdatesFeed updates={updatesData} />
    </div>
  );
}
