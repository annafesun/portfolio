import React from 'react';
import styles from './Main.module.scss';
import MainDescription from "./MainDescription/MainDescription";
import MainAvatar from "./MainAvatar/MainAvatar";


function Main() {
    return (
        <div className={styles.main} id="main">
            <div className="container">
                <div className={styles.main__inner}>
                    <div className={styles.main__box}>
                        <MainDescription/>
                    </div>
                    <div className={styles.main__box}>
                        <MainAvatar/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;
