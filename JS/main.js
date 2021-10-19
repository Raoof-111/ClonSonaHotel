function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }




  
$(document).ready(function(){
  $(window).scroll(function(){
      if(
          $(window).scrollTop() > 150 ){
              $('#scroll').css("opacity","1 ");
          }
          else{
              $('#scroll').css('opacity','0');
          }
      
  });

  $('#scroll').click(function(){
      $('html,body' ).animate({
          scrollTop:0
      },2000)
  })
});





$(document).ready(function() {
	// Users can skip the loading process if they want.
	$('.skip').click(function() {
		$('.overlay, body').addClass('loaded');
	})
	
	// Will wait for everything on the page to load.
	$(window).bind('load', function() {
		$('.overlay, body').addClass('loaded');
		setTimeout(function() {
			$('.overlay').css({'display':'none'})
		}, 2000)
	});
	
	// Will remove overlay after 1min for users cannnot load properly.
	setTimeout(function() {
		$('.overlay, body').addClass('loaded');
	}, 60000);
})

















$(document).ready(function(){
  $(window).scroll(function(){
      if(
          $(window).scrollTop() > 20 ){
              $('#header').css("margin-top","-3.7rem");
          }
          else{
              $('#header').css('margin-top','2rem');
          }
      
  });
});


