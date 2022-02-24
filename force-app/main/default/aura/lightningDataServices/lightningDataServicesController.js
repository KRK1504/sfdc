({
	getAccountInfo : function(component, event, helper) {
	var recordId =component.get("v.recordId");
     component.set("v.recordId",recordId)
    },
    handleSuccess:function(component, event, helper){
        alert("Saved Successfully !!");
        var successMessage = $A.get("e.force:showToast");
        successMessage.setParams({
            "title":"Success",
            "type":"Success",
            "duration":"2000",
            "message":"The Records has been created Successfully."
        });
        successMessage.fire();
        $A.get('e.force:refreshView').fire();
    },
    handleError:function(component, event, helper){
        alert("Saved Successfully !!");
        var successMessage = $A.get("e.force:showToast");
        successMessage.setParams({
            "title":"Error",
            "type":"Error",
            "duration":"2000",
            "message":"The Records has been created Successfully."
        });
        successMessage.fire();
        $A.get('e.force:refreshView').fire();
    }
})