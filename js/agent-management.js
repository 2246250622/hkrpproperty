function appendUserList(){
	var target = $("#userlist");
	var data = JSON.parse(agents);
	$.each(data, function(key, value){
		target.append(`<option value="` + value.email + `"` + 
						`label="` + value.email + `"></option>`);
	});
}

function appendAgentInfo(){
	var target = $("#user-info");
	var data = JSON.parse(users);
	target.append(`<thead><tr>
            <th>Email</th>
            <th>Password</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Account Status</th>
          </tr></thead>`);
	$.each(data, function(key,value){
		target.append(`<tr>
						 <td>` + value.email + `</td>` + 
						`<td>` + `********` + `</td>` + 
						`<td>` + value.firstname + `</td>` + 
						`<td>` + value.lastname + `</td>` + 
						`<td>` + value.phone + `</td>` + 
						`<td><span class="btn btn-disable">Disable</span><span class="btn btn-enable hidden">Enable</span></td>` + 
						`</tr>`)
	});
}

function searchAgent(){
	$("#search").click(function(){
		var target = $("#user-info");
		var data = JSON.parse(agents);
		var email = $("#userInput").val();
		target.html('');
		if($("#userInput").val()==""){
			appendAgentInfo();
		}else{
			target.append(`<thead><tr>
            <th>Email</th>
            <th>Password</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
            <th>Account Status</th>
          </tr></thead>`);
			console.log(email);
			$.each(data, function(keys, value){
				if(email == value.email){
					target.append(`<tr>
						 <td>` + value.email + `</td>` + 
						`<td>` + `********` + `</td>` + 
						`<td>` + value.firstname + `</td>` + 
						`<td>` + value.lastname + `</td>` + 
						`<td>` + value.phone + `</td>` + 
						`<td><span class="btn btn-disable">Disable</span><span class="btn btn-enable hidden">Enable</span></td>` + 
						`</tr>`)
				}
			});
		}
	});
}