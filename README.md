# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Links

- Live Site URL: [Preview Live Here](https://arthurgc.github.io/interactive-pricing-component/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- JS Dom Manipulation
- Flexbox
- Mobile-first workflow
- Media Query

### What I learned

This is a example for customizing an input range thumb and change it for an image.
```css
input[type=range]{
  -webkit-appearance: none;
  position: relative;
  z-index: 2;
  margin: 0;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  outline: none;
  background-color: transparent;
}
```
```css
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  padding: 10px;
  background: $bg-slider-strong-cyan;
  background-image: url(/images/icon-slider.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 60%;
  margin-top: -5px;
  cursor: pointer;
  outline: none;
}
```
There was a problem because input checkbox like a toggle check does not change their value even if you click it. It just make a transition which looks like a toggle check. So I fix it using a variable `status` which works like a boolean.
```js
const check = document.querySelector('.slider');

let statusCheck = false;

function changeValue() {
    if (statusCheck == false) {
        statusCheck = true;
    }else {
        statusCheck = false;
    }
}

check.addEventListener('click',changeValue);
```

### Useful resources

- [Toggle Switch](https://www.w3schools.com/howto/howto_css_switch.asp) - This helped me for adding and customizing a toggle switch inside the card price.
- [Input Range](https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/) - This page explains a lot about customizing input ranges like thumb, slider and other properties.



## Author

- Github - [ArthurGC](https://github.com/ArthurGC)
