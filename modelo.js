function ModeloCtrl($scope) {
  $scope.reciept = Buala.exampleReceipt;
  $scope.showPopup = false;
  $scope.editor = {
    show : false,
    currentElement: undefined,
    newValue : '',
  };

  $scope.removeAccents = function(string) {
    if (typeof string !== "string") return;

    return string
      .replace(/[áà]/g, 'a')
      .replace(/[éè]/g, 'e')
      .replace(/í/g, 'i')
      .replace(/[óò]/g, 'o')
      .replace(/ú/g, 'u');
  }

  $scope.indexToLetter = function(numero){
    var lletres = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    return lletres[numero];
  }

  $scope.countProperties = function(obj) {
    var count = 0;
    for(var prop in obj) {
        if(obj.hasOwnProperty(prop))
            ++count;
    }
    return count;
  }

  $scope.twoDigits = function(numero) {
    if(parseInt(numero)>9){
      return "two-digits";
    } else {
      return "";
    }
  }

  $scope.removeAccents = function(string) {
    if (typeof string !== "string") return;

    return string
      .replace(/[áà]/g, 'a')
      .replace(/[éè]/g, 'e')
      .replace(/í/g, 'i')
      .replace(/[óò]/g, 'o')
      .replace(/ú/g, 'u');
  }

  $scope.click = function(showedItem) {
    $scope.click = showedItem;
  }

  $scope.editNode = function($event) {
    $scope.editor.currentElement = $event.currentTarget;
    $scope.editor.newValue = $scope.editor.currentElement.innerText;
    $scope.editor.show = true;
  }

  $scope.saveEdit = function() {
    $scope.editor.currentElement.innerText = $scope.editor.newValue;
    $scope.editor.show = false;
  }

    $scope.heightLessParameter = function(parametro){
      if(!isNaN(parametro)){ //es un número
        return $(window).height() - parametro + 'px';
      }else{ //es una cadena
        return $(window).height() - $(parametro).outerHeight() + 'px';
      }
  }

  $scope.widthLessParameter = function(parametro){
      if(!isNaN(parametro)){ //es un número
        return $(window).width() - parametro + 'px';
      }else{ //es una cadena
        return $(window).width() - $(parametro).width() + 'px';
      }
  }

  $scope.width = function(){
    return $(window).width()+'px';
  }

  function tellAngular() {
    
    var domElt = document.getElementById('main');
    scope = angular.element(domElt).scope();
    scope.$apply(function() {
        scope.width = window.innerWidth;
        scope.height = window.innerHeight;
    });
  }

  //first call of tellAngular when the dom is loaded
  document.addEventListener("DOMContentLoaded", tellAngular, false);

  //calling tellAngular on resize event
  window.onresize = tellAngular;

}


/*
{{ receta.file.title }}
{{ receta.file.guest }}

ng-repeat="part in receta.partes"
  {{ part.title }}
  {{ part.ingredients }}

  ng-repeat="step in part.steps"
    {{ step.before }}
    {{ step.action }}
    {{ step.after }}
*/
