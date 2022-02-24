public class getData {
    @Auraenabled
    public static List<Account> getRecord()
    {
       List<Account> accList = [Select  Name, Rating, AccountNumber, Phone from Account];
        if(accList != null && accList.size()>0){
            return accList;
        }
           
        else{return null;}
    }

}