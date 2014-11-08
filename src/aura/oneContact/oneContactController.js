({
    handleInit : function(component, event, helper) {
        helper.initThisContact(component);
    },
    saveThisContact : function(component, event, helper) {
        var self = this;  // safe reference
        
        // Create an action to invoke the Apex controller
        // method to insert a new Contact or update
        // an existing Contact
        var saveAction = component.get("c.editContact");
        saveAction.setParams({
            "newContact": component.get("v.thisContact")
        });
        saveAction.setCallback(self, function(a) {
            console.log("returned: %o", a.getReturnValue());
            var recordId = a.getReturnValue();
            
            if (recordId == null) {
                alert("See Apex Debug Log");
            } else {
                component.set("v.thisContact.Id", recordId);
            }
        });
        
        // Enqueue the action
        $A.enqueueAction(saveAction);
    }
})