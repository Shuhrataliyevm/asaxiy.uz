import React, { useState } from "react";
import "@/styles/main.scss";

function Filter({ onFilterChange }) {
  const [filters, setFilters] = useState({
    name: "all",
    price: "all",
    rating: "all",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters); // Parent componentga filterni jo'natish
  };

  const clearFilters = () => {
    const resetFilters = { name: "all", price: "all", rating: "all" };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="filter">
      <div className="filter-content">
        <div className="filter-item">
          <p>По названию</p>
          <select name="name" value={filters.name} onChange={handleChange}>
            <option value="all">Все</option>
            <option value="a-z">От A до Z</option>
            <option value="z-a">От Z до A</option>
          </select>
        </div>
        <div className="filter-item">
          <p>По цене</p>
          <select name="price" value={filters.price} onChange={handleChange}>
            <option value="all">Все</option>
            <option value="low-high">Самый дешевый</option>
            <option value="high-low">Самый дорогой</option>
          </select>
        </div>
        <div className="filter-item">
          <p>По рейтингу</p>
          <select name="rating" value={filters.rating} onChange={handleChange}>
            <option value="all">Все</option>
            <option value="asc">По возрастанию</option>
            <option value="desc">По убыванию</option>
          </select>
        </div>
      </div>
      <button type="button" onClick={clearFilters}>
        <img src="./assets/icons/brush.svg" alt="Clear" />
        <span className="clear">Очистить</span>
      </button>
    </div>
  );
}

export default Filter;
