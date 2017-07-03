$(document).ready(function () {
    var myNavBar = {

        flagAdd: true,

        elements: [],

        init: function (elements) {
            this.elements = elements;
        },

        add : function() {
            if(this.flagAdd) {
                for(var i=0; i < this.elements.length; i++) {
                    document.getElementById(this.elements[i]).className += " fixed-theme";
                }
                this.flagAdd = false;
            }
        },

        remove: function() {
            for(var i=0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className =
                        document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/g , '' );
            }
            this.flagAdd = true;
        }

    };

/**
 * Init the object. Pass the object the array of elements
 * that we want to change when the scroll goes down
    */
   myNavBar.init(  [
       "header",
       "header-container",
   ]);

   /**
    * Function that manage the direction
    * of the scroll
    */
   function offSetManager(){

       var yOffset = $(".intro").height()-25;
       var currYOffSet = window.pageYOffset;

       if(yOffset < currYOffSet) {
           myNavBar.remove();
       }
       else if(currYOffSet <= yOffset){
           myNavBar.add();
       }

   }

   /**
    * bind to the document scroll detection
    */
    window.onscroll = function(e) {
        offSetManager();
    }

   /**
    * We have to do a first detectation of offset because the page
    * could be load with scroll down set.
    */
    $('.type-it').typeIt({
    speed: 450,
    lifeLike: false,
    autoStart: false,
    cursor:false
  });
  $('.type-it-second').typeIt({
    speed: 100,
    lifeLike: false,
    autoStart: false,
    cursor:false
  });
  var service =$('.service');
  var serviceHieght=service.outerHeight(); 
  
  service.hover(
    function () {
        $(this).animate(
              {
                  height : '150px'
              },500,function (){
                var p= $(this).children("p");
                if (p) {
                    p.fadeToggle(250);
                }
                
              }
          );
    }, 
    function () {
                var p= $(this).children("p");
                if (p) {
                    p.fadeToggle(250);
                }
                $(this).animate({
                  height : serviceHieght+'px' 
               });
    }
);

  offSetManager();
    
    /**************trigger nice scroll**************/
    $("html").niceScroll({

    });
    /**************end trigger nice scroll**************/
    //initialize swiper when document ready  
    /*var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      speed:2000,
      autoplay:5000
    });
    mySwiper.onClickNext(function (){
        alert("next");
    });
    */
   
   
})