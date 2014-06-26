var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.controller('PhoneListCtrl', function ($scope, $http) {
  // $scope.phones = [
  //   {'name': 'Nexus S',
  //    'snippet': 'Fast just got faster with Nexus S.', 'age': 3},
  //   {'name': 'Motorola XOOM™ with Wi-Fi',
  //    'snippet': 'The Next, Next Generation tablet.', 'age': 2},
  //   {'name': 'MOTOROLA XOOM™',
  //    'snippet': 'The Next, Next Generation tablet.', 'age': 1}
  // ];

  $http.get('models/routes.json').success(function(data) {
  	console.log(data);
    $scope.steps = data.routes[0].legs[0].steps;
  });
});
