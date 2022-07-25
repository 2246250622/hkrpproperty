function appendDistrictList() {
    var data = JSON.parse(districts);
    var dataList = data.dist;
    $.each(dataList, function(index, value) {
        $("#districtlist").append('<option ' +
            'label="' +
            value + '"' +
            'value="' +
            value + '"></option>');
        console.log(index);
    });
}

function appendEstateList(){
    var data = JSON.parse(houses);
    var target = $("#estateList");
    $.each(data, function(index, value){
        target.append(`<option label="` +
                    value.name + '">' +
                    value.name + '</option>');
    });
}

function searchEstate(){
        $("#search").click(function(){
          if($("#district").val()!=""){
            checkDistrict();
            if(!$("#error_message").hasClass("hidden")){
              $("#error_message").addClass("hidden");
              $("#district").removeClass("error-input");
            }else{
              var count = 0;
              console.log("EstateName:" + getEstateName());
              console.log("District:" + getDistrict());
              console.log("getPrice:" + getPrice());
              console.log("getFeet:" + getFeet());
              console.log("getType:" + getType());
              count = appendRequiredEstate(getEstateName(), getDistrict(), getPrice(), getFeet(), getType());
              console.log("Result: " +count);
              $("#resultCount").css("display", "block");
              if(count==0){
                $("#resultCount").html("We can't find the suitable estate for you. Sorry");
                location.href = "#search";
              }else{
                $("#resultCount").html("We found <span class='special-title'>" + count + "</span> estate for you");
                location.href = "#search";
              }
            }
          }else{
            $("#resultCount").html("We can't find the suitable estate for you. Sorry");
            $("#resultCount").css("display", "none");
            $("#error_message").removeClass("hidden");
            $("#district").addClass("error-input");
            location.href = "#search";
          }
        });
      }

      function getFeet(){
        var feet = $("#feet").val();
        var targetFeet = 0;
        if(feet != "all") {
          targetFeet = parseInt(feet);
        } else {
          targetFeet = "all";
        }
        return targetFeet;
      }

      function getPrice(){
        var price = $("#price").val();
        var targetPrice = 0;
        if(price != "all") {
          targetPrice = parseInt(price);
        } else {
          targetPrice = "all";
        }
        return targetPrice;
      }

      function getType(){
        var rent = $("#rent").is(':checked');
        var sale = $("#sale").is(':checked');
        var checkType = 0; // 0 none; 1: rent:;2:sale;
        if(!rent && !sale){
          checkType = 0;
        }else if(rent && !sale){
          checkType = 1;
        }else if(!rent && sale){
          checkType = 2;
        }
        return checkType;
      }

      function getDistrict(){
        return $("#district").val();
      }

      function checkDistrict(){
        var district = $("#district").val().toUpperCase();
        var data = JSON.parse(districts);
        var dataList = data.dist;
        var haveDistrict = false;
        $.each(dataList, function(index, value){
          if((district.split(' ').join(''))===(value.toUpperCase().split(' ').join(''))){
            haveDistrict = true;
          }
        });
        if(!haveDistrict){
          $("#error_message").html("The District is not exist.");
          $("#error_message").removeClass("hidden");
          $("#district").addClass("error-input");
        }else{
          $("#error_message").html("You must enter the district.")
          if(!$("#error_message").hasClass("hidden")){
            $("#error_message").addClass("hidden");
            $("#district").removeClass("error-input");
          }
        }
      }
      function getEstateName(){
        return $("#estate").val();
      }

      function appendRequiredEstate(estate, district, price, feet, estateType){
       var data = JSON.parse(houses);
       var target = $(".featured-estate-container");
       target.html("");
       var times = 0;
       if(estate == "") {
         if(feet == "all" && price == "all") {
           switch (estateType) {
             case 0:
               $.each(data, function(key, value){
                 if(value.district == district) {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
             case 1:
               $.each(data, function(key, value){
                 if(value.district == district && value.type == "rental") {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
             default:
               $.each(data, function(key, value){
                 if(value.district == district && value.type == "sale") {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
           }
         } else if(feet == "all" && price != "all") {
           switch (estateType) {
             case 0:
               $.each(data, function(key, value){
                 if(value.district == district && value.price <= price) {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
             case 1:
               $.each(data, function(key, value){
                 if(value.district == district && value.type == "rental" && value.price <= price) {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
             default:
               $.each(data, function(key, value){
                 if(value.district == district && value.type == "sale" && value.price <= price) {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
           }
         } else if(feet != "all" && price == "all") {
           switch (estateType) {
             case 0:
               $.each(data, function(key, value){
                 if(value.district == district && value.square <= feet) {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
             case 1:
               $.each(data, function(key, value){
                 if(value.district == district && value.type == "rental" && value.square <= feet) {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
             default:
               $.each(data, function(key, value){
                 if(value.district == district && value.type == "sale" && value.square <= feet) {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
           }
         } else {
           switch (estateType) {
             case 0:
               $.each(data, function(key, value){
                 if(value.district == district && value.square <= feet && value.price <= price) {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
             case 1:
               $.each(data, function(key, value){
                 if(value.district == district && value.type == "rental" && value.square <= feet && value.price <= price) {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
             default:
               $.each(data, function(key, value){
                 if(value.district == district && value.type == "sale" && value.square <= feet && value.price <= price) {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
           }
         }
       } else {
         if(feet == "all" && price == "all") {
           switch (estateType) {
             case 0:
               $.each(data, function(key, value){
                 if(value.district == district && value.name == estate ) {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
             case 1:
               $.each(data, function(key, value){
                 if(value.district == district && value.type == "rental" && value.name == estate ) {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
             default:
               $.each(data, function(key, value){
                 if(value.district == district && value.type == "sale" && value.name == estate ) {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
           }
         } else if(feet == "all" && price != "all") {
           switch (estateType) {
             case 0:
               $.each(data, function(key, value){
                 if(value.district == district && value.price <= price && value.name == estate ) {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
             case 1:
               $.each(data, function(key, value){
                 if(value.district == district && value.type == "rental" && value.price <= price && value.name == estate ) {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
             default:
               $.each(data, function(key, value){
                 if(value.district == district && value.type == "sale" && value.price <= price && value.name == estate ) {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
           }
         } else if(feet != "all" && price == "all") {
           switch (estateType) {
             case 0:
               $.each(data, function(key, value){
                 if(value.district == district && value.square <= feet && value.name == estate ) {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
             case 1:
               $.each(data, function(key, value){
                 if(value.district == district && value.type == "rental" && value.square <= feet && value.name == estate ) {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
             default:
               $.each(data, function(key, value){
                 if(value.district == district && value.type == "sale" && value.square <= feet && value.name == estate ) {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
           }
         } else {
           switch (estateType) {
             case 0:
               $.each(data, function(key, value){
                 if(value.district == district && value.square <= feet && value.price <= price && value.name == estate ) {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
             case 1:
               $.each(data, function(key, value){
                 if(value.district == district && value.type == "rental" && value.square <= feet && value.price <= price && value.name == estate ) {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
             default:
               $.each(data, function(key, value){
                 if(value.district == district && value.type == "sale" && value.square <= feet && value.price <= price && value.name == estate ) {
                   times = appendEstate(target, value, times);
                 }
               });
               break;
           }
         }
       }
       // $.each(data, function(key, value){
       //   if(value.price >10000 && value.square >=501){
       //     if(district==value.district.toUpperCase().split(' ').join('')){
       //       if(value.type=="sale"){
       //         if(estate==value.name.toUpperCase().split(' ').join('')){
       //           times = appendEstate(target, value, times);
       //         }
       //       }
       //     }
       //   }
       // });
       return times;
     }

      function appendEstate(target, value, times){
        target.append(`<div class="featured-estate">
                          <div class="estate-img-container">
                            <img src="` + value.src + `" alt="">
                            <a href="` + value.site + `" class="estate-search-icon"><i class="fas fa-search"></i></a>
                          </div>` +
                         `<div class="featured-estate-info">
                            <h4>` + value.name + `</h4>
                            <p class="desc">` + value.desc + `</p>
                            <div class="featured-estate-footer">
                              <p>` + value.district + `</p>
                              <p>` + value.type + `</p>
                              <p>$` + value.price + `</p>
                            </div>
                         </div>
                        </div>`);
        times++;
        return times;
      }

      function getHouseByIndex(index){
          var data = JSON.parse(houses);
          var targetBackground = $(".header-section");
          var target = $(".address").html(data[index].address);
          targetBackground.css("background", "linear-gradient(rgba(255, 65, 77, 0.2), rgba(0, 0, 0, 0.7))," + "url('" + data[index].src + "') center/cover fixed no-repeat");
          $(".loadEstateImage").attr("src", data[index].location);
          $(".estate-name-info").html(data[index].name);
          $(".estate-desc-info").html(data[index].desc);
          $(".estate-address-info").html("Address: " + data[index].address);
          $(".estate-type-info").html("Type: " + data[index].type);
          $(".estate-feet-info").html("Size:" + data[index].square + "<span class='special-title'> feet</span>");
          $(".estate-price-info").html("Price: " + "$" + data[index].price);
          $("#appointment-house-name").val(data[index].name);
          $("#appointment-agent").val(data[index].agentName);
          $("#agent-comment").html(data[index].comment);
          document.title = data[index].name + " Details";
        }
