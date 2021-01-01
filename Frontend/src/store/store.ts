// store.js
import Vue from "vue";

export default Vue.observable({
    activeServiceCalls: 0,
    breadcrumbs: [
        {
            to: { name: "Dashboard" },
            text: "Home"
        },
        {
            to: { name: "Dashboard" },
            text: "Dashboard"
        }
    ] as any[]
});
