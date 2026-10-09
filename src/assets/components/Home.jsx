
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const searchRef = useRef(null);

    useEffect(() => {
        searchRef.current.focus();

        fetch("https://dummyjson.com/recipes")
            .then((response) => response.json())
            .then((data) => {
                setRecipes(data.recipes.slice(0, 3));
            })
            .catch((error) => console.log(error));
    }, []);

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <h2>Home Page</h2>
            <input ref={searchRef} type="text" placeholder="Search recipes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <h5>Recipe List</h5>

            {filteredRecipes.map((item) => (
                <p key={item.id}>
                    <Link to={`/recipes/${item.id}`}>
                        {item.name}
                    </Link>
                </p>
            ))}
        </div>
    );
}
export default Home;