/**
 * Created by A on 2016/4/7.
 */
app.controller("LayoutCtrl", function($scope,  history){
    $scope.doSomething = function(){
        history.back();
    };
})