import React from 'react';
import styles from './Title.module.scss'


function Title(props) {
    let {className = " "} = props;
    return (
        <h2 className={`${styles.title} ${className}`}>{props.title}</h2>
    );
}

export default Title;
