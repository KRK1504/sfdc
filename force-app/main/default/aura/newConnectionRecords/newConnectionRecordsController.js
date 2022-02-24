({
    getRecord : function(component, event, helper) {
        component.set('v.columns', [
            {label:'Name', fieldName:'Name', type:'text', editable:true},
            {label:'Account Number', fieldName:'AccountNumber', type:'text', editable:true},
            {label:'Rating', fieldName:'Rating', type:'text', editable:true},
            {label:'Phone', fieldName:'Phone', type:'text', editable:true},
            
        ]);
            var fetchData = component.get("c.getRecord");
            fetchData.setParams({
            
            });
            fetchData.setCallback(this, function(response){
            var state = response.getState();
            //alert('state' +state);
            if(state== 'SUCCESS'){
            var successMessage = $A.get('e.force:showToast');
            successMessage.setParams({
            "title": "Success" ,
            "type":"Success",
            "message":"There is no issue with your Input"
            });
            successMessage.fire();
            }
            else{
            var errorMessage = $A.get('e.force:showToast');
            errorMessage.setParams({
            "title": "Error!" ,
            "type":"error",
            "message":"There is some issue with your Input"
            });
            errorMessage.fire();
            }
            });
            $A.enqueueAction(fetchData);
            }
            })