

class Task{
    constructor(
        task_name,
        task_timing,
        task_duration
    ){
        this.task_name = task_name;
        this.task_timing = task_timing;
        this.task_duration = task_duration;
    }
}

//when button clicked, alert takes input
const button = document.querySelector("button");
button.addEventListener('click', () =>{
    task_name= document.querySelector("tname").text;
    task_timing = document.querySelector("ttiming").text;
    task_duration = docuemtn.querySelector("tduration").text;
    const newTask = document.createElement('table');
    newTask.innerHTML = `
    <tr>
        <td>Task Name:</td>
        <td>${task_name}</td>
    </tr>
    <tr>
        <td>Task Time:</td>
        <td>${task_timing}</td>
    </tr>
    <tr>
        <td>Task Duration:</td>
        <td>${task_duration}</td>
    </tr>
    `;
    document.querySelector('main').append(newTask);
}
);