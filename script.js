const addBtn = document.querySelector('.add-btn');
const inputTask = document.querySelector('.input-section input');   
const box = document.querySelector('.container');
const errorBox = document.querySelector('.error');
const cnt = document.querySelector('.number-of-tasks');
let totalTasks = 0;

const taskCnt = (totalTasks) => {
    cnt.innerText = totalTasks;
};

const addNewTask = () => {
    const taskNm = inputTask.value.trim();
    errorBox.style.display = "none";

    if (!taskNm){
        setTimeout(() => {
            errorBox.style.display= "block";
        },200);

        return;
    }

    totalTasks++;
    const newTask = `<div class="task"> 
                        <input type="checkbox">
                        <span class="task-Name">${taskNm}</span>
                        <div class="task-btn">
                                <button class="edit">
                                     <i class="fa-regular fa-pen-to-square"></i>
                                </button>
                                <button class="delete">
                                        <i class="fa-solid fa-trash"></i>
                                </button>
                        </div>
                    </div>`

    box.insertAdjacentHTML("beforeend" ,newTask);
    inputTask.value = "";
    taskCnt(totalTasks);

    const deleteBtn = document.querySelectorAll('.delete');

    deleteBtn.forEach(button => {
        button.onclick = () => {
            button.parentNode.parentNode.remove();
            totalTasks--;
    taskCnt(totalTasks);

        }
    });


    const editBtn = document.querySelectorAll('.edit');

    editBtn.forEach((editbtn) => {
        editbtn.onclick = (e) => {
            let target = e.target;
            if (!e.target.className == 'edit'){
                target = e.target.parentNode;
            }

            // var td=target.parentNode.previousElementSibling;
            // console.log(td.innerText);
            inputTask.value  = target.parentNode.previousElementSibling?.innerText;
            target.parentNode.parentNode.remove();
            totalTasks--;
            taskCnt(totalTasks);
        }
    });



    const check = document.querySelectorAll('.checkbox');

    check.forEach((checkBox) => {
        checkBox.onchange = () => 
        {
            checkBox.nextElementSibling.classList.toggle("completed");
            if (checkBox.checked){
                totalTasks--;
            }else{
                totalTasks++;
            }
            taskCnt(totalTasks);
        }
    });


};

addBtn.addEventListener('click', addNewTask);

