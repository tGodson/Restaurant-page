import '../css/style.css';

const pageLoad = () => {
    const content = document.getElementById('content');

    const h1 = document.createElement("h1");
    h1.innerHTML = 'Cooking Since';
    content.appendChild(h1);

    const p = document.createElement("p");
    p.innerHTML = 'We provide the most amazing cuisine at any time specialy prepared by the best chefs there is';
    content.appendChild(p);
}
export { pageLoad };