/* Burger menu
========================*/
$(document).ready(function(){
    $(".header__burger").click(function(event){
        $(".header__burger, .header__menu").toggleClass("active");
        $('body').toggleClass('lock');
    });
});


/* Btn read more 
========================*/
function readMore(){
    var dots = document.getElementById("dots");
    var more = document.getElementById("more");
    var btn__about = document.getElementById("btn__about");


    if(dots.style.display === "none"){
        dots.style.display = "inline";
        btn__about.innerHTML = "read more";
        more.style.display = "none";
    
    } else{ 
        dots.style.display = "none";
        btn__about.innerHTML = "hide";
        more.style.display = "inline";
         } 
    }
/* Slick Slider
========================*/
$(document).ready(function(){
$(()=>{
    var createSlick = ()=>{
      let slider = $(".slider");
  
      slider.not('.slick-initialized').slick({
        infinite: true,
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              adaptiveHeight: true,
            },
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      });	
    }
  
    createSlick();
  
   $(window).on( 'resize orientationchange', createSlick );
  })
});


    /* Smooth scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset 
        }, 700);
 });


/* Text Area
========================*/
$('textarea#message_area').on('keyup',function() 
{
  var maxlen = $(this).attr('maxlength');
  var length = $(this).val().length;
  console.log(length)
  if(length > (maxlen) ){
    $('#textarea_message').text('max length '+maxlen+' characters only!')
  }
  else
    {
      $('#textarea_message').text('');
    }
});

