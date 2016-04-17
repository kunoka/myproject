/**
 * Created by A on 2016/4/17.
 */
angular.module("myApp.filters",[])
.filter('custom', function($timeout){
        return function(input){ // "●";
            if(input){
                return "●";
                /*


                var timer = $timeout(
                    function() {

                        console.log( "Timeout executed", Date.now() );

                    },
                    1000
                );
                timer.then(function(){
                    return 123;
                })
                 */
            }
        }
    });