$(function(){

	$('#projects_bg a').hover(
	function(){
		$('#proj_desc').show().html($(this).attr('title'));
	},
	function(){
		$('#proj_desc').hide();
	}
	);
	
	//fancybox
	$('.inlinebox').fancybox({
		maxWidth	:	770,
		maxHeight	:	630,
		fitToView	:	false,
		width			:	770,
		height		:	630,
		closeBtn	:	true,
		wrapCSS		:	'custom_fb',
		helpers		:	{
			title		:	null
		}
	});
});