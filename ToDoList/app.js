let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

//add new item
addBtn.addEventListener('click' , () => {
    if(input.value.trim() != 0){
        let newItem = document.createElement('div');
        newItem.classList.add('item');
        newItem.innerHTML = `<p> ${input.value} </p>
        <div class="item-btn">
           <i class="fa-sharp fa-solid fa-xmark"></i>
        </div>`

        tasks.appendChild(newItem);
        input.value = '';
    }else{
        alert('Please enter a task')
    }
})

tasks.addEventListener('click', (e) => {
    if(e.target.classList.contains('fa-xmark')){
        e.target.parentElement.parentElement.remove();
    }
})