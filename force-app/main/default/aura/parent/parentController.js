({
    parentComponent : function(cmp,event,helper)
    { 
     var outmessage = event.getParam("message");
     cmp.set("v.eventMessage", outmessage);
    }
})