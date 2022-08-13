var div = document.createElement("div");

function check2() {
  div.parentNode.removeChild(div);
}

function check() {
  div.innerHTML = ` <label for="salary">Salary:</label><input type="number" id="salary" name="salary" required/>`;

  document.getElementById("salaryadd").appendChild(div);
}
