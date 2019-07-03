import "popper.js";
import "bootstrap";
import big from '../../assets/big.jpeg';
import './index.scss';
//import index_viewer from './index_viewer';
export default () => {
  const bigImage = `<div class='app container'>
      <img src='${big}' class='img' />
      <footer>Bye</footer>
    </div>`;
  return bigImage;
}