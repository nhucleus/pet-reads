import "./SideNav.css";
import { FaAngleDown } from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchSpeciesList, setSpecies} from "../../store/species";
import {fetchSpeciesBooks, changeSortOrder} from "../../store/books";

const SideNav = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.species.list);
    const currentSpecies = useSelector(state => state.species.current);
    const order = useSelector(state => state.books.order);
    useEffect(() => {
        dispatch(fetchSpeciesList());
    }, []);

    const changeSpecies = (species) => {
        dispatch(setSpecies(species));
    };

    const [menuOpen, setMenuOpen] = useState(false);
    
    return (
        <>
            <div className="sort-nav-container">
                <div className="sort-nav-title">
                    <span>{currentSpecies.name} Books</span>
                </div>
                <div className={menuOpen ? "sort-menu open" : "sort-menu"} onClick={() => setMenuOpen(true)}>
                    {order === 1 && <span>A - Z</span>}
                    {order === 2 && <span>Z - A</span>}
                    <FaAngleDown className="sort-arrow" />
                </div>
                <div className={menuOpen ? "sort-menu-content" : "sort-menu-content closed"}>
                    <div className="sort-menu-option" onClick={() => {
                        dispatch(changeSortOrder(1));
                        setMenuOpen(false);
                        }}>A - Z</div>
                    <div className="sort-menu-option" onClick={() => {
                        dispatch(changeSortOrder(2));
                        setMenuOpen(false);
                        }}>Z - A</div>
                </div>
                <div className={menuOpen ? "sort-menu-overlay" : "sort-menu-overlay closed"} onClick={() => setMenuOpen(false)}></div>
            </div>
            <div className="side-nav-container">
                <div className="species-title"><span>Species</span></div>
                <div className="species-names" onClick={() => changeSpecies({ id: 0, name: "All" })}>All</div>
                {list && list.map(species => <div className="species-names" onClick={() => changeSpecies(species)} >{species.name}</div>)}
            </div>

        </>
    )
};

export default SideNav;