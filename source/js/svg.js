$(window).scroll(function() {
   var wscroll = $(window).scrollTop();

   (function(){

      var svgHtml = $('.html'),
          svgCss = $('.css'),
          svgJs = $('.js'),
          svgPhp = $('.php'),
          svgMysql = $('.mysql'),
          svgNode = $('.node'),
          svgMongo = $('.mongo'),
          svgGit = $('.git'),
          svgGulp = $('.gulp'),
          svgBower = $('.bower'),
          svgPos = $('.about-me__skills').offset().top,
          windowMargin = $(window).height()/3,
          startAnimate = wscroll - svgPos + windowMargin,
          pixelsElapsed = svgPos - wscroll,
          percentsElapsed =  Math.ceil(pixelsElapsed / (svgPos - (svgPos - windowMargin)) * 100),
          percentsDraw = 251 / 100 * percentsElapsed;
  
     svg(svgHtml,30);
     svg(svgCss,50);
     svg(svgJs,50);
     svg(svgPhp,130);
     svg(svgMysql,110);
     svg(svgNode,150);
     svg(svgMongo,100);
     svg(svgGit,50);
     svg(svgGulp,70);
     svg(svgBower,85);


    function svg(block, dash){

     if (startAnimate >= 0) {

        var drawAmount = percentsDraw;

        if (drawAmount > 0 && drawAmount >= dash) {
          block.css({
            'stroke-dashoffset' : drawAmount
          });
        }
      }
    }


   })();
 })