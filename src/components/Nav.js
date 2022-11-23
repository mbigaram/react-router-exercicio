import {goToHomePage, goToProfilePage, goToProductPage} from "../Router/coordinator"
import { useNavigate } from "react-router-dom"
import { Button, NavContainer } from './styles'



function Nav() {

    const navigate = useNavigate()
  
    return (
      <NavContainer>
        <Button onClick={()=>goToHomePage(navigate)}>
          Inicio
        </Button>
        <Button onClick={()=>goToProfilePage(navigate, 'Marcelo')}>
          Perfil
        </Button>   
        <Button onClick={()=>goToProductPage(navigate, '22022703')}>
          Produtos
        </Button>   
      </NavContainer>
    );
  }
  
  export default Nav;