import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./assets/components/Home";
import RecipeDetails from "./assets/components/RecipeDetails";

function Layout() {
    return (
        <div>
            <h1>Recipe App</h1>
            <Outlet />
        </div>
    );
}

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="recipes/:id" element={<RecipeDetails />} />
            </Route>
        </Routes>
    );
}

export default App;