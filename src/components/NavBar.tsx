interface Props {
  CartItemsCount: number;
}

const NavBar = ({ CartItemsCount }: Props) => {
  return <div>NavBar: {CartItemsCount}</div>;
};

export default NavBar;
