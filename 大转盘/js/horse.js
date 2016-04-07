/*
 * $prizes表示奖品的块
 * changeClass 表示会跳动变化的类
 * prizeArr表示奖品跳动的数组
 * prizeNum 表示获得的奖品
 */
// 调用跑马灯效果，参数(所有奖品的类,选中状态类，奖品的排序数组，最后停留的奖品（按顺时针计数，从1开始，最后一个是0）)

  var num = 0; //当前点亮的灯
  var circle = 0; //至少转跑马灯的圈数
  var t; //定时器
  var len;//奖品个数
  function lightChange($prizes, changeClass, prizeArr, prizeNum, callback){
      // var self = this;
      len = $prizes.length;

      var speed = 400;

      $prizes.removeClass(changeClass);
      // $prizes.attr('index',num).addClass(changeClass);
      $prizes.eq(prizeArr[num]).addClass(changeClass);
      if(num == len-1){
        num = 0;
        circle ++;       
      } else {
        num ++;
      }
      // 变化速度
      if(circle > 0 && circle < 3){
        speed = 200;
      } else {
        speed = 400;
      }

      if(circle > 2 && num == prizeNum){
        circle = 0;
        clearTimeout(t);
        callback();
      } else {
        t = setTimeout(function(){lightChange($prizes, changeClass, prizeArr, prizeNum, callback)},speed); 
      }
    }
