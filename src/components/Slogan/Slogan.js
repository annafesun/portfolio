import React from 'react';
import styles from './Slogan.module.scss';
import Title from "../Shared/Title/Title";

function Slogan(props) {
    return (
        <div className={styles.slogan}>
            <div className="container">
                <div className={styles.slogan__inner}>
                    <Title title="Looking offer to job"/>
                </div>
            </div>
        </div>
    );
}

export default Slogan;
