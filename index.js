$('.slider-wrapper').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    responsive: [
        {
            breakpoint: 1024, // Breakpoint for tablets
            settings: {
                slidesToShow: 2,
         
            }
        },
        {
            breakpoint: 768, // Breakpoint for mobile devices
            settings: {
                slidesToShow: 1,
             
            }
        }
    ]
});

var sectionHeader = document.querySelector('.Header');
window.addEventListener('load', (event) => {
    sectionHeader.style.marginTop = "0";
});
