/**
 * Created by A on 2016/4/17.
 */
app.controller("FilterCtrl", function($scope,$timeout, $state, myFactory){
    console.log("FilterCtrl");
    $scope.doSomething = function(){
        history.back();
    };
    $scope.onTapping = function(){
        $timeout(function(){
            $scope.test = "9";
          //  $state.go('popup');
        /*
         setTimeout(function(){
             $state.go('popup');
         },100)
         */

        },100);
       /*
         var timer = $timeout(function(){
             $state.go('popup');
         },0);
         */
    };
    $scope.clear = function(){
        $scope.test = "";
    };
    $scope.setValue = function(){
        myFactory.set("Tom Hanks111");
    };
    $scope.getValue = function(){
        $scope.value = myFactory.get();
    };
    $scope.clearValue = function(){
        $scope.value = myFactory.clear();
    };
})
