import storeItems from "../data/items.json";

export function Store() {
  return (
    <>
      <h1>Store Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {storeItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={item.imgUrl}
              alt={item.name}
              className="w-full h-40 object-contain mb-4"
            />

            {/* Name */}
            <h2 className="text-lg font-semibold">{item.name}</h2>

            {/* Price */}
            <p className="text-gray-700">{item.price}₺</p>

            {/* Button */}
            <button className="mt-3 w-full bg-red-400 text-white py-2 rounded hover:bg-red-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
