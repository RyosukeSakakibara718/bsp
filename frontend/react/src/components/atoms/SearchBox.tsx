import React from 'react';

type SearchBoxProps = {
  searchValue: string;
  placeholder: string;
  setSearchValue: (value: string) => void;
  setShowData: () => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({ searchValue, setSearchValue, setShowData, placeholder }) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearch = () => {
    setShowData()
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="w-[400px] p-2.5 pr-12 bg-gray-100 rounded-lg outline-none"
      />
    </div>
  );
};

export default SearchBox;
