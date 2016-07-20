$(document).ready(function() {

/*
  var navli = $('ul#menu li');

 $('.section').waypoint(function(){
	 
	 var hash=$(this).attr('id');
	 console.log(hash);
	 console.log($('.section'));
	 navli.removeClass('active');
	 $.each(navli, function(){
		if($(this).children('a').attr('href').slice(1) == hash) {
			$(this).addClass('active');
		};
	 });
 }, {
	offset:'30%'	 
 });   
*/

$('.read-more_wrap1').hide();
$('.read-more_wrap2').hide();
$('.read-more_wrap3').hide();
$(".readMoreOption1").click(function() {
	$(".read-more_wrap1").slideToggle( "slow", function() {
  });
});
$(".readMoreOption2").click(function() {
	$(".read-more_wrap2").slideToggle( "slow", function() {
  });
});
$(".readMoreOption3").click(function() {
	$(".read-more_wrap3").slideToggle( "slow", function() {
  });
});
	
/*
$(".toggle_mnu").click(function() {
	$(".sandwich").toggleClass("active");
	$('.menu').toggleClass('trust-exp').css('display','');
});
*/

function trutime() {
  
  var deadline = 'july 30 2016 14:20:59 GMT+03:00';
  
  initializeClock('clock', deadline);
  
  //Initialize clock
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    updateClock(endtime); 
    var timeinterval = setInterval(function() {
      var t = getTimeRemaining(endtime);
      updateClock(endtime);
      if ( t.total <= 0) {
        clearInterval(timeinterval);
        console.log('time end');
         $('.rem').show();
		  $('.rem_first').hide();
      } 
    }, 1000);
  }
  
  //Calculate time remaining
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
     if ( t <= 0) {
       // $('#clock').hide();
         $('.rem_first').hide();
         $('.rem').show();
		 t=0;
      } 

    var days = Math.floor( t/(1000*60*60*24) );
    var hours = Math.floor( (t/(1000*60*60)) %  24 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var seconds = Math.floor( (t/1000) % 60 );
    
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }
  
  function updateClock(endtime) {
    var t = getTimeRemaining(endtime);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');  

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = t.hours;
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);      
  }  
};

trutime();
/*

 $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('nav ul li a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('nav ul li a').each(function () {
           $(this).removeClass('activenav');
            $(".sandwich").removeClass("active");
            $('.trust').toggleClass('trust-exp').css('display','');
		   
            })
        $(this).addClass('activenav');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
    
    function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos +50 && refElement.position().top + refElement.height() > scrollPos + 50) {
            $('#menu ul li a').removeClass("activenav");
            currLink.addClass("activenav");
        }
        else{
            currLink.removeClass("activenav");
        }
    }
    );};
*/

$("#back-top").hide();	
$(window).scroll(function(){
	var scroll_top = $(this).scrollTop();
    if (scroll_top<500){	
		$('#back-top').fadeOut();			  
	}
	else {
		 $('#back-top').fadeIn();
	}
});

$('#back-top a').click(function () {
	$('body,html').animate({
	    scrollTop: 0
	}, 800);
	return false;
});



$('.clickMap').on('click', function () {
    var value=$(this).attr('data-atr');
    var a=Number(value);
	var db0=[
				{
				 src: '#kyivPopUp',
				  type: 'inline'
				}, 
				{	
				  src: '#odessaPopUp',
				  type: 'inline'
				}, 
				{	
				  src: '#lvovPopUp',
				  type: 'inline'
				},
				{	
				 src: '#vinnitcaPopUp',
				  type: 'inline'
				},
				{
				 src: '#сherkassyPopUp',
				  type: 'inline'
				}, 
				{	
				 src: '#khmelnytskyiPopUp',
				  type: 'inline'
				}, 
				{	
				  src: '#ivanofrankovskPopUp',
				  type: 'inline'
				},
				
				{	
				 src: '#zhytomurPopUp',
				  type: 'inline'
				},
				{
				 src: '#kirovogradPopUp',
				  type: 'inline'
				}
		];

   
    var db= new Object (db0);
    var db1=db.splice(a);
    var db2=db1.concat(db);
    $.magnificPopup.open({
          items: db2,
	    gallery: {
	      enabled: true,
	    },
	    type: 'image' 
    });			  
});
	

});

window.onload = init;

    var product1, product2, product3;
    function init(){

      product1 = $('.product1').ThreeSixty({
        totalFrames: 20,
        endFrame: 20,
        currentFrame: 1,

        imgList: '.threesixty_images',
        progress: '.spinner',
        imagePath:'img/windows/luvin-light/',
        filePrefix: '',
        ext: '.png',
        height: 400,
        width: 400,
        navigation: false,
        
      });     
      
       product2 = $('.product2').ThreeSixty({
        totalFrames: 20,
        endFrame: 20,
        currentFrame: 1,

        imgList: '.threesixty_images',
        progress: '.spinner',
        imagePath:'img/windows/luvin-standart/',
        filePrefix: '',
        ext: '.png',
        height: 400,
        width: 400,
        navigation: false,
        
      });     
	  	
	  	product3 = $('.product3').ThreeSixty({
        totalFrames: 20,
        endFrame: 20,
        currentFrame: 1,

        imgList: '.threesixty_images',
        progress: '.spinner',
        imagePath:'img/windows/luvin-premium/',
        filePrefix: '',
        ext: '.png',
        height: 400,
        width: 400,
        navigation: false,
        
      });     


    };
 
