oneContact.app demo
===================

Demonstration of the following Lightning capabilities:

* How to set Lookup or Master-Detail values using a custom input component
* How to pass an _action_ as an attribute to a custom component, to
  create an effect similar to `ui:button`'s `press` attribute
* How to initialize sObject attributes using Apex controller methods

To deploy the demo:

1. Copy and paste all of the source code into your DE org
2. Replacing references to the `ccmt` namespace with 
   your org's own package namespace
3. Replace "ccmt-dev-ed.my.salesforce.com" in `editContact.cmp` with
   your regular Salesforce domain, so that the link to open the Contact
   record works smoothly