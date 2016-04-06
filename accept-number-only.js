
angular.module('mainApp', [])
  .directive('numbersOnly', function () {
    return {
      restrict: 'EA',
        require: 'ngModel',
        link: function (scope, element, attrs, ngModel) {
        
        element.bind("keydown keypress", function (event) {
            if(event.which != 8 && isNaN(String.fromCharCode(event.which))){
              event.preventDefault(); //stop character from entering input
          }
        });
        }
    };
});