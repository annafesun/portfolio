import React from 'react'
import styles from './HeaderMenu.module.scss'
import { Link } from 'react-scroll'

function HeaderMenu(props) {
  return (
      <ul className={`${styles.header__menu} ${props.isActive && styles.active}`}>
        <li>
          <Link
              to="main"
              containerId="containerElement"
          >
            <a href="#">Main
              <span className={styles.mask}><span>Main</span></span>
              <span className={styles.mask}><span>Main</span></span>
            </a>
          </Link>
        </li>
        <li>
          <Link
              to="skills"
              containerId="containerElement"
          >
            <a href="#">Skills
              <span className={styles.mask}><span>Skills</span></span>
              <span className={styles.mask}><span>Skills</span></span>
            </a>
          </Link>
        </li>
        <li>
          <Link
              to="works"
              containerId="containerElement"
          >
            <a href="#">Works
              <span className={styles.mask}><span>Works</span></span>
              <span className={styles.mask}><span>Works</span></span>
            </a>
          </Link>
        </li>
        <li>
          <Link
              to="socials"
              containerId="containerElement"
          >
            <a href="#">socials
              <span className={styles.mask}><span>Contacts</span></span>
              <span className={styles.mask}><span>Contacts</span></span>
            </a>
          </Link>
        </li>
      </ul>
  )
}

export default HeaderMenu