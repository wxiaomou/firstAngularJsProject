app.controller('eduController', ['$scope', function($scope) {
  $scope.schools = [
  		{ name: 'University of Michigan',
		  from: 'Sep 2011',
		  to: 'Dec 2012',
		  logo: 'http://localhost:8080/src/img/um.png',
		  degree: 'Master of Science of Electrical Engineering'},
		{ name: 'Nankai University',
		  from: 'Sep 2007',
		  to: 'July 2011',
		  logo: 'http://localhost:8080/src/img/nku.png',
		  degree: 'Bachelor of Science of Communication Engineering'},
	];
}])
.directive('education', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      schoolinfo: '=info' 
    }, 
    templateUrl: 'http://localhost:8080/js/directives/education.html' 
  }; 
});