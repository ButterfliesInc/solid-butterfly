import React from 'react';
import styles from './Header.module.css';

const NavBar = (props) => {

  return (
    <nav className={styles.mainNav}>
      <ul className={styles.mainNav__items}>
          {props.navItems.map((navItem: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined) => {
                  return (
                      <li className={styles.mainNav__item}>{navItem}</li>
                  )
              })}
      </ul>
    </nav>
  )
}

export default NavBar;
