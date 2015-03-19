'use strict';

/**
 * @ngdoc function
 * @name seatReservationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the seatReservationApp
 */
angular.module('seatReservationApp')
    .controller('MainCtrl', function ($scope) {

        // Init layout
        $scope.rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
        $scope.cols = [1, 2, 3, 4, 5, 6, 7, 8];

        // Set reserved and selected
        var reserved = ['A2', 'A3', 'C5', 'C6', 'C7', 'C8', 'J1', 'J2', 'J3', 'J4'];
        var selected = [];

        // seat onClick
        $scope.seatClicked = function(seatPos) {
            console.log("Selected Seat: " + seatPos);
            var index = selected.indexOf(seatPos);
            if(index != -1) {
                // seat already selected, remove
                selected.splice(index, 1)
            } else {
                // new seat, push
                selected.push(seatPos);
            }
        }

        // get seat status
        $scope.getStatus = function(seatPos) {
            if(reserved.indexOf(seatPos) > -1) {
                return 'reserved';
            } else if(selected.indexOf(seatPos) > -1) {
                return 'selected';
            }
        }

        // clear selected
        $scope.clearSelected = function() {
            selected = [];
        }

        // show selected
        $scope.showSelected = function() {
            if(selected.length > 0) {
                alert("Selected Seats: \n" + selected);
            } else {
                alert("No seats selected!");
            }
        }

    });
