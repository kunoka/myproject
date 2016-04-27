/**
 * Created by gary on 4/22/16.
 */

app.controller("EventCtrl", function($scope, myFactory){
  console.log("EventCtrl");
  $scope.number = "EventCtrl - ";
  $scope.goBack = function(){
    history.back();
  };
  //var a = angular.element(document.querySelector('input'));
});

//第1种绑定
app.directive("bnDocumentClick1", function($ionicPopup){
  return {
    restrict: "A",
    link: function(scope, element, attributes){
      element.bind("click", function(event){
        var alertPopup = $ionicPopup.alert({
          title: 'Event Bind',
          template: 'Event click has been binded.'
        });
      })
    }
  }
});
//第2种绑定
app.directive("bnDocumentClick2", function($document, $ionicPopup){
  return {
    restrict: "A",
    link: function(scope, element, attributes){
      $document.on("click", function( event ){
          console.log("整个文档点击后触发");
        }
      )
    }
  }
});
//代码的执行顺序
app.directive("exceutionSequence", function(){
  return {
    restrict: "A",

    link: function (scope, element, attributesß) {
      scope.number = scope.number + " link - ";
    },

    compile: function (element, attributes) {
      return {
        pre: function preLink(scope, element, attributes) {
          scope.number = scope.number + " compile pre - ";

        },
        post: function postLink(scope, element, attributes) {
          scope.number = scope.number + " compile post -";
        }
      };
    }

  }
});
//替换的directive
app.directive("exampleDirective", function($document){
  var FOCUS_CLASS = "ng-focused";
  return {
    restrict: 'E',
    replace: true,
    template: '<div><p>Hello {{number}}!</p></div>',
    controller: function($scope, $element){
      $scope.number = $scope.number + "22222 ";
    },
    link: function(scope, ele, att) {
      scope.number = scope.number + "33333 ";
      scope.flag = "";
      ele.bind('click', function(evt) {

        if (scope.flag == "y") {
          scope.flag = "";
          ele.removeClass("bg-yellow");
          ele.addClass("bg-red");
        } else {
          scope.flag = "y";
          ele.removeClass("bg-red");
          ele.addClass("bg-yellow");
        }
      });
    }
  }
});
//input focus/un-focus效果
app.directive("ngFocus", function(){
  return {
    restrict: "A",
    link: function(scope, element, attrs){
      element.bind("focus", function(evt){
        element.removeClass("bg-yellow");
        element.addClass("bg-red");
        scope.input1 = "I am focused";
      }).bind("blur", function(evt){
        element.removeClass("bg-red");
        element.addClass("bg-yellow");
        scope.input1 = "You left me.";
        scope.$apply();
      })
    }
  }
});
//onKeyup事件绑定
app.directive('fractionNum',function(){
  return {
    restrict: "A",
    link : function(scope, elements, attrs, controller){
      elements.bind("keyup", function(event){
        value = event.code.substr(3);
        console.log("value: " + value);
        if(isNaN(value) || value<1 || value>10) {
          this.style.border = "1px solid red";
        }else{
          this.style.border= '';
        }
      }),
      elements[0].onkeyup = function(){
        if(isNaN(this.value) || this.value<1 || this.value>10){
          this.style.borderColor = 'red';
        }
        else{
          this.style.borderColor = '';
        }
      };
    }
  };
});


