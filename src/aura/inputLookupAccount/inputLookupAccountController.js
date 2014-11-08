({
    handleInit : function(component, event, helper) {
        helper.refreshAccountOptions(component);
    },
    handleValueChange : function(component, event, helper) {
        component.set("v.value", event.target.value);
    }
})