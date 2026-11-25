import { useState } from "react";
// Sample items for the search example.
const items = ["Apple", "Banana", "Orange", "Mango"];

function Update() {
  const [query, setQuery] = useState("");

  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
  const change = (e) => setQuery(e.target.value);

  return (
    <>
      <main className="flex-1 py-6 px-4">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold">Update / PUT API endpoint</h2>
          <p className="mt-2 text-sm text-base-content/60">
            Update PUT
          </p>
          <div>
            <input
              type="text"
              value={query}
              onChange={change}
              placeholder="Search..."
            />
            <ul>
              {filtered.map((element) => (
                <li key={element}>{element}</li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

export default Update;
