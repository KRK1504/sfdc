({
    addMethod : function(component, event, helper) {     
        //Add numbers
        var num1 = component.get("v.num1");
        var num2 = component.get("v.num2");
        console.log(num1);
        console.log(num2);
        var sumResult = num1 + num2;
        component.set('v.sum', sumResult);
        
    }
})