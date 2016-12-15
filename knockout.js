var SimpleListModel = function(items) {

    var person={
        id: "",
        name: "JohnDoe"
    }

    this.persons = ko.observableArray(items);
    this.personsToAdd = ko.observable("");

    this.addPersons = function() {
        if (this.personsToAdd() != "") {
            this.persons([]);//Clears the list of persons
            for(var i=0; i<this.personsToAdd();i++){
                person.id=i;
                this.persons.push(person); // Adds the item. Writing to the "items" observableArray causes any associated UI to update.
            }
            this.personsToAdd("");// Clears the text box, because it's bound to the "itemToAdd" observable
        }
    }.bind(this);  // Ensure that "this" is always this view model

};

ko.applyBindings(new SimpleListModel([]));