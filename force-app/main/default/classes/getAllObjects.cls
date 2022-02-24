public class getAllObjects {
    @Auraenabled
    public static List<Account> allObjectsUsingSoql()
    {
        
        List<Account> accountList = [SELECT Name, Rating, Phone From Account];
        return accountList;
    }
    
}