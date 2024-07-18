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

  const ToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex flex-row overflow-hidden w-full h-20 py-2 px-10 justify-between items-center">
        {/* Logo section */}
        <div className="flex flex-row gap-2 items-center justify-center">
          <img src="/src/assets/moviable_icon.svg" alt="" />
          <h1 className="font-light text-4xl text-white-1">moviable</h1>
        </div>

        <div onClick={ToggleMenu}>
          <img
            src="/src/assets/menu_icon.svg"
            alt="Menu Icon"
            className="cursor-pointer"
          />
        </div>

        {/* Developing menu */}
        <ul
          className={`w-full h-full ${menuOpen ? 'flex' : 'hidden'} flex-col bg-black-1 `}
        >
          {navButtons.map(({ buttonName, icon, route }) => (
            <NavButton
              key={route}
              buttonName={buttonName}
              icon={icon}
              route={route}
            />
          ))}
        </ul>

        {/* buttons section */}
        <ul className="hidden sm:flex flex-row gap-2 ">
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
    </>
  );
});
