const app = document.querySelector('.app');
const inputparent = document.querySelector('.inputparent');
const inputtext = document.querySelector('.inputtext');
const add = document.querySelector('.add');

add.addEventListener('click', () => {
    if (inputtext.value !== '') {
        // tag creation

        const list = document.createElement('div');
        list.classList.add('list');

        const listtext = document.createElement('p');
        listtext.classList.add('listtext');

        const deletebtn = document.createElement('button');
        deletebtn.classList.add('deletebtn');

        listtext.textContent = inputtext.value;
        deletebtn.textContent = 'Delete';

        //append  kis hai child to parent 


        list.appendChild(listtext);
        list.appendChild(deletebtn);

        
        app.appendChild(list);

         // event listener aplied on delete button
        deletebtn.addEventListener('click', () => {
            app.removeChild(list);  
        });

           // 
        list.addEventListener('click', () => {
            list.classList.toggle('listdone');
        });
    }

    inputtext.value = ''; 
});