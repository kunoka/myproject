/**
 * Created by A on 2016/4/7.
 */
app.controller("LayoutCtrl", function($scope,  history){
    console.log("LayoutCtrl");
    $scope.doSomething = function(){
        history.back();
    };
})