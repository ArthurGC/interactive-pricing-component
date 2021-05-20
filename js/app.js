const slider = document.querySelector('#card-range');
const fill = document.querySelector('.bar .fill');



// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month
const money1 = document.querySelector('.card__mobile-money__money');
const money2 = document.querySelector('.card__header__money');
const views = document.querySelector('.card__header__amount');
const check = document.querySelector('.slider');


let price1 = 8;
let price2 = 12;
let price3 = 16;
let price4 = 24;
let price5 = 36;

let statusCheck = false;
function changeValue() {
    if (statusCheck == false) {
        statusCheck = true;
        price1 = 8*0.75;
        price2 = 12*0.75;
        price3 = 16*0.75;
        price4 = 24*0.75;
        price5 = 36*0.75;

    }else {
        statusCheck = false;
        price1 = 8;
        price2 = 12;
        price3 = 16;
        price4 = 24;
        price5 = 36;
    }
    updateRange()
}

check.addEventListener('click',changeValue);

money1.textContent = `$16.00 `;
money2.textContent = `$16.00 `;
views.textContent = `100K`;


function updateRange() {
    fill.style.width = `${slider.value}%`;
    if (slider.value >= 0 && slider.value<=20) {
        money1.textContent = `$${price1}.00`;
        money2.textContent = `$${price1}.00`;
        views.textContent = `10K`;
    }else if (slider.value > 20 && slider.value<=40) {
        money1.textContent = `$${price2}.00`;
        money2.textContent = `$${price2}.00`;
        views.textContent = `50K`;
    }else if (slider.value > 40 && slider.value<=60) {
        money1.textContent = `$${price3}.00`;
        money2.textContent = `$${price3}.00`;
        views.textContent = `100K`;
    }else if (slider.value > 60 && slider.value<=80) {
        money1.textContent = `$${price4}.00`;
        money2.textContent = `$${price4}.00`;
        views.textContent = `500K`;
    }else if (slider.value > 80 && slider.value<=100) {
        money1.textContent = `$${price5}.00`;
        money2.textContent = `$${price5}.00`;
        views.textContent = `1M`;
    }
}
slider.addEventListener('input',updateRange);