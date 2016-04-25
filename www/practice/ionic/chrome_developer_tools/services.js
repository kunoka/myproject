/**
 * Created by A on 2016/4/19.
 */
var module = angular.module( "my.new.module", [] );
module.service( 'Book', [ '$rootScope', function( $rootScope ) {
    var service = {
        books: [
            { title: "Magician", author: "Raymond E. Feist" },
            { title: "The Hobbit", author: "J.R.R Tolkien" }
        ],

        addBook: function ( book ) {
            service.books.push( book );
            $rootScope.$broadcast( 'books.update' );
        }
    }
    return service;
}]);

module.directive('hello', function() {
    return {
        restrict: 'E',
        template: '<div>Hi there</div>',
        replace: true
    };
});
