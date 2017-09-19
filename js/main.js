var mainSwiper = new Swiper ('.swiperOne',{
		direction: 'horizontal',
	})
	var adswiper = new Swiper ('.adSwiper',{
		pagination : '.swiper-pagination',
		paginationClickable :true,
		direction: 'horizontal',
		loop : true,
		autoplay : 5000,
	})

	mainSwiper.slideTo(1);
	var menu = 0;
	var menuposition = mainSwiper.progress;

	$('#one').click(function (){clickFirst()});
	$('#two').click(function (){clickSecond()});
	$('#three').click(function (){clickThird()});
	$('#four').click(function (){clickForth()});

	function clickFirst(){
		clearHelpMenu();
		changeFirstToggle();
		changeFirstTop();
		mainSwiper.slideTo(1,100,false);
	}
	function clickSecond(){
		clearHelpMenu();
		changeSecondToggle();
		changeSecondTop();
		mainSwiper.slideTo(2,100,false);
	}
	function clickThird(){
		clearHelpMenu();
		changeThirdToggle();
		changeThirdTop();
		mainSwiper.slideTo(3,100,false);
	}
	function clickForth(){
		clearHelpMenu();
		changeForthToggle();
		changeForthTop();
		mainSwiper.slideTo(4,100,false);
	}

	$('.help-div').click(function() {
		if(menu == 0){
			menuposition = mainSwiper.progress;
			setTimeout("menu = 1",1000);/*莫名奇妙地会有多次点击*/
			helpMenu();
		}
		if(menu == 1){
			switch(menuposition){
				case 0.5:clickSecond();break;
				case 0.75:clickThird();break;
				case 1:clickForth();break;
			}
			if(menuposition<=0.25&&menuposition>0){
				clickFirst();
			}
			setTimeout("menu = 0",1000)
		}
	});

	$('#hot').click(function() {
		changeToHot();
		inputHot();
	});
	$('#business').click(function() {
		changeToBusiness();
		inputBusiness();
	});
	$('#LTE').click(function() {
		changeToLTE();
		inputLTE();
	});
	$('#phone').click(function() {
		changeToPhone();
		inputPhone();
	});
	$('#life').click(function() {
		changeToLife();
		inputLife();
	});

	var right;
	var testy;
	var swiperProgress = mainSwiper.progress;
	var nowProgress;

	setTimeout("xunhuan()",500);

	function xunhuan() {
		testy = setInterval("aa()",100);
	}

	function aa() {
		left = $("#thehelp").offset().left;
		nowProgress = mainSwiper.progress;
		if( nowProgress != swiperProgress){
			if (nowProgress == 0.25) {
				changeFirstToggle();
				changeFirstTop();
			}
			if (nowProgress == 0.5) {
				changeSecondToggle();
				changeSecondTop();
			}
			if (nowProgress == 0.75) {
				changeThirdToggle();
				changeThirdTop();
			}
			if (nowProgress == 1) {
				changeForthToggle();
				changeForthTop();
			}
		}
		swiperProgress = nowProgress;
		if (left>=-490){
			helpMenu();
		}
	}
	/*有BUG，如果拉着不放的话，自动滑到第二屏，无法解决*/

	function delayLock() {
		mainSwiper.lockSwipes();
	}

	function backToThefirst(){
		left = $("#thehelp").offset().left;
		if (left<-490){
			mainSwiper.unlockSwipes();
			mainSwiper.slideTo(0,100);
			setTimeout("delayLock()",100);
		}
	}

	function helpMenu() {
		setTimeout("menu = 1",1000);
		menuposition = nowProgress;
		mainSwiper.slideTo(0,100);
		setTimeout("delayLock()",100);
		$('#thehelp').css("margin-left","-210px");
		$('.fix').css("left","770px");
		clearInterval(testy);
		testy = setInterval("backToThefirst()",100);
	}

	function clearHelpMenu(){
		clearInterval(testy);
		mainSwiper.unlockSwipes();
		setTimeout("xunhuan()",500);
		$('#thehelp').css("margin-left","0px");
		$('.fix').css("left","0px");
		menu = 0;
	}
