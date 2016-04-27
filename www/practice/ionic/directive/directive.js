/**
 * Created by gary on 4/27/16.
 */

app.directive('pieceOfFood', function(){
  return{
    template: 'pieceOfFood: {{pieceOfFood}}',
    scope: true,
    link: function(scope, element, attrs){
      attrs.$observe('pieceOfFood', function(value){
        console.log("value: " + value);
        scope.pieceOfFood = scope.$eval(value);
      })
    }
  }
});
///*
app.directive('note', function(){
  return{
    template: '{{note}}',
    scope: {
      note: '@'
    }
  };
});
//*/
/*
 app.directive('note', function(){
   return{
      template: '{{note}}',
       scope: {
        note: '&'
       }
     };
 });
*/
app.directive('countable', function(){
  return {
    template: '<div>' + 'Click me {{remaining}} more times! ({{count}})' + '</div>',
    replace: true,
    scope: {
      count: '=countable'
    },
    link: function(scope, element, attrs){
      scope.remaining = 10;
      scope.count = 0;
      element.bind('click', function(){
        scope.remaining--;
        scope.count++;
        scope.$apply();
      });
    }
  };
});
