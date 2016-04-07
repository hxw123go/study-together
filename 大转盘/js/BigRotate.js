/* ==========================================================
 * BigRotate.js v20140630
 * ==========================================================
 * Copyright hxw
 *
 * 大转盘抽奖js
 * ========================================================== */
// 调用方法：(转动的盘,几等奖，改奖品旋转角度，中奖之后执行的函数)
// rotateFunc(wheel,awards,angle,Fun)
// 如：rotateFunc($lotterywheel,3,90,function(){alertFun("获得三等奖")});

// (function(){
	var RotateTimeOut;//定时器
    var a = 0;//转的角度
    var c = 1;//旋转圈数
    
    //wheel:转动的区域(比如底盘), awards:奖项，angle:奖项对应的角度，text:提示文字
    var rotate = function(wheel,awards,angle,callback){
        if(navigator.userAgent.indexOf("MSIE 6.0") > 0 || navigator.userAgent.indexOf("MSIE 7.0")>0 || navigator.userAgent.indexOf("MSIE 8.0")>0){
            alert("请升级IE浏览器或使用其他浏览器参与抽奖")
        } else if(navigator.userAgent.indexOf("MSIE 9.0")>0){  
    		RotateTimeOut = setTimeout(function(){
	    		a += 1;
	    		if(a < angle){
	    			wheel.css('-ms-transform','rotate('+ a +'deg)');
	    			rotate(wheel,awards,angle,callback);
	    		} else {
	    			clearTimeout(RotateTimeOut);
	    			callback();	
	    		}
	    	},1);
    	} else {
    		// wheel.style.transform = 'rotate('+ angle +'deg)';
    		// wheel.style.oTransform = 'rotate('+ angle +'deg)';
    		// wheel[0].style.mozTransform = 'rotate('+ angle +'deg)';
    		// wheel[0].style.webkitTransform = 'rotate('+ angle +'deg)';
    		wheel.css('transform','rotate('+ angle +'deg)');
    		wheel.css('-webkit-transform','rotate('+ angle +'deg)');
    		wheel.css('-o-transform','rotate('+ angle +'deg)');
    		wheel.css('-moz-transform','rotate('+ angle +'deg)');
    		setTimeout(function(){callback()},2000);
    	}
    };
    //参数(转动的盘,几等奖，改奖品旋转角度，中奖之后执行的函数)
    var rotateFunc = function(wheel,awards,angle,Fun){
    	//2表示转2圈之后再到达获奖的位置
    	var a = 2*360*c + angle;
    	c++;
    	rotate(wheel,awards,a,Fun);
    }
// })();