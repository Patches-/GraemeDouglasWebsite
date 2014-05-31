smoothScroll.init();

$(".flexnav").flexNav();


//setting the video height  
function resizeVideo() {
	var videowidth = $("#video").width();
	var videoheight = Math.ceil(videowidth / 1.78);
	$("#video").attr('height', videoheight);
}

$(document).ready(function(){
	resizeVideo();
});

$( window ).resize(function(){
	resizeVideo();
});
