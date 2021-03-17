window.addEventListener("load" , function(){
    let name_input =document.getElementById('userInput');
    name_input.addEventListener("keyup",function(event){
        searchUser(event);

    })
    window.userSearchHhr = new XMLHttpRequest(); 

})
function searchUser(event){        
    let input = event.target;
    const min_char = 4;
    if(input.value.length < min_char){
        return undefined;
    }
    else{
        console.log(input.value);
        window.userSearchHhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                var response = JSON.parse(this.responseText);
                console.log(response);
                response.items.forEach(item => {
                    let divitem = document.createElement('div');
                    divitem.setAttribute("class",'col-md-12');
                    divitem.innerHTML = "<span class ='name' >" + item.login + "</span>";
                    divitem.innerHTML += "<img class = 'img-thumbnail' src =' " + item.avatar_url + "'/>";
                    divitem.addEventListener("click",function(e){
                        alert("hello");
                        closeExistingLists();

                    })
                    autodiv.appendChild(divitem);

                });
            }        
        }
    
        window.userSearchHhr.open("GET","https://api.github.com/search/users?q=" + input.value,true);
        window.userSearchHhr.send();
    }
    function closeExistingLists(elmnt){
        var foo = document.getElementById("userSuggestion");
    
        while(foo.firstChild){
            foo.removeChild(foo.firstChild);
        }
    }
}