import React from 'react';
import styles from './MainAvatar.module.scss';
import avatar from '../../../assets/images/avatar.jpeg'

function MainAvatar() {
    return (
        <div className={styles.main__avatar}>
            <img src={avatar} alt="avatar"/>
            <span></span>
        </div>
    );
}

export default MainAvatar;
