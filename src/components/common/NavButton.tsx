import { FC, memo } from 'react';

interface Props {
  buttonName: string;
  icon: string;
  route?: string;
}

export const NavButton: FC<Props> = memo(function NavButton({
  buttonName,
  icon,
  route,
}) {
  return (
    <li>
      <a
        href={route}
        className="flex flex-row items-center justify-center px-4 py-2 gap-2 bg-blue-1 hover:bg-blue-4 transition ease-in-out delay-100 rounded-xl"
      >
        <img src={icon} alt="" />
        <h3 className="text-sm text-white-1">{buttonName}</h3>
      </a>
    </li>
  );
});
