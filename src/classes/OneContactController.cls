public class OneContactController {
    
    @AuraEnabled
    public static Id editContact(Contact newContact) {
        Id recordId = null;
        
        try {
            upsert newContact;
            recordId = newContact.Id;
        }
        catch (System.Exception caught) {
            System.debug('caught: ' + caught);
        }
        
        return recordId;
    }
    
    @AuraEnabled
    public static Contact newContact() {
        return (Contact)Contact.sObjectType.newSObject(null, true);
    }
}