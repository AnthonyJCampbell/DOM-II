const blockholder = document.querySelector('.blocks');
const blocks = document.querySelectorAll('.block');

// Add event listeners for click and hold to blocks.
blocks.forEach((block) => {
    block.addEventListener('click', ((e) => {
        backToTop(e);
    }))
})
// When a block is clicked, it is prepended to blockholder while the other elements get push down
const backToTop = (e) => {
    blockholder.prepend(e.target);
}
