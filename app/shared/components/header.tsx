// components/Header.js
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-indigo-600">MyPortfolio</div>
        
        {/* Navigation */}
        <nav>
          <ul className="flex space-x-6">
            {['Profile', 'Resume', 'Portfolio', 'Message'].map((item) => (
              <li key={item}>
                <NavLink 
                  to={item === 'Profile' ? '/' : `/${item.toLowerCase()}`}
                  className={({isActive}) => 
                    `py-2 transition-colors hover:text-indigo-600 ${isActive ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-600'}`
                  }
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;