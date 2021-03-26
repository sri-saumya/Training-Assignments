function sum(num1, num2, ...args)
{
    
    
    //console.log(arguments.length);
    if(arguments.length<2)
    {
        console.log(0);
    }
    
    else if(arguments.length>2 || arguments.length==2)
    {
        var sum= num1+ num2;
        let sumrest=0;
        args.forEach(function (value) 
        {
            sumrest = sumrest+value;
        })
        //console.log(sumrest);
        
            let differ = (Math.abs(sum-sumrest));
            console.log(differ);
        

 

       
    }
    
    

 

}
sum(14,3,4);