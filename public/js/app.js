var SD = angular.module('SD-data', [
	'ui.router',
	'googlechart'
]);

SD.controller('main', function($scope, $http, $q){
	
	listUser();

	var chart1 = {};

	chart1.type = 'LineChart';

	chart1.options = {
		displayExactValues: true,
		is3D: true,
		animation: {startup: true},
		title: 'Users / Hour',
		curveType: 'function'
	};

	function listUser () {
		$scope.users = [];
		$http.get('/api/user')
					.then(function successCallback(res) {
						chart1.data = [
							['Time' , 'Users']
						];
						angular.forEach(res.data.users, function(user, index) {
							var data = [];
							data.push(user.hour);
							data.push(user.count)
							chart1.data.push(data);
						});
						$scope.chart = chart1;
					});
	}
})
;