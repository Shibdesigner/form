let form= document.getElementById('studentform');
let  table= document.getElementById('studentTable');
let msg =document.getElementById('msg');

form.addEventListener("submit",function(e){
   e.preventDefault();

   let student=document.getElementById('student').value.trim();
   let mail = document.getElementById('gmail').value.trim();
   let course=document.getElementById('course').value.trim();

   if(student === "" || mail === "" || course === ""){
      msg.innerText="All Field is requerd!"
      msg.style.color="red"
   }else{
      msg.innerText="";
   

   let row= document.createElement('tr');
   row.innerHTML=`
   <td>${student}</td>
   <td>${mail}</td>
   <td>${course}</td>
   <td>
   <button onClick="editRow(this)">Edit</button>
<button onClick="deleteRow(this)">Delete</button>
   </td>
    `;
   

    table.appendChild(row); 
    form.reset();     
   } 
});
function deleteRow(btn){
   let row=btn.parentElement.parentElement;
   row.remove();
}
function editRow(btn){
   let row= btn.parentElement.parentElement;
   let student=row.cells[0].innerText;
   let mail=row.cells[1].innerText;
   let course=row.cells[2].innerText;

   document.getElementById('student').value=student;
   document.getElementById('gmail').value=mail;
   document.getElementById('course').value=course;
   row.remove();
}
