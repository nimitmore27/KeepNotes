let titletxt = document.getElementById("titletxt");
let desctxt= document.getElementById("desctxt");
let save = document.getElementById("savebtn");
let notes = document.getElementById("savednotes");
save.onclick = function(){
    if(titletxt.value == '' || titletxt.value == '  ' || desctxt.value == '' || desctxt.value == ' '){
        alert('Please Fill Input Fields');
    }
    else{
        let divtask = document.createElement('div');
        let divnote = document.createElement('div');
        let divicon = document.createElement('div');
        let divtitle = document.createElement('div');
        let divdesc = document.createElement('div');
        let trash = document.createElement('i');
        let edit = document.createElement('i');

        divtask.className = 'divtask';
        divnote.className = 'divnote';
        divicon.className = 'divicon';
        divtitle.className = 'divtitle';
        divdesc.className = 'divdesc';
        trash.className = "fa-regular fa-trash-can";
        edit.className = "fa-solid fa-marker";
        
        trash.addEventListener('click',function(){
          divtask.remove();
          check();
        });
        edit.addEventListener('click',function(){
            show();
            titletxt.value = divtitle.innerHTML;
            desctxt.value = divdesc.innerHTML;
            divtask.remove();
        });

        divtitle.innerHTML = titletxt.value
        divdesc.innerHTML = desctxt.value;

        divicon.appendChild(trash);
        divicon.appendChild(edit);
        divnote.appendChild(divtitle);
        divnote.appendChild(divdesc);
        divtask.appendChild(divnote);
        divtask.appendChild(divicon);
        notes.appendChild(divtask);
        show();
    }
}
function show(){
    document.querySelector("#main").classList.toggle("show");
    document.getElementById("taskeditor").classList.toggle("show");
    check();
    titletxt.value = '';
    desctxt.value = '';
}
function check(){
    if(document.querySelectorAll(".divnote").length==0){
        document.getElementById("floatting").classList.toggle('hide');
    }
}