import { useCartStore, type ProducType } from "../store/CartStore";
import Button from "./Button";

type ListProps = {
  product: ProducType;
};

const CartList = ({product}: ListProps) => {
  const { addQuantityToCart, removeQuantityToCart, removeFromCart } =
    useCartStore();
  return (
    <li>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="col-1 font-semibold capitalize">{product.name}</h3>
            <p className="text-xl">${product.price}</p>
          </div>

          <p>Quantity: {product.quantity}</p>
        </div>
        <div className="grid grid-cols-2 gap-2 justify-center">
          <Button onClick={() => addQuantityToCart(product.id)}>+</Button>
          <Button onClick={() => removeQuantityToCart(product.id)}>-</Button>
        </div>

        <Button onClick={() => removeFromCart(product.id)}>Remover</Button>
      </div>
    </li>
  );
};

export default CartList;
