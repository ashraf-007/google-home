 const input = document.getElementById('input');
 const inputContainer = document.getElementById('input-container');
 const close = document.getElementById('close');
 const search = document.getElementById('search');
 const suggestions = document.getElementById('suggestions');
 const body = document.getElementsByTagName('body');
 const main = document.getElementsByClassName('main');



 function deleteClass(e) {
     if (e.target.id !== 'input') {

         inputContainer.classList.remove('input-container-focus');
         console.log("deleted")

     }
     if (e.target.id === 'input') {

         inputContainer.classList.add('input-container-focus');
         console.log("added")
     }
 }
 window.addEventListener('click', deleteClass)