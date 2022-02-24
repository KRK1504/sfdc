public class contactTrigger {
    public static void updateContactCountOnAccount(List<contact> contList)
    {
        set<Id> accountIds = new set<Id>();
        for(contact con :contList){
            accountIds.add(con.accountid);
            }
        List<Account> accUpdtList = new List<Account>();
        For (Account acc : [Select Id, contact_count__c,(Select id from Contacts ) from Account where id In : accountIds])
        {
            acc.contact_count__c = acc.contacts.size();
            accUpdtList.add(acc);
        }
        update accUpdtList;        
    }

}