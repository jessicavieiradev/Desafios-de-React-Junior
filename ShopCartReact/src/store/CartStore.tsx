import { create } from "zustand";

export type ProducType = {
  id: number;
  name: string;
  price: number;
  quantity?: number;
};

type CartState = {
  cart: ProducType[];
  isCartOpen: boolean;
  setIsCartOpen: (status: boolean) => void;
  addProductToCart: (product: ProducType) => void;
  addQuantityToCart: (id: number) => void;
  removeQuantityToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
};

export const PRODUCTS_DATA:ProducType[]= [
    {
      id: 1,
      name: "margerita pizza",
      price: 40,
    },
    {
      id: 2,
      name: "Roast chicken",
      price: 30,
    },
    {
      id: 3,
      name: "Fish and chips",
      price: 25,
      },
    {
      id: 4,
      name: "Hamburguer",
      price: 5,
    },
  ];

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  isCartOpen: false,
  setIsCartOpen: (status) => set({ isCartOpen: status }),

  addProductToCart: (product) =>
    set((state) => {
      const hasInTheCart = state.cart.find((item) => item.id === product.id);
      if (hasInTheCart) {
        const updatedCart = state.cart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: (item.quantity ?? 0) + 1,
            };
          }
          return item;
        });
        return { cart: updatedCart };
      } else {
        const newItem = { ...product, quantity: 1 };
        return { cart: [...state.cart, newItem] };
      }
    }),

  addQuantityToCart: (id) =>
    set((state) => {
      const cartIncremented = state.cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: (item.quantity ?? 0) + 1 };
        } else {
          return item;
        }
      });
      return { cart: cartIncremented };
    }),

  removeQuantityToCart: (id:number) =>
    set((state) => {
      const cartDecremented = state.cart.map((item) => {
        if (item.id === id ) {
          return { ...item, quantity: (item.quantity ?? 0) - 1 };
        }
        return item;
      });
      const cartFinal = cartDecremented.filter(
        (item) => (item.quantity ?? 0) > 0
      );
      return { cart: cartFinal };
    }),

  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
}));
