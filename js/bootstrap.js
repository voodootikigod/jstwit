function render_object(o, base_depth) {
  str = "";
  for (i in o) {
    str += (base_depth+i+":"+o[i]+"<br/>");
    if (typeof o[i] == "object") {
      str += render_object(o[i], base_depth+"&nbsp;&nbsp;");
    }
  }
  return str;
}

function main( aRequest ) {
  return render_object(aRequest, "");
}