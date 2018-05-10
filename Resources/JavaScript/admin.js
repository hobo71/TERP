/////
var role = "";

var http = new XMLHttpRequest();
var url = 'http://127.0.0.1:5000/continue';
var method = 'GET';

http.open(method, url);
http.setRequestHeader('Authorization', 'JWT ' + localStorage.getItem('access_token'));
http.onreadystatechange = function() {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
        console.log('success');
        console.log(JSON.parse(http.responseText).role);
        role = JSON.parse(http.responseText).role;
        if(JSON.parse(http.responseText).role !=='admin'){
            var dashboard_link = role + '-dashboard.html';
            location.href=dashboard_link;

        }



    } else if (http.readyState === XMLHttpRequest.DONE && http.status !== 200) {
        console.log('Error!');


        location.href='index.html';
    }
};
http.send();

if(localStorage.getItem('access_token') !== null){
    HTMLGeneratorForLoggedUser("logged_user_template", "log_buttons_container")
}

            $('[data-toggle=confirmation]').confirmation({
  rootSelector: '[data-toggle=confirmation]',
    btnOkLabel: 'Yes',
    btnCancelLabel: 'No',
//   other options
    onConfirm: function(){
              console.log(property_name)
    console.log(property_category) 
        
    },
    onCancel: function(){
        
        
    }
});








//    function HTMLGeneratorForItemsTable(data, id){
////        console.log(data);
////        console.log(id);
//        
//        var rawTemplate = document.getElementById("items_table_template").innerHTML;
////        console.log(rawTemplate);
//        var compiledTemplate = Handlebars.compile(rawTemplate);
////        console.log(compiledTemplate);
//        var generatedHTML = compiledTemplate(data);
////        console.log(generatedHTML);
//        var container = document.getElementById("table_container");
////        console.log(container);
//        container.innerHTML= generatedHTML;
//    }

//    function HTMLGeneratorForCarsTable(data, id){
////        console.log(data);
////        console.log(id);
//        
//        var rawTemplate = document.getElementById("cars_table_template").innerHTML;
////        console.log(rawTemplate);
//        var compiledTemplate = Handlebars.compile(rawTemplate);
////        console.log(compiledTemplate);
//        var generatedHTML = compiledTemplate(data);
////        console.log(generatedHTML);
//        var container = document.getElementById("table_container");
////        console.log(container);
//        container.innerHTML= generatedHTML;
//    }







//
//function getInfo(name){
////    console.log(name);
////    console.log(branch_data);
////    console.log(branch_data.branches);
//    for (i in branch_data.branches){
////        console.log(branch_data.branches[i]);
//        var data = branch_data.branches[i];
//        for (var key in data) {
//            if (data.hasOwnProperty(key)) {
//                if(data.hasOwnProperty(key)){
////                    if (key !== 'items' && key !== 'users' && key !== 'cars'){
////                console.log(key + " -> " + data[key]);}
////                console.log(key)
//                    }
//                
//                
//        }
//           
//}HTMLGeneratorForTableBody(data, key);
//    }
//
//
//    }
//        function HTMLGeneratorForTableBody(data, id){
//        var rawTemplate = document.getElementById("branches_table_template").innerHTML;
//            console.log(rawTemplate);
//        var compiledTemplate = Handlebars.compile(rawTemplate);
//            console.log(compiledTemplate);
//        var generatedHTML = compiledTemplate(data);
//            console.log(generatedHTML);
//        var container = document.getElementById("table_container");
//            console.log(container);
//        container.innerHTML= generatedHTML;
//            
//    }





 


var form_template = ""
var last_form = ""

function createForm(category){
    form_template = category + '_creation_form'
    document.getElementById('branch_creation_form').classList.add('hidden');
    document.getElementById('user_creation_form').classList.add('hidden');
    document.getElementById('car_creation_form').classList.add('hidden');
    document.getElementById('item_creation_form').classList.add('hidden');
    document.getElementById(form_template).classList.remove('hidden');

};
function updateForm(category){
        form_template = category + '_update_form'
    document.getElementById('branch_update_form').classList.add('hidden');
    document.getElementById('user_update_form').classList.add('hidden');
    document.getElementById('car_update_form').classList.add('hidden');
    document.getElementById('item_update_form').classList.add('hidden');
    document.getElementById(form_template).classList.remove('hidden');
    
}
function HTMLFormGenerator(template, container){
    var rawTemplate = document.getElementById(template).innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var generatedHTML = compiledTemplate();
    var container = document.getElementById(container);
    container.innerHTML= generatedHTML;
}


function HTMLGeneratorForResponse(response, outcome){
    var rawTemplate = document.getElementById("response_template").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    if(response == null && outcome == 1){
        response="Success!"
    }else if(response == null && outcome == 0){
        response="Unknown error :("
    }
    console.log(response);
    var generatedHTML = compiledTemplate(response);
    var response_container = document.getElementById("response_container");
    response_container.innerHTML= generatedHTML;

    if(outcome === 1){

        response_container.classList.add("positive");
        response_container.classList.remove("hidden");
        setTimeout(function(){
            response_container.classList.remove("positive");
            $(response_container).addClass('hidden');
        }, 3000);

    }else{
        response_container.classList.add("negative");
        response_container.classList.remove("hidden");
        setTimeout(function(){
            response_container.classList.remove("negative");
            $(response_container).addClass('hidden');
        }, 3000);
    }
}
