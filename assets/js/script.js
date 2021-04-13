/* Author: 

*/

// filter

var filter=document.querySelector(".portfolio-filters");
filter.addEventListener("click", function(e) {
    if(e.target && e.target.nodeName == "SPAN") {
    var x = document.querySelectorAll(".tabs");
    for (var i = 0; i < x.length; i++) {
      if(x[i].classList.contains("bg-green"))
      {
      x[i].classList.remove("bg-green");        
      x[i].classList.add("bg-darkgreen");
      }
    }
    var image_li=document.querySelectorAll(".portfolio-item");
    for (var j = 0; j < image_li.length; j++) {
      if(image_li[j].classList.contains("show-img"))
      image_li[j].classList.remove("show-img");
      image_li[j].classList.add("hide-img");
    }
    var classname_sel=e.target.className;
    for (var j = 0; j < image_li.length; j++) {
        if(classname_sel=="all"){
          if(image_li[j].classList.contains("hide-img")){
            image_li[j].classList.remove("hide-img");
            image_li[j].classList.add("show-img");
          }
        }
        else if(image_li[j].classList.contains(classname_sel)) {
           if(image_li[j].classList.contains("hide-img")){
            image_li[j].classList.remove("hide-img");
            image_li[j].classList.add("show-img");
          }
        }
    }
    if(e.target.parentNode.classList.contains("bg-darkgreen"))
      {
        e.target.parentNode.classList.remove("bg-darkgreen");        
        e.target.parentNode.classList.add("bg-green");
      }
    }  
});

var back_to_top =document.querySelector(".back-to-top");
back_to_top.addEventListener("click",move_to_top);
// back to top
function move_to_top() {
    document.documentElement.scrollTop = 0; 
    document.body.scrollTop = 0;
  }

// form validation  
var form = document.querySelector(".contact-form");
form.addEventListener('submit', validateForm);
var form_ip=document.getElementsByClassName('form-ip');
var inputs=['name','email','message'];
var persons= {};
function validateForm(event) {
    event.preventDefault();
    
    for(var i = 0 ; i < inputs.length; i++)
    {   
        persons[inputs[i]]=form_ip[i].value;
        
    }
    
    console.log("persons ="+persons);
    var formFlag=0;

    for(var i = 0 ; i < inputs.length; i++)
    {   
        if(persons[inputs[i]]=="")
        {
            var err_class='.'+inputs[i]+'-error';
            var err_span=document.querySelector(err_class);
            err_span.innerHTML="Please enter "+inputs[i];
            err_span.classList.add('show-element')
            form_ip[i].classList.add('border-red');
            // alert("Please enter "+inputs[i]);
            formFlag=1; 
        }
    }
    submitform();

    function submitform(){

        if(formFlag===0) 
        {
          alert("Thank you");
          var form_ip=document.getElementsByClassName('form-ip');
          for(var i=0;i<form_ip.length;i++)
          {   
              if(form_ip[i].classList.contains('show-element'))
              {
                  form_ip[i].classList.remove('show-element');
                  form_ip[i].classList.add('hide-element');                  
              }
              if(form_ip[i].classList.contains('border-red'))
              form_ip[i].classList.remove('border-red');
          }
        }
    }




  }

  var hamburger =document.querySelector(".menu-bar");
  hamburger.addEventListener("click",toggleMobileMenu);
  var navbar=document.querySelector(".navbar");
  var all_menu_items=document.querySelectorAll(".navbar li");
  var menu_state=0;
  function toggleMobileMenu(e) {
    if(menu_state===0) {
      navbar.classList.add("hamburger-menu");
      for(var i=0;i<all_menu_items.length;i++)
      {
        if(all_menu_items[i].classList.contains("hide-menu-item")) {
          all_menu_items[i].classList.remove("hide-menu-item");
        }        
      }
      menu_state=1;
    }
    else if(menu_state===1) {
      navbar.classList.remove("hamburger-menu");
      for(var i=0;i<all_menu_items.length;i++)
      {
        if(!all_menu_items[i].classList.contains("hide-menu-item")) {
          if(i==0)
          continue;
          all_menu_items[i].classList.add("hide-menu-item");
        }        
      }
      menu_state=0;
    }
  }


  /*
  var list_img = document.querySelectorAll(".list-img > img");
  var current_div=document.querySelectorAll(".portfolio-inner");
  for(var i=0;i<list_img.length;i++)
  {
      list_img[i].addEventListener("mouseenter",hoverimage);
  }
  for(var i=0;i<current_div.length;i++)
  {   
      current_div[i].classList.add("hide-element");  
      current_div[i].addEventListener("mouseleave",leaveimage);
  }

  function hoverimage(event) {
      console.log("Message sent"+event.target.parentNode.nextSibling.childNodes);
      let fig=event.target.parentNode;
      // fig.
      console.log("fig="+fig.parentNode.children[1].children[0].nodeName);
      var div_to_display=fig.parentNode.children[1].children[0];
      if(div_to_display.classList.contains("hide-element"))
      {
          div_to_display.classList.remove("hide-element");
      }
      div_to_display.classList.add("show-element");
    //   for(var i=0;i<next_divs.length;i++)
    //   next_divs[i].style.display="block";
      
      // current_img.style.display="block";
  }

  function leaveimage(event) {
    if(event.target.classList.contains("show-element"))
    {
        event.target.classList.remove("show-element");
        event.target.classList.add("hide-element");
    }
    // var portfolio_div =document.querySelectorAll(".portfolio-inner");
    //   for (var i=0;i<portfolio_div.length;i++) {
    //       if(portfolio_div[i].classList.contains("show-element")){
    //           portfolio_div[i].classList.remove("hide-element");
    //       }
    //       portfolio_div[i].classList.add("hide-element");
    //   }

  }
/*
  if(event.target.classList.contains("show-element"))
  {
      event.target.classList.remove("show-element");
      // event.target.classList.add("hide-element");
  }
*/


















