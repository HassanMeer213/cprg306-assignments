import Item from './item'; // Assuming 'item.js' is in the same directory
export default function ItemList({ items }) {
  if (!Array.isArray(items) || items.length === 0) {
    return <p className="text-gray-500 italic">No items added yet.</p>;
  }

  return (
    <ul className="bg-gray-100 p-4 rounded-lg shadow-md">
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
  );
}
