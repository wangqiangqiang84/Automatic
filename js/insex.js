$(document).ready(function() {
	//	点击用户
	$('.nav_user').unbind('click').click(function() {
		//		点击登录
		$("#outbox-l").show(function() {
			$(".signIn_quxiao").click(function() {
				$("#outbox-l").hide();
			});
		});

	});
	//	点击注册
	$("#register").unbind('click').click(function() {
		$('#outbox-l').css('display', 'none')
		$("#outbox-r").css('display', 'block');
		$("#signIn").unbind('click').click(function() {
			$('#outbox-l').css('display', 'block')
			$("#outbox-r").css('display', 'none');
		});
		$(".register_quxiao").click(function() {
			$("#outbox-r").hide();
		});
	});
	//	点击菜单栏事件
	$('.nav_navigation').unbind('click').click(function() {
		$('.nav').hide();
		$('.menuBar').css('display', 'block');
		$('.menuBar li a').unbind('click').click(function() {
			$('.menuBar').css('display', 'none')
			$('.nav').show();
		})
	})
	$('.navigation_sel').unbind('click').click(function() {
		$(".nav").show();
		$('.menuBar').css('display', 'none');

	});

	$('.nav_search').unbind('click').click(function() {

		$('.search').css('display', 'block');
		$('.search').animate({
			width: "91%"
		});
		$('.search_img').unbind('click').click(function() {
			$('.search').css('display', 'none')
			$('.search').animate({
				width: ""
			});
		})
	})

	$(function() {
		$(window).load(function() {
			$("html,body").stop().animate({
				scrollTop: 0
			});
			//以上方法在ie浏览器下全部无效，刷新的时候，滚动条还是在原来的位置
		});
	})
});