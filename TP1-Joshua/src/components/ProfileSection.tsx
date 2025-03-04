type ProfileProps = {
  profile: {
    profileImg: string;
    name: string;
    bio: string;
    followers: number;
    following: number;
  };
  postCount: number;
};

const ProfileSection = ({ profile, postCount }: ProfileProps) => {
  return (
    <>
      <div className="profile-name-image">
        <img
          className="profile-image"
          src={profile.profileImg}
          alt={`${profile.name}'s profile`}
        />
        <h1 className="profile-user-name">{profile.name}</h1>
      </div>

      <p className="profile-bio">{profile.bio}</p>

      <div className="profile-stats">
        <ul>
          <li>Post: {postCount}</li>
          <li>Followers: {profile.followers}</li>
          <li>Following: {profile.following}</li>
        </ul>
      </div>
    </>
  );
};

export default ProfileSection;
