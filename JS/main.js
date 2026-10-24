// var newElement=document.createElement("h4");
// newElement.id='demo';
// newElement.className='demoo';
// newElement.innerHTML='Hello WOrld';
// console.log(newElement)
//  document.body.appendChild(newElement);
// const parent=document.querySelector('#test');
// parent.insertBefore(newElement,parent.children[1]);

// document.querySelector("#red").onclick = function () {
//   document.querySelector("#demo").style.color = "red";
// };
// document.querySelector("#blue").onclick = function () {
//   document.querySelector("#demo").style.color = "blue";
// };

// document.querySelector("#green").onclick = function () {
//   document.querySelector("#demo").style.color = "green";
// };

document.querySelectorAll("button").forEach(function (item) {
  item.onclick = function () {
    document.querySelector("#demo").style.color = item.dataset.color;
    document.querySelector("#demo").style.textAlign = item.dataset.location;
  };
});

document.querySelector("#form").addEventListener("submit", (e) => {
  let inputwork = document.querySelector("#inputWork");
  let result = document.querySelector("#result");
  if (inputwork.value === "") {
    alert("Enter Data");
    e.preventDefault();
  } else {
    result.innerHTML += `
      <li class="d-flex justify-content-between align-items-center mb-2 p-2 border rounded mt-3">
    <span>${inputwork.value}</span>
    <button class="btn-solid theme-danger"onclick="deleteTodoList(this)">Delete</button>
  </li>
`
    inputwork.value = "";
    e.preventDefault();
  }
});
// document.querySelector("#result").addEventListener("click", (e) => {
//   if (e.target.classList.contains("delete-btn")) {
//     e.target.closest("li").remove();
//   }
// });
function deleteTodoList(todo){
    todo.parentElement.remove()
}