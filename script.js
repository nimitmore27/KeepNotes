const container = document.querySelector('.container');
const editor = document.querySelector('.editor');
const storage = document.querySelector('.storage');

const addtaskbtn = document.querySelector('#addtask');
const listbtn = document.querySelector('#list');
const savebtn = document.querySelector('#save');
const discardbtn = document.querySelector('#discard');

const titletxt = document.querySelector('#titletxt');
const desctxt = document.querySelector('#desctxt');

const del = 'fa-solid fa-trash';
const edit = 'fa-solid fa-pen-to-square';

let isedit = false;
let titleedit;
let descedit;
addtaskbtn.addEventListener('click',()=>{
    isedit = false;
    show_hide(1);
})

savebtn.addEventListener('click',()=>{
    if(titletxt.value.trim() == 0 && desctxt.value.trim() == 0)
        return show_hide(2);
    else if(isedit)
        editthis(titleedit,descedit);
    else if(titletxt.value.trim() == 0)
        alert("Please Enter Title");
    else if(desctxt.value.trim() == 0)
        alert("Please Enter Description");
    else{
        let task = document.createElement('div');
        let data = document.createElement('div');
        let icons = document.createElement('div');
        let delicon = document.createElement('i');
        let editicon = document.createElement('i');
        let tasktitle = document.createElement('h3');
        let taskdesc = document.createElement('pre');
        task.className = 'task';
        data.className = 'data';
        icons.className = 'icons';
        delicon.className = del;
        editicon.className = edit;
        tasktitle.innerText = titletxt.value;
        taskdesc.innerText = desctxt.value;
        delicon.addEventListener('click',()=>{
            task.remove();
            check();
        })
        editicon.addEventListener('click',()=>{
            show_hide(1);
            titletxt.value = tasktitle.textContent;
            desctxt.value = taskdesc.textContent;
            isedit = true;
            titleedit = tasktitle;
            descedit = taskdesc;
        })
        data.append(tasktitle,taskdesc);
        icons.append(editicon,delicon);
        task.append(data,icons);
        storage.append(task);
        titletxt.value = '',desctxt.value = '';
        show_hide(2);
    }
})
discardbtn.addEventListener('click',()=>{
    titletxt.value = '',desctxt.value = '';
    show_hide(2);
})
function editthis(titleedit,descedit){
    titleedit.innerText = titletxt.value;
    descedit.innerText = desctxt.value;
    titletxt.value = '',desctxt.value = '';
    show_hide(2);
}
function show_hide(num){
    check();
    if(num==1){
        editor.classList.remove('hide');
        container.classList.add('hide');
        document.getElementById('titlehead').classList.add('hide');
        titletxt.focus();
    }
    else{
        editor.classList.add('hide');
        container.classList.remove('hide');
        document.getElementById('titlehead').classList.remove('hide');
    }
}
function check(){
    if(document.querySelectorAll('.task').length == 0)
        document.querySelector('#counter').classList.toggle('hide');
}