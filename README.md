# Advice generator app

This is a advice generator website made with HTML, CSS, Javascript and Advice Slip API where user can view the optimal layout for the app irrespective of their device's screen size and click on the dice to get a random slip of advice.
## Table of contents

- [Overview](#overview)
  - [The features](#the-features)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The features

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

#### At Desktop(Preview):
![](./design/desktop-design.jpg)
#### At Mobile:
![](./design/mobile-design.jpg)
#### (Active state):
![](./design/active-states.jpg)


### Links

- Live Site URL: [Click Here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- API & Asynchronous Programming
- Desktop-first workflow


### What I learned

I learned the usage of Asynchronous programming, and getting more on-hands experience of Promises, Fetch, .then, .catch and other features of it. Also I refreshened the css-designing part of mine while making the button interative using rotating transition and box-shadow property. I also loved using Javascript in the most minimal way to make it easy to get and function.

To see how have I written the getAdvice() function which is returning the advices randomly, see below:

```js
  function getAdvice(){
      let url="https://api.adviceslip.com/advice/"+JSON.stringify(Math.floor(Math.random()*229 + 1))
      fetch(url)
      .then(response=>response.json())
      .then(data=>{
          if(data.slip){
              adviceNo.textContent=JSON.stringify(data.slip.id)
          }
          if(data.slip){
              adviceText.textContent=JSON.stringify(data.slip.advice)
          }
          console.log(JSON.stringify(data))
      })
      .catch(e=>{
          console.log(e)
          getAdvice()
      })
  }
```

### Continued development

I am looking forward to add letter changing effect on the advice slip alongwith a glowing effect, on which i am currently working, so that it will look completely random and give more better experience.


### Useful resources

- [MDN Reference](https://developer.mozilla.org/en-US/)This helped me for many reasons. I really liked this website as at any point if I required to know the more functioning of the HTML or CSS tags or attributes, this website helped me.
- [Advice Slip API](https://api.adviceslip.com/) - This is an amazing API, you can check it out here.

## Author

- Github - [Shivam Kumar](https://github.com/vaishalidewangan786)
- LinkedIn - [@shivam-kumar-9575a7227](https://www.linkedin.com/in/vaishali-dewangan-2060721a5/)

## Acknowledgments

I would like to thank Frontend Mentor to give me such an amazing idea of creating this website as an challenge. I look forward to see more new and interesting challenges from them in future.
