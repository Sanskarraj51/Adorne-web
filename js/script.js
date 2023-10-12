//main-height
 function containerHeight() {
	var containerHeight = jQuery(window).height();
	var headerHeight  = jQuery('header').height();
	var footerHeight = jQuery('footer').height();
	
	jQuery(".main").css({'min-height': containerHeight - (footerHeight + headerHeight), 'padding-top': headerHeight, 'padding-bottom': footerHeight});						
		}
		
		jQuery(function() { 
			containerHeight();
		});
		
//All categories menu
$('.all-category-btn').on('click',function(){
  $('.default-menu').slideToggle()
  $('.dropdown-overlay').show()
});
$('.dropdown-overlay').on('click',function(){
  $('.default-menu').hide(); 
  $(this).hide();
});


// product detail
