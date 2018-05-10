//Picture change on mouse hover
function pictureChange(city){
    var citystring= city;
    var fullpath = "Resources/images/".concat(citystring).concat(".jpg");
    document.getElementById('city_image').src=fullpath;
};
//Get items
function getItems(city){
    var chosenCity= city;
    var request_url= 'http://127.0.0.1:5000/'+ city +'/items'
//    console.log(chosenCity);
    $.ajax({
        type: 'GET',
        contentType: "application/json",
        url: request_url,
        success: function(data){
            $.each(data, function(index, item){
                HTMLGeneratorForItemList(item, index);  
            })


        }
    })
}

//function getAvailableCars(city){
//    var $list_of_cars= $('#list_of_cars');
//    var chosenCity= city;
//    console.log(chosenCity);
//    console.log('http://127.0.0.1:5000/'+ city +'/cars');
//    var request_url= 'http://127.0.0.1:5000/'+ city +'/cars'
//    $.ajax({
//        type: 'GET',
//        contentType: "application/json",
//        url: request_url,
//        success: function(data){
//            $.each(data, function(index, cars){
//                $.each(cars, function(index, car){
//                    HTMLGeneratorForCarList(cars, index);  
//                })
//
//            })
//        }
//    })
//}


//Handlebars engine for html template
function HTMLGeneratorForItemList(data, id){
    var rawTemplate = document.getElementById("items_template").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var generatedHTML = compiledTemplate(data);
    var cars_container = document.getElementById("items_container");
    cars_container.innerHTML= generatedHTML;
                                    $('[data-toggle=confirmation]').confirmation({
                      rootSelector: '[data-toggle=confirmation]',
                        btnOkLabel: 'Yes',
                        btnCancelLabel: 'No',
                        onConfirm: function(){
                            rent(id_of_chosen_item)
                            
                        },
                        onCancel: function(){


                        }
                    });
}
    var id_of_chosen_item = ""
    function setId(id){
        id_of_chosen_item = id;
    }
var chosen_city = "";
function setCity(city_name){
    chosen_city=city_name;
//    console.log("wybrane miasto:");
//    console.log(chosen_city);
};
function rent(id){
        if(localStorage.getItem('access_token') === null){
        window.location='login.html'
    }
//    console.log(id);
//    console.log('^to klikles');
    var call_adress = 'http://127.0.0.1:5000/' + chosen_city + '/item/reserve/' + id;
//    console.log('call adress');
//    console.log(call_adress);
//    console.log('^call_adress^');
    
    
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
        getItems(chosen_city)
//        console.log(JSON.parse(http.responseText));
    } else if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
//        console.log('Error!');
//        console.log(JSON.parse(http.responseText));
        getItems(chosen_city)
    }
};
http.send();
 
    
}