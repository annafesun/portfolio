import React from 'react';
import styles from './Footer.module.scss';
import Title from "../Shared/Title/Title";
import SocialNetworkBtn from "../Shared/SocialNetworkBtn/SocialNetworkBtn";
import {Element} from "react-scroll";

function Footer() {
    return (
            <div className={styles.footer}>
                <div className="container">
                    <div className={styles.footer__inner}>
                        <Title title="Anna Fesun"/>
                       <Element name="socials">
                           <div className={styles['footer__social-networks']}>
                               <SocialNetworkBtn className={styles['footer__btn']} href="https://www.linkedin.com/in/anna-fesun-a27580221/" value="Linkedin"/>
                           </div>
                       </Element>
                        <p className={styles.footer__copyright}>
                            &#169; 2021 Ukraine, Lviv city, All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
    );
}

export default Footer;
