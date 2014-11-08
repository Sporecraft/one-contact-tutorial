<aura:application controller="ccmt.OneContactController">
    <aura:attribute name="thisContact" type="Contact"
                    default="{ 'sobjectType': 'Contact' }"/>
    
    <!-- Event handlers -->
    <aura:handler name="init" value="{!this}" action="{!c.handleInit}"/>
    
    <!-- UI components -->
    <ccmt:editContact value="{!v.thisContact}" save="{!c.saveThisContact}"/>
</aura:application>