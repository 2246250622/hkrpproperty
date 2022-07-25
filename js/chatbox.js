var onlineChat = `
                    <div class="chatbox-title">
                    <i class="fas fa-sign-out-alt" id="out" style="margin-right: 4rem; font-size: 40px; transform: rotate(180deg);"></i><h4><i class="far fa-user" style="margin-right: 0.5rem"></i>Online Chat</h4>
                    <p style="color: white">Agent status: <span style="color: #696969">Offline</span> currently</p>
                    </div>
                    <div class="chat-container">
                    </div>
                    <div class="chatsend-group">
                        <form class="chatform" onsubmit="false">
                            <textarea required id="chatMsg" class="form-input" rows="5" placeholder="leave your message here." style="width:400px"></textarea>
                            <button class="btn" style="border-top-left-radius: 4px; border-top-right-radius: 4px; margin:0 auto; display: block;" id="sendMsg">Send Message</button>
                            </form>
                    </div>
                  `

var onlineInquiry = `
                        <div class="chatbox-title">
                        <h4><i class="fas fa-robot" style="margin-right: 0.5rem"></i>Online Inquiry</h4>
                        </div>
                        <div class="chat-container">
                        <div class="reply-content">
                            <span class="reply-icon" style="margin-right:0.5rem"><i class="fas fa-robot"></i></span>
                            <p>You can try using self-inquiry function to answer your doubt.
                            If still has any question, you can leave a message to us.
                            <br/><span class="reply-time">10:55PM</span></p>
                        </div>
                        </div>

                        <div class="answerbtn-group" >
                        
                        <button id="searchAsk" class="btn chatBtn">find property</button>
                        
                        <button id="chatBtn" class="btn chatBtn">online chat</button>
                        </div>
                        `
                    



function appendAnswer(x){
    var target = $(".chat-container");
    var today = new Date();
    var currentHours = today.getHours();
    var currentMins = today.getMinutes();
    currentMins = ("0" + currentMins).slice(-2)
    currentHours = ("0" + currentHours).slice(-2);
    if(x == 1){
        target.append(`        <div class="user-reply" id="reply1">
        <p>How to create an account.
          <br/><span class="reply-time">` + currentHours + `:` + currentMins + `</span></p>
      </div>`);
      setTimeout(function() {
        target.append(`        <div class="reply-content">
        <span class="reply-icon" style="margin-right:0.5rem"><i class="fas fa-robot"></i></span>
        <p>You can create an account <br/>from <a href="./signin.html" class="chat-link">here</a>
          <br/><span class="reply-time">`+ currentHours + ":" + currentMins + `</span></p>
      </div>`);
        }, 500);
    } else if(x == 2){
        target.append(`<div class="user-reply" id="reply2">
        <p>How to search property.
          <br/><span class="reply-time">`+ currentHours + ":" + currentMins +`</span></p>
        </div>`);
        setTimeout(function() {
            target.append(`<div class="reply-content">
            <span class="reply-icon" style="margin-right:0.5rem"><i class="fas fa-robot"></i></span>
            <p>We provided search estate function, and you can search estate by district, name, price and square.
              <br/><span class="reply-time">`+ currentHours + ":" + currentMins + `</span></p>
          </div>`);
            }, 500);
    } else if(x == 3){
        target.append(`<div class="user-reply" id="reply3">
        <p>How to make an appointment.
          <br/><span class="reply-time">`+ currentHours + ":" + currentMins + `</span></p>
      </div>`);
        setTimeout(function() {
            target.append(`<div class="reply-content">
          <span class="reply-icon" style="margin-right:0.5rem"><i class="fas fa-robot"></i></span>
          <p>After choosing a suitable property and wants to have a look, you can make an appointment with thecorresponding property agent.
              <br/><span class="reply-time">`+ currentHours + ":" + currentMins + `</span></p>
          </div>`);
            }, 500);
    } else if(x == 4){
        $(".chatbox").html(onlineChat);
    }
    setTimeout(function() {
        $(".chat-container").animate({ scrollTop: $(".chat-container").prop("scrollHeight") });
        }, 500);
}

function sendMsg(){
    var today = new Date();
    var currentHours = today.getHours();
    var currentMins = today.getMinutes();
    currentMins = ("0" + currentMins).slice(-2)
    currentHours = ("0" + currentHours).slice(-2);
    if(document.getElementsByClassName("chatform")[0].checkValidity()){
        $(".chat-container").append(`<div class="user-reply userchat-reply">
        <p>`+ $("#chatMsg").val() + `
          <br/><span class="reply-time">`+ currentHours + ":" + currentMins +`</span></p>
      </div>`)
      $("#chatMsg").val('');
      setTimeout(function() {
        $(".chat-container").animate({ scrollTop: $(".chat-container").prop("scrollHeight") });
        }, 500);
    }
}

function restore(){
    $(".chatbox").html(onlineInquiry);
}