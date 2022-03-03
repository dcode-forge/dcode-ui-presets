require('./bootstrap');
import Vue from "vue";
import WindowPal from "./lib/WindowPal.js";
import SelectFilter from "./lib/SelectFilter.js";
import BaseTable from "./vue/components/UI/BaseTable";

import vClickOutside from "v-click-outside";
// import Icon from "./vue/components/UI/Icon.vue";
// import InputWrapper from "./vue/components/UI/InputWrapper.vue";
import Modal from "./vue/components/UI/ModalWrapper.vue";
import MultiselectWrapper from '@dcodegroup-au/vue-multiselect/MultiselectWrapper.vue';
import SidePanel from "./vue/components/UI/SidePanel.vue";
import SidePanelJobCreate from "./vue/styleguide/SidePanelJobCreate.vue";
import VTable from "./vue/components/UI/VTable.vue";
import VDatePicker from "./vue/components/UI/VDatePicker.vue";
import DeleteModal from './vue/components/modals/DeleteModal.vue';
import DeleteModalTrigger from './vue/styleguide/DeleteModalTrigger.vue';
import JobPanelTrigger from './vue/styleguide/JobPanelTrigger.vue';

// Vue.component("Icon", Icon);
// Vue.component("InputWrapper", InputWrapper);
Vue.component("MultiselectWrapper", MultiselectWrapper);
Vue.component("Modal", Modal);
Vue.component("DeleteModal", DeleteModal);
Vue.component("DeleteModalTrigger", DeleteModalTrigger);
Vue.component("VDatePicker", VDatePicker);
Vue.component("VTable", VTable);
Vue.component("BaseTable", BaseTable);
Vue.component("SidePanel", SidePanel);
Vue.component("SidePanelJobCreate", SidePanelJobCreate);
Vue.component("JobPanelTrigger", JobPanelTrigger);

window.onload = (event) => {
    window.pal = new WindowPal(window);
    let selectFilters = Array.from(document.querySelectorAll('.select-filter-input'));
    if(selectFilters.length){
        selectFilters.forEach(selectFilter => {
            new SelectFilter(selectFilter);
        });
    }
};

Vue.use(vClickOutside);
new Vue({
    el: "#app"
});
