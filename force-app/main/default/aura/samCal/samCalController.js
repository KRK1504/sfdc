({
	samCal : function(component, event, helper) {
        var recordId = component.get("v.recordId");
        component.set("v.recordId", recordId)
	},
    handleSuccess:function(component, event, helper){
        alert("Saved Successfully !!");
        
    },
    handleError:function(component, event, helper){
        alert("Error Occured !!");
    }
})