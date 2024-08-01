let items=document.querySelector('#items');
let Add=document.querySelector('#Add');
let Remove=document.querySelector('#Remove');

let newListItem;


Add.addEventListener('click',function(){



    if(myInput.value===''){

    } else{
        let myInput=document.querySelector('#myInput').value;



        newListItem=document.createElement('li');
        newListItem.innerHTML=myInput;
        items.append(newListItem);
        document.querySelector('#myInput').value = '';

      

    }


   
    

})


Remove.addEventListener('click', function() {
    let lastItem = items.lastElementChild; 
    if (lastItem) {
        items.removeChild(lastItem); 
    }
});
