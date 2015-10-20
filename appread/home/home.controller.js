(function() {
    'use strict';

    angular.module('officeAddin')
        .controller('homeController', ['dataService', homeController]);

    /**
   * Controller constructor
   */
    function homeController(dataService) {
        var vm = this; // jshint ignore:line
        var errorCodes = Office.context.mailbox.item.getRegExMatches().LegacyErrorCode;

        vm.solutions = [];

        for (var i = 0; i < errorCodes.length; i++) {

            var errorFromEmail = errorCodes[i];

            dataService.getErrorFix(errorFromEmail)
                .then(function(data) {
                    vm.solutions.push({
                        errorCode: errorFromEmail,
                        solution: data.solution
                    });
                });
        }
    }
})();
