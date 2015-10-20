(function(){
  'use strict';

  angular.module('officeAddin')
         .service('dataService', ['$q', dataService]);

  /**
   * Custom Angular service.
   */
  function dataService($q){

    // public signature of the service
    return {
      getData: getData
    };

    /** *********************************************************** */

    function getData(){
      var deferred = $q.defer();

      deferred.resolve({
        errorId: 'ES1234',
        solution: 'Here is the solution'
      });

      return deferred.promise;
    }

  }
})();
