import React from 'react';
import styles from './LinkBtn.module.scss'

function LinkBtn(props) {
    let {className} = props;

    return (
        <a  className={`${styles['link-btn']} ${props.className && className}`}
            href={props.href}
            target={props.target && '_blank'}
        >
            {props.value}
        </a>
    )
}

export default LinkBtn