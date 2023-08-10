import React from "react";
import Style from './Pagination.module.css'

const Pagination = ({productsPerPage, allProducts, pagination}) => {
    const pagesNumber = [];
    for(let i = 1; i <= Math.ceil(allProducts/productsPerPage); i++){
        pagesNumber.push(i);
    }

    return (
        <nav className={Style.nav}>
            <ul className={Style.list}>
                {
                    pagesNumber?.map(n => (
                        <li className={Style.items} key={n} >
                            <a className={Style.a} onClick={() => pagination(n)}> {n} </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Pagination;