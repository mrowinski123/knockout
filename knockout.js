/**
 * Created by mrowinski on 14.12.2016.
 */
var data={}; //container for objects
var temp;
var record="";
var viewModel;
function MyViewModel() {
    this.size = ko.observable("3");
    temp = this.size();
    this.fullText = ko.computed(function() {
        if (this.size != 0) {
            console.log(temp);
           /* for (var i = 0; i < temp; i++) {
                data['Person ' + i] = {
                    'id': i,
                    'name': "JohnDoe"
                };

            }
            for (var i in data) {
                var subObj = data[i];
                var buffor = [];
                record += "ID: " + subObj['id'] + " | ";
                record += "Name: " + subObj['name']+" || ";
                buffor.push(record);
            }
        }
        else
            alert("dupa");
        return record;**/
        return FillArray();
        }
    }, MyViewModel);
};


function FillArray(){
    for (var i = 0; i < temp; i++) {
        data['Person ' + i]={
            'id': i,
            'name': "JohnDoe"
        };

    }
    var buffor = [];
    for (var i in data) {
        var subObj = data[i];
        record += "ID: " + subObj['id'] + " | ";
        record += "Name: " + subObj['name']+" || ";
        buffor.push(record);
        record="";
    }
 $("#new").append(buffor);
    return buffor;
}

function knockoutLoad()
{
    viewModel = new MyViewModel();
    ko.applyBindings(viewModel);//function to activate knockout
};


$(document).ready(function(){
    $("#button").click(FillArray());
});
























