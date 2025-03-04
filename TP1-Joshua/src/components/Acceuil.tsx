import "../styling/Acceuil.css";
import { profiles } from "../data";
import ListProfile from "./ListProfile";

function Acceuil() {
  return (
    <>
      <main className="acceuil">
        <h1>Bienvenue chez MySpace</h1>
        <p>Voici les profils :</p>
        <div className="profiles">
          {Object.values(profiles).map((profile) => (
            <ListProfile key={profile.id} profile={profile} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Acceuil;
