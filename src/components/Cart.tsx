interface Props {
  CartItem: string[];
}

const Cart = ({ CartItem }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {CartItem.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
