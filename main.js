

// NAVBAR

const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.querySelector("nav .container ul");

// open SIDEBAR
menuBtn.addEventListener("click", () => {
  menu.style.display = "block";
  menuBtn.style.display = "none";
  closeBtn.style.display = "block";
});
// close SIDEBAR
closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  menuBtn.style.display = "block";
  closeBtn.style.display = "none";
});

// change active class to clicked nav item
const navItems = document.querySelectorAll("nav ul li");

// remove active class from other items
const removeActiveClass = () => {
  navItems.forEach(item => {
    const link = item.querySelector('a');
    link.classList.remove('active');
  })
}

// add active class to clicked nav item
navItems.forEach((item) => {
  const link = item.querySelector('a');
  link.addEventListener('click', () => {
    removeActiveClass();
    link.classList.add('active');
  })
})


// Get all the accordion menu items
const accordionItems = document.querySelectorAll('#faqs .content article');

// Loop through each item and add a click event listener
accordionItems.forEach(item => {
  item.addEventListener('click', () => {
    // Toggle the "active" class on the clicked item
    item.classList.toggle('active');

    // Get the content element of the clicked item
    const content = item.querySelector('p');

    // Toggle the display of the content element
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});


// change navbar style on scroll
window.addEventListener("scroll", ()=>{
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 0)
})