import Topbar from '../../components/topbar'
import Card from '../../components/card'
import { Container } from './styles'
import useProductStore from '../../stores/product-store';

const index = () => {
  const listProduct = useProductStore(state => state.products)
  const addToCart = useProductStore(state => state.addToCart)

  const handleAdd = (item) => {
    addToCart(item)
    alert('Berhasil ditambahkan!')
  }

  return (
    <>
      <Topbar title="Toko Online" />
      
      <Container>
        {listProduct.map ((item, index) => (
          <Card
            key={String(index)}
            buttonAdd
            {...item}
            onClickAdd={() => handleAdd(item)}
          />
        ))}
      </Container>
    </>
  )
};

export default index;