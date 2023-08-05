const buttons = document.querySelectorAll('.faq-toggle');

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        button.parentNode.classList.toggle('active');
    })
})