let todotxt = document.getElementById("txtnew");
let items = [];
let num = 0;

//creates a new todo-item with a icon button child and an id of the inserted text value
function createnew() {
  let newelem;
  let msg;
  let newlist;
  let butsub;
  let pend = document.getElementById("pending");
  if (todotxt.value != '') {
    items.push(todotxt.value);
    localput(todotxt.value);
    localStorage.setItem("items", JSON.stringify(items));
  }
}

//gives Enter keyboard button the functionality of adding a todo-item
function entersub() {
  butsub = document.getElementById("txtnew");
  butid = document.getElementById("addbut");
  txtnew.addEventListener("keydown", function (event) {
    if (event.which == 13) {
      event.preventDefault();
      butid.click();
    }
  })
}

//delete the element based on its id
function deleteElem(elid) {
  let elem;
  let newlist = document.getElementById("todolist");
  let but = document.getElementById(elid);
  let evalue = but.parentNode.textContent;
  let pend = document.getElementById("pending");
  but.parentNode.parentNode.removeChild(but.parentNode);
  let elnum = document.getElementsByClassName("list-group-item").length;
  pending.innerHTML = elnum;
  arrayRemove(items, evalue);
  localStorage.setItem("items", JSON.stringify(items));
  console.log(evalue);
}

function arrayRemove(arr, value) {
  if (arr.includes(value)) {
    arr.splice(arr.indexOf(value), 1);

  }
}

function allclear() {
  let newlist = document.getElementById("todolist");
  while (newlist.firstChild) {
    newlist.removeChild(newlist.firstChild);
  }
  let elnum = document.getElementsByClassName("list-group-item").length;
  pending.innerHTML = elnum;
  localStorage.clear();
}


function localput(txt) {
  newelem = document.createElement("LI");
  msg = document.createTextNode(txt);
  newlist = document.getElementById("todolist");
  newelem.appendChild(msg);
  newelem.classList.add('mt-2', 'list-group-item');
  iconel = document.createElement("button");
  iconel.addEventListener('click', function () {
    deleteElem(this.id)
  });
  iconel.classList.add('fas', 'fa-trash');
  iconel.setAttribute('id', num);
  num += 1;
  newelem.appendChild(iconel);
  newlist.appendChild(newelem);
  let elnum = document.getElementsByClassName("list-group-item").length;
  pending.innerHTML = elnum;
  todotxt.value = '';
}
if (localStorage.getItem("items") != null) {
  items = JSON.parse(localStorage.getItem("items"));
  items.forEach(item => {
    localput(item);
  });
}