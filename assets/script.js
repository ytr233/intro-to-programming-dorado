const abtn = document.getElementById('abtn');
const ebtn = document.getElementById('ebtn');
const cbtn = document.getElementById('cbtn');


abtn.addEventListener('click', () => {
  // 👇️ hide button
  abtn.style.visibility = 'hidden';

});

ebtn.addEventListener('click', () => {
    // 👇️ hide button
    ebtn.style.visibility = 'hidden';
});

cbtn.addEventListener('click', () => {
    // 👇️ hide button
    cbtn.style.visibility = 'hidden';
});

// ✅ Show button on hover
abtn.addEventListener('mouseover', () => {
    abtn.style.visbility= 'visible';
  

  });