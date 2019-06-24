import big from '../../assets/big.jpeg';
import small from '../../assets/small.jpeg';
import './index.css';
const bigImage = document.createElement('img');
bigImage.src = big;
document.body.appendChild(bigImage);
const smallImage = document.createElement('img');
smallImage.src = small;
document.body.appendChild(smallImage);