function main( aRequest ) {
  var str = "";
  for (i in aRequest) {
    str += (i+":"+aRequest[i]+"<br/>");
  }
  return str;
}