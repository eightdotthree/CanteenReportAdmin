/* global $:false */
/* global window:false */
/* global mediaCheck:false */

var canteenreport = canteenreport || {};

(function ($, Modernizr, window, document) {

	'use strict';

	canteenreport.main = {

		elem: {
			$sortBtn: $('#js-sort-button'),
			$sortContainer: $('#js-sort-container'),
			$table: $('#js-report-table')
		},

		screenSize: 'small',

		init: function () {

			this.elem.$sortBtn.on('click', function (event) {

				var scope = canteenreport.main;

				if (scope.screenSize === 'small') {
					scope.elem.$sortContainer.slideToggle();
				}

				return false;

			});

			mediaCheck({
				media: '(min-width: 768px)',
				entry: function () {
					canteenreport.main.screenSize = 'large';
				},
				exit: function () {
					canteenreport.main.screenSize = 'small';
				},
				both: function () {
					console.log('changing state');
				}
			});

		}

	};

}(window.jQuery, window.Modernizr, window, window.document));


$(function () {

	'use strict';

	canteenreport.main.init();

});