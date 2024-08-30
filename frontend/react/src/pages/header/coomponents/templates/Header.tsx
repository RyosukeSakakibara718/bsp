import React from "react";
import { Link } from "react-router-dom";

import logo from "./onepiece20_santaisyou.png";

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-4 shadow-lg rounded-lg overflow-hidden">
      <div className="flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-8 w-8" />
        <nav className="space-x-4">
          <Link to="/home" className="hover:text-gray-300">
            ホーム
          </Link>
          <Link to="/projectManagement" className="hover:text-gray-300">
            案件管理
          </Link>
          <Link to="/memberManagement" className="hover:text-gray-300">
            メンバー管理
          </Link>
          <Link to="/logout" className="hover:text-gray-300">
            ログアウト
          </Link>
        </nav>
      </div>
      <div>榊原 涼介</div>
    </header>
  );
};

export default Header;
