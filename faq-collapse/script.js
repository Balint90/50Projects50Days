const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.target.parentNode.parentNode.classList.toggle('active');
    })
})