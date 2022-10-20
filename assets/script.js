const abtn = document.getElementById('abtn');
const ebtn = document.getElementById('ebtn');
const cbtn = document.getElementById('cbtn');

let show = (event) => {
    event.target.style.visibility = 'visible';
   // ebtn.style.visibility = 'visible';
   // cbtn.style.visibility = 'visible';
}

let hide = (event) => {
    event.target.style.visibility = 'hidden';
    //ebtn.style.visibility = 'hidden';
    //cbtn.style.visibility = 'hidden';
}


abtn .addEventListener('click', hide);
ebtn.onclick = function () {
    hide(event)
};

//ebtn.addEventListener('click', () => {
    // 👇️ hide button
//    ebtn.style.visibility = 'hidden';
//});

//cbtn.addEventListener('click', () => {
    // 👇️ hide button
    cbtn.style.visibility = 'hidden';
//});

// ✅ Show button on hover
abtn.addEventListener('mouseover', () => {
  abtn.style.visbility= 'visible';
  

  //});