import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

import {
  VlCore,
  VlUtil,
  VlGrid,
  VlColumn,
  VlRegion,
  VlLayout,
  VlTitle,
  VlInputField,
  VlCheckbox,
  VlDataTable,
  VlButton,
  VlInputGroup,
  VlFormMessageLabel,
  VlActionGroup,
  VlDropdownNavigation,
  VlLinkList,
  VlLinkListItem,
  VlLink,
  VlIcon,
  VlModal,
  VlModalToggle,
  VlFormMessageAnnotation,
  VlInfoTile,
  VlEqualHeight,
  VlRadio,
  VlRadioTile,
  VlInfoblock,
  VlContentHeader,
  VlContentHeaderEntity,
  VlContentHeaderTitle,
  VlDynamicLabel,
  VlProperties,
  VlPropertiesList,
  VlPropertiesLabel,
  VlPropertiesData,
  VlInputAddon,
  VlTooltip,
  VlFormValidation,
  VlFormMessageError,
  VlFormValidationObserver,
  VlAlert
} from'@govflanders/vl-ui-vue-components';

Vue.component('vl-grid', VlGrid);
Vue.component('vl-column', VlColumn);
Vue.component('vl-region', VlRegion);
Vue.component('vl-layout', VlLayout);
Vue.component('vl-title', VlTitle);
Vue.component('vl-input-field', VlInputField);
Vue.component('vl-checkbox', VlCheckbox);
Vue.component('vl-data-table', VlDataTable);
Vue.component('vl-button', VlButton);
Vue.component('vl-input-group', VlInputGroup);
Vue.component('vl-form-message-label', VlFormMessageLabel);
Vue.component('vl-action-group', VlActionGroup);
Vue.component('vl-dropdown-navigation', VlDropdownNavigation);
Vue.component('vl-link-list', VlLinkList);
Vue.component('vl-link-list-item', VlLinkListItem);
Vue.component('vl-link', VlLink);
Vue.component('vl-icon', VlIcon);
Vue.component('vl-modal', VlModal);
Vue.component('vl-form-message-annotation', VlFormMessageAnnotation);
Vue.component('vl-info-tile', VlInfoTile);
Vue.component('vl-radio', VlRadio);
Vue.component('vl-radio-tile', VlRadioTile);
Vue.component('vl-infoblock', VlInfoblock);
Vue.component('vl-content-header', VlContentHeader);
Vue.component('vl-content-header-entity', VlContentHeaderEntity);
Vue.component('vl-content-header-title', VlContentHeaderTitle);
Vue.component('vl-dynamic-label', VlDynamicLabel);
Vue.component('vl-properties', VlProperties);
Vue.component('vl-properties-label', VlPropertiesLabel);
Vue.component('vl-properties-list', VlPropertiesList);
Vue.component('vl-properties-data', VlPropertiesData);
Vue.component('vl-input-addon', VlInputAddon);
Vue.component('vl-form-validation', VlFormValidation);
Vue.component('vl-form-message-error', VlFormMessageError);
Vue.component('vl-form-validation-observer', VlFormValidationObserver);
Vue.component('vl-alert', VlAlert);


Vue.directive('vl-modal-toggle', VlModalToggle);
Vue.directive('vl-equal-height', VlEqualHeight);
Vue.directive('vl-tooltip', VlTooltip);

Vue.use(VlCore);
Vue.use(VlUtil);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
