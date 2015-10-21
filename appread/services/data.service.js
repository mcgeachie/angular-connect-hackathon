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
      getErrorFix: getErrorFix
    };

    /** *********************************************************** */

    function getErrorFix(errorCode){

      console.log('service', errorCode);
      var deferred = $q.defer();

      deferred.resolve({
          solution: 'It\'s alright Marty, here is the solution...',
          img: 'http://www.slate.com/content/dam/slate/blogs/future_tense/2012/06/27/_back_to_the_future_future_day_hoax_today_not_the_date_shown_on_doc_s_delorean/1340833622481.jpg'
      });

      return deferred.promise;
    }

  }
})();
