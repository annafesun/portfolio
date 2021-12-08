import React from 'react';
import styles from './Projects.module.scss';
import Title from "../Shared/Title/Title";
import Project from "./Project/Project";
import counter from '../../assets/images/projects/counter.png'
import polind from '../../assets/images/projects/polind.png'
import Button from "../Shared/Button/Button";
import {Element} from "react-scroll";


class Projects extends React.Component {
    state = {
        projects: [
            {
                projectLink: 'https://annafesun.github.io/social-network/',
                image: '',
                project: 'Social network',
                description: 'Technologies used: React, Redux, React-redux, Redux-thunk, Redux-form, Axios,' +
                    ' reselect, Typescript, SCSS, REST API',
                id: 1,
                filterValue: 'react',
            },
            {
                projectLink: 'https://annafesun.github.io/counter/',
                image: counter,
                project: 'Counter',
                description: 'React application',
                id: 7,
                filterValue: 'react',
            },
            {
                projectLink: 'https://annafesun.github.io/Polind/',
                image: polind,
                project: 'Polind',
                description: 'Technologies used: HTML5, SCSS, JS',
                id: 10,
                filterValue: 'landing',
            },
        ],
        filter: 'all',
    }
    onFilterClick = (filter) => {
        this.setState({...this.state, filter})
    }

    render() {

        return (
            <Element name="works">
                <div className={styles.projects}>
                    <div className="container">
                        <div className={styles.projects__inner}>
                            <Title title="My works"/>
                            <div className={styles.buttons}>
                                <Button onClick={() => this.onFilterClick('all')}
                                        value={'All'}
                                        active={this.state.filter === "all"}/>
                                <Button onClick={() => this.onFilterClick('react')}
                                        value={'React projects'}
                                        active={this.state.filter === "react"}/>
                                <Button onClick={() => this.onFilterClick('landing')}
                                        value={'Landing page'}
                                        active={this.state.filter === "landing"}/>
                            </div>
                            <div className={styles.projects__list}>
                                {this.state.projects.filter(project => {
                                    switch (this.state.filter) {
                                        case 'all': {
                                            return true
                                        }
                                        case 'react': {
                                            return project.filterValue === 'react'
                                        }
                                        case 'landing': {
                                            return project.filterValue === 'landing'
                                        }
                                        default: {
                                            return true
                                        }
                                    }
                                })
                                    .map(project => <Project key={project.id} {...project} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        );
    }
}

export default Projects;
