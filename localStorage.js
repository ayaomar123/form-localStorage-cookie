 // create an array
        var myArr = [];
        
        function pushData()
        {
            var inputText = document.getElementById('inputText').value;
            var job = document.getElementById('job').value;
            var Phone = document.getElementById('Phone').value;
            myArr.push(inputText);
            myArr.push(job);
            myArr.push(Phone);
            
            var pval = "";
            
            for(i = 0; i < myArr.length; i++)
            {
                pval = pval + myArr[i] + "<br/>";
            }
            document.getElementById('pText').innerHTML = pval;
            console.log(myArr);
                }  
        const submitbtn = document.getElementById('submit');
        submitbtn.addEventListener('click',pushData);
        submitbtn.addEventListener('click',()=>{
        localStorage.setItem('user',JSON.stringify(myArr));
        });
