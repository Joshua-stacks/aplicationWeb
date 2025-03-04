import { useParams } from "react-router";
import { profiles, post } from "../data";
import "../styling/Profile.css";
import ProfileSection from "./ProfileSection";
import CardList from "./CardList";

const Profile = () => {
  const { id } = useParams();
  const profile = profiles[id];
  const postProf = Object.values(post).filter((item) => item.profile === id);

  return (
    <div className="profile">
      <ProfileSection profile={profile} postCount={postProf.length} />
      <CardList posts={postProf} />
    </div>
  );
};

export default Profile;
