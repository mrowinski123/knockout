var SimpleListModel = function(items) {
    var person={
        id: "",
        name: "JohnDoe"
    }
    this.items = ko.observableArray(items);
    this.itemToAdd = ko.observable("");
    this.addItem = function() {
        if (this.itemToAdd() != "") {
            this.items([]);//Clears the list of persons
            for(var i=0; i<this.itemToAdd();i++){
                person.id=i;
                this.items.push(person); // Adds the item. Writing to the "items" observableArray causes any associated UI to update.
            }
            this.itemToAdd("");// Clears the text box, because it's bound to the "itemToAdd" observable
        }
    }.bind(this);  // Ensure that "this" is always this view model

};

ko.applyBindings(new SimpleListModel([]));