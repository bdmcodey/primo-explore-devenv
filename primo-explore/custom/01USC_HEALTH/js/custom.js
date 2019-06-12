(function () {
    "use strict";
    'use strict';

    var app = angular.module('viewCustom', ['angularLoad']);

    /****************************************************************************************************/

        /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

        /*var app = angular.module('centralCustom', ['angularLoad']);*/

    /****************************************************************************************************/
	
	/** Altmetrics **/
app.controller('FullViewAfterController', ['angularLoad', '$http', '$scope', '$element', '$timeout', '$window', function (angularLoad, $http, $scope, $element, $timeout, $window) {
    var vm = this;
    this.$http = $http;
    this.$element = $element;
    this.$scope = $scope;
    this.$window = $window;
    vm.$onInit = function () //wait for all the bindings to be initialised
    {
        vm.parentElement = this.$element.parent()[0]; //the prm-full-view container
        try {
            vm.doi = vm.parentCtrl.item.pnx.addata.doi[0] || '';
        } catch (e) {
            return;
        }
        if (vm.doi) {
            //If we've got a doi to work with check whether altmetrics has data for it.
            //If so, make our div visible and create a new Altmetrics service
            $timeout(function () {
            $http.get('https://api.altmetric.com/v1/doi/' + vm.doi).then(function () {
                try {
                    //Get the altmetrics widget
                    angularLoad.loadScript('https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js?' + Date.now()).then(function () {});
                    //Create our new Primo service
                    var altmetricsSection = {
                        scrollId: "altmetrics",
                        serviceName: "altmetrics",
                        title: "brief.results.tabs.Altmetrics"
                    };
                    vm.parentCtrl.services.splice(vm.parentCtrl.services.length, 0, altmetricsSection);
                } catch (e) {
                    console.log(e);
                }
            }).catch(function (e) {
                return;
            });
            }, 3000);
        }
        
        
        //move the altmetrics widget into the new Altmetrics service section
        var unbindWatcher = this.$scope.$watch(function () {
            return vm.parentElement.querySelector('h4[translate="brief.results.tabs.Altmetrics"]');
        }, function (newVal, oldVal) {
            if (newVal) {
                //Get the section body associated with the value we're watching
                let altContainer = newVal.parentElement.parentElement.parentElement.parentElement.children[1];
                let almt1 = vm.parentElement.children[1].children[0];
                if (altContainer && altContainer.appendChild && altm1) {
                    altContainer.appendChild(altm1);
                }
                unbindWatcher();
            }
        });
    }; // end of $onInit
    
    
    //You'd also need to look at removing the various css/js scripts loaded by this.
    //refer to: https://github.com/Det-Kongelige-Bibliotek/primo-explore-rex
      vm.$onDestroy = function ()
  {
        if (this.$window._altmetric) {
            delete this.$window._altmetric;
        }
        
        if (this.$window._altmetric_embed_init) {
            delete this.$window._altmetric_embed_init;
        }
        
        if (this.$window.AltmetricTemplates) {
            delete this.$window.AltmetricTemplates;
        }
  }
    
}]);
app.component('prmFullViewAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'FullViewAfterController',
     template: '<div id="altm1" ng-if="$ctrl.doi" class="altmetric-embed" data-hide-no-mentions="true"  data-link-target="new" data-badge-type="medium-donut" data-badge-details="right" data-doi="{{$ctrl.doi}}"></div>'
    });
/** Altmetrics **/

  app.component('prmActionListAfter', {
    template: '<br><a href="https://libraries.usc.edu/form/need-help-report-problem" target="_blank" style="float:right;">Need Help? Report a Problem</a>'
  });

  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-3218414-30', 'auto');
  ga('send', 'pageview');
   
// BEGIN Add link to fines and fees payment - with IE

var fine_button = '<a class="button-link md-button md-primoExplore-theme md-ink-ripple" id="payment-button" href="https://lotus.usc.edu/form.htm" target="_blank"><span>PAY FINE</span><prm-icon icon-type="svg" svg-icon-set="primo-ui" icon-definition="open-in-new"><md-icon md-svg-icon="primo-ui:open-in-new" alt="" class="md-primoExplore-theme" aria-hidden="true"></md-icon></prm-icon></a>';

app.component('prmFinesOverviewAfter', {
    template: fine_button
});

app.component('prmFinesAfter', {
    template: fine_button
});

// END Add link to fines and fees payment - with IE

// AEON links
app.controller('RequestServicesAfterController', [function () {
    var vm = this;
}]);

app.component('prmRequestServicesAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'RequestServicesAfterController',
    template: `<remove-specific-request-for-location parent-ctrl="$ctrl.parentCtrl"></remove-specific-request-for-location>`

});

