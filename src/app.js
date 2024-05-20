var text = document.getElementById("show");
function getvalue(a) {
  if (a === "=") {
    text.value = eval(text.value);
  } else {
    text.value += a;
    console.log(text);
    console.log(a);
  }
}
function clearAll() {
  text.value = "";
}
function backSpace() {
    text.value = text.value.substring(0,text.value.length-1)
}