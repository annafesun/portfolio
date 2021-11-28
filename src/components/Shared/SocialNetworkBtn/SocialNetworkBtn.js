import React from 'react';
import styles from './SocialNetworkBtn.module.scss'

function SocialNetworkBtn(props) {
    let {className = " "} = props;

    return (
        <a  className={`${styles['social-network__btn']} ${className}`} href={props.href} target='_blank'>
             <span> {props.value}</span>
        </a>
    )
}

export default SocialNetworkBtn