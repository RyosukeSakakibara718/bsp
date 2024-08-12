import React, { useState } from 'react';
import { IoSearch } from "react-icons/io5";

type SearchBoxProps = {
  placeholder?: string;
};

const SearchBox: React.FC<SearchBoxProps> = ({ placeholder = "Search..." }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    alert(`検索クエリ: ${query}`);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center w-[400px] bg-gray-100 rounded-lg p-2.5 shadow-md">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        placeholder={placeholder}
        className="flex-grow border-none outline-none bg-transparent text-black text-base pl-2"
      />
      <button 
        onClick={handleSearch} 
        className="bg-transparent border-none cursor-pointer p-0"
      >
        <IoSearch className="w-5 h-5 text-black" />
      </button>
    </div>
  );
};

export default SearchBox;
