import { useNavigate } from 'react-router-dom'

import { Container, Title, ButtonCart } from './styles'
import cartIcon from '../../assets/icons/cart.svg'
import backIcon from '../../assets/icons/back.svg'

const index = ({ title, back }) => {
  const navigate = useNavigate()

  return (
    <Container back={back}>
      {back && (
        <ButtonCart style={{ marginRight: '16px' }} onClick={() => navigate(-1)}>
          <img src={backIcon} />
        </ButtonCart>
      )}

      <Title>{title}</Title>
  
      {!back && (
        <ButtonCart onClick={() => navigate('/cart')}>
          <img src={cartIcon} />
        </ButtonCart>
      )}
    </Container>
  )
};

export default index;