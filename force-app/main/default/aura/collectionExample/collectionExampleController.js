({
    addButtonClick:function(component, event, helper){
        alert('I m Here');
        var inp1=componet.find("inputval1").get("v.value");
        alert('input1');
        var inp2=componet.find("inputVal2").get("v.value");
        alert('input2');
        var inp3=componet.find("inputVal3").get("v.value");
        var inp4=componet.find("inputVal4").get("v.value");
        var mounika=component.get("c.integerList");
        mounika.setParams({
            "value1":inp1,
            "value2":inp2,
            "value3":inp3,
            "value4":inp4,
        });
        mounika.setCallback(this, function(response){
            var responseValue=response.getReturnValue();
            
            
            $A.enqueueAction(mounika);
        });
    }
})