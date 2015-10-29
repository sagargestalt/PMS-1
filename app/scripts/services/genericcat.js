'use strict';

/**
 * @ngdoc service
 * @name pmsappApp.generic
 * @description
 * # genericcat
 * Service in the pmsappApp.
 */

angular.module('pmsappApp').factory('genericService',['$resource', function ($resource) {
    return $resource('http://localhost:81/PMS-1/services/index.php/instruments/category/', {}, {
      getGenericData: {method:'GET', params: {id: ''} , isArray:false},
      post:  {method:'POST',  params: {} , isArray:true}

    });
}]);