app.component('almaHowovpAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'RequestServicesAfterController',
    template: `<remove-specific-request-for-location parent-ctrl="$ctrl.parentCtrl"></remove-specific-request-for-location>`

});

app.constant('removeSpecificRequestForLocationStudioConfig', [
    { "type": "AEON", "libraryCode": "SPECCOLL", "subLocationCode": "spe-vltarc, spe-dmlfac, spe-graarc, spe-arc, spe-aav, spe-bkmar8, spe-bkmav7, spe-bkmst8, spe-bkmcr8, spe-bkmco8, spe-bkmcs8, spe-elb238, spe-elb343, spe-bkmofc, spe-bkmmf8, spe-bkmov8, spe-dml233, spe-bkmso8, spe-dml205, spe-dml207, spe-dml208, spe-209A, spe-dml214, spe-ealarc, spe-ealeas, spe-fml, spe-fmo, spe-hol, spe-hov, spe-hor, spe-ofc, spe-mfr, spe-lv7rar, spe-lv8rar, spe-grarar, spe-lv7rfl, spe-lv8rfl, spe-lv7rm, spe-lv7rov, spe-lv8rov, spe-lv7sm, spe-lv7rso, spe-lv8rso, spe-eassto, UNASSIGNED, spe-vlt, spe-vltbrg, spe-vltbwi, spe-vltcre, spe-vltflt, spe-vltovr, spe-vltwid, spe-vla", "displayLabel": "Request from Special Collections" },
    { "type": "AEON", "libraryCode": "CINEMA", "subLocationCode": "cin-cag, cin-cgo, cin-cgs", "displayLabel": "Request from Cinema Arts Library" },
    { "type": "AEON", "libraryCode": "ONEARCHIVE", "subLocationCode": "one-arc, one-stk, one-exb, one-gpf, one-lpf, one-ovr, one-pmo, one-pam, one-prr, one-plf, one-ref", "displayLabel": "Request from ONE Archives" },
    { "type": "ILL", "displayLabel": "Request via interlibrary loan (USC Libraries)", "genres": ['book', 'bookitem', 'conference', 'journal']},
    { "type": "ILL", "displayLabel": "Request via interlibrary loan (Health Science Libraries)", "genres": ['article', 'proceeding']}
]);

app.constant('aeonLocationsInternalExternalMap',
    {"spe-dmlfac": "DML FACULTY HALL", "spe-ealeas": "EAST ASIAN STORAGE EAST", "spe-graarc": "ARCHIVES GRAND", "spe-elb238": "BOECKMANN EAST 238", "spe-elb343": "BOECKMANN EAST 343-344", "spe-grarar": "RARE-BOOKS-GRAND", "spe-eassto": "SPECIAL COLLECTIONS EAST STORAGE", "spe-vltbrg": "VAULT-244B-REG", "spe-vltbwi": "VAULT-244B-WIDE", "spe-vltcre": "VAULT-244C-REG", "spe-vltflt": "VAULT-FLAT", "spe-vltovr": "VAULT-OVER", "spe-vltwid": "VAULT-WIDE", "cin-eassto": "EAST STORAGE"}
);

