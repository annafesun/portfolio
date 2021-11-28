import React from 'react'
import styles from './Skills.module.scss'
import Title from '../Shared/Title/Title'
import Skill from './Skill/Skill'
import react from '../../assets/images/ico-react.png'
import html from '../../assets/images/ico-html.png'
import css from '../../assets/images/ico-css.png'
import js from '../../assets/images/ico-js.png'
import git from '../../assets/images/ico-git.png'
import antd from '../../assets/images/ico-antd.svg'
import bootstrap from '../../assets/images/ico-bootstrap.png'
import {Element} from "react-scroll";

function Skills() {
    return (
        <Element name="skills">
            <div className={styles.skills}>
                <div className="container">
                    <div className="skills__inner">
                        <Title title="Skills"/>
                        <div className={styles.skills__list}>
                            <Skill
                                iconSrc={react}
                                skill="React JS"
                                description="React, react hooks, Redux, CSS modules,
							redux-thunk, redux-form, TypeScript"
                            />
                            <Skill
                                iconSrc={js}
                                skill="JS"
                                description="ES6+"
                            />
                            <Skill
                                iconSrc={git}
                                skill="Git"
                                description="add, push, commit"
                            />
                            <Skill
                                iconSrc={html}
                                skill="HTML5"
                                description="Semantic layout, BEM methodology, W3C valid code, pixel perfect markup"
                            />
                            <Skill
                                iconSrc={css}
                                skill="CSS3"
                                description="Sass\Scss, custom animations, responsive\mobile-first layout"
                            />
                            <Skill
                                iconSrc={bootstrap}
                                skill="Bootstrap"
                                description="Bootstrap 5"
                            />
                            <Skill
                                iconSrc={antd}
                                skill="Ant-design"
                                description="Basic usage"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Element>
    )
}

export default Skills
