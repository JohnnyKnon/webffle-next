import Link from 'next/link';
import classes from '../../styles/layout/nav-bar.module.css';
import useTranslation from 'next-translate/useTranslation';
import { useState } from 'react';
import { useRouter } from 'next/router';

function NavBar() {
  /** Nav State */
  const [isNavActive, setIsNavActive] = useState(false);

  /** Nav Toggle On Off */
  const navToggleOnOff = () => {
    setIsNavActive(!isNavActive);
  };

  /** Nav Toggle On Off Styles
   * @enter : style which enter animation when isNavActive is true
   * @exit : style which exit animation when isNavActive is false
   * @defaultStyle : Just Default style
   */
  const navToggleStyle = (enter, exit, defaultStyle) => {
    return isNavActive ? `${enter} ${defaultStyle}` : `${exit} ${defaultStyle}`;
  };

  /** Translation using i18n */
  let { t } = useTranslation('common');
  /** useRouter */
  const router = useRouter();
  /** find current path */
  const { pathname } = router;

  /** Nav menus */
  const navs = [
    {
      title: 'ABOUT US',
      link: '/about',
    },
    {
      title: 'WEB',
      link: '/web',
    },
    {
      title: 'HOSTING',
      link: '/hosting',
    },
    {
      title: 'NEWSLETTER',
      link: '/newsletter',
    },
  ];
  //   JSX
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        {/* fake */}
        <div className={classes.logo}>
          <Link href="/">WEBFFLE</Link>
        </div>
        {/* nav wrapper */}
        <section className={classes.navWrapper}>
          <ul>
            {/* nav items */}
            {navs.map((nav) => (
              <li
                className={navToggleStyle(
                  classes.navItemsEnter,
                  classes.navItemsExit,
                  classes.navItems
                )}
                key={nav.title}
              >
                <Link href={nav.link}>
                  <a onClick={navToggleOnOff}>{nav.title}</a>
                </Link>
              </li>
            ))}
          </ul>
          {/* Language changer */}
          <section
            className={navToggleStyle(
              classes.langWrapperEnter,
              classes.langWrapperExit,
              classes.langWrapper
            )}
          >
            <Link href={pathname} locale="ko">
              <a onClick={navToggleOnOff}>KO</a>
            </Link>
            <span> / </span>
            <Link href={pathname} locale="jp">
              <a onClick={navToggleOnOff}>JP</a>
            </Link>
            <span> / </span>
            <Link href={pathname} locale="en">
              <a onClick={navToggleOnOff}>EN</a>
            </Link>
          </section>
        </section>
        <button className={classes.toggleBtn} onClick={navToggleOnOff}>
          <span
            className={navToggleStyle(
              classes.toggleLinesTopEnter,
              classes.toggleLinesTopExit,
              classes.toggleLines
            )}
          ></span>
          <span
            className={
              isNavActive ? classes.toggleLinesMiddle : classes.toggleLines
            }
          ></span>
          <span
            className={navToggleStyle(
              classes.toggleLinesBottomEnter,
              classes.toggleLinesBottomExit,
              classes.toggleLines
            )}
          ></span>
        </button>

        <section
          className={navToggleStyle(
            classes.mobileBGEnter,
            classes.mobileBGExit,
            classes.mobileBG
          )}
        ></section>
      </nav>
    </header>
  );
}

export default NavBar;
