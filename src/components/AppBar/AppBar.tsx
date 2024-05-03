import { FC, memo } from "react";
import styles from "./AppBar.module.css"
import movie_icon from "../../assets/images/movie_icon.svg"
import list_icon from "../../assets/images/list_icon.svg"
import person_icon from "../../assets/images/person_icon.svg"
import { SearchBar } from "../SearchBar/SearchBar";
import { NavbarButton } from "../NavbarButton/NavbarButton";



interface Props{
    className?: string;
}

export const AppBar: FC<Props> = memo(function AppBar(){
    return (
        <div className={styles.appbar}>
            <div  className={styles.appbar_container}>
                <div className={styles.appbar_title}>
                    <img src={movie_icon} alt="" />
                    <h3>moviable</h3> 
                </div>
                <div className={styles.features}>
                    <SearchBar/>
                    <NavbarButton title="Lists" icon_path={list_icon} />
                    <NavbarButton title="Sign In" icon_path={person_icon} />
                </div>
            </div>
        </div>
    );
})