app.controller('removeSpecificRequestForLocationController', ['removeSpecificRequestForLocationStudioConfig', '$scope','$timeout','$translate', 'aeonLocationsInternalExternalMap', function (addonParameters, $scope, $timeout, $translate, aeonLocationsInternalExternalMap) {
    var vm = this.parentCtrl;
    var services2;
    var servicesWithReolvedLinks;
    var fakeGuest = false;
    this.getFakeGuest = getFakeGuest;
    this.$onInit = function () {
        if (!this.parentCtrl.isLoggedIn()){
            fakeGuest = true;

            this.parentCtrl.isLoggedIn = function() {
                return true;
            };

            if (this.parentCtrl.getServicesFromIls) {
                this.parentCtrl.getServicesFromIls();
            } else if (this.parentCtrl.getHowToGetitServicesFromIls) {
                this.parentCtrl.getHowToGetitServicesFromIls();
            }
        }

        $scope.$watch(function () {
            return vm.services.serviceinfo ? vm.services.serviceinfo : undefined;
        }, function () {
            if ((!services2 && vm.services.serviceinfo) || (vm.services.serviceinfo && services2 && services2.length !== vm.services.serviceinfo.length)) {
                services2 = vm.services.serviceinfo;
                calculateRemove();
            } else {
                services2 = vm.services.serviceinfo;
            }
        });
    };

    function getFakeGuest(){
        return fakeGuest;
    }

    function calculateRemove() {
        for (let addonParameter of addonParameters) {
            var type = addonParameter.type;
            var libraryCode = addonParameter.libraryCode;
            var subLocationCodes = addonParameter.subLocationCode;
            var displayLabel = addonParameter.displayLabel;
            var subLocationCode = subLocationCodes ? subLocationCodes.split(/\s*,\s*/) : subLocationCodes;
            var holding = [];

            if (type === "AEON" && vm.item.delivery.holding) {
                holding = vm.item.delivery.holding.filter(function (holding) {
                    return libraryCode === holding.libraryCode;
                }).filter(function (holding) {
                    return subLocationCode.indexOf(holding.subLocationCode) !== -1;
                });
            }

            var aeonAndHolding = (type === "AEON" && holding.length === 0);
            if (services2.length > 0 && aeonAndHolding) {
                services2 = services2.filter(function (e) {
                    return displayLabel !== e.type;
                });
            }
            else {
                if (services2.length > 0) {
                    services2.forEach((service) => {
                        if (service.type === displayLabel) {
                            if (holding.length > 0 || type === "ILL") {
                                if (type === 'AEON') {
                                    let match = holding[0];
                                    let link = service['link-to-service'];
                                    link = link.replace(/location=[^&]*(&)?/, 'location=' + (aeonLocationsInternalExternalMap[match.subLocationCode] ? aeonLocationsInternalExternalMap[match.subLocationCode] : match.subLocation).toLowerCase() + '$1');
                                    link = link.replace(/callnum=[^&]*(&)?/, 'callnum=' + match.callNumber + '$1');
                                    service['link-to-service'] = link;
                                }

                                if (servicesWithReolvedLinks === undefined) {
                                    servicesWithReolvedLinks = [];
                                }
                                servicesWithReolvedLinks.push(service);
                            }
                        }
                    });
                }
            }
        }
        vm.services.serviceinfo = fakeGuest ? angular.copy(servicesWithReolvedLinks) : services2;
        servicesWithReolvedLinks = [];
    }
}]);

app.component('removeSpecificRequestForLocation', {
    controller: 'removeSpecificRequestForLocationController',
    bindings: { parentCtrl: '<' },
    template:`<div ng-if="$ctrl.getFakeGuest()" layout="row" class="bar alert-bar zero-margin-bottom" layout-align="center center">
                <span class="bar-text margin-right-small" translate="nui.request.signin"></span>
                <prm-authentication [is-logged-in]="false" flex="none"></prm-authentication>
              </div>`
});


// END AEON Links




})();