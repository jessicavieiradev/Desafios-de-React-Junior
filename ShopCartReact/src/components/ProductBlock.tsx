import { useCartStore, type ProducType } from "../store/CartStore";
import Button from "./Button";

type ProductBlockProps = {
    product: ProducType;
};

const ProductBlock = ({product}: ProductBlockProps) => {
    
  const { addProductToCart } = useCartStore();
  return (
    <li className="border border-amber-500 rounded-md p-4 flex flex-col gap-4 items-center">
      <h3 className="font-semibold capitalize text-xl">{product.name}</h3>
      <p>$ {product.price}</p>
      <Button
        onClick={() => addProductToCart(product)}
      >
        adiconar ao carrinho
      </Button>
    </li>
  );
};

export default ProductBlock;
