const fooObj = {name:"foo"};
const barObj = {name :"bar"};

const getFoo = () => Promise.resolve(fooObj);
const getBar = () =>
        new Promise((resolve) => {
            setTimeout(()=>{
                resolve(barObj);
            },3000);
        });

Promise.all([getFoo(), getBar()])
.then((foo, bar)=>{
    //console.log(fooObj, barObj);
   // console.log(foo, bar);

   // foo.isAnAlgoExprt =foo.name.includes("AlgoExpert");
   // bar.isAnAlgoExpert =bar.name.includes("AlgoExpert");

    return [foo, bar];   
}).then(([foo, bar]) =>{
    console.log(fooObj, barObj);
    console.log(foo, bar);
}).catch((err)=>{
    console.log("There was an error"+err);
})

fooObj.name+= " is an AlgoExpert";
barObj.name += " is a SystemExpert";

console.log(fooObj, barObj);