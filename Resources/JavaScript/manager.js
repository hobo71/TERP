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
        if(JSON.parse(http.responseText).role !=='manager'){
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

var category_city = "";
function setCity(city){
    category_city= city;
    console.log(category_city)

    
//     document.getElementById('city_that_was_chosen').classList.add('hidden');
//    document.getElementById('city_that_was_chosen').classList.remove('hidden');
    document.getElementById('bonus_buttons_container').classList.add('hidden');
   
    document.getElementById('bonus_buttons_container').classList.remove('hidden');
        document.getElementById('city_that_was_chosen').innerHTML = capitalizeFirstLetter(category_city)
    
    }
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function getCars(){
    getCall(category_city, 'cars');
};
function getItems(){
    getCall(category_city, 'items');
};
function getUsers(){
    getCall(category_city, 'users');
};
function getCustomers(){
    getCall(category_city, 'customers');
};

function getCall(city, category ){
//    console.log(city);
//    console.log(category);
    if(category === 'customers'){
        var route = 'http://127.0.0.1:5000/customers'
    }else{
    var route = 'http://127.0.0.1:5000/' + city + '/' + category;    
    }
    
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: route,
        headers:{
            Authorization: 'JWT ' + localStorage.getItem('access_token')
        },
        success: function(data){
            $.each(data, function(index, something){
                console.log(index)
                console.log(something)
                if(index === 'items'){
                    HTMLGenerator(something, index,"items_table_template", "table_container");}
                else if(index === 'cars'){
                    HTMLGenerator(something, index,"cars_table_template", "table_container");}

                else if(index === 'customers'){
                    HTMLGenerator(something, index, "customers_table_template", "table_container");}
                ;
            })
        },
        error: function(data){
        }
    })

}    






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



//////////////admin get

var branch_data;
function getBranches(){
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: 'http://127.0.0.1:5000/branches',
        headers:{
            Authorization: 'JWT ' + localStorage.getItem('access_token')
        },
        success: function(data){
            branch_data = data;
            $.each(data, function(index, branch){
                HTMLGeneratorForBranches(branch, index);  
            })
        },
        error: function(data){
        }

    })
    

}





//function getStuff(city_id, category){
//        console.log(city_id);
//        console.log(category);
//    //category items/cars
//    //    var constructed_url= 'http://127.0.0.1:5000/branches' + city_name + '/' +category;
//    $.ajax({
//        type: 'GET',
//        contentType: "application/json",
//        url: 'http://127.0.0.1:5000/branches',
//        headers:{
//            Authorization: 'JWT ' + localStorage.getItem('access_token')
//        },
//        success: function(data){
//
//            //          console.log(data);
//            $.each(data, function(index, branch){
//                //     console.log(data);
//                     console.log(index);
//                     console.log(branch);
//                //     console.log(branch[0].items);
//                if(category === 'items'){
//                    HTMLGenerator(branch[city_id-1].items, index,"items_table_template", "table_container");}
//                else if(category === 'cars'){
//                    HTMLGenerator(branch[city_id-1].cars, index,"cars_table_template", "table_container");}
//                else if(category === 'users'){
//                    HTMLGenerator(branch[city_id-1].users, index, "users_table_template", "table_container");};
//
//
//            })
//
//        },
//        error: function(data){
//            console.log('bad');
//        }
//    })
//
//
//
//}
function getPositions(){
    console.log('positions');
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: 'http://127.0.0.1:5000/positions',
        headers:{
            Authorization: 'JWT ' + localStorage.getItem('access_token')
        },
        success: function(data){
            //            var branchesArray = data;
            //            console.log(data);
            //            console.log('good');
            //            var chosenCityId = 999;
            $.each(data, function(index, element){
                //                var carsArray = cars;
                //                console.log('bad');
                //                console.log(index);
                //                console.log(branch);
                //                    $.each(position, function(index, element){
                //                        console.log('inside 2nd loop');
                //                        console.log(index);
                //                        console.log(element);
                //                        console.log(branch.city);
                HTMLGeneratorForPositions(element, index);  
                //                    })
            })
        },
        error: function(data){
            console.log('bad');
        }
    })};

function getPosition(role_id){

    role_id = role_id - 1;
    //    console.log(role_id);
    //    console.log('display chosen role');
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: 'http://127.0.0.1:5000/positions',
        headers:{
            Authorization: 'JWT ' + localStorage.getItem('access_token')
        },
        success: function(data){
            //            var branchesArray = data;
            //                        console.log(data);
            //            console.log('good');
            //            var chosenCityId = 999;
            $.each(data, function(index, element){
                //console.log(data);
                //console.log(index);
                //console.log(element);
                //                console.log(element[role_id].users);

                HTMLGenerator(element[role_id].users, index, "positions_table_template", "table_container");
            })
        },
        error: function(data){
            console.log('bad');
        }
    })};
