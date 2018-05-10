var property_category=""
var property_name=""
function setDeleteProperties(name, category) {
    property_category = category;
    property_name = name;
//    console.log(property_name)
//    console.log(property_category)
}


var delete_caritem_property_branch_id= "";
var delete_caritem_property_name= "";
var delete_caritem_property_category= "";
var deletion = 0

function setDeletePropertiesFotCarsOrItems(name,category, branch_id){
 delete_caritem_property_branch_id= branch_id;
 delete_caritem_property_name= name;
 delete_caritem_property_category= category;
    deletion = 1
    console.log('delete_caritem_property_branch_id')
    console.log(delete_caritem_property_branch_id)
    console.log('delete_caritem_property_name')
    console.log(delete_caritem_property_name)
    console.log('delete_caritem_property_category')
    console.log(delete_caritem_property_category)
}

var cancel_caritem_property_branch_id= "";
var cancel_caritem_property_id= "";
var cancel_caritem_property_name= "";
var cancel_caritem_property_category= "";
var cancel = 0;

function setCancelPropertiesForCarsOrItems(id,branch_id, name, category){
 cancel_caritem_property_branch_id= branch_id;
 cancel_caritem_property_name= name;
 cancel_caritem_property_category= category;
 cancel_caritem_property_id= id;
    cancel = 1
    console.log(cancel_caritem_property_branch_id)
    console.log(cancel_caritem_property_id)
    console.log(cancel_caritem_property_name)
    console.log(cancel_caritem_property_category)
}


function removeBranch(city_name){
    console.log('branch removal, redirect');
    console.log(city_name);
    var route = "http://127.0.0.1:5000/branch/" + city_name
    $.ajax({
        type: 'DELETE',
        contentType: "application/json",
        url: route,
        headers:{
            Authorization: 'JWT ' + localStorage.getItem('access_token')
        },
        success: function(data){
            console.log('success');
            getBranches()
        },
        error: function(data){
            console.log('error');
        }


    })

}


function removeStuff( name, category, branch_id){
    //    console.log(id)
    console.log(category)
    console.log('removing')
    var city=999;
    if(branch_id === 1){
        city="gdansk"
    }else if (branch_id === 2){
        city="krakow"
    }else if (branch_id === 3){
        city="praga"
    };
    console.log(city)
    //    /<string:branch_name>/item/<string:name>

    var route = 'http://127.0.0.1:5000/' + city + '/' + category + '/' + name;
    //    '/<string:branch_name>/item/cancel-reservation/<string:name>'
    $.ajax({
        type: 'DELETE',
        contentType: "application/json",
        url: route,
        headers:{
            Authorization: 'JWT ' + localStorage.getItem('access_token')
        },
        success: function(data){
            console.log('success');

            getCall(delete_caritem_property_category +'s')

                     
                
        },
        error: function(data){
            console.log('failure');
        }
    })


};
var customer_to_be_removed=""
function removeCustomerConfirmation(username){
    customer_to_be_removed=username;
    console.log(customer_to_be_removed);
}
function removeCustomer(username){
    console.log(username);
    var postData = {
        "username" : username,
        "password": "asdfasdf"
    };
    $.ajax({
        type: 'DELETE',
        contentType: "application/json",
        url: "http://127.0.0.1:5000/delete",
        data: JSON.stringify(postData),
        headers:{
            Authorization: 'JWT ' + localStorage.getItem('access_token')
        },
        success: function(data){
            console.log('success');
            getCall('customers')
        },
        error: function(data){
            console.log('failure');

        }


    })
}

var username_to_be_removed=""
function removeUserConfirmation(username){
    username_to_be_removed=username;
    console.log(username_to_be_removed);
}

function removeUser(username){
    console.log(username);
    var postData = {
        "username" : username,
        "password": "asdfasdf"
    };
    $.ajax({
        type: 'DELETE',
        contentType: "application/json",
        url: "http://127.0.0.1:5000/delete-user",
        data: JSON.stringify(postData),
        headers:{
            Authorization: 'JWT ' + localStorage.getItem('access_token')
        },
        success: function(data){
            console.log('success');
            getCall('users');
        },
        error: function(data){
            console.log('failure');

        }


    })
}


function cancelReservation(id, branch_id,name, category){
    //        console.log(id)
    //    console.log(category)
    //    console.log('cancelling')
    var city=999;
    if(branch_id === 1){
        city="gdansk"
    }else if (branch_id === 2){
        city="krakow"
    }else if (branch_id === 3){
        city="praga"
    };
    //console.log(city)
    var route = 'http://127.0.0.1:5000/' + city + '/' + category +/cancel-reservation/+ name;
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
            getCall(cancel_caritem_property_category +'s')

        },
        error: function(data){
            console.log('failure');
            
        }

           
        
    
    })
};