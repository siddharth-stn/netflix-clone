import Netflix_Icon from "../assets/images/netflix.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  return (
    <div className="navbar fixed z-50 w-full top-0 left-0 flex items-center text-white px-15 py-4.5 bg-linear-to-b from-black/60 via-black/40 to-transparent">
      <div className="logo w-22">
        <img src={Netflix_Icon} alt="Logo" />
      </div>
      <nav className="navigation-wrapper ml-10">
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Shows</li>
          <li>Movies</li>
          <li>Games</li>
          <li>New & Popular</li>
          <li>MyList</li>
          <li>Browse by Languages</li>
        </ul>
      </nav>
      <div className="menu-btns flex items-center ml-auto gap-3">
        <div className="search">
          <a href="#">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </a>
        </div>
        <div>
          <span>Children</span>
        </div>
        <div className="bell-icon">
          <a href="#">
            <FontAwesomeIcon icon={faBell} />
          </a>
        </div>
        <div className="profile-btn flex items-center">
          <div>
            <a href="#">
              <div className="bg-yellow-400 rounded-md w-8 h-8 cursor-pointer relative">
                <div className="left-eye bg-white rounded-[50%] w-1 h-1 absolute top-2 left-1.5"></div>
                <div className="right-eye bg-white rounded-[50%] w-1 h-1 absolute top-2 right-1.5"></div>
                <div className="absolute bottom-2.5 right-0.5 w-4 h-2 border-b-2 border-white rounded-b-xl bg-transparent"></div>
              </div>
            </a>
          </div>
          <div>
            <a href="#">
              <FontAwesomeIcon icon={faCaretDown} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
