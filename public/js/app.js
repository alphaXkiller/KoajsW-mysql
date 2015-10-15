var SD = angular.module('SD-data', [
	'ui.router'
]);

// SD.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
// 	function ($stateProvider, $urlRouterProvider, $locationProvider) {
// 		$stateProvider
// 			.state('Charts', {
// 				url: '/charts',
// 				templateUrl: '../views/charts.html',
// 				controller: 'ChartCtrl'
// 			});

// 		$locationProvider.html5Mode({
// 			enabled: true,
// 			requireBase: false
// 		});
// }]);

SD.controller('main', function($scope, $http){
	$scope.name = 'charts';
	$http.get('/api/user')
			.then(function successCallback(res) {
				console.log(res);
				$scope.name = res.data.users[0].name;
			},
			function errCallback(err) {
				console.log(err);
			});
})

;