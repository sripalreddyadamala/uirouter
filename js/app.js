var myApp = angular.module('myModule',['ui.router']);
myApp.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){

        $urlRouterProvider.otherwise('/');
        $stateProvider.state('home',{
            url:'/'
        })

        $locationProvider.html5Mode({enabled:true,requiredBase:false});
    }]);
