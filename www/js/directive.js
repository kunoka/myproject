/**
 * Created by A on 2016/4/19.
 */

/*


app.directive("goBack_button", function(){
    return {
        restrict: 'A',
        link : function(scope, element, attrs){
            element.bind("click", function(){
                alert(456);
               // back_button.goBack();
            })
        }
    }
})
 */
var module = angular.module( "my.new.module", [] );
module.directive('hello', function() {
    return {
        restrict: "A",
        link: function( scope, element, attrs ) {
            element.bind( "click", function() {
                console.log("nee eee");
            });
        }
    };
});