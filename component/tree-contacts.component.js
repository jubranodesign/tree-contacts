

var treeContactsController = function(treeContactsService) {
	var self = this;

    self.isActive = [];
    self.contactsList = treeContactsService.data;
   
    self.toggleGroup = function(contactId) {
        self.isActive[contactId] = !self.isActive[contactId];
    }  

    self.isGroupCanShow = function(group) {
    	return group.contacts && self.isActive[group.id];
    }  
}

//treeContactsController.$inject = ['treeContactsService'];

angular.module('treecontactsApp').component('treeContacts', {
    templateUrl: 'component/tree-contacts.template.html',
    controller: treeContactsController
     });