/**
 * Created by mrowinski on 14.12.2016.
 */

function AppViewModel() {
    this.firstName = ko.observable("Donald");
    this.lastName = ko.observable("Trump");
    this.fullText = ko.computed(function() {
        return "Hello, " + this.firstName() + " " + this.lastName();
    }, this);
}
function onLoad()
{
    ko.applyBindings(new AppViewModel());
}































