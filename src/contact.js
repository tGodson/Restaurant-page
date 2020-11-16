import './css/style.css';

const contact = () => {
  const content = document.getElementById('content');

  const h1 = document.createElement('h1');
  h1.innerHTML = 'Contact Us';
  content.appendChild(h1);

  const p1 = document.createElement('p');
  p1.innerHTML = 'Location: Buea, Cameroon';
  content.appendChild(p1);

  const p2 = document.createElement('p');
  p2.innerHTML = 'Email: tendongzegodson@gmail.com';
  content.appendChild(p2);

  const p3 = document.createElement('p');
  p3.innerHTML = 'Number: +237 672526097';
  content.appendChild(p3);
};
export default contact;