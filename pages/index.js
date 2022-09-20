import classes from '../styles/main-index.module.css';
import ImageSlider from '../components/ui/image-slider';

export default function Main() {
  return (
    <main id={classes.main}>
      <ImageSlider id={classes.imageSliderWrapper} />
    </main>
  );
}
