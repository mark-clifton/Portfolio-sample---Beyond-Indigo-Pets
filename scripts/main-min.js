function fadeInMultiple(e,n,t){setTimeout(function(){$(e).each(function(e){var t=e++*n,i=this;setTimeout(function(){$(i).css("opacity","1")},t)})},t)}function fadeIn(e,n){setTimeout(function(){$(e).css("opacity","1")},n)}function stickyElement(e,n){if(Modernizr.mq("screen and (min-width:480px)")){var t=function(){$(window).scrollTop()>n?$(e).addClass("stuck"):$(e).removeClass("stuck")};t(),$(window).scroll(function(){t()})}}$(document).ready(function(){fadeIn(".body-text",125),fadeInMultiple(".features li",125,750)}),$(function(){stickyElement(".site-header",$(".site-header").offset().top)}),function($){$.fn.touchMenuHover=function(e){var n=$.extend({childTag:"ul",closeElement:"",forceiOS:!1,openClass:"tmh-open"},e),t=$(this).find("a"),i="3ds|android|bada|bb10|hpwos|iemobile|kindle fire|opera mini|opera mobi|opera tablet|rim|silk|wiiu",o,s="html",a;return("ul"!==n.childTag.toString().toLowerCase()||n.forceiOS)&&(i+="|ipad|ipod|iphone"),o=new RegExp(i,"gi"),t.length>0&&o.test(navigator.userAgent)&&(t.each(function(){var e=$(this),t=e.parent("li"),i=t.siblings().find("a");e.next(n.childTag).length>0&&t.attr("aria-haspopup",!0),e.click(function(e){var t=$(this);e.stopPropagation(),i.removeClass(n.openClass),!t.hasClass(n.openClass)&&t.nextAll(n.childTag).length>0&&(e.preventDefault(),t.addClass(n.openClass))})}),n.closeElement.length>1&&(s+=","+n.closeElement),a=$(s),"ontouchstart"in window&&a.css("cursor","pointer"),a.click(function(){t.removeClass(n.openClass)})),this}}(jQuery);