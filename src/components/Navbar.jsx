import { appleImg, bagImg, searchImg } from '../utils';

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <div className="flex-1 flex justify-start">
        <img src={appleImg} alt="Apple" width={14} height={18} />
      </div>
      <nav className="flex-1 flex justify-center">
        <ul className="flex space-x-10">
          <li className="nav-item">
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="/quiz" className="nav-link">
              Quiz
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex-1 flex justify-end gap-7">
        <img src={searchImg} alt="search" width={18} height={18} />
        <img src={bagImg} alt="bag" width={18} height={18} />
      </div>
    </header>
  )
}

export default Navbar