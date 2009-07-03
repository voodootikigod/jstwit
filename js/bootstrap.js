//system.use('utilities');
system.use("com.joyent.Sammy");
system.use("org.json.json2");
system.use("com.joyent.Resource");
var Message = new Resource('message');


POST(/\/messages\/?$/, function() {
    this.message = new Message();
    this.message.body = this.request.body.message;
    this.message.save();
    return JSON.stringify({
        ok:true
    });
});

GET(/\/messages\/(.+)$/,function(last_id) {
    var allMessages = Message.search({}, {sort: 'created'});
    return JSON.stringify(allMessages);
});


GET("/", function() {
  return redirect("index.html");
});


function main(arg) {
    return "here";
}