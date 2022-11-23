import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import {Paragrafo} from './styles'


function ProfilePage() {
  const { name } = useParams();

  return (
    <section>
      <Nav />
      <Paragrafo>
      <h1>Página acerca do usuário {name}</h1>
      </Paragrafo>
    </section>
  );
}

export default ProfilePage;
