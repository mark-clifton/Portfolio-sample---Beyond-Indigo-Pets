/*
* Consolidated UI scripts main.js
*/

$(document).ready(function() {

	/* Fade in */
	// Body content
	fadeIn('.body-text', 125);
	// Feature panels
	fadeInMultiple('.features li', 125, 750);

});

/*
* Element transitions
*/
function fadeInMultiple(element, time, start) {
	setTimeout(function() {
		$(element).each(function(i) {
			var inc = i++ * time;
			var that = this;
			setTimeout(function() {
				$(that).css('opacity', '1');
			}, inc);
		});
	}, start);
}
function fadeIn(element, time) {
	setTimeout(function() {
		$(element).css('opacity', '1');
	}, time);
}

/*
* Sticky header
*/
function stickyElement(element, sticky_navigation_offset_top) {
	// Load on larger screens only
	if(Modernizr.mq('screen and (min-width:480px)')) {
		// our function that decides weather the navigation bar should have "fixed" css position or not.
		var sticky_navigation = function() {
			var scroll_top = $(window).scrollTop(); // our current vertical position from the top
			// if we've scrolled more than the navigation, toggle its class
			if (scroll_top > sticky_navigation_offset_top) {
				$(element).addClass('stuck');
			} else {
				$(element).removeClass('stuck');
			}
		}; // run our function on load
		sticky_navigation();
		// and run it again every time you scroll
		$(window).scroll(function() {
			sticky_navigation();
		});
	}
}
/* Make top nav sticky */
$(function() {
	// Header
	var header_offset = $('.site-header').offset().top;
	stickyElement('.site-header', header_offset);
});

/*!
 * Izilla touchMenuHover jQuery plugin v1.7
 * Allows ULs (or any element of your choice) that open on li:hover to open on tap/click on mobile platforms such as iOS, Android, WP7, WP8, BlackBerry, Bada, WebOS, 3DS & WiiU
 *
 * Copyright (c) 2014 Izilla Partners Pty Ltd
 *
 * http://izilla.com.au
 * https://github.com/xodigital/jQuery-touchMenuHover?utm_source=jquer.in&utm_medium=website&utm_campaign=content-curation
 *
 * Licensed under the MIT license
 */
;(function($) {
	$.fn.touchMenuHover = function(options) {
		var settings = $.extend({
			childTag: "ul",
			closeElement: "",
			forceiOS: false,
			openClass: "tmh-open"
		}, options);

		var $a = $(this).find("a"),
			devices = "3ds|android|bada|bb10|hpwos|iemobile|kindle fire|opera mini|opera mobi|opera tablet|rim|silk|wiiu",
			devicesRX,
			closeStr = "html",
			$close;

		if (settings.childTag.toString().toLowerCase() !== "ul" || settings.forceiOS)
			devices += "|ipad|ipod|iphone";

		devicesRX = new RegExp(devices, "gi");

		if ($a.length > 0 && devicesRX.test(navigator.userAgent)) {
			$a.each(function() {
				var $this = $(this),
					$parent = $this.parent("li"),
					$siblings = $parent.siblings().find("a");

				if ($this.next(settings.childTag).length > 0)
					$parent.attr("aria-haspopup", true);

				$this.click(function(e) {
					var $this = $(this);
					e.stopPropagation();
					$siblings.removeClass(settings.openClass);

					if (!$this.hasClass(settings.openClass) && $this.nextAll(settings.childTag).length > 0) {
						e.preventDefault();
						$this.addClass(settings.openClass);
					}
				});
			});

			if (settings.closeElement.length > 1)
				closeStr += "," + settings.closeElement;

			$close = $(closeStr);

			if ("ontouchstart" in window)
				$close.css("cursor", "pointer");

			$close.click(function() {
				$a.removeClass(settings.openClass);
			});
		}

		return this;
	};
})(jQuery);