//    function HTMLGeneratorForUsers(data, id){
////        console.log(data);
////        console.log(id);
//        
//        var rawTemplate = document.getElementById("users_table_template").innerHTML;
////        console.log(rawTemplate);
//        var compiledTemplate = Handlebars.compile(rawTemplate);
////        console.log(compiledTemplate);
//        var generatedHTML = compiledTemplate(data);
////        console.log(generatedHTML);
//        var container = document.getElementById("table_container");
////        console.log(container);
//        container.innerHTML= generatedHTML;
//    }

function HTMLGeneratorForBranches(data, id){
    var rawTemplate = document.getElementById("branches_table_template").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var generatedHTML = compiledTemplate(data);
    var container = document.getElementById("table_container");
    container.innerHTML= generatedHTML;
                        $('[data-toggle=confirmation]').confirmation({
                      rootSelector: '[data-toggle=confirmation]',
                        btnOkLabel: 'Yes',
                        btnCancelLabel: 'No',
                    //   other options
                        onConfirm: function(){
//                                  console.log(property_name)
//                        console.log(property_category) 
                            removeBranch(property_name)
                            
                        },
                        onCancel: function(){


                        }
                    });
    
}

function HTMLGenerator(data, id, template, container){
            console.log(data);
            console.log(id);

    var rawTemplate = document.getElementById(template).innerHTML;
    //        console.log(rawTemplate);
    var compiledTemplate = Handlebars.compile(rawTemplate);
    //        console.log(compiledTemplate);
    var generatedHTML = compiledTemplate(data);
    //        console.log(generatedHTML);
    var container = document.getElementById(container);
    //        console.log(container);
    container.innerHTML= generatedHTML;
                            $('[data-toggle=confirmation]').confirmation({
                      rootSelector: '[data-toggle=confirmation]',
                        btnOkLabel: 'Yes',
                        btnCancelLabel: 'No',
                    //   other options
                        onConfirm: function(){
//                                  console.log(property_name)
                            
                        console.log('id') 
                        console.log(id) 
//                            if(id ==='cars' || id==='items'){
//                            if(deletion === 1){
//                            removeStuff(delete_caritem_property_name, delete_caritem_property_category, delete_caritem_property_branch_id )    
//                                deletion = 0
//                            }
//                            else if(cancel === 1){
//                                console.log('cancelling')
                                cancelReservation( cancel_caritem_property_name, cancel_caritem_property_category)
//                                cancel = 0
//                            }
                            },

                            
                        
                        onCancel: function(){


                        }
                    });
    
    
    
    
}
var cancel_caritem_property_branch_id= "";
var cancel_caritem_property_id= "";
var cancel_caritem_property_name= "";
var cancel_caritem_property_category= "";
var cancel = 0;

function setCancelPropertiesForCarsOrItems(name, category){
// cancel_caritem_property_branch_id= branch_id;
 cancel_caritem_property_name= name;
 cancel_caritem_property_category= category;
// cancel_caritem_property_id= id;
//    cancel = 1
//    console.log(cancel_caritem_property_branch_id)
//    console.log(cancel_caritem_property_id)
    console.log(cancel_caritem_property_name)
    console.log(cancel_caritem_property_category)
}

function cancelReservation( name, category){
//    console.log(id)
    console.log(name)
    console.log(category)
    //        console.log(id)
//        console.log(category)
//        console.log('cancelling')
//    var city=999;
//    if(branch_id === 1){
//        city="gdansk"
//    }else if (branch_id === 2){
//        city="krakow"
//    }else if (branch_id === 3){
//        city="praga"
//    };
    //console.log(city)
    var route = 'http://127.0.0.1:5000/' + category_city + '/' + category +/cancel-reservation/+ name;
    //    '/<string:branch_name>/item/cancel-reservation/<string:name>'
    $.ajax({
        type: 'PUT',
        contentType: "application/json",
        url: route,
        headers:{
            Authorization: 'JWT ' + localStorage.getItem('access_token')
        },
        success: function(data){
            console.log('success');
            getCall(category_city, cancel_caritem_property_category +'s')

        },
        error: function(data){
            console.log('failure');
            
        }

           
        
    
    })
};


function HTMLGeneratorForPositions(data, id){
    //    console.log('data');
    //    console.log(data);
    //    console.log('id');
    //    console.log(id);
    var rawTemplate = document.getElementById("position_buttons_template").innerHTML;
    //    console.log(rawTemplate);
    var compiledTemplate = Handlebars.compile(rawTemplate);
    //    console.log(compiledTemplate);
    var generatedHTML = compiledTemplate(data);
    //    console.log(generatedHTML);
    var container = document.getElementById("bonus_buttons_container");
    //    console.log(container);
    container.innerHTML= generatedHTML;
}




function getLogs(){
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: 'http://127.0.0.1:5000/logs',
        headers:{
            Authorization: 'JWT ' + localStorage.getItem('access_token')
        },
        success: function(data){
            console.log('success')
            console.log(data.logs)
//            branch_data = data;
            $.each(data, function(index, data){
                HTMLGenerator(data, index, 'log_table_template','log_table_container');  
            })
        },
        error: function(data){
            console.log('fail')
            console.log(data)
        }

    })
}

//function getPositions(){
//    getCall('positions');
//};
