import { FC, memo, useState } from 'react';
import { NavButton } from '../common/NavButton';
import { NavButton as NavButtonProps } from '../../interfaces';

interface Props {
  className?: string;
}

//Buttons stored as a list and created with a map function.
const navButtons: NavButtonProps[] = [
  {
    buttonName: 'Search',
    icon: '/src/assets/search_icon.svg',
    route: '/search',
  },
  {
    buttonName: 'My Lists',
    icon: '/src/assets/list_icon.svg',
    route: '/lists',
  },
  {
    buttonName: 'Profile',
    icon: '/src/assets/person_icon.svg',
    route: '/profile',
  },
];

export const Navbar: FC<Props> = memo(function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="flex flex-row overflow-hidden w-full h-20 py-2 px-10 justify-between items-center">
          {/* Logo section */}
          <div className="flex flex-row gap-2 items-center justify-center">
            <img src="/src/assets/moviable_icon.svg" alt="" />
            <h1 className="font-light text-4xl text-white-1">moviable</h1>
          </div>

          <div onClick={toggleMenu}>
            <img
              src="/src/assets/menu_icon.svg"
              alt="Menu Icon"
              className="cursor-pointer sm:hidden"
            />
          </div>

          {/* Desktop navigation */}
          <ul className="hidden sm:flex flex-row gap-2">
            {navButtons.map(({ buttonName, icon, route }) => (
              <NavButton
                key={route}
                buttonName={buttonName}
                icon={icon}
                route={route}
              />
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-20 left-0 right-0 bottom-0 bg-black-2 bg-opacity-25 z-40 transition-transform duration-300 ease-in-out transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } sm:hidden`}
      >
        <ul className="flex flex-col items-center justify-center">
          {navButtons.map(({ buttonName, icon, route }) => (
            <li key={route} className="my-4">
              <NavButton buttonName={buttonName} icon={icon} route={route} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
});
