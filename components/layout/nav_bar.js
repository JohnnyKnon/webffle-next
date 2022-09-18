import Link from 'next/link';
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
    <header>
      <nav>
        {/* fake */}
        <div>{t('logo')}</div>
        {/* nav wrapper */}
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
          <Link href={pathname} locale='jp'>
            <a>JP</a>
          </Link>
          <Link href={pathname} locale='en'>
            <a>EN</a>
          </Link>
        </section>
      </nav>
    </header>
  );
}

export default NavBar;
