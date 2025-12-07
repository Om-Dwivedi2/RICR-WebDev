function AddTask() {
  let task = document.getElementById("Task").value.trim();

  let l = document.createElement("li");
  l.classList.add("p-2", "d-flex", "align-items-center", "border-bottom");

  


  let d = document.createElement("div");
  d.classList.add("w-75");
  d.innerText = task.value;

  let b = document.createElement("button");
  b.classList.add("btn", "btn-danger", "ms-3");
  b.innerHTML = `<i class="bi bi-trash3"></i> Delete`;

  

  let List = document.getElementById("TaskList");
  List.appendChild(l);
  l.appendChild(d);
  l.appendChild(b);



}
