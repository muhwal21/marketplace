import Topbar from '../../components/topbar'
import useProductStore from '../../stores/product-store';

import { CardStyled, Container, TextEmpty } from './styles'

const index = () => {
  const cart = useProductStore(state => state.cart)

  return (
    <>
      <Topbar title="Cart" back />

      <Container>
        {cart.length === 0 ? <TextEmpty>Tidak ada product</TextEmpty> : cart.map((item, index) => (
          <CardStyled
            key={String(index)}
            {...item}
          />
        ))}
      </Container>
    </>
  )
};

export default index;