({
    refreshAccountOptions : function(component) {
        var self = this;  // safe reference
        
        // Create an action to invoke the Apex controller method
        // to return a list of Account records to be used
        // as the options in the picklist
        var refreshAction = component.get("c.getAccounts");
        refreshAction.setCallback(self, function(a) {
            console.log("returned: %o", a.getReturnValue());
            
            var options = [];
            a.getReturnValue().forEach(function(element, index, array) {
                var option = new Object();
                option.value = element.Id;
                option.label = element.Name;
                options.push(option);
            });
            
            component.set("v.accountOptions", options);
        });
        
        // Enqueue the action
        $A.enqueueAction(refreshAction);
    }
})