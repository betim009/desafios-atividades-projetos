export const Button = () => {
    let i = 1;
    const body = document.body;
    const button = document.createElement('button');
    button.textContent = `${i}`;
    body.appendChild(button)
    button.addEventListener('click', () => button.textContent = `${i += 1}`);
}