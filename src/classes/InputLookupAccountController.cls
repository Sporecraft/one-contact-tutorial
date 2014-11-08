public class InputLookupAccountController {
    
    @AuraEnabled
    public static List<Account> getAccounts() {
        return [
            SELECT Id, Name
            FROM Account
            ORDER BY LastModifiedDate DESC
            LIMIT 25
        ];
    }
}