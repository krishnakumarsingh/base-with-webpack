const button = document.createElement('button');
//import _ from 'lodash';
import './index_viewer';
function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());