import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { AiOutlineMinus, AiOutlinePlus, AiOutlineClose } from "react-icons/ai";

type CartItemProps = {
  id: number;
  quantity: number;
};

export default function CartItem({ id, quantity }: CartItemProps) {
  const {
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const item = storeItems.find((i) => i.id === id);

  if (item == null) return null;

  return (
    <div className="flex items-center gap-4 border-b pb-4">

      {/* Image */}
      <img
        src={item.imgUrl}
        alt={item.name}
        className="w-14 h-14 object-contain"
      />

      {/* Info */}
      <div className="flex-1">

        {/* Top row */}
        <div className="flex justify-between items-center">
          <span className="font-medium">{item.name}</span>

          <span className="text-sm font-semibold">
            {formatCurrency(item.price * quantity)}
          </span>
        </div>

        {/* Bottom row */}
        <div className="flex items-center justify-between mt-2">

          {/* Quantity controls */}
          <div className="flex items-center gap-2">

            <button
              onClick={() => decreaseCartQuantity(id)}
              className="p-1 rounded bg-gray-100 hover:bg-gray-200"
            >
              <AiOutlineMinus />
            </button>

            <span className="text-sm font-medium w-6 text-center">
              {quantity}
            </span>

            <button
              onClick={() => increaseCartQuantity(id)}
              className="p-1 rounded bg-gray-100 hover:bg-gray-200"
            >
              <AiOutlinePlus />
            </button>

          </div>

          {/* Remove (clean icon style) */}
          <button
            onClick={() => removeFromCart(id)}
            className="text-gray-400 hover:text-red-500 transition"
          >
            <AiOutlineClose />
          </button>

        </div>
      </div>
    </div>
  );
}