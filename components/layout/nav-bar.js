import Link from 'next/link';
import classes from '../../styles/layout/nav-bar.module.css';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
function NavBar() {
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
        <div>WEBFFLE</div>
        {/* nav wrapper */}
        <section>
          <ul>
            {/* nav items */}
            {navs.map((nav) => (
              <li key={nav.title}>
                <Link href={nav.link}>{nav.title}</Link>
              </li>
            ))}
          </ul>
          {/* Language changer */}
          <section>
            <Link href={pathname} locale='ko'>
              <a>KO</a>
            </Link>
            <span> / </span>
            <Link href={pathname} locale='jp'>
              <a>JP</a>
            </Link>
            <span> / </span>
            <Link href={pathname} locale='en'>
              <a>EN</a>
            </Link>
          </section>
        </section>
      </nav>
    </header>
  );
}

export default NavBar;
