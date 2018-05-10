function createUser(){
        var username = document.getElementById("user_creation_name").value;
        //            console.log(username);
        var userpass = document.getElementById("user_creation_password").value;
        //            console.log(password);
        var user_first_name = document.getElementById("user_creation_first_name").value;
        //            console.log(user_first_name);
        var user_last_name = document.getElementById("user_creation_last_name").value;
        //             console.log(user_last_name);
        var user_country = document.getElementById("user_creation_country").value;
        //             console.log(user_country);
        var user_postal_code = document.getElementById("user_creation_postal_code").value;
        //             console.log(user_postal_code);
        var user_city = document.getElementById("user_creation_city").value;
        //            console.log(user_city);
        var user_street = document.getElementById("user_creation_street").value;
        //             console.log(user_street);
        var user_email = document.getElementById("user_creation_email").value;
        //             console.log(user_email);
        var user_phone = document.getElementById("user_creation_phone").value;
        //             console.log(user_phone);
        var user_branch_id = document.getElementById("user_creation_branch_id").value;
        //             console.log(user_branch_id);
        var user_position_id = document.getElementById("user_creation_position_id").value;
        //             console.log(user_position_id);
        var user_salary = document.getElementById("user_creation_salary").value;
                 console.log(user_salary);


        var postData={
            "username": username,
            "password": userpass,
            "first_name": user_first_name,
            "last_name": user_last_name,
            "country": user_country,
            "city": user_city,
            "postal_code": user_postal_code,
            "street": user_street,
            "email": user_email,
            "phone": user_phone,
            "branch_id": user_branch_id,
            "position_id": user_position_id,
            "salary": user_salary
        };
    
        $.ajax({
            url:"http://127.0.0.1:5000/register-user",
            type: "POST",
            contentType: "application/json",
            headers:{
                Authorization: "JWT " + localStorage.getItem('access_token')
            },
            data:JSON.stringify(postData),
            success: function(data){
                HTMLGeneratorForResponse(data.responseText, 1)
                getCall('users')
            },
            error: function(data){
                HTMLGeneratorForResponse(data.responseText, 0)
            },
            complete: function(data){
            }
    
        })//ajax end
}


function addBranch(){
        console.log('branch added')
        var country = document.getElementById("branch_creation_country").value;
        //            console.log(username);
        var city = document.getElementById("branch_creation_city").value;
        //            console.log(password);
        var postal_code = document.getElementById("branch_creation_postal_code").value;
        //            console.log(user_first_name);
        var street = document.getElementById("branch_creation_street").value;
        //             console.log(user_last_name);
        var email = document.getElementById("branch_creation_email").value;
        //             console.log(user_country);
        var phone = document.getElementById("branch_creation_phone").value;
        var name = document.getElementById("branch_creation_name").value;



    var postData={

        "country": country,
        "city": city,
        "postal_code": postal_code,
        "street": street,
        "email": email,
        "phone": phone,
    };

    $.ajax({
        url:"http://127.0.0.1:5000/branch/" + name,
        type: "POST",
        contentType: "application/json",
        headers:{
            Authorization: "JWT " + localStorage.getItem('access_token')
        },
        data:JSON.stringify(postData),
        success: function(data){
            console.log('success')
            HTMLGeneratorForResponse(data.responseText, 1)
            getBranches();
        },
        error: function(data){
            console.log('error')
            HTMLGeneratorForResponse(data.responseText, 0)

        },
        complete: function(data){
        }

    })//ajax end
}


function addCar(){
    var branch_name = document.getElementById("car_creation_branch_name").value;
    //            console.log(username);
    var name = document.getElementById("car_creation_name").value;
    //            console.log(password);
    var price = document.getElementById("car_creation_price").value;
    //            console.log(user_first_name);
    var year = document.getElementById("car_creation_year").value;
    //             console.log(user_last_name);
    var car_type = document.getElementById("car_creation_car_type").value;
    //             console.log(user_country);
    var vendor = document.getElementById("car_creation_vendor").value;
    //             console.log(user_postal_code);
    var model = document.getElementById("car_creation_model").value;
    //            console.log(user_city);
    var colour = document.getElementById("car_creation_colour").value;
    //             console.log(user_street);
    var seats = document.getElementById("car_creation_seats").value;
    //             console.log(user_email);
    var transmission = document.getElementById("car_creation_transmission").value;
    var drive = document.getElementById("car_creation_drive").value;
    //             console.log(user_phone);
    var fuel = document.getElementById("car_creation_fuel").value;
    //             console.log(user_branch_id);
    var engine_power = document.getElementById("car_creation_engine_power").value;
    //             console.log(user_position_id);
    var branch_id = document.getElementById("car_creation_branch_id").value;
    //             console.log(user_salary);


    var postData={
        "price": price,
        "year": year,
        "car_type": car_type,
        "vendor": vendor,
        "model": model,
        "colour": colour,
        "seats": seats,
        "transmission": transmission,
        "drive":drive,
        "fuel": fuel,
        "engine_power": engine_power,
        "branch_id": branch_id,


    };

    $.ajax({
        url:"http://127.0.0.1:5000/" + branch_name + '/car/' + name,
        type: "POST",
        contentType: "application/json",
        headers:{
            Authorization: "JWT " + localStorage.getItem('access_token')
        },
        data:JSON.stringify(postData),
        success: function(data){
            console.log('succcess')
            HTMLGeneratorForResponse(data.responseText, 1)
            getCall('cars')
        },
        error: function(data){
            console.log('failure')
            HTMLGeneratorForResponse(data.responseText, 1)
            
        },
        complete: function(data){
        }

    })//ajax end
}


function addItem(){

    var branch_name = document.getElementById("item_creation_branch_name").value;
    //            console.log(username);
    var name = document.getElementById("item_creation_name").value;
    //            console.log(password);
    var price = document.getElementById("item_creation_price").value;
    //            console.log(user_first_name);
    var year = document.getElementById("item_creation_year").value;
    //             console.log(user_last_name);
    var item_type = document.getElementById("item_creation_item_type").value;
    //             console.log(user_country);
    var vendor = document.getElementById("item_creation_vendor").value;
    //             console.log(user_postal_code);
    var model = document.getElementById("item_creation_model").value;
    //            console.log(user_city);

    var branch_id = document.getElementById("item_creation_branch_id").value;
    //             console.log(user_salary);
    ///<string:branch_name>/item/<string:name>

    var postData={
        "price": price,
        "year": year,
        "item_type": item_type,
        "vendor": vendor,
        "model": model,
        "branch_id": branch_id,


    };

    $.ajax({
        url:"http://127.0.0.1:5000/" + branch_name + '/item/' + name,
        type: "POST",
        contentType: "application/json",
        headers:{
            Authorization: "JWT " + localStorage.getItem('access_token')
        },
        data:JSON.stringify(postData),
        success: function(data){
            HTMLGeneratorForResponse(data.responseText, 1)
            console.log('succcess')
            getCall('items')
        },
        error: function(data){
            console.log(data)
            HTMLGeneratorForResponse(data.responseText , 0)
            console.log('failure')
        },
        complete: function(data){
        }

    })//ajax end
}
