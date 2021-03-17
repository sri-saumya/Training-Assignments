(function() {
    console.log("Two way data binding imlementation");
    var elements = document.querySelectorAll('[data-geek97-bind]');
    var dbrepo = {};
    elements.forEach((element) => {
        if(element.type === 'text'){
            var bindingProperty = element.getAttribute('data-geek97-bind');
            addToScope();
            element.onkeyup =()=>{
                dbrepo[bindingProperty] = element.value;

            }
        }
        function addToScope(){
            if(!dbrepo.hasOwnProperty(bindingProperty)){
                let value;
                Object.defineProperty(dbrepo,bindingProperty,{
                    configurable : true,
                    enumerable : true,
                    set : function (newvalue) {
                        value= newvalue;
                        elements.forEach(e => {
                            if(e.getAttribute('data-geek97-bind')===bindingProperty){
                                if(e.type==='text'){
                                    e.value=newvalue
                                }
                                else if(!e.type){
                                    e.innerHTML=newvalue
                                }
                            }
                        })
                        
                    },
                    get: function () {
                        return value;
                    }


                })
            }
        }
    });
})();