({
    childComponent : function(cmp,event)
    { 
        var cmpEvent = cmp.getEvent("sampleCmpEvent");
        var inputMessage = cmp.find('input1').get('v.value');
        cmpEvent.setParams({"message" : inputMessage});
        cmpEvent.fire();
    }
})