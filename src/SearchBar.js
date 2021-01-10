import React from "react";

const SearchBar = ({ onChange, placeholder }) => {
    return (
        <div className="search-container">
            <h2>Start searching you lorem ipsum todos...</h2>
            <input
                type="text"
                name="search"
                id="search"
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};
export default SearchBar;

// const SearchBar = ({onChange, placeholder}) => {
//     return (
//       <div className="Search">
//         <span className="SearchSpan">
//           <FaSearch />
//         </span>
//         <input
//           className="SearchInput"
//           type="text"
//           onChange={onChange}
//           placeholder={placeholder}
//         />
//       </div>
//     );
//   };
