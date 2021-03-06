(function() {
  'use strict';

  angular
    .module('boilerplate')
    .directive('cartoMap', cartoMap);

  /** @ngInject */
  function cartoMap() {
    var directive = {
      restrict: 'E',
      // template: '<div id="{{name}}" class="carto-map"></div>',
      scope: true,
      link: linkFunc,
      controller: cartoMapController,
      bindToController: true
    };

    return directive;

    function linkFunc(scope, el, attr) {

      // scope.name = attr.name;
      scope.url = attr.vis;
      scope.opts = {
        zoom: attr.zoom,
        search: false,
        mobile_layout: true
      }
      if(attr.lat) scope.opts.center_lat = attr.lat;
      if(attr.lng) scope.opts.center_lon = attr.lng;

      L.Icon.Default.imagePath = "/img/leaflet";

      cartodb.createVis(el, scope.url, scope.opts);

    }

    /** @ngInject */
    function cartoMapController() {
    }
  }

})();