/*	mainSwiper.lockSwipes()
	mainSwiper.unlockSwipes()
	mySwiper.lockSwipeToNext()*/

	function changeFirstToggle() {
		$('#one').html("<img src=\"img/index/toggle/首页（蓝）.png\" alt=\" \">");
		$('#two').html("<img src=\"img/index/toggle/商城（灰）.png\" alt=\" \">");
		$('#three').html("<img src=\"img/index/toggle/服务（灰）.png\" alt=\" \">");
		$('#four').html("<img src=\"img/index/toggle/我的移动（灰）.png\" alt=\" \">");
	}
	function changeSecondToggle(){
		$('#one').html("<img src=\"img/index/toggle/首页（灰）.png\" alt=\" \">");
		$('#two').html("<img src=\"img/index/toggle/商城（蓝）.png\" alt=\" \">");
		$('#three').html("<img src=\"img/index/toggle/服务（灰）.png\" alt=\" \">");
		$('#four').html("<img src=\"img/index/toggle/我的移动（灰）.png\" alt=\" \">");
	}
	function changeThirdToggle(){
		$('#one').html("<img src=\"img/index/toggle/首页（灰）.png\" alt=\" \">");
		$('#two').html("<img src=\"img/index/toggle/商城（灰）.png\" alt=\" \">");
		$('#three').html("<img src=\"img/index/toggle/服务（蓝）.png\" alt=\" \">");
		$('#four').html("<img src=\"img/index/toggle/我的移动（灰）.png\" alt=\" \">");
	}
	function changeForthToggle(){
		$('#one').html("<img src=\"img/index/toggle/首页（灰）.png\" alt=\" \">");
		$('#two').html("<img src=\"img/index/toggle/商城（灰）.png\" alt=\" \">");
		$('#three').html("<img src=\"img/index/toggle/服务（灰）.png\" alt=\" \">");
		$('#four').html("<img src=\"img/index/toggle/我的移动（蓝）.png\" alt=\" \">");
	}

	function changeFirstTop(){
		$('#top_word').html("<span class=\"f_top f_itop\">欢迎您，13800138000</span>");
	}
	function changeSecondTop(){
		$('#top_word').html("<span class=\"f_top f_stop\" >商城</span>");
	}
	function changeThirdTop(){
		$('#top_word').html("<span class=\"f_top f_stop\" >服务</span>");
	}
	function changeForthTop(){
		$('#top_word').html("<span class=\"f_top f_mtop\" >我的移动</span>");
	}

	function changeToHot(){
		$('#hot').html("<div class=\"l_shot hot_border\"><img src=\"img/shop/热门（橘）.png\" alt=\" \"></div>");
		$('#business').html("<div class=\"l_shot\"><img src=\"img/shop/业务订购（灰）.png\" alt=\" \"></div>");
		$('#LTE').html("<div class=\"l_shot\"><img src=\"img/shop/4G专区（灰）.png\" alt=\" \"></div>");
		$('#phone').html("<div class=\"l_shot\"><img src=\"img/shop/购机优惠（灰）.png\" alt=\" \"></div>");
		$('#life').html("<div class=\"l_shot\"><img src=\"img/shop/生活（灰）.png\" alt=\" \"></div>");
	}
	function changeToBusiness(){
		$('#hot').html("<div class=\"l_shot\"><img src=\"img/shop/热门（灰）.png\" alt=\" \"></div>");
		$('#business').html("<div class=\"l_shot business_border\"><img src=\"img/shop/业务订购（绿）.png\" alt=\" \"></div>");
		$('#LTE').html("<div class=\"l_shot\"><img src=\"img/shop/4G专区（灰）.png\" alt=\" \"></div>");
		$('#phone').html("<div class=\"l_shot\"><img src=\"img/shop/购机优惠（灰）.png\" alt=\" \"></div>");
		$('#life').html("<div class=\"l_shot\"><img src=\"img/shop/生活（灰）.png\" alt=\" \"></div>");
	}
	function changeToLTE(){
		$('#hot').html("<div class=\"l_shot\"><img src=\"img/shop/热门（灰）.png\" alt=\" \"></div>");
		$('#business').html("<div class=\"l_shot\"><img src=\"img/shop/业务订购（灰）.png\" alt=\" \"></div>");
		$('#LTE').html("<div class=\"l_shot lte_border\"><img src=\"img/shop/4G专区（蓝）.png\" alt=\" \"></div>");
		$('#phone').html("<div class=\"l_shot\"><img src=\"img/shop/购机优惠（灰）.png\" alt=\" \"></div>");
		$('#life').html("<div class=\"l_shot\"><img src=\"img/shop/生活（灰）.png\" alt=\" \"></div>");
	}
	function changeToPhone(){
		$('#hot').html("<div class=\"l_shot\"><img src=\"img/shop/热门（灰）.png\" alt=\" \"></div>");
		$('#business').html("<div class=\"l_shot\"><img src=\"img/shop/业务订购（灰）.png\" alt=\" \"></div>");
		$('#LTE').html("<div class=\"l_shot\"><img src=\"img/shop/4G专区（灰）.png\" alt=\" \"></div>");
		$('#phone').html("<div class=\"l_shot phone_border\"><img src=\"img/shop/购机优惠（红）.png\" alt=\" \"></div>");
		$('#life').html("<div class=\"l_shot\"><img src=\"img/shop/生活（灰）.png\" alt=\" \"></div>");
	}
	function changeToLife(){
		$('#hot').html("<div class=\"l_shot\"><img src=\"img/shop/热门（灰）.png\" alt=\" \"></div>");
		$('#business').html("<div class=\"l_shot\"><img src=\"img/shop/业务订购（灰）.png\" alt=\" \"></div>");
		$('#LTE').html("<div class=\"l_shot\"><img src=\"img/shop/4G专区（灰）.png\" alt=\" \"></div>");
		$('#phone').html("<div class=\"l_shot\"><img src=\"img/shop/购机优惠（灰）.png\" alt=\" \"></div>");
		$('#life').html("<div class=\"l_shot life_border\"><img src=\"img/shop/生活（黄）.png\" alt=\" \"></div>");
	}
	function inputHot(){
		$('.l_item_div').html("<div class=\"l_item\"><img src=\"img/shop/热门/热门1.png\"></div><div class=\"l_item\"><img src=\"img/shop/热门/热门2.png\"></div><div class=\"l_item\"><img src=\"img/shop/热门/热门3.png\"></div><div class=\"l_item\"><img src=\"img/shop/热门/热门4.png\"></div><div class=\"l_item\"><img src=\"img/shop/热门/热门5.png\"></div><div class=\"l_item\"><img src=\"img/shop/热门/热门6.png\"></div><div class=\"l_item\"><img src=\"img/shop/热门/热门7.png\"></div><div class=\"l_item\"><img src=\"img/shop/热门/热门8.png\"></div>");
	}
	function inputBusiness(){
		$('.l_item_div').html("<div class=\"l_item\"><img src=\"img/shop/业务订购/业务订购1.png\"></div><div class=\"l_item\"><img src=\"img/shop/业务订购/业务订购2.png\"></div><div class=\"l_item\"><img src=\"img/shop/业务订购/业务订购3.png\"></div><div class=\"l_item\"><img src=\"img/shop/业务订购/业务订购4.png\"></div><div class=\"l_item\"><img src=\"img/shop/业务订购/业务订购5.png\"></div><div class=\"l_item\"><img src=\"img/shop/业务订购/业务订购6.png\"></div><div class=\"l_item\"><img src=\"img/shop/业务订购/业务订购7.png\"></div><div class=\"l_item\"><img src=\"img/shop/业务订购/业务订购8.png\"></div>");
	}
	function inputLTE(){
		$('.l_item_div').html("<div class=\"l_item\"><img src=\"img/shop/4G专区/4G 1.png\"></div><div class=\"l_item\"><img src=\"img/shop/4G专区/4G 2.png\"></div><div class=\"l_item\"><img src=\"img/shop/4G专区/4G 3.png\"></div><div class=\"l_item\"><img src=\"img/shop/4G专区/4G 4.png\"></div><div class=\"l_item\"><img src=\"img/shop/4G专区/4G 5.png\"></div><div class=\"l_item\"><img src=\"img/shop/4G专区/4G 6.png\"></div>");
	}
	function inputPhone(){
		$('.l_item_div').html("<div class=\"l_item\"><img src=\"img/shop/购机优惠/购机1.png\" alt=\"\"></div><div class=\"l_item\"><img src=\"img/shop/购机优惠/购机2.png\" alt=\"\"></div><div class=\"l_item\"><img src=\"img/shop/购机优惠/购机3.png\" alt=\"\"></div><div class=\"l_item\"><img src=\"img/shop/购机优惠/购机4.png\" alt=\"\"></div><div class=\"l_item\">");
	}
	function inputLife(){
		$('.l_item_div').html("<div class=\"l_item\"><img src=\"img/shop/生活/生活1.png\" alt=\"\"></div><div class=\"l_item\"><img src=\"img/shop/生活/生活2.png\" alt=\"\"></div><div class=\"l_item\"><img src=\"img/shop/生活/生活3.png\" alt=\"\"></div><div class=\"l_item\"><img src=\"img/shop/生活/生活4.png\" alt=\"\"></div><div class=\"l_item\"><img src=\"img/shop/生活/生活5.png\" alt=\"\"></div><div class=\"l_item\"><img src=\"img/shop/生活/生活6.png\" alt=\"\"></div>");
	}