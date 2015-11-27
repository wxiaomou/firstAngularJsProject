var app = angular.module("myResumeApp", ['ui.bootstrap']).config(function($sceDelegateProvider) {
 $sceDelegateProvider.resourceUrlWhitelist([
   // Allow same origin resource loads.
   'self',
   // Allow loading from our assets domain.  Notice the difference between * and **.
   'http://localhost:8080/js/**']);
 });