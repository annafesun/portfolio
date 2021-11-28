import React from 'react';
import styles from './Skill.module.scss';


function Skill(props) {
    let {iconSrc = "#placeholder", skill, description} = props;
    return (
        <div className={styles.skill}>
            <div className={styles.skill__inner}>
               <div className={styles['skill__icon-wrapper']}>
                   <div className={styles.skill__icon}>
                       <img src={iconSrc} alt="#"/>
                   </div>
               </div>
                <div className={styles.skill__description}>
                    <h3 className={styles.skill__title}>{skill}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default Skill;
