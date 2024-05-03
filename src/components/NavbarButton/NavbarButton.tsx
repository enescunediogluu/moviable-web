import { FC, memo } from "react";
import styles from "./NavbarButton.module.css"

interface Props{
    className?: string,
    icon_path: string,
    title: string
    onClick?: () => void
}

export const NavbarButton : FC<Props> = memo(function NavbarButton({icon_path, title}){
    return (
        <div className={styles.navbar_button} >
            <img src={icon_path} alt="" />
            <p>{title}</p>
        </div>
    );
})