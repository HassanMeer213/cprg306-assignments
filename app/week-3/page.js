import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-8 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping List</h1>
      <ItemList />
    </main>
  );
}
