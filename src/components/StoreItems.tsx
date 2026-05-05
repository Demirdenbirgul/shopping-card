import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  item: {
    id: number;
    name: string;
    price: number;
    imgUrl: string;
  };
};

const StoreItem = ({ item }: StoreItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(item.id);

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition flex flex-col h-[335px]">
      {/* Image */}
      <img
        src={item.imgUrl}
        alt={item.name}
        className="w-full h-40 object-contain mb-4"
      />

      {/* Name + Price */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p className="text-gray-700 font-medium">
          {formatCurrency(item.price)}
        </p>
      </div>

      {quantity === 0 ? (
        <button
          className="mt-auto bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          onClick={() => increaseCartQuantity(item.id)}
        >
          + Add to Cart
        </button>
      ) : (
        <>
          <div className="flex items-center justify-center gap-3 mb-4 mt-auto">
            <button
              className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded"
              onClick={() => decreaseCartQuantity(item.id)}
            >
              -
            </button>

            <span>{quantity} in cart</span>

            <button
              className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded"
              onClick={() => increaseCartQuantity(item.id)}
            >
              +
            </button>
          </div>

          <button
            className="bg-red-500 text-white py-2 rounded hover:bg-red-600"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </>
      )}
    </div>
  );
};

export default StoreItem;
