
document.addEventListener('DOMContentLoaded', () => {
   const addBtn = document.getElementById('add-btn');
   const delBtn = document.getElementById('del-btn');
   const toDoInput = document.querySelector('.new-to-do');
   const toDoList = document.querySelector('.scroll');
   const itemsNumber = document.getElementById('items-number');

   const updateItemsCount = () => {
       itemsNumber.textContent = toDoList.children.length;
   };

   toDoInput.addEventListener("keypress",(event)=>{
    if(event.key==="Enter"){
        addBtn.click()
    }
   })
 
   addBtn.addEventListener('click', () => {
       const toDoText = toDoInput.value.trim();
       if (toDoText === '') {
           alert('Please enter a task!');
           return;
       }
       
       const listItem = document.createElement('li');
       listItem.style.display='flex';
       listItem.style.width='29rem';
       listItem.style.height='2rem';
       listItem.style.fontSize='1.3rem';
       listItem.style.padding='1px';
       listItem.style.marginLeft="0px";
       
       const check = document.createElement('input');
       check.type="checkbox"
       check.style.marginRight = '1px';
       check.style.width="20px"
       check.style.height="20px"
       check.style.cursor = 'pointer';

       const span=document.createElement('span')
       span.textContent=toDoText;
       span.style.width="auto"
       
       check.addEventListener('click', () => {
        if(span.style.textDecoration==="line-through"){
            span.style.textDecoration="none"
            span.style.color="black"
            listItem.style.backgroundColor="aliceblue"
        }
        else{
            span.style.textDecoration="line-through"
            listItem.style.backgroundColor="gray"
        }
           updateItemsCount();
       });
    //    listItem.appendChild(del);
       listItem.appendChild(check);
       listItem.appendChild(span);
       toDoList.appendChild(listItem);
       
       toDoInput.value = '';
       updateItemsCount();
   });

   delBtn.addEventListener('click', () => {
       toDoList.innerHTML = '';
       updateItemsCount();
   });

   updateItemsCount();
});
