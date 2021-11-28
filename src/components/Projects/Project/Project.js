import React from 'react';
import styles from './Project.module.scss';
import LinkBtn from "../../Shared/LinkBtn/LinkBtn";


function Project({projectLink, project, description, image}) {
    return (
        <div className={styles.project}>
            <div className={styles.project__inner}>
                <div className={styles.project__img}>
                    <img src={image} alt="#"/>
                </div>
                <div className={styles.project__description}>
                    <h3 className={styles.project__title}>{project}</h3>
                    <p>{description}</p>
                    <LinkBtn target={true} href={projectLink} value="View"/>
                </div>
            </div>
        </div>
    );
}

export default Project;
