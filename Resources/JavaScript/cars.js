//Picture change on mouse hover
function pictureChange(city){
    var citystring= city;
    var fullpath = "Resources/images/".concat(citystring).concat(".jpg");
    document.getElementById('city_image').src=fullpath;
};
//Function to get cars from the server
function getAvailableCars(city){
    var $list_of_cars= $('#list_of_cars');
    console.log('http://127.0.0.1:5000/'+ city +'/cars'
               );
    var request_url= 'http://127.0.0.1:5000/'+ city +'/cars'
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: request_url,
        success: function(data){
            $.each(data, function(index, cars){
                $.each(cars, function(index, car){
                    HTMLGeneratorForCarList(cars, index);  
                })
            })
        }
    })
};

//Handlebars template engine for list display on website

function HTMLGeneratorForCarList(data, id){
    var rawTemplate = document.getElementById("cars_template").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var generatedHTML = compiledTemplate(data);
    var cars_container = document.getElementById("cars_container");
    cars_container.innerHTML= generatedHTML;
    $('[data-toggle=confirmation]').confirmation({
        rootSelector: '[data-toggle=confirmation]',
        btnOkLabel: 'Yes',
        btnCancelLabel: 'No',
        onConfirm: function(){
            rent(id_of_chosen_car)
        },
        onCancel: function(){

        }
    });
}


var id_of_chosen_car = ""
function setId(id){
    id_of_chosen_car = id;
}

var chosen_city = "";
function setCity(city_name){
    chosen_city=city_name;
    console.log("wybrane miasto:");
    console.log(chosen_city);
}
function rent(id){
    if(localStorage.getItem('access_token') === null){
        window.location='login.html'
    }
    var call_adress = 'http://127.0.0.1:5000/' + chosen_city + '/car/reserve/' + id;
    //    /gdansk/car/reserve/FordMondeo
    var http = new XMLHttpRequest();
    var url = call_adress;
    var method = 'PUT';


    http.open(method, url);
    http.setRequestHeader('Content-Type', 'application/json');
    http.setRequestHeader('Authorization', 'JWT ' + localStorage.getItem('access_token'));
    http.onreadystatechange = function() {
        if (http.readyState === XMLHttpRequest.DONE && http.status === 201) {
            //         console.log(JSON.parse(http.responseText).data[0].id);
            //        console.log(JSON.parse(http.responseText));
            //        console.log('chosen_city')
            //        console.log(chosen_city)
            getAvailableCars(chosen_city)
        } else if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
            //        console.log('Error!');
            //           console.log('chosen_city')
            getAvailableCars(chosen_city)
            //        console.log(chosen_city)
            //        console.log(JSON.parse(http.responseText));
        }
    };
    http.send();


}

///gdansk/car/reserve/FordMondeo
//var http = new XMLHttpRequest();
//var url = 'http://127.0.0.1:5000/auth';
//var method = 'POST';
//
//var data = JSON.stringify({
//    "username": "nowjs",
//    "password": "cust"
//});
//
//http.open(method, url);
//http.setRequestHeader('Content-Type', 'application/json');
//http.onreadystatechange = function() {
//    if (http.readyState === XMLHttpRequest.DONE && http.status === 201) {
////         console.log(JSON.parse(http.responseText).data[0].id);
//        console.log(JSON.parse(http.responseText));
//    } else if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
//        console.log('Error!');
//        console.log(JSON.parse(http.responseText));
//    }
//};
//http.send(data);
//
//
//
//
//
//
