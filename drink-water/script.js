let smallCups = document.querySelectorAll('.cup-small');
const cupsContainer = document.querySelector('.cups');
const listers = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');
const waterToDrinkInput = document.getElementById('waterToDrink');
let waterToDrink = waterToDrinkInput.value;
const setupAmount = document.getElementById('setupAmount');
const oneCupAmount = 0.250;

updateBigCup();

setupAmount.addEventListener('click', () => {
    waterToDrink = waterToDrinkInput.value;
    cupsContainer.innerHTML = '';
    for (let i = 0; i < waterToDrink; i++) {
        for (let j = 0; j < (1 / oneCupAmount); j++) {
            cupsContainer.innerHTML += '<div class="cup cup-small">250 ml</div>';
        }
    }
    setupCups();
});

function setupCups() {
    smallCups = document.querySelectorAll('.cup-small');
    smallCups.forEach((cup, idx) => {
        cup.addEventListener('click', () => highlightCups(idx));
    });
}

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
    if (smallCups[idx].classList.contains('full') &&
        !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--;
    }

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const totalCups = smallCups.length;

    if (fullCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${fullCups / totalCups * 330}px`;
        percentage.innerText = `${Math.round((fullCups / totalCups * 100) * 100) / 100}%`
    }

    if (fullCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        listers.innerText = `${waterToDrink - (250 * fullCups / 1000)}L`;
    }
}
