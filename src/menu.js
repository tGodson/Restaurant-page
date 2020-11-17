import './css/style.css';
import Breakfast1 from './images/breakfast-1.jpg';
import Breakfast2 from './images/breakfast-2.jpg';
import Breakfast3 from './images/breakfast-3.jpg';
import Breakfast4 from './images/breakfast-4.jpg';


const menu = () => {
  const content = document.getElementById('content');

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Our Menu';
  content.appendChild(h1);

  const gallery = document.createElement('div');
  gallery.setAttribute('class', 'row');
  content.appendChild(gallery);

  const column1 = document.createElement('div');
  column1.setAttribute('class', 'column');
  const img1 = document.createElement('img');
  img1.setAttribute('src', `${Breakfast1}`);
  column1.appendChild(img1);
  gallery.appendChild(column1);

  const column2 = document.createElement('div');
  column2.setAttribute('class', 'column');
  const img2 = document.createElement('img');
  img2.setAttribute('src', `${Breakfast2}`);
  column2.appendChild(img2);
  gallery.appendChild(column2);

  const column3 = document.createElement('div');
  column3.setAttribute('class', 'column');
  const img3 = document.createElement('img');
  img3.setAttribute('src', `${Breakfast3}`);
  column3.appendChild(img3);
  gallery.appendChild(column3);

  const column4 = document.createElement('div');
  column4.setAttribute('class', 'column');
  const img4 = document.createElement('img');
  img4.setAttribute('src', `${Breakfast4}`);
  column4.appendChild(img4);
  gallery.appendChild(column4);
};

export default menu;