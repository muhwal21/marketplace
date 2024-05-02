import { Container, Image, Label, Desc, Price, WrapDesc, ButtonAdd, WrapButton } from './styles'

const index = ({ image, label, desc, price, className, onClickAdd, buttonAdd }) => (
  <Container className={className}>
    <Image src={image} />

    <WrapDesc>
      <Label>{label}</Label>
      <Desc>{desc}</Desc>
      <Price>{`Rp. ${price}`}</Price>
    </WrapDesc>

    {buttonAdd && (
      <WrapButton>
        <ButtonAdd onClick={onClickAdd}>Tambah</ButtonAdd>
      </WrapButton>
    )}
  </Container>
);

export default index;