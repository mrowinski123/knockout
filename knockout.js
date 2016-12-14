/**
 * Created by mrowinski on 09.12.2016.
 */
/*/**
 * Created by mrowinski on 05.12.2016.
 */


function AppViewModel() {
    this.firstName = ko.observable("Bert");
    this.lastName = ko.observable("Bertington");
    this.fullName = ko.computed(function() {
        return this.firstName() + " " + this.lastName();
    }, this);
}
function onLoad()
{
    ko.applyBindings(new AppViewModel());
}































