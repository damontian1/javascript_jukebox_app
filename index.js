$("#button1").on("click",function(){
	hello = new Jukebox;
	hello.pause();
	hello.play1();
});

$("#button2").on("click",function(){
	hello = new Jukebox;
	hello.pause();
	hello.play2();
});

$("#button3").on("click",function(){
	hello.pause();
});



var Jukebox = function(){
	this.songs = ["Bryson Tiller - Don't","ZAYN - Pillowtalk"],
	this.play1 = function(){
		$("#song1").get(0).play();
		$("#songtext").text(this.songs[0]).fadeIn(4000);
		$(".fixed_img2").fadeIn(3000).addClass("floating");
	}
	this.play2 = function(){
		$("#song2").get(0).play();
		$("#songtext").text(this.songs[1]).fadeIn(4000);
		$(".fixed_img2").fadeIn(3000).addClass("tossing");
	} 
	this.pause = function(){
		$("#song1").get(0).pause();
		$("#songtext").hide();
		$(".fixed_img2").hide().removeClass('tossing').removeClass('floating')
		$("#song2").get(0).pause();
		$("#songtext").hide();

	}

};
