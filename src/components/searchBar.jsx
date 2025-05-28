import { useRef, useEffect, useState } from "react";
import data from "./data";




const getFilteredItems = (query, docs) => {
    if(!query){
        return docs
    }
    return docs.filter(docs => docs.title.includes(query) + docs.theme.includes(query) + docs.description.includes(query)) 
}

export default function Search(){
    const [query, setQuery] = useState("");
    const [isHide, setIsHide] = useState(true)
    const inputRef = useRef(null);

    const {docs} = data

    const filteredItems = getFilteredItems(query, docs)

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                setIsHide(true);
            }
            else{
                setIsHide(false)
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
    }, []);


    
    return(
        <div className="searchbar" ref={inputRef}>
            <div className="containerInput">
                <input type="text" onChange={e => setQuery(e.target.value)}  placeholder="Recherche ..."/>
                <img className="iconsearch" src="\assets\search.svg" alt="" />
            </div>

            <ul className={isHide ? 'hide' : 'resultSearch'} >
            {filteredItems && filteredItems.length > 0 ? (
                filteredItems.map(value => (
                    <a href={value.link} className="linkDocs" key={value.link}>
                        <div className="contentwithimg">
                            <img className="page" src="\assets\page.svg" alt="" />
                            <div className="mainContent">
                                <h3 className="linksDocsTitle">{value.title}</h3>
                                <p>{value.description}</p>
                            </div>
                        </div>
                        <img className="arrow" src="\assets\arrow.svg" alt="" />
                    </a>
                ))
            ) : (
                <h3 className="noresult">Aucun résultat</h3>
            )}
            </ul>
        </div>
    )
} 