function add(){
  
    var name=document.getElementById('name').value;
    document.getElementById('error').innerHTML="";

  
    if (name==''){
        
        document.getElementById('error').innerHTML="Please Enter The Value";
      

    }
    else{
        let box = document.getElementById('box');
        let position =box.firstElementChild;
        
        let li = document.createElement('li');
        li.textContent=name;
        if(position==null){
        box.appendChild(li);
        }
        else{
            box.insertBefore(li,position);
        }

    }
    var name=document.getElementById('name').value="";

}
