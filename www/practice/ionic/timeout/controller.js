/**
 * Created by A on 2016/4/12.
 */

app.controller("TimeoutCtrl", function($scope,  $ionicPopup, $timeout, history){
    console.log("timeout controller");
    $scope.goBack = function() {
        history.back();
    };
    $scope.mytime = "333";
  setTimeout(function(){
    // $scope.mytime = "123";
     // $scope.$apply();
      setTimeout(function(){
          $scope.mytime = "123333";
          $scope.$apply();
      },3000);
  },1000);

    alert(123);
})

