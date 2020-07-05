var myArr=[];
var myObj={
    name: "",
    job:"",
    Phone:""
    }
        
    function pushData(){
        var name = document.getElementById('name').value;
        var job = document.getElementById('job').value;
        var Phone = document.getElementById('Phone').value;
        myObj.name=name;
        myObj.job=job;
        myObj.Phone=Phone;
        myArr.push(myObj);

        var pval = "";
            
        for(i = 0; i < myArr.length; i++){
            pval = pval + myArr[i] + "<br/>";
            }
            console.log(myArr);
        }  
        const submitbtn = document.getElementById('submit');
        submitbtn.addEventListener('click',pushData);
       
        submitbtn.addEventListener('click',()=>{
        if(localStorage.getItem(Phone.value)){
            alert('this item exist');
        }
        else{
            localStorage.setItem(Phone.value,JSON.stringify(myObj) );
            };
        });

       
        
