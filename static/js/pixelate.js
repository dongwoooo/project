/*
 * pixelate.js
 * 43081j
 * Pixelate images with ease
 * License: MIT
 */
var canv, temp_canv;
(function($) {
	$.fn.extend({
		pixelate: function() {
			var defaults = {
				value: 0.05,
				reveal: true
			};
			var options = arguments[0] || {};
			if(typeof options !== 'object') {
				options = { value: parseInt(arguments[0]) };
			}
			options = $.extend(defaults, options);
			return this.each(function() {
				var img = this,
					imgWidth = $(img).width(),
					imgHeight = $(img).height(),
					revealed = false;
				// Canvas to Show
				canv = document.createElement('canvas');
				canv.width = imgWidth;
				canv.height = imgHeight;
				var ctx = canv.getContext('2d');
				ctx.mozImageSmoothingEnabled = false;
				ctx.webkitImageSmoothingEnabled = false;
				ctx.imageSmoothingEnabled = false;
				// Temporal Canvas
				temp_canv = document.createElement('canvas');
				temp_canv.width = imgWidth;
				temp_canv.height = imgHeight;
				var temp_ctx = temp_canv.getContext('2d');
				temp_ctx.mozImageSmoothingEnabled = false;
				temp_ctx.webkitImageSmoothingEnabled = false;
				temp_ctx.imageSmoothingEnabled = false;

				var opts = $.extend(options, (function() {
					var o = {};
					for(var i = 0; i < img.attributes.length; i++) {
						o[img.attributes[i].name.replace(/^data\-/, '')] = img.attributes[i].value;
					}
					return o;
				})());
				var width = imgWidth * opts.value,
					height = imgHeight * opts.value;
				img.onload = function() {temp_ctx.drawImage(img, 0, 0, width, height);
				ctx.drawImage(temp_canv, 0, 0, width, height, 0, 0, canv.width, canv.height);}
				$(img).hide();
				$(img).before(canv);
			});
		}
	});
	$(window).on('load', function() {
		$('img[data-pixelate]').pixelate();
	});
})(jQuery);