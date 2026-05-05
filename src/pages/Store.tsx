import storeItems from "../data/items.json";
import StoreItem from "../components/StoreItems";

export function Store() {
  return (
    <>
      <h1>Store Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
        {storeItems.map((item) => (
          <StoreItem key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}
