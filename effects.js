window.onscroll = function() {myFunction()};

function myFunction() {
  if(document.body.scrollTop > 600 || document.documentElement.scrollTop > 600){
    $(".slide-down-effect-card").slideDown(2000,function(){
    });
  }
};


$(window).scroll(function(){
  $(".slide-in-effect").fadeIn(2500,function(){
  });
});

$(window).scroll(function(){
  $(".slide-down-effect").slideDown(2000,function(){
  });
});
