import "../styling/ListProfile.css";
import { Link } from "react-router";

interface Profile {
  id: string;
  profileImg: string;
}

interface ListProfileProps {
  profile: Profile;
}

const ListProfile = ({ profile }: ListProfileProps) => {
  return (
    <Link to={`/profile/${profile.id}`}>
      <div className="profile-card">
        <img className="imageList" src={profile.profileImg} alt="Profile" />
        <p>{profile.id}</p>
      </div>
    </Link>
  );
};

export default ListProfile;
