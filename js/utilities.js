
var is_array = function(value) {
  return Object.prototype.toString.apply(value) == "[object Array]";
};


var render_object_tree= function(o, base_depth) {
  str = "";
  for (i in o) {
    var ltype = (typeof o[i]);
    if (is_array(o[i])) {
      ltype="Array";
    }
    str += (base_depth+i+":"+o[i]+" (type: "+ltype+")<br/>");
    if (typeof o[i] == "object") {
      str += render_object(o[i], base_depth+"&nbsp;&nbsp;");
    }
  }
  return str;
};