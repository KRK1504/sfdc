public class updateAcc{
    public static void oppurtunityCount(List<Id> accIds){
        List<Account> accList = [select id, Totalopp__c from Account where Id in :accIds];
        List<Opportunity> oppsList = [select id from Opportunity where AccountId in :accIds];
        for(Account a : accList){
            a.TotalOpp__c= oppsList.size();
        }
        update accList;
    }
}