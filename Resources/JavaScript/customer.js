///car-reserved-by-list
///item-reserved-by-list
//sprawdzanie czy user istnieje


function showReserved(category){
    //    console.log(city_id);
    //category items/cars
    var route= 'http://127.0.0.1:5000/' + category + '-reserved-by-list';
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: route,
        headers:{
            Authorization: 'JWT ' + localStorage.getItem('access_token')
        },
        success: function(data){

            console.log(data);
            $.each(data, function(index, type){
                //     console.log(data);
                console.log(index);
                console.log(type);
                //     if(category === 'items'){
                HTMLGenerator(type, index,"reserved_" + category + "_table_template", "table_container");
                //     }
                //     else if(category === 'cars'){
                //         HTMLGenerator(branch[city_id-1].cars, index,"cars_table_template", "table_container");}
                //     else if(category === 'users'){
                //         HTMLGenerator(branch[city_id-1].users, index, "users_table_template", "table_container");};


            })

        },
        error: function(data){
            console.log('bad');
        }
    })



}
function HTMLGenerator(data, id, template, container){
    //        console.log(data);
    //        console.log(id);

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
                        onConfirm: function(){
                           cancelReservation(cancel_reservation_id, cancel_reservation_branch, cancel_reservation_name, cancel_reservation_category)
                            
                        },
                        onCancel: function(){


                        }
                    });
    
    
}
var cancel_reservation_id = ""
var cancel_reservation_branch = ""
var cancel_reservation_name = ""
var cancel_reservation_category = ""
function cancelReservationProperties(id, branch, name, category){
cancel_reservation_id = id
cancel_reservation_branch = branch
cancel_reservation_name = name
cancel_reservation_category = category
    
}
function cancelReservation(item_id, branch, item_name, category){

//     '/<string:branch_name>/item/cancel-reservation/<string:name>
    var route ="http://127.0.0.1:5000/"+branch+'/'+category+'/cancel-reservation/'+item_name

    console.log('cancel reservation');
        $.ajax({

        type: 'PUT',
        contentType: "application/json",
        url: route,
        headers:{
            Authorization: 'JWT ' + localStorage.getItem('access_token')

        },

        success: function(data){
            showReserved(cancel_reservation_category)
//                console.log('success');


        },
        error: function(data){
            console.log('error');

        }
    })
    
    
}

function changePassword(){
    console.log('reset password');
    ///change-password
    var old_pass =document.getElementById("old_password").value;

    var new_pass= document.getElementById("new_password").value;
    console.log(old_pass)
    console.log(new_pass)
        var data_to_be_sent={
            "old_password": old_pass,
            "new_password": new_pass
        };
    $.ajax({

        type: 'PUT',
        contentType: "application/json",
        url: "http://127.0.0.1:5000/change-password",
        headers:{
            Authorization: 'JWT ' + localStorage.getItem('access_token')

        },
            data: JSON.stringify(data_to_be_sent),
        success: function(data){
            window.location= 'continue.html';

//            console.log(data);
            $.each(data, function(index, type){
//                console.log(index);
//                console.log(type);
                HTMLGenerator(type, index,"reserved_" + category + "_table_template", "table_container");

            })

        },
        error: function(data){
//            console.log('error');
            console.log(data);
        }
    })};
function showResetPasswordForm(){
    console.log('show password form');


    document.getElementById("password-reset-form-container").classList.remove('hidden');
}








