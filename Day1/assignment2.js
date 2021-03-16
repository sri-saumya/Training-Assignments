function add(num1,num2)
{
    if (arguments.lenght>2)
    {
        var sum = num1 + num2;
        var restSum=0
        
        for (var i=2;i<arguments.lenght;i++)
        {
            restSum += arguments[i]
            console.log(restSum);
        }
        if(sum>restSum)
        {
            return (sum-restSum);
        }
        else
        {
            return (restSum-sum);
        }
    }
    else
    {
        return (num1 + num2);
    }


    if(sum.isNaN())
    {
    console.log("0");
    }
}
console.log(add(6,4,5,9));