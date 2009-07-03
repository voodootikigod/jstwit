//system.use('utilities');
system.use("com.joyent.Sammy");
system.use("org.json.json2");
system.use("com.joyent.Resource");
var Message = new Resource('message',{
  '@save': function() {
    var msgs = Message.search({});
    if (!this.position) {
      this.position = ( msgs.length ) ? ( msgs.length + 1 ) : 1;
    }
  }
});
GET("/clear", function() {
    msgs = Message.search({});
    for (i in msgs){
        msgs[i].remove();
    }
    return redirect("/index.html");
});

POST(/\/messages\/?$/, function() {
    this.message = new Message();
    this.message.body = this.request.body.message;
    this.message.save();
    return redirect("index.html");

});

GET(/\/messages\/(.+)$/,function(last_id) {
    var allMessages =[];
    if (last_id && last_id != "-1") {
        allMessages = Message.search({position: { '>':last_id}}, {sort: 'created'});
    } else {
        allMessages = Message.search({}, {sort: 'created'});
    }
    return JSON.stringify(allMessages);
});


GET("/", function() {
  return redirect("index.html");
});


