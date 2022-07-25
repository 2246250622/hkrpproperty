function appendAgentAppointment() {
    var target = $(".featured-estate-container");
    var data = JSON.parse(appointment);
    $.each(data, function(keys, value) {
        if(value.status == "non-confirm") {
            target.append(`<div class="featured-estate">
	                          <div class="estate-img-container">
	                            <img src="` + value.src + `" alt="">
                                <p class="estate-search-icon" id="confirmApp"><i class="far fa-clock"></i>&nbsp; Confirm Appointment</p>
                               </div>` +
            `<div class="featured-estate-info">
            <div class="appointment-info-title"><h4 class="estate_name">` + value.name + `</h4><p class="appointment-status">Status: <span class="special-title">Not approved</span></p></div>
	                            <div class="featured-estate-footer">
	                              <p>District: ` + `<span class="special-title">` + value.district + `</span></p>
	                              <p>Preferred Date: ` + `<span class="special-title">` + value.date + `</span></p>
                                  <p>Respsonsible Agent: `+ `<span class="special-title">`  + value.agentName + `</span></p>
                                  <p>Preferred Time: ` + `<span class="special-title">` + value.time + `</span></p>
	                            </div>` +
            `</div>
	                        </div>`);
        } else {
            target.append(`<div class="featured-estate">
	                          <div class="estate-img-container">
	                            <img src="` + value.src + `" alt="">
                                <p class="estate-search-icon canViewDetails"><i class="fas fa-walking"></i>&nbsp; Property Visited</p>
                               </div>` +
            `<div class="featured-estate-info">
                                <div class="appointment-info-title"><h4 class="estate_name">` + value.name + `</h4><p class="appointment-status">Status: <span class="special-title">Visited</span></p></div>
	                            <div class="featured-estate-footer">
	                              <p>District: ` + `<span class="special-title">` + value.district + `</span></p>
	                              <p>Visited Date: ` + `<span class="special-title">` + value.date + `</span></p>
                                  <p>Respsonsible Agent: `+ `<span class="special-title">`  + value.agentName + `</span></p>
                                  <p>Confirmed Time: ` + `<span class="special-title">` + value.time + `</span></p>
                                </div>` +
                                `<div class="appointment-footer">
                                    <button class="btn" id="rankbtn" style="margin-top:2rem;" onclick="location.href='agent-` + value.url + `'">View Comment</button>
                                </div>` + 
            `</div>
	                        </div>`);
        }
    });
}

function filterAppointment(){
    var count = 0;
    var target = $(".featured-estate-container");
    var data = JSON.parse(appointment);
    var result = $("#status").val();
    target.empty();
    if(result == "confirm") {
        $.each(data, function(keys, value) {
            if(value.status == "non-confirm") {
                target.append(`<div class="featured-estate">
                                <div class="estate-img-container">
                                    <img src="` + value.src + `" alt="">
                                    <p class="estate-search-icon canViewDetails"><i class="fas fa-walking"></i>&nbsp; Property Visited</p>
                                </div>` +
                `<div class="featured-estate-info">
                                    <div class="appointment-info-title"><h4 class="estate_name">` + value.name + `</h4><p class="appointment-status">Status: <span class="special-title">Visited</span></p></div>
                                    <div class="featured-estate-footer">
                                    <p>District: ` + `<span class="special-title">` + value.district + `</span></p>
                                    <p>Visited Date: ` + `<span class="special-title">` + value.date + `</span></p>
                                    <p>Respsonsible Agent: `+ `<span class="special-title">`  + value.agentName + `</span></p>
                                    <p>Confirmed Time: ` + `<span class="special-title">` + value.time + `</span></p>
                                    </div>` +
                                    `<div class="appointment-footer">
                                        <button class="btn" id="rankbtn" style="margin-top:2rem;" onclick="location.href='agent-` + value.url + `'">View Comment</button>
                                    </div>` + 
                `</div>
                                </div>`);
            }
        });
    } else if(result=="non-confirm"){
        $.each(data, function(keys, value) {
            if(value.status=="confirm"){
                target.append(`<div class="featured-estate">
                <div class="estate-img-container">
                  <img src="` + value.src + `" alt="">
                  <p class="estate-search-icon canViewDetails"><i class="fas fa-walking"></i>&nbsp; Property Visited</p>
                 </div>` +
                `<div class="featured-estate-info">
                                <div class="appointment-info-title"><h4 class="estate_name">` + value.name + `</h4><p class="appointment-status">Status: <span class="special-title">Visited</span></p></div>
                                <div class="featured-estate-footer">
                                    <p>District: ` + `<span class="special-title">` + value.district + `</span></p>
                                    <p>Visited Date: ` + `<span class="special-title">` + value.date + `</span></p>
                                    <p>Respsonsible Agent: `+ `<span class="special-title">`  + value.agentName + `</span></p>
                                    <p>Confirmed Time: ` + `<span class="special-title">` + value.time + `</span></p>
                                </div>` +
                                `<div class="appointment-footer">
                                    <button class="btn" id="rankbtn" style="margin-top:2rem;" onclick="location.href='agent-` + value.url + `'">View Comment</button>
                                </div>` + 
                `</div>
                            </div>`);
            }

        });
    } else {
        appendAgentAppointment();
    }
}

function getAppointmentDetails(x){
    var target = x.parents(".featured-estate").find(".featured-estate-info").find(".estate_name").html();
    var data = JSON.parse(appointment);
    $.each(data, function(keys, value) {
        if(value.name == target) {
            $("#estate-name").val(value.name);
            $("#fullname").val(value.user);
            $("#phone").val(value.phone);
            $("#date").val(value.date);
            $("#datetime").val(value.time);
        }

    });
    return x.parents(".featured-estate").find(".featured-estate-info");
}

function getConfirmedAppointmentDetails(x){
    var target = x.parents(".featured-estate").find(".featured-estate-info").find(".estate_name").html();
    var data = JSON.parse(appointment);
    $.each(data, function(keys, value) {
        if(value.name == target) {
            $("#estate-name1").val(value.name);
            $("#fullname1").val(value.user);
            $("#phone1").val(value.phone);
            $("#date1").val(value.date);
            $("#datetime1").val(value.time);
        }

    });
    return x.parents(".featured-estate").find(".featured-estate-info");
}