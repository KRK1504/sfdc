trigger contactTrigger on Contact (after insert, after delete)
{
    if(Trigger.isAfter)
    {
        if(Trigger.isInsert){
            contactTrigger.updateContactCountOnAccount(Trigger.New);
        }
        if(Trigger.isDelete){
            contactTrigger.updateContactCountOnAccount(Trigger.old);
        }
    }
}