let menu = document.querySelector("#menu");
let nav = document.querySelector(".nav");

let isOpen = false;


menu.addEventListener("click",()=>{
    nav.classList.toggle('active');

    isOpen===true?classList.add('active'):classList.remove('active');


   
});

  window.addEventListener("resize",()=>{
        if(window.innerWidth>768){
            nav.classList.remove('active');
        }
    })



let scrollOption = {
    distance:"50px",
    origin:"bottom",
    duration:1000,
};


ScrollReveal().reveal("h2",{
    ...scrollOption,
    delay:0,
});

ScrollReveal().reveal("p",{
    ...scrollOption,
    delay:500,
});
ScrollReveal().reveal("h3",{
    ...scrollOption,
    delay:1000,
});
ScrollReveal().reveal(".buttons",{
    ...scrollOption,
    delay:1500,
});
ScrollReveal().reveal("#header-2",{
    ...scrollOption,
    delay:2000,
    duration:1000
});
ScrollReveal().reveal("#how-txt",{
     origin:"top",
    delay:0,
    duration:0
     
});

ScrollReveal().reveal(".app-works #app-1,#app-3",{
    ...scrollOption,
    origin:"left",
    duration:1000,
    delay:500
     
})



ScrollReveal().reveal(".right #account",{
    ...scrollOption,
    delay:900,
    duration:1000
})

ScrollReveal().reveal(".right #instruction-1",{
    ...scrollOption,
    delay:1500,
})
 
ScrollReveal().reveal(".right #info",{
    ...scrollOption,
    delay:1600,
})


ScrollReveal().reveal(".exp-varities #app-2",{
    ...scrollOption,
    origin:"right"
     
})

ScrollReveal().reveal(".right-2 #account",{
    ...scrollOption,
    delay:500,
})

ScrollReveal().reveal(".right-2 #instruction-1",{
    ...scrollOption,
    delay:1000,
})
 
ScrollReveal().reveal(".right-2 #info",{
    ...scrollOption,
    delay:1500,
})


ScrollReveal().reveal(".right #account",{
    ...scrollOption,
    delay:500,
})

ScrollReveal().reveal(".right #instruction-1",{
    ...scrollOption,
    delay:1000,
})
 
ScrollReveal().reveal("#download-txt",{
    ...scrollOption,
    delay:500,
})

ScrollReveal().reveal(".f-left h4",{
    ...scrollOption,
    delay:1000,
})

ScrollReveal().reveal("i",{
    ...scrollOption,
    delay:1500,
    duration:1000
});

ScrollReveal().reveal("#copyright-txt",{
    ...scrollOption,
    delay:2000,
    duration:1000
});

