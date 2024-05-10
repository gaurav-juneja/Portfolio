// Smooth scroll for anchor links
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});

// Projects
document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab_heading");
    const projectSections = document.querySelectorAll(".project-section");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            const tabId = this.getAttribute("data-tab");
            projectSections.forEach(section => {
                if (section.id === tabId + "-projects") {
                    section.style.display = "block";
                } else {
                    section.style.display = "none";
                }
            });

            tabs.forEach(t => {
                t.classList.remove("active-tab");
            });
            this.classList.add("active-tab");
        });
    });

    // Show the default active tab
    document.getElementById("javascript-projects").style.display = "block";
});
