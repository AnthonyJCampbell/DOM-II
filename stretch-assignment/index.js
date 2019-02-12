const blockholder = document.querySelector('.blocks');
const blocks = document.querySelectorAll('.block');

blocks.forEach((block) => {
    block.addEventListener('click', ((e) => {
        backToTop(e);
    }))
})

const backToTop = (e) => {
    blockholder.prepend(e.target);
}

// Add event listeners for click to blocks.
// When a block is clicked, it ought to be taken from the blocks NodeList and then prepended to it.
