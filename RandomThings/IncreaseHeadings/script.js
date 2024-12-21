const headings = document.querySelectorAll("h1");
const btn = document.getElementById("btn");
let counter= document.getElementById("counter");

let count =1;

btn.addEventListener('click', () => {
    headings.forEach((heading, index) => {
        // Get the current font size
        const currentSize = parseFloat(window.getComputedStyle(heading).fontSize);
        // // Increase the font size by 2px
        // heading.style.fontSize = `${currentSize + 2}px`;
        // Calculate the increase amount (1px for the first, 2px for the second, etc.)
        const increaseAmount = (index + 1) * (index + 1);

        // Set the new font size
        heading.style.fontSize = `${currentSize + increaseAmount}px`;
    });
});
// btn.addEventListener("click", ()=> {
//     headings.forEach( (heading) =>{
//         heading.style.fontSize = "36px";
//     })
// })


btn.addEventListener("click", () => {
  count++
  counter.textContent = count;
})