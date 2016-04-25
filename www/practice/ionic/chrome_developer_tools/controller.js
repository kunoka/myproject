/**
 * Created by A on 2016/4/19.
 */

app.controller("ChromeCtrl", function($scope,myFactory) {
    console.log("ChromeCtrl");
    $scope.goBack = function(){
        history.back();
    };
});