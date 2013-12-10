(function($) {

	$.fn.breakLongString = function(length) {

		return this.each(function() {
			var that = $(this),
				cnt = that.html(),
				cntArr = cnt.split(' '),
				result = '';

			for (var i = 0; i < cntArr.length; i += 1) {
				var str = cntArr[i],
					l = str.length;
				if (l > length) {
					for (var k = 0; k < l/length; k += 1) {
						result += str.substring(length*k, length*(k+1)) + ' ';
					}
				} else {
					result += str + ' ';
				}
			};

			that.html(result);

		});

	};

})(jQuery);
