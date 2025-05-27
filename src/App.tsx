// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Inventory } from "./pages/Inventory";
import { ShoppingList } from "./pages/ShoppingList";
import { Recipes } from "./pages/Recipes";
import { RecipeDetail } from "./pages/RecipeDetail";
import { Gamification } from "./pages/Gamification";
import { Coaching } from "./pages/Coaching";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <Router>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Restgold App</h1>
        <Routes>
          <Route path="/" element={<Recipes />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/gamification" element={<Gamification />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
