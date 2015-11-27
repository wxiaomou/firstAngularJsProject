app.controller("myResumeCtrl", function($scope) {
	$scope.user = {
		name: 'Xiaomou Wang',
		email: 'xiaomou.wang@gmail.com',
		jobtitle: 'Software Engineer',
	};
	$scope.skills = ['C++', 'JAVA', 'Python', 'GO', 'Android', 'Javascript', 'AngularJs'];
});