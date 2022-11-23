import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import { ProductContainer, Paragrafo } from './styles'



function ProductPage() {
  const { id } = useParams();

  return (
    <section>
      <Nav />
      <Paragrafo>
      <h1>Página de Produtos {id}</h1>
      </Paragrafo>
      <ProductContainer>
      <img src="https://picsum.photos/200/300?random=1"/>
      <img src="https://picsum.photos/200/300?random=2"/>
      <img src="https://picsum.photos/200/300?random=3"/>
      <img src="https://picsum.photos/200/300?random=4"/>
      <img src="https://picsum.photos/200/300?random=5"/>
      <img src="https://picsum.photos/200/300?random=6"/>
      </ProductContainer>
    </section>
  );
}

export default ProductPage;