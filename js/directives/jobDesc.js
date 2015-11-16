app.controller('jobDescController', ['$scope', function($scope) {
  $scope.jobs = [
  		{ name: 'ITG',
		  from: '24/05/2012',
		  to: '23/07/2012',
		  description: 'Software QA intern.'},
		{ name: 'Cisco Systems',
		  from: 'March 2013',
		  to: 'July 2014',
		  description: 'Software Engineer'},
		{ name: 'Google',
		  from: 'July 2014',
		  to: 'Now',
		  description: 'Software Engineer'},
	];
}])
.directive('jobDesc', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      jobinfo: '=info' 
    }, 
    templateUrl: 'http://localhost:8080/js/directives/jobDesc.html' 
  }; 
});