import { useState } from "react";
import "./PriceFilter.css";

export default function PriceFilter() {
  const [min, setMin] = useState(29000);
  const [max, setMax] = useState(29000);

  return (
    <div className="price-filter">
      <div className="price-header">
        <span>Price</span>
        <span className="toggle-icon">⌃</span>
      </div>

      <div className="histogram">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="bar"
            style={{ height: `${Math.random() * 50 + 20}px` }}
          />
        ))}
        <div className="cross-line" />
      </div>

      <div className="range-slider">
        <input
          type="range"
          min="10000"
          max="50000"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          type="range"
          min="10000"
          max="50000"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>

      <div className="price-values">
        <input readOnly value={`${parseInt(min).toLocaleString()} INR`} />
        <input readOnly value={`${parseInt(max).toLocaleString()} INR`} />
      </div>
    </div>
  );
}
