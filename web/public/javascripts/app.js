dojo.require("dojo.html");
var last_id = -1;
var obj =null;
var get_messages = function() {
    dojo.show("loading");
    dojo.xhrGet({
        url: "/messages/"+last_id,
        handleAs: "json",
        timeout: 5000,
        load: function(response, ioArgs) {
            if (response.length > 0) {
                last_id = response[response.length-1].position;
                dojo.forEach(response, function(obj, index, array) {
                    dojo.query("#messages").addContent("<div class='message'>"+obj.body+"</div>", "first");
                });
            }
            dojo.hide("loading");
            return response;
        },
        error:function(response, ioArgs) {
            console.error("HTTP status code: ", ioArgs.xhr.status);
            return response;
        }
    });
};
var cycle= function() {
    get_messages();
    setTimeout(function() { cycle(); }, 30000);
};

dojo.load(function() {
    cycle();
});