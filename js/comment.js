function leaveComment() {
    $("#comment").click(function() {
		if(document.getElementsByClassName("comment-form")[0].checkValidity()){
			    var content = $("#getUserComment").val();
				var d = new Date();
				$(".customer-comment").last().append(`<div class="users-comment">
															<div class="user-info">
															  <span class="special-title">NewUser432***</span>
															  <span class="date">` + d.getDate() + `-` + (d.getMonth() + 1) + `-` + d.getFullYear() + `</span>
															</div>
															<p>` + content + `</p>
														  </div>;
														</div>`);
			  $("#getUserComment").val(" ");
			  var y = $(window).scrollTop();
			  $(window).scrollTop(y-250);
		}

    });
}

function getCommentSite() {
    var data = JSON.parse(houses);
    var target = $(".featured-estate-container");

    $.each(data, function(key, value) {
        appendCommentSite(target, value);
    });
}

function getAgentCommentSite(){
    var data = JSON.parse(houses);
    var target = $(".featured-estate-container");

    $.each(data, function(key, value) {
        appendAgentCommentSite(target, value);
    });

}

function showDeleteDialog() {
    $("#delete-btn").click(function() {
        $("#delete_dialog").modal();
    });
}

function booking() {

}


function searchCommentSite(type) {
    var data = JSON.parse(houses);
    $("#search").click(function() {
        var estateName = $("#estateName").val();
        var district = $("#district").val();
        var target = $(".featured-estate-container");
        target.html('');
        if (district == estateName) {
            if(type==0){
                getCommentSite();
            }else{
                getAgentCommentSite();
            }
        } else {
            if (estateName != "ALL" && district == "ALL") {
                $.each(data, function(key, value) {
                    if (estateName == value.name) {
                        if(type==0){
                            appendCommentSite(target, value);
                        }else{
                            appendCommentAgentSite(target,value);
                        }

                    }
                });
            } else if (estateName == "ALL" && district != "ALL") {
                $.each(data, function(key, value) {
                    if (district == value.district) {
                        if(type==0){
                            appendCommentSite(target, value);
                        }else{
                            appendCommentAgentSite(target,value);
                        }
                    }
                });
            } else {
                $.each(data, function(key, value) {
                    if (district == value.district && estateName == value.name) {
                        if(type==0){
                            appendCommentSite(target, value);
                        }else{
                            appendCommentAgentSite(target,value);
                        }
                    }
                });
            }
        }
    });
}

function appendCommentAgentSite(target, value){
        target.append(`<div class="featured-estate">
                          <div class="estate-img-container">
                            <img src="` + value.src + `" alt="">
                            <a href="manager-` + value.commentSite + `" class="estate-search-icon"><i class="fas fa-eye"></i></a>
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
}


function appendCommentEstate() {
    var data = JSON.parse(houses);
    var target = $("#estateName");
    $.each(data, function(index, value) {
        target.append(`<option value="` +
            value.name + '">' +
            value.name + '</option>');
    });
}

function appendCommentDistrict() {
    var data = JSON.parse(districts);
    var target = $("#district");
    $.each(data.dist, function(index, value) {
        target.append(`<option value="` + value + `">` +
            value + `</option>`);
    });
}

function appendAgentCommentSite(target, value){
      target.append(`<div class="featured-estate">
                          <div class="estate-img-container">
                            <img src="` + value.src + `" alt="">
                            <a href="manager-` + value.commentSite + `" class="estate-search-icon"><i class="fas fa-eye"></i></a>
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
}

function appendCommentSite(target, value) {
    target.append(`<div class="featured-estate">
                          <div class="estate-img-container">
                            <img src="` + value.src + `" alt="">
                            <a href="` + value.commentSite + `" class="estate-search-icon"><i class="fas fa-eye"></i></a>
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
}

function replyMessage() {
    var d = new Date();
    $("#reply").click(function() {
        if ($("#replyMessage").val() != "") {
            $(".reply-message-container").append(`<div class="reply-message"><p><span class="special-title">Agent replied on (` + d.getDate() + `-` + (d.getMonth() + 1) + `-` + d.getFullYear() + `) </span></p><p class="reply-paragraph" id="reply-paragraph">` + $("#replyMessage").val() + "</p></div>");
            $("#replyMessage").val(" ");
            var y = $(window).scrollTop();
            $(window).scrollTop(y-25);
        }
    });
}
