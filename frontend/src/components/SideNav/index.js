import "./SideNav.css";
import { FaAngleDown } from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {fetchSpeciesList, setSpecies} from "../../store/species";
import {fetchSpeciesBooks} from "../../store/books";

const SideNav = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.species.list);
    const currentSpecies = useSelector(state => state.species.current);
    useEffect(() => {
        dispatch(fetchSpeciesList());
    }, []);

    const changeSpecies = (species) => {
        dispatch(setSpecies(species))
        dispatch(fetchSpeciesBooks(species.id))
    };
    
  return (
    <>
        <div className="sort-nav-container">
            <div className="sort-nav-title">
                <span>{currentSpecies.name} Books</span>
            </div>
            <div className="sort-menu">
                <span>A - Z</span>
                <FaAngleDown className="sort-arrow"/>
            </div>
        </div>
        <div className="side-nav-container">
            <div className="species-names" onClick={() => changeSpecies({id: 0, name: "All"})}>All</div>
            {list && list.map(species => <div className="species-names" onClick={() => changeSpecies(species)} >{species.name}</div>)}
        </div>
    </>
    )
};

export default SideNav;