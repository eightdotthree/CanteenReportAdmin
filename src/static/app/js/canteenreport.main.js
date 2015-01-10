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
			$table: $('#js-report-table'),
			$printBtn: $('.btn-print'),
			$addZipBtn: $('#js-add-zipcode'),
			$addUnitBtn: $('#js-add-unit'),
			$resetBtn: $('#js-reset-button')
		},

		screenSize: 'small',
		clonedElements: [],

		init: function () {

			// toggle sorting forms
			this.elem.$sortBtn.on('click', function (event) {

				var scope = canteenreport.main;

				if (scope.screenSize === 'small') {
					scope.elem.$sortContainer.slideToggle();
				}

				return false;

			});

			// print the page
			this.elem.$printBtn.on('click', function (event) {

				window.print();
				return false;

			});

			// add more zipcode on the summary page
			this.elem.$addZipBtn.on('click', function (event) {

				var scope = canteenreport.main;
				var cloned = $('#js-incident-zipcode').clone().insertBefore(this);
				scope.addClonedObjectToArray(cloned);

				return false;

			});

			// add another unit on the summary page
			this.elem.$addUnitBtn.on('click', function (event) {

				var scope = canteenreport.main;
				var cloned = $('#js-incident-unit-number').clone().insertBefore(this);
				scope.addClonedObjectToArray(cloned);

				return false;

			});

			this.elem.$resetBtn.on('click', function (event) {

				var scope = canteenreport.main;
				scope.removeClonedObjects();

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

		},

		addClonedObjectToArray: function (cloned) {

			this.clonedElements.push(cloned);

		},

		removeClonedObjects: function () {

			$(this.clonedElements).each(function (index, item) {
				item.remove();
			});

			this.clonedElements = [];

		}

	};

}(window.jQuery, window.Modernizr, window, window.document));


$(function () {

	'use strict';

	canteenreport.main.init();

});