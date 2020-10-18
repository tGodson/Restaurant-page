import '../css/style.css';

const nav = () => {
  const contentnav = document.getElementById('content');

  const navigation = document.createElement('div');
  navigation.setAttribute('class', 'flex-container');
  navigation.setAttribute('id', 'navigation');
  contentnav.appendChild(navigation);

  const logo = document.createElement('div');
  logo.setAttribute('class', 'logo');
  navigation.appendChild(logo);

  const navbarBrand = document.createElement('div');
  navbarBrand.setAttribute('class', 'navbar-brand');
  navbarBrand.innerHTML = 'Taste.';

  const span = document.createElement('span');
  span.innerHTML = 'it';
  navbarBrand.appendChild(span);
  logo.appendChild(navbarBrand);

  const nav = document.createElement('div');
  nav.setAttribute('class', 'nav');
  navigation.appendChild(nav);

  const home = document.createElement('div');
  home.setAttribute('id', 'Home');
  home.innerHTML = 'Home';
  nav.appendChild(home);

  const menu = document.createElement('div');
  menu.setAttribute('id', 'Menu');
  menu.innerHTML = 'Menu';
  nav.appendChild(menu);

  const contact = document.createElement('div');
  contact.setAttribute('id', 'Contact');
  contact.innerHTML = 'Contact';
  nav.appendChild(contact);
};

export default nav;