import { ShoppingCartIcon } from "lucide-react";
import { useCartStore } from "../store/CartStore";
import { useState } from "react";
import CartModal from "./CartModal";

const CartMiniIcon = () => {
  const { cart } = useCartStore();
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  function numberOfProductsInTheCart() {
    const sumQuantity = cart.reduce(
      (sum, item) => sum + (item.quantity || 0),
      0
    );
    if (sumQuantity < 99) {
      return sumQuantity;
    }
    return "99+";
  }

  const toggleCartOpen = () => {
    setCartOpen((prevCartOpen) => !prevCartOpen);
  };

  return (
    <div className="p-2 relative">
      <div onClick={toggleCartOpen}>
        <ShoppingCartIcon />
      </div>

      <span className="absolute -top-1 left-5 h-5 min-w-5 p-1 rounded-md flex items-center justify-center bg-amber-500">
        {numberOfProductsInTheCart()}
      </span>
      {cartOpen ? <CartModal /> : ""}
    </div>
  );
};

export default CartMiniIcon;
