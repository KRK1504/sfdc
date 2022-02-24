({
    newConnection : function(component, event, helper) {
        var recordId = component.get("v.recordId");
        component.set("v.recordId", recordId)		
    },
    handleSuccess: function(component, event, helper) {
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "title": "Success!",
            "duration": 2000,
            "type":"Success",
            "message": "The record has been updated successfully."
            
        });
        toastEvent.fire();
        $A.get('e.force:refreshView').fire();
    }
})