//your JS code here. If required.
function removeColor() {
  const selectedColor = document.getElementById("colorSelect").value;
  document.getElementById("colorSelect").remove(document.getElementById("colorSelect").selectedIndex);
}
