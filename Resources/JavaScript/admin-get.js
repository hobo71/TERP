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


function getCars(){
    getCall('cars');
};
function getItems(){
    getCall('items');
};
function getUsers(){
    getCall('users');
};
function getCustomers(){
    getCall('customers');
};

function getCall(type){
    console.log(type);
    var route = 'http://127.0.0.1:5000/' + type;
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: route,
        headers:{
            Authorization: 'JWT ' + localStorage.getItem('access_token')
        },
        success: function(data){
            $.each(data, function(index, something){
                if(index === 'items'){
                    HTMLGenerator(something, index,"items_table_template", "table_container");}
                else if(index === 'cars'){
                    HTMLGenerator(something, index,"cars_table_template", "table_container");}
                else if(index === 'users'){
                    HTMLGenerator(something, index, "users_table_template", "table_container");}
                else if(index === 'customers'){
                    HTMLGenerator(something, index, "customers_table_template", "table_container");}
                ;
            })
        },
        error: function(data){
        }
    })

}    




function getStuff(city_id, category){
        console.log(city_id);
        console.log(category);
    //category items/cars
    //    var constructed_url= 'http://127.0.0.1:5000/branches' + city_name + '/' +category;
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: 'http://127.0.0.1:5000/branches',
        headers:{
            Authorization: 'JWT ' + localStorage.getItem('access_token')
        },
        success: function(data){

            //          console.log(data);
            $.each(data, function(index, branch){
                //     console.log(data);
                     console.log(index);
                     console.log(branch);
                //     console.log(branch[0].items);
                if(category === 'items'){
                    HTMLGenerator(branch[city_id-1].items, index,"items_table_template", "table_container");}
                else if(category === 'cars'){
                    HTMLGenerator(branch[city_id-1].cars, index,"cars_table_template", "table_container");}
                else if(category === 'users'){
                    HTMLGenerator(branch[city_id-1].users, index, "users_table_template", "table_container");};


            })

        },
        error: function(data){
            console.log('bad');
        }
    })



}
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
                            if(id ==='cars' || id==='items'){
                            if(deletion === 1){
                            removeStuff(delete_caritem_property_name, delete_caritem_property_category, delete_caritem_property_branch_id )    
                                deletion = 0
                            }
                            else if(cancel === 1){
                                console.log('cancelling')
                                cancelReservation(cancel_caritem_property_id, cancel_caritem_property_branch_id,cancel_caritem_property_name, cancel_caritem_property_category)
                                cancel = 0
                            }}
                            else if(id === 'users'){
                               removeUser(username_to_be_removed)
                            }
                              else if(id === 'customers'){
                               removeCustomer(customer_to_be_removed)
                            }

                            
                        },
                        onCancel: function(){


                        }
                    });
    
    
    
    
}
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
