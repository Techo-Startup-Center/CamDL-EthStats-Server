'use strict';

/* Init Angular App */

var netStatsApp = angular
	.module('netStatsApp', ['netStatsApp.filters', 'netStatsApp.directives', 'ngStorage'])
	.constant('ENV', {
		// types: MAIN_NET, TEST_NET, STAGING
		TYPE: 'STAGING'
	})



netStatsApp.run(function ($rootScope, ENV) {
	$rootScope.networkName = networkName || 'Ethereum';
	$rootScope.faviconPath = faviconPath || '/favicon.ico';
	$rootScope.pageTitle = pageTitle || 'CamDL NetStats';
	$rootScope.currentYear = new Date().getFullYear();
	switch(ENV.TYPE){
		case "MAIN_NET":
			$rootScope.logo = "camdl-mainnet.png";
			break;
		case "TEST_NET":
			$rootScope.logo= "camdl-testnet.png";
			break;
		case "STAGING":
			$rootScope.logo = "camdl-staging.png";
			break;
		default:
			$rootScope.logo = "";
			break;

	}
	console.info('oh hi ENV', ENV.TYPE);
	// $rootScope.logo= ENV
	// $rootScope.logo = logo || ''
});


/* Services */

netStatsApp.factory('socket', function ($rootScope) {
	var socket = new Primus();
	return socket;
});

netStatsApp.factory('toastr', function ($rootScope) {
	toastr = window.toastr;
	toastr.options = {
		"closeButton": false,
		"debug": false,
		"progressBar": false,
		"newestOnTop": true,
		"positionClass": "toast-top-right",
		"preventDuplicates": false,
		"onclick": null,
		"showDuration": "300",
		"hideDuration": "1000",
		"timeOut": "5000",
		"extendedTimeOut": "1000",
		"showEasing": "swing",
		"hideEasing": "linear",
		"showMethod": "fadeIn",
		"hideMethod": "fadeOut"
	};
	return toastr;
});

netStatsApp.factory('_', function ($rootScope) {
	var lodash = window._;
	return lodash;
});

