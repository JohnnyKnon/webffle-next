import classes from '../styles/main-index.module.css';
import ImageSlider from '../components/ui/image-slider';
import MainWrap from '../components/layout/main-wrap';
import MainContentWrap from '../components/layout/main-content-wrap';

export default function Main() {
  return (
    // Main
    <MainWrap>
      {/* Images Slider */}
      <ImageSlider id={classes.imageSliderWrapper} />
      {/* Main Contents Wrapper */}
      <MainContentWrap></MainContentWrap>
    </MainWrap>
  );
}
