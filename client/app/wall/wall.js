'use strict';

angular.module('erp2015App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile/:userId',
        templateUrl: 'app/wall/profile/profile.html',
        controller: 'ProfileCtrl',
        // authenticate: true,
        // data: {
        //   permissions: {
        //       only: [],
        //       redirectTo: 'coordPortalDashboard'
        //   }        
        // }                
      })
      .state('department', {
        url: '/department/:deptId',
        templateUrl: 'app/wall/department/department.html',
        controller: 'DepartmentCtrl',
        authenticate: true,
        data: {
          permissions: {
              only: [],
              redirectTo: 'coordPortalDashboard'
          }        
        }        
      })
      .state('subDepartment', {
        url: '/subDepartment/:subDeptId',
        templateUrl: 'app/wall/subDepartment/subDepartment.html',
        controller: 'SubDepartmentCtrl',
        authenticate: true,
        data: {
          permissions: {
              only: [],
              redirectTo: 'coordPortalDashboard'
          }        
        }        
      });
  });