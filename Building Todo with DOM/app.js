let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');

btn.addEventListener('click', function () {
    let item = document.createElement('li');
    let del = document.createElement('button');
    item.innerText = inp.value;
    del.innerText = "delete";
    ul.appendChild(item);
    item.appendChild(del);
    del.style.position = "absolute";
    del.style.right = "500px";
    inp.value = "";
});




// let delbtns = document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener('click', function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }


// Event Delegation
ul.addEventListener("click", function (event) {
    // console.log('clicked');
    // console.log(event.target);
    // console.dir(event.target.nodeName);
    if (event.target.nodeName == "BUTTON") {
        let ListItem = event.target.parentElement;
        ListItem.remove();
    }
});