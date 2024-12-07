window.addEventListener("DOMContentLoaded",()=>{
    let faq_content = document.querySelectorAll(".faq-content");
    faq_content.forEach(items=>{
        let faq_content_child=items.querySelector(".faq-content-child")
        let plus=items.querySelector(".plus")
        items.addEventListener("click",(a)=>{
            a.preventDefault();
            a.stopPropagation();
            console.log(faq_content_child);
            faq_content_child.classList.toggle("delux");
            plus.classList.toggle("tranform-rotate");
        })
        
    })
    //---mobile--
    let bars = document.getElementById("bars");
    let conber_explore_condination = document.querySelector(".conber-explore-condination");
    let icon_menu = document.getElementById("icon-menu");
    bars.addEventListener("click",e=>{
        e.preventDefault();
        bars.classList.toggle("components-burger");
        conber_explore_condination.classList.toggle("commender-tuv");
        conber_explore_condination.classList.toggle("fadeinAnimation");
        icon_menu.classList.toggle("bawa");
    })
    //---humburger-menu
    $('.menu').click (function(){
        $(this).toggleClass('open');
      });
      
})