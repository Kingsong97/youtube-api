import React from 'react'
import { ImYoutube2 } from "react-icons/im";
import { headerMenu } from "../../data/header";
import { searchKeyword } from "../../data/header";
import { snsLink } from "../../data/header";
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header id='header' role='banner'>
            <h1 className='header__logo'>
                <a href="/">
                    <em><ImYoutube2 /></em>
                    <span>GYM<br /><i>youtube</i></span>
                </a>
            </h1>
            <nav className='header__menu'>
                <ul className='menu'>
                    {headerMenu.map((menu, key) => (
                        <li key={key}>
                            <Link to={menu.src}>
                                {menu.icon}<span>{menu.title}</span>
                            </Link>
                        </li>
                    ))}
                    {/* <li><a href="/today"><span>가슴</span></a></li> */}
                </ul>
                <ul className='keyword'>
                    {searchKeyword.map((word, key) => (
                        <li key={key}>
                            <Link to={word.src}>
                                {word.title}
                            </Link>
                        </li>
                    ))}
                    {/* <li><a href="/search/KingSong">KingSong</a></li> */}
                </ul>
            </nav>
            <div className='header__sns'>
                <ul>
                    {snsLink.map((sns, key) => (
                        <li key={key}>
                            <a href={sns.url} target='_blankl' rel='noopener noreferrer' aria-label='{sns.title}'>
                                <span>{sns.icon}</span>
                            </a>
                        </li>
                    ))}
                    {/* <li><a href="/">aa</a></li> */}
                </ul>
            </div>
        </header>
    )
}

export default Header