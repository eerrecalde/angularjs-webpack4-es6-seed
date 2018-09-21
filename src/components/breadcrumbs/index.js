import angular from 'angular';
import breadcrumbs from './breadcrumbs.directive';

export default angular
  .module('breadcrumbsModule', ['templates'])
  .directive('breadcrumbs', breadcrumbs)
  .name;
