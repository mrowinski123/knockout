/**
 * Created by mrowinski on 14.12.2016.
 */

function MyViewModel() {
    this.firstName = ko.observable("Donald");
    this.lastName = ko.observable("Trump");
    this.fullText = ko.computed(function() {//computed property - wykorzystuje
        return "Hello, " + this.firstName() + " " + this.lastName();
    }, this);
}
function knockoutLoad()
{
    ko.applyBindings(new MyViewModel());//function to activate knockout
}































