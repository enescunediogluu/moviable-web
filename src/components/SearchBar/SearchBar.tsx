import { FC, memo, useState } from "react";
import styles from "./SearchBar.module.css"
import search_icon from "../../assets/images/search_icon.svg"

interface Props{
    className?: string;
}

export const SearchBar : FC<Props> = memo(function SearchBar(){

    const [activeSearch, setActiveSearch] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>("");

    const enableSearch = () => {
        setActiveSearch(true);
    }

    // search box should be empty to remove the focus 
    const disableSearch = () => {
        if(searchText == ""){
            setActiveSearch(false);
        }
    }

    const searchOperation = ()=>{
        console.log(searchText);
    }

    return (
        <div className={styles.search_bar}>
        
            <img src={search_icon} alt="" onClick={searchOperation}/>
            
            
            <input
                type="text" 
                className={activeSearch ? styles.enabled_input :styles.disabled_input} 
                placeholder="Search" 
                onFocus={enableSearch} 
                onBlur={disableSearch}
                onChange={(e)=>setSearchText(e.target.value)}
            />

        </div>
    );
})