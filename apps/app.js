var app = angular.module('myApp',[]);
app.controller('myCtrl',function($scope){
$scope.items = ['angular','backbone','node','react'];
});
app.directive('mRepeat', function(){
  return {
    transclude : 'element',
    compile : function(element, attr, linker){
      return function($scope, $element, $attr){
        console.log($attr)
        var myLoop = $attr.mRepeat,
            match=myLoop.split(" ");
            indexString = match[0],
            collectionString = match[2],
            parent = $element.parent(),
            elements = [];
          
        $scope.$watch(collectionString, function(collection){
                    var i, block, childScope;
          for (i = 0; i < collection.length; i++) {
            childScope = $scope.$new();
           
            
            childScope[indexString] = collection[i];
            linker(childScope, function(clone){
                
              parent.append(clone);
            });
          };
        },true);
      }
    }
  }
}); 
