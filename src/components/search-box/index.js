import angular from 'angular';
import searchBox from './search-box.directive';

export default angular
  .module('searchBoxModule', ['templates'])
  .directive('searchBox', searchBox)
  .name;
