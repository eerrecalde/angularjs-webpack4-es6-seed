import angular from 'angular';

// import 'angular-ui-router';
import components from './components/index';
import './index.scss';

// Create and bootstrap application
const requires = [
  components
];

angular.module('app', requires);

// angular.module('app').config(appConfig);

// angular.module('app').run(appRun);

// angular.bootstrap(document, ['app'], {
//   strictDi: true
// });
