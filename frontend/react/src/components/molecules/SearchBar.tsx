import React from 'react';
import SearchBox from '../atoms/SearchBox';
import { IoSearch } from "react-icons/io5";
import { FaTrashAlt } from "react-icons/fa";

type SearchBarProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
	clearSearchValue: () => void;
  setShowData: () => void;
};

/**
 * SearchBarコンポーネント
 * ユーザーが検索ワードを入力し、検索やクリアアクションを行うためのコンポーネントです。
 * 
 * @param {SearchBarProps} props - 検索バーコンポーネントのプロパティ
 * @param {string} props.searchValue - 現在の検索ワード
 * @param {(value: string) => void} props.setSearchValue - 検索ワードを更新する関数
 * @param {() => void} props.clearSearchValue - 検索ワードをクリアする関数
 * @param {() => void} props.setShowData - 検索ボタンがクリックされたときにデータを表示するための関数
 * @returns {JSX.Element} 検索ボックスと検索・クリアボタンを含む検索バーコンポーネントを返します。
 */

const SearchBar: React.FC<SearchBarProps> = ({ searchValue, setSearchValue, clearSearchValue, setShowData }) => {

  return (
    <div className="flex items-center w-[400px] bg-gray-100 rounded-lg shadow-md relative">
      <SearchBox 
        searchValue={searchValue} 
        setSearchValue={setSearchValue} 
        setShowData={setShowData} 
        placeholder="検索ワードを入力してください..." 
      />
      <div className="absolute right-2 flex items-center gap-[10px]">
        <button 
					onClick={setShowData}
          className="bg-transparent border-none cursor-pointer p-0"
        >
          <IoSearch className="w-5 h-5 text-black" />
        </button>
        <button 
          onClick={clearSearchValue}
          className="bg-transparent border-none cursor-pointer p-0"
        >
          <FaTrashAlt className="w-5 h-5 text-black" />
        </button>
      </div>
    </div>
  );
};




export default SearchBar;
