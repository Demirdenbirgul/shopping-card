import { useShoppingCart } from "../context/ShoppingCartContext";
import { IoClose } from "react-icons/io5";
import CartItem from "./CartItem";

export default function ShoppingCart() {
  const { isOpen, closeCart, cartItems } = useShoppingCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={closeCart}
          className="fixed inset-0 bg-black/50 z-40"
        ></div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <button
            onClick={closeCart}
            className="text-2xl text-gray-600 hover:text-red-500 transition"
          >
            <IoClose />
          </button>
        </div>

        {/* Cart Items */}
        <div className="p-4 flex flex-col gap-4 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">Cart is empty</p>
          ) : (
            cartItems.map((item) => <CartItem key={item.id} {...item} />)
          )}
        </div>
      </div>
    </>
  );
}
