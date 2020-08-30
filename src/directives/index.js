import Vue from "vue";

Vue.directive("focus", {
  inserted: function(element) {
    element.focus();
  }
});
