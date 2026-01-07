import { useEffect, useState } from "react";

const Home = () => {
  const [items, setItems] = useState(["item1", "item2", "item3"]);
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Event delegation Handler:-
  const handleClick = (e) => {
    if (e.target.tagName === "LI") {
      alert(`cliked ${e.target.textContent}`);
    }
  };

  //add items dynamically:-

  const addItem = () => {
    setItems([...items, `item${items.length + 1}`]);
  };

  useEffect(() => {
    if (search.trim() === "") {
      setUsers([]);
      setLoading(false);
      return;
    }
    setLoading(true);
    const debounceTimer = setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users`)
        .then((res) => res.json())
        .then((data) => {
          // console.log("data:", data);
          const filteredData = data.filter((user) =>
            user.name.toLowerCase().includes(search.toLowerCase())
          );
          console.log("filter:-", filteredData);
          setUsers(filteredData);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }, 500);
    // cleanup → cancel previous call
    return () => clearTimeout(debounceTimer);
  }, [search]);

  return (
    <>
      <div className="w-50">
        <h3>1.List Items(Event delegation example):-</h3>
        <button className="btn btn-primary" onClick={addItem}>
          add Item
        </button>
        <p>click on list :- </p>
        <ul onClick={handleClick}>
          {items.map((data, index) => {
            return <li key={index}>{data}</li>;
          })}
        </ul>
        <h3>2.Search Example:-</h3>
        <input
          type="text"
          placeholder="Search here ...."
          className="p-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <br />
        {loading && (
          <div class="spinner-border m-5" role="status">
            <span class="sr-only"></span>
          </div>
        )}
        <ul>
          {users.map((user) => {
            return <li key={user.id}>{user.name}</li>;
          })}
        </ul>
      </div>
    </>
  );
};

export default Home;
