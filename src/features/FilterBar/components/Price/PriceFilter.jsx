import { useState, useEffect, useRef } from "react";
import "./PriceFilter.css";

export default function PriceFilter() {
  const MIN_PRICE = 10000;
  const MAX_PRICE = 50000;

  const [min, setMin] = useState(29000);
  const [max, setMax] = useState(29000);
  const rangeRef = useRef(null);

  useEffect(() => {
    const percentMin = ((min - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;
    const percentMax = ((max - MIN_PRICE) / (MAX_PRICE - MIN_PRICE)) * 100;

    if (rangeRef.current) {
      rangeRef.current.style.background = `linear-gradient(
        to right,
        #ccc ${percentMin}%,
        #2196f3 ${percentMin}%,
        #2196f3 ${percentMax}%,
        #ccc ${percentMax}%
      )`;
    }
  }, [min, max]);

  return (
    <div className="price-filter-container">
      <div className="histogram-wrapper">
        <div className="histogram">
          {[45, 50, 60, 70, 90, 100, 80, 60, 50, 40].map((h, i) => (
            <div
              key={i}
              className="histogram-bar"
              style={{ height: `${h}px` }}
            />
          ))}
          <div className="histogram-cross" />
        </div>
      </div>

      <div className="range-slider">
        <div className="slider-track" ref={rangeRef}></div>
        <input
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          value={min}
          onChange={(e) => setMin(Math.min(Number(e.target.value), max - 1000))}
        />
        <input
          type="range"
          min={MIN_PRICE}
          max={MAX_PRICE}
          value={max}
          onChange={(e) => setMax(Math.max(Number(e.target.value), min + 1000))}
        />
      </div>

      <div className="price-values">
        <input readOnly value={`${min.toLocaleString()} INR`} />
        <input readOnly value={`${max.toLocaleString()} INR`} />
      </div>
    </div>
  );
}
