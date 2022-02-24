public class sampleCal {
    @Auraenabled
    public static integer addingNumbers(integer value1, integer value2){
        integer finalResult;
        finalResult=value1+value2;
        system.debug('finalResult '+finalResult);
        return finalResult;
    }
}