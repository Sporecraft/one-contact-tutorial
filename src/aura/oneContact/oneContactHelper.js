({
    initThisContact : function(component) {
        var self = this;  // safe reference
        
        // Create an action to invoke the Apex controller method
        // which will return a new Contact record
        var initAction = component.get("c.newContact");
        initAction.setCallback(self, function(a) {
            component.set("v.thisContact", a.getReturnValue());
        });
        
        // Enqueue the action
        $A.enqueueAction(initAction);
    }
})