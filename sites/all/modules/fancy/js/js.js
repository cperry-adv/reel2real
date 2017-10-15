jQuery(document).ready(function() {

	container = $('.container');
	cover = $('.cover');
	play = $('#play');
	pause = $('#pause');
	mute = $('#mute');
	muted = $('#muted');
	close = $('#close');
	song = new Audio('http://reel-2-real.com/sites/default/files/audio_files/chris_perry_-_marabunta_-_master_08.20.17.wav');
	duration = song.duration;





	play.on('click', function(e) {
		e.preventDefault();
		song.play();

		$(this).replaceWith('<a class="button gradient" id="pause" href="" title=""></a>');
		container.addClass('containerLarge');
		cover.addClass('coverLarge');
		$('#close').fadeIn(300);
		$('#seek').attr('max',song.duration);
	});

	pause.on('click', function(e) {
		e.preventDefault();
		song.pause();
		$(this).replaceWith('<a class="button gradient" id="play" href="" title=""></a>');

	});

	mute.on('click', function(e) {
		e.preventDefault();
		song.volume = 0;
		$(this).replaceWith('<a class="button gradient" id="muted" href="" title=""></a>');

	});

	muted.on('click', function(e) {
		e.preventDefault();
		song.volume = 1;
		$(this).replaceWith('<a class="button gradient" id="mute" href="" title=""></a>');

	});

	$('#close').click(function(e) {
		e.preventDefault();
		container.removeClass('containerLarge');
		cover.removeClass('coverLarge');
		song.pause();
		song.currentTime = 0;
		$('#pause').replaceWith('<a class="button gradient" id="play" href="" title=""></a>');
		$('#close').fadeOut(300);
	});



	$("#seek").bind("change", function() {
		song.currentTime = $(this).val();
		$("#seek").attr("max", song.duration);
	});

	song.addEventListener('timeupdate',function (){
		curtime = parseInt(song.currentTime, 10);
	$("#seek").attr("value", curtime);
	});









	
	
});
