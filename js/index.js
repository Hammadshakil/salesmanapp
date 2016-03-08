/**
 * Created by SHAKIL on 6/4/2015.
 */
var app=angular.module('duapp',['ngMaterial','ngNewRouter','firebase']);
app.controller('AppCtrl',function($scope,$router){

    $router.config([
        {path:"/" , component:"login"},
        {path:"/signup", component:"signup"},
        {path:"addsalesman",component:"addsalesman"}


    ])
});