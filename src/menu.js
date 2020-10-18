import '../css/style.css';

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
  img1.setAttribute('src', '../images/breakfast-1.jpg');
  column1.appendChild(img1);
  gallery.appendChild(column1);

  const column2 = document.createElement('div');
  column2.setAttribute('class', 'column');
  const img2 = document.createElement('img');
  img2.setAttribute('src', '../images/breakfast-2.jpg');
  column2.appendChild(img2);
  gallery.appendChild(column2);

  const column3 = document.createElement('div');
  column3.setAttribute('class', 'column');
  const img3 = document.createElement('img');
  img3.setAttribute('src', '../images/breakfast-3.jpg');
  column3.appendChild(img3);
  gallery.appendChild(column3);

  const column4 = document.createElement('div');
  column4.setAttribute('class', 'column');
  const img4 = document.createElement('img');
  img4.setAttribute('src', '../images/breakfast-4.jpg');
  column4.appendChild(img4);
  gallery.appendChild(column4);
};

export default menu;