import { FC, memo } from "react";
import styles from "./HomePage.module.css"
import { AppBar } from "../../components/AppBar/AppBar";

interface Props{
    className?: string;
}

export const HomePage: FC<Props> = memo(function HomePage(){
    return (
        <div className={styles.home_page}>
            <AppBar/>
        </div>
    );
})