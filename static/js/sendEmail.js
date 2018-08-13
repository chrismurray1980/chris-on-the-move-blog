var myform = $("form#contactform");
myform.submit(function(event){
	event.preventDefault();

	var params = myform.serializeArray().reduce(function(obj, item) {
     obj[item.name] = item.value;
     return obj;
  }, {});

  
  var service_id = "gmail";

  var template_id = "blog_message";
  
  emailjs.send(service_id,template_id,params)
  	.then(function(){ 
       console.log("Sent!");
     }, function(err) {
       console.log("Send email failed!\r\n Response:\n " + JSON.stringify(err));
    });
  return false;
});
