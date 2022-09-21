import classes from '../styles/error/not-found.module.css';
import useTranslation from 'next-translate/useTranslation';

export default function NotFoundError() {
  /** Translation using i18n */
  let { t } = useTranslation('common');
  return (
    <div className={classes.errorTextWrapper}>
      <h1 className={classes.errorCode}>404</h1>
      <p className={classes.errorMessage}>{` | ${t('notFound')}`}</p>
    </div>
  );
}
