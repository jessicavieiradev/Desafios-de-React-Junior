import { useCartStore } from "../store/CartStore";
import CartList from "./CartList";

const CartModal = () => {
    const { cart } = useCartStore();
    
    const sumProductsPrices = () => {
        return cart.reduce((sum, item) => sum + ((item.price || 0) * (item.quantity || 0)), 0)
    }

  return (
    <div className="drop-shadow-2xl bg-amber-50 absolute top-12 right-0 min-w-[300px] max-h-[500px] border-2 border-amber-500 rounded-md 
        flex flex-col">
      <div className="p-4 grow overflow-y-scroll">
        {cart.length != 0 ? (
          <ul className="flex flex-col gap-8">
            {cart.map((product) => {
              return <CartList key={product.id} product={product} />;
            })}
          </ul>
        ) : (
          <p>Carrinho Vazio</p>
        )}
      </div>
      <div className="p-4 sticky flex  justify-evenly items-center">
              <h3 className=" text-lg uppercase font-semibold">total:</h3>
              <p className="text-lg">${sumProductsPrices()}</p>
      </div>
    </div>
  );
};

export default CartModal;
