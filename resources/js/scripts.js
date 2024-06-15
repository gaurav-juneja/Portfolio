// Smooth scroll for anchor links
$('a[href*="#"]').on('click', function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 200, 'linear');
});

// Projects
document.addEventListener("DOMContentLoaded", function () {
    const tabs = document.querySelectorAll(".tab_heading");
    const projectSections = document.querySelectorAll(".project-section");
    const carousel = document.getElementById("carouselExampleIndicators");
    const languages = ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "jQuery"];
    const languagesParagraph = document.querySelector(".skills_tab_link");

    // Set initial language
    languagesParagraph.textContent = languages[0];

    // Listen for carousel slide event
    carousel.addEventListener("slid.bs.carousel", function (event) {
        const index = event.to;
        languagesParagraph.textContent = languages[index];
    });

    // Hide all project sections except the default active one
    projectSections.forEach(section => {
        section.style.display = "none";
    });
    document.getElementById("react-projects").style.display = "block";

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const tabId = this.getAttribute("data-tab");

            // Show the selected project section and hide others
            projectSections.forEach(section => {
                if (section.id === tabId + "-projects") {
                    section.style.display = "block";
                } else {
                    section.style.display = "none";
                }
            });

            // Update active tab
            tabs.forEach(t => {
                t.classList.remove("active-tab");
            });
            this.classList.add("active-tab");
        });
    });
    

    // Experience/Education Tabs
    const experienceTabs = document.querySelectorAll(".experience_tab_heading");
    const experienceSections = {
        "experience": document.getElementById("experience-section"),
        "education": document.getElementById("education-section")
    };

    experienceTabs.forEach(tab => {
        tab.addEventListener("click", function () {
            const tabId = this.getAttribute("data-tab");

            // Show the selected section and hide others
            for (const sectionId in experienceSections) {
                if (sectionId === tabId) {
                    experienceSections[sectionId].style.display = "block";
                } else {
                    experienceSections[sectionId].style.display = "none";
                }
            }

            // Update active tab
            experienceTabs.forEach(t => {
                t.classList.remove("active-tab");
            });
            this.classList.add("active-tab");
        });
    });

    // Initialize Bootstrap carousels
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        new bootstrap.Carousel(carousel);
    });
    
});
