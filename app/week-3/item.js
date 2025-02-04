export default function Item({ name, quantity, category }) {
  return (
    <li className="p-2 border-b border-gray-300 text-black">
      <span className="font-bold">{name}</span> - Quantity: {quantity}, Category: {category}
    </li>
  );
}
