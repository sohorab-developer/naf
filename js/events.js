console.log("solo")

const btns = document.querySelectorAll('.show-more-btn');
console.log(btns)
Array.from(btns).forEach(btn => {
    btn.addEventListener('click' , e=> {
        const clickedBtn =e.target;
     
        const parentOfClickedBtn = clickedBtn.parentNode;
        const eventExtra = parentOfClickedBtn.querySelector('.event__extra')
/*             console.log(eventExtra.classList.toggle('d-none'))
 */            if(eventExtra.classList.toggle('d-none')) {
                    clickedBtn.textContent = 'Learn More';
                }else {
                    clickedBtn.textContent = 'Show Less';
                }
        /* eventExtra.classList.toggle('d-none') */
   /*      console.log(eventExtra.classList.toggle('d-none')) */
        
    })
})