/* Start Header Functionality */
const toggleMenu = document.querySelector(".toggle-menu");
const navbar = document.querySelector(".header .navbar");
const navbarLinks = document.querySelectorAll(".navbar li");

toggleMenu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

navbarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
});
/* End Header Functionality */

// Hide loader when page is loaded
window.addEventListener("load", function () {
  document.querySelector(".loader-wrapper").style.display = "none";
});

/* Start Services Section */
const servicesBoxs = [
  {
    title: "Videography",
    bgVideo: "imgs/videos/Videography.webm",
    bgVideoMP4: "imgs/videos/Videography.mp4",
    description:
      "High-quality video production that captures your story with impact.",
  },
  {
    title: "Drone Footage",
    bgVideo: "imgs/videos/Drone_Footage.webm",
    bgVideoMP4: "imgs/videos/Drone_Footage.mp4",
    description:
      "Dynamic aerial shots that add scale and perspective to your project.",
  },
  {
    title: "Script Writing",
    bgVideo: "imgs/videos/Script_Writing.webm",
    bgVideoMP4: "imgs/videos/Script_Writing.mp4",
    description: "Engaging scripts tailored to connect with your audience.",
  },
  {
    title: "Client Choreography",
    bgVideo: "imgs/videos/Client_Choreography.webm",
    bgVideoMP4: "imgs/videos/Client_Choreography.mp4",
    description: "On-camera guidance so you feel confident and natural.",
  },
  {
    title: "Editing",
    bgVideo: "imgs/videos/Editing.webm",
    bgVideoMP4: "imgs/videos/Editing.mp4",
    description:
      "Professional editing that transforms raw footage into polished content.",
  },
  {
    title: "Publishing",
    bgVideo: "imgs/videos/Publishing.webm",
    bgVideoMP4: "imgs/videos/Publishing.mp4",
    description:
      "Seamless distribution to get your content seen everywhere it matters.",
  },
  {
    title: "Analytics of Content",
    bgVideo: "imgs/videos/Analytics_of_Content.webm",
    bgVideoMP4: "imgs/videos/Analytics_of_Content.mp4",
    description: "Track performance with clear insights to measure success.",
  },
  {
    title: "Ad Campaigns for Businesses",
    bgVideo: "imgs/videos/Ad_Campaigns_for_Businesses.webm",
    bgVideoMP4: "imgs/videos/Ad_Campaigns_for_Businesses.mp4",
    description: "Targeted ad strategies designed to grow reach and revenue.",
  },
];

const servicesGrid = document.querySelector(".services-grid");

servicesBoxs.forEach((service, index) => {
  const serviceCard = `
          <div class="service-card" data-aos="fade-down" data-aos-duration="1200" data-aos-delay="${
            index * 100
          }">
            <div class="video-box">
              <video class="video-banner" autoplay loop muted playsinline webkit-playsinline>
              <source src=${service.bgVideo} type="video/webm" />
              <source src=${service.bgVideoMP4} type="video/mp4" />
              </video>
            </div>
            <div class="service-content">
              <h3 class="service-title">${service.title}</h3>
              <p class="service-description">
                ${service.description}
              </p>
            </div>
          </div>`;

  servicesGrid.innerHTML += serviceCard;
});
/* End Services Section */

// AOS Configuration
(function () {
  AOS.init({
    // Global settings:
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    easing: "ease", // default easing for AOS animations
    mirror: true, // whether elements should animate out while scrolling past them
  });

  window.addEventListener("load", AOS.refresh);
})();

/* Start Stats Section */
let hasAnimated = false;

function animateCounter(element, target, duration = 2500) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M342.6 81.4C330.1 68.9 309.8 68.9 297.3 81.4L137.3 241.4C124.8 253.9 124.8 274.2 137.3 286.7C149.8 299.2 170.1 299.2 182.6 286.7L288 181.3L288 552C288 569.7 302.3 584 320 584C337.7 584 352 569.7 352 552L352 181.3L457.4 286.7C469.9 299.2 490.2 299.2 502.7 286.7C515.2 274.2 515.2 253.9 502.7 241.4L342.7 81.4z"/></svg>
      ${target}
      <span style='font-size: 20px; margin-left: 5px;'>%</span>`;
      clearInterval(timer);
    } else {
      element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M342.6 81.4C330.1 68.9 309.8 68.9 297.3 81.4L137.3 241.4C124.8 253.9 124.8 274.2 137.3 286.7C149.8 299.2 170.1 299.2 182.6 286.7L288 181.3L288 552C288 569.7 302.3 584 320 584C337.7 584 352 569.7 352 552L352 181.3L457.4 286.7C469.9 299.2 490.2 299.2 502.7 286.7C515.2 274.2 515.2 253.9 502.7 241.4L342.7 81.4z"/></svg>
      ${Math.floor(current)}
      <span style='font-size: 20px; margin-left: 5px;'>%</span>`;
    }
  }, 16);
}

// Intersection Observer for triggering animation when scrolling to section
const observerOptions = {
  threshold: 0.2,
  rootMargin: "-50px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !hasAnimated) {
      hasAnimated = true;

      const metricValues = document.querySelectorAll(".metric-value");
      metricValues.forEach((metric) => {
        const target = parseInt(metric.getAttribute("data-target"));
        animateCounter(metric, target);
      });
    }
  });
}, observerOptions);

// Observe the stats grid - animation plays only once
window.addEventListener("load", () => {
  const statsGrid = document.querySelector(".stats-grid");
  observer.observe(statsGrid);
});
/* End Stats Section */

const calendlyURL = "https://calendly.com/fullstackmediallc-p1lx/30min";

/* Start Calendly badge widget popup */
function openCalendly() {
  Calendly.initPopupWidget({
    url: calendlyURL,
  });
  return false;
}

// Optional: Listen to Calendly events
window.addEventListener("message", function (e) {
  if (e.data.event && e.data.event.indexOf("calendly") === 0) {
    console.log("Calendly event:", e.data.event);

    // Event when scheduling is completed
    if (e.data.event === "calendly.event_scheduled") {
      console.log("Meeting scheduled!", e.data.payload);
      alert(
        "Thank you! Your meeting has been scheduled. Check your email for confirmation."
      );
    }
  }
});
/* End Calendly badge widget */

/* Start Form Handler */
function handleFormSubmit(event) {
  event.preventDefault();

  // Get form data
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const company = document.getElementById("company").value;

  // Get selected services
  const selectedServices = [];
  document
    .querySelectorAll('input[name="services"]:checked')
    .forEach((checkbox) => {
      selectedServices.push(checkbox.value);
    });

  // Log form data (you can send this to your server/email if needed)
  console.log("Form Data:", {
    name,
    email,
    phone,
    company,
    services: selectedServices,
  });

  // Build URL with pre-filled information
  let fullUrl =
    calendlyURL +
    "?name=" +
    encodeURIComponent(name) +
    "&email=" +
    encodeURIComponent(email);

  // Add phone number if provided
  if (phone) {
    fullUrl += "&phone_number=" + encodeURIComponent(phone);
  }

  // Add selected services to the message/notes field
  if (selectedServices.length > 0) {
    const servicesText = "Interested in: " + selectedServices.join(", ");
    fullUrl += "&a1=" + encodeURIComponent(servicesText);
  }

  // Open Calendly popup with pre-filled information
  Calendly.initPopupWidget({
    url: fullUrl,
  });

  // Clear the form after submission
  document.getElementById("contactForm").reset();

  return false;
}
/* End Form Handler */

/* Start Scroll To Top Button */
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when user scrolls down 300px from the top
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
};

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
/* End Scroll To Top Button */
