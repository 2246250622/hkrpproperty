function appendAppointment() {
    var target = $(".featured-estate-container");
    var data = JSON.parse(appointment);
    $.each(data, function(keys, value) {
        if(value.status == "non-confirm") {
            target.append(`<div class="featured-estate">
	                          <div class="estate-img-container">
	                            <img src="` + value.src + `" alt="">
                                <p class="estate-search-icon"><i class="far fa-clock"></i>&nbsp; Waiting For confirm</p>
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
                                <p class="estate-search-icon"><i class="fas fa-walking"></i>&nbsp; Property Visited</p>
                               </div>` +
            `<div class="featured-estate-info">
                                <div class="appointment-info-title"><h4 class="estate_name">` + value.name + `</h4><p class="appointment-status">Status: <span class="special-title">Visited</span></p></div>
	                            <div class="featured-estate-footer">
	                              <p>District: ` + `<span class="special-title">` + value.district + `</span></p>
	                              <p>Visited Date: ` + `<span class="special-title">` + value.date + `</span></p>
                                  <p>Respsonsible Agent: `+ `<span class="special-title">`  + value.agentName + `</span></p>
                                </div>` +
                                `<div class="appointment-footer">
                                    <p class="appointment-p">Your opinion matters!! &nbsp;We’d love to know how everything worked out with you. 
                                    Please take a moment to rank the service provided by the property agent.</p>
                                    <button class="btn" id="rankbtn" onclick="location.href='` + value.url + `'">Rank Service</button>
                                </div>` + 
            `</div>
	                        </div>`);
        }
    });
}

function filterResult(){
  var count = 0;
  var target = $(".featured-estate-container");
  var data = JSON.parse(appointment);
  target.empty();
  if($("#appmonth").val() == ""){
    count ++;
    var status = $("#status").val();
    if(status=="confirm"){
      $.each(data, function(keys, value) {
        if(value.status != "non-confirm"){
          target.append(`<div class="featured-estate">
	                          <div class="estate-img-container">
	                            <img src="` + value.src + `" alt="">
                                <p class="estate-search-icon"><i class="fas fa-walking"></i>&nbsp; Property Visited</p>
                               </div>` +
            `<div class="featured-estate-info">
                                <div class="appointment-info-title"><h4 class="estate_name">` + value.name + `</h4><p class="appointment-status">Status: <span class="special-title">Visited</span></p></div>
	                            <div class="featured-estate-footer">
	                              <p>District: ` + `<span class="special-title">` + value.district + `</span></p>
	                              <p>Visited Date: ` + `<span class="special-title">` + value.date + `</span></p>
                                  <p>Respsonsible Agent: `+ `<span class="special-title">`  + value.agentName + `</span></p>
                                </div>` +
                                `<div class="appointment-footer">
                                    <p class="appointment-p">Your opinion matters!! &nbsp;We’d love to know how everything worked out with you. 
                                    Please take a moment to rank the service provided by the property agent.</p>
                                    <button class="btn" id="rankbtn" onclick="location.href='` + value.url + `'">Rank Service</button>
                                </div>` + 
            `</div>
	                        </div>`);
        }
      });
    } else if(status=="all"){
      appendAppointment();
    } else {
      $.each(data, function(keys, value) {
        if(value.status == "non-confirm") {
          target.append(`<div class="featured-estate">
                          <div class="estate-img-container">
                            <img src="` + value.src + `" alt="">
                              <p class="estate-search-icon"><i class="far fa-clock"></i>&nbsp; Waiting For confirm</p>
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
        }
      });
    }
  } else {
    var status = $("#status").val();
    if(status=="confirm"){
      $.each(data, function(keys, value) {
        if(value.status != "non-confirm" && $("#appmonth").val() == value.month){
          target.append(`<div class="featured-estate">
	                          <div class="estate-img-container">
	                            <img src="` + value.src + `" alt="">
                                <p class="estate-search-icon"><i class="fas fa-walking"></i>&nbsp; Property Visited</p>
                               </div>` +
            `<div class="featured-estate-info">
                                <div class="appointment-info-title"><h4 class="estate_name">` + value.name + `</h4><p class="appointment-status">Status: <span class="special-title">Visited</span></p></div>
	                            <div class="featured-estate-footer">
	                              <p>District: ` + `<span class="special-title">` + value.district + `</span></p>
	                              <p>Visited Date: ` + `<span class="special-title">` + value.date + `</span></p>
                                  <p>Respsonsible Agent: `+ `<span class="special-title">`  + value.agentName + `</span></p>
                                </div>` +
                                `<div class="appointment-footer">
                                    <p class="appointment-p">Your opinion matters!! &nbsp;We’d love to know how everything worked out with you. 
                                    Please take a moment to rank the service provided by the property agent.</p>
                                    <button class="btn" id="rankbtn" onclick="location.href='` + value.url + `'">Rank Service</button>
                                </div>` + 
            `</div>
	                        </div>`);
        }
      });
    } else if(status=="all"){
      $.each(data, function(keys, value) {
        if(value.status == "non-confirm" && $("#appmonth").val() == value.month) {
            target.append(`<div class="featured-estate">
	                          <div class="estate-img-container">
	                            <img src="` + value.src + `" alt="">
                                <p class="estate-search-icon"><i class="far fa-clock"></i>&nbsp; Waiting For confirm</p>
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
          if($("#appmonth").val() == value.month){
            target.append(`<div class="featured-estate">
	                          <div class="estate-img-container">
	                            <img src="` + value.src + `" alt="">
                                <p class="estate-search-icon"><i class="fas fa-walking"></i>&nbsp; Property Visited</p>
                               </div>` +
            `<div class="featured-estate-info">
                                <div class="appointment-info-title"><h4 class="estate_name">` + value.name + `</h4><p class="appointment-status">Status: <span class="special-title">Visited</span></p></div>
	                            <div class="featured-estate-footer">
	                              <p>District: ` + `<span class="special-title">` + value.district + `</span></p>
	                              <p>Visited Date: ` + `<span class="special-title">` + value.date + `</span></p>
                                  <p>Respsonsible Agent: `+ `<span class="special-title">`  + value.agentName + `</span></p>
                                </div>` +
                                `<div class="appointment-footer">
                                    <p class="appointment-p">Your opinion matters!! &nbsp;We’d love to know how everything worked out with you. 
                                    Please take a moment to rank the service provided by the property agent.</p>
                                    <button class="btn" id="rankbtn" onclick="location.href='` + value.url + `'">Rank Service</button>
                                </div>` + 
            `</div>
                          </div>`);
          }
        }
    });
    
    }else {
      $.each(data, function(keys, value) {
        if(value.status == "non-confirm" && $("#appmonth").val() == value.month) {
          target.append(`<div class="featured-estate">
                          <div class="estate-img-container">
                            <img src="` + value.src + `" alt="">
                              <p class="estate-search-icon"><i class="far fa-clock"></i>&nbsp; Waiting For confirm</p>
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
        }
      });
    }
  }




} 

