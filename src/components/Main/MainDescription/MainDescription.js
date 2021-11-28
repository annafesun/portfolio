import React from 'react';
import styles from './MainDescription.module.scss';

function MainDescription() {
    return (
        <div className={styles.main__description}>
            <p>Hi There</p>
            <h1>I am <span>Anna Fesun</span></h1>
            <p>A junior front-end developer</p>
        </div>
    );
}

export default MainDescription;
