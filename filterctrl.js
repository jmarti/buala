function FiltersCtrl($scope) {
  $scope.activeFilters = {
    // list of active filters, objects like
    // "color" : { values: ['blanco', 'verde'] }
  };

  $scope.newFilters = Buala.availableFilters;

  $scope.results = Buala.fakeResults;

  $scope.futureType = undefined;

  $scope.isArray = function(value) {
    // Looks too long, but is the "official" way
    // http://stackoverflow.com/questions/4775722/check-if-object-is-array
    return Object.prototype.toString.call( value ) === '[object Array]';
  };

  $scope.addFilter = function(selected_type, selected_value) {

    var filter = $scope.activeFilters[selected_type];

    if (typeof filter === "undefined") {
      filter = { values: [] };
      $scope.activeFilters[selected_type] = filter;
    }

    // miramos primero si el valor está ya en el filtro
    var index = filter.values.indexOf(selected_value);
    if (index < 0) {
      // no estaba, lo añadimos
      filter.values.push(selected_value);
    } else {
      // estaba y lo que hacemos es eliminarlo
      filter.values.splice(index, 1);
    }

    // si filter.values se queda vacio nos cargamos el filtro
    if (filter.values.length === 0) {
      delete $scope.activeFilters[selected_type];
    }
  };

  /**
   * Aquí el argumento se llama index pero se podría llamar pepito, lo
   * importante para que esto funcione es que en el ng-click se pasa
   * $index como argumento.
   *
   * ng-click="removeFilter($index)"
   *
   * Si en lugar de eso pusieras
   *
   * ng-click="removeFilter()"
   *
   * Aunque la variable index dentro de esta función fuera $index (con dolar)
   * daría igual, fuera del ng-repeat $index no existe.
   */
  $scope.removeFilter = function(name) {
    // splice es una función un poco complicada pero usada así simplemente
    // borra un elemento (por el parametro 1) empezando por index (0 es la primera posición).
    delete $scope.activeFilters[name];
  };

  $scope.selectFilterType = function(type) {
    if ($scope.currentViewport === 'results') {
      return;
    }

    $scope.futureType = type;
    $scope.currentViewport = 'filter-values';
  };

  $scope.addValueForType = function($event, value) {
    $scope.addFilter($scope.futureType, value);
    //$scope.futureType = undefined;
    $scope.currentViewport = 'filters-list';
  }

  $scope.addedAsFilter = function(type, value) {
    var filter = $scope.activeFilters[type];

    if (typeof filter === "undefined") {
      return false;
    }

    return filter.values.indexOf(value) >= 0;
  }

  $scope.showViewport = function(viewport) {
    $scope.currentViewport = viewport;
  }

  $scope.removeAccents = function(string) {
    if (typeof string !== "string") return;

    return string
      .replace(/[áà]/g, 'a')
      .replace(/[éè]/g, 'e')
      .replace(/í/g, 'i')
      .replace(/[óò]/g, 'o')
      .replace(/ú/g, 'u');
  };

  $scope.ifElements = function(element) {
    if (element.length === 0) {
      return 'noElements';
    } else {
      return 'withElements';
    }
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
