import React from 'react';
import styles from './Header.module.scss';
import HeaderMenu from "./HeaderMenu/HeaderMenu";


function Header(props) {
    const toggleAMenu = (e) => {
        const html = document.querySelector('html')
        props.isActive ? props.toggleMenu(false) : props.toggleMenu(true)
        props.isActive ? html.classList.remove('menu-opened') :  html.classList.add('menu-opened');
    }
    return (
        <div className={styles.header}>
            <div className="container">
                <div className={styles.header__inner}>
                    <HeaderMenu isActive={props.isActive}/>
                    <div className={`${styles['hamburger-btn__wrapper']}`}>
                        <div className={`${styles['hamburger-btn']}  ${props.isActive && styles.active}`}
                             onClick={toggleAMenu}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
