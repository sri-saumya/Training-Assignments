// import {Product} from "./product";
// function getProduct(){
//     let p = new Product();
//     p.Id = "1";
//     p.Price = 100;
//     p.Title = "Cricket Bat";
//     p.inStock = true;
//     return p;
// }
// let p = getProduct();
// // console.log(p);


// var isDone :  boolean = false;
// var age : number = 9;
// var isFlag = true;
// var abc : string ="data coming from api";
// var list : Array<number> = [1,2,3];


function printstd(data : studentandplayer[] | studentorplayer[]){
    data.forEach(element => {

        console.log(element);
    });
}

type student ={
    name : string,
    grade : number,
    age : number;
}
type player={
    name : string,
    sportname : string;

}
type studentandplayer = student & player;
type studentorplayer = student | player;

let andarr : studentandplayer [] = [];
let orarr : studentorplayer [] = [];

let s1 : studentandplayer={
    name : 'saumya',
    grade : 10,
    age : 20,
    sportname : 'Cricket'

}
andarr.push(s1);
let s2 : studentandplayer={
    name : 'sam',
    grade : 10,
    age : 20,
    sportname : 'Hockey'

}
andarr.push(s2);
let s3 : studentandplayer={
    name : 'ram',
    grade : 10,
    age : 20,
    sportname : 'Chess'

}
andarr.push(s3);

let sp1 : studentorplayer={
    name : 'saumya',
    grade : 10,
    age : 20,
    sportname : 'Cricket'

}
orarr.push(sp1);
let sp2 : studentorplayer={
    name : 'sam',
    grade : 10,
    age : 20,
    sportname : 'Hockey'

}
orarr.push(sp2);
let sp3 : studentorplayer={
    name : 'ram',
    grade : 10,
    age : 20,
    sportname : 'Chess'

}
orarr.push(sp3);

printstd(orarr);
printstd(andarr);
