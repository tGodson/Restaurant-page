import '../css/style.css';
const pageLoad = () => {
    const content = document.getElementById('content');
    
    const container = document.createElement("div");
    container.setAttribute('class', 'container');
    content.appendChild(container);

    const h1 = document.createElement("h1");
    h1.innerHTML = 'Cooking Since';
    container.appendChild(h1);

    const p = document.createElement("p");
    p.innerHTML = 'We provide the most amazing cuisine at any time specialy prepared by the best chefs there is';
    container.appendChild(p);
}
export { pageLoad };