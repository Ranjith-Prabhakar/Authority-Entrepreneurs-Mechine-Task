import HeaderDropDown from "./HeaderDropDown";

export default function () {
  return (
    <div>
      <HeaderDropDown />
    </div>
  );
}

// import { useState } from "react";
// import "./RatingFilter.css";

// const starLevels = [5, 4, 3, 2, 1];

// export default function () {
//   const [selectedRating, setSelectedRating] = useState(null);

//   const handleClick = (rating) => {
//     setSelectedRating(rating === selectedRating ? null : rating);
//   };

//   return (
//     <div className="rating-filter-container">
//       <div className="rating-header">
//         <span>Rating</span>
//         <span className="arrow">&#8963;</span>
//       </div>
//       <div className="rating-options">
//         {starLevels.map((stars) => (
//           <div
//             key={stars}
//             className={`rating-button ${
//               selectedRating === stars ? "selected" : ""
//             }`}
//             onClick={() => handleClick(stars)}
//           >
//             {[...Array(5)].map((_, i) => (
//               <span key={i} className={`star ${i < stars ? "filled" : ""}`}>
//                 ★
//               </span>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
