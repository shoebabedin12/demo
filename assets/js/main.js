$(document).ready(function () {
  // filtering
  // Bind the change event handler
  $(".event-type-select").change(function () {
    var selectedEventType = this.value;
    // Hide all dropdowns initially
    $(".collectionFilterResult div").addClass("hidden");
    // Show the dropdown for the selected event type
    $(
      '.collectionFilterResult div[data-eventtype="' + selectedEventType + '"]'
    ).removeClass("hidden");
  });

  // Trigger the change event to set the default filter to "men"
  $(".event-type-select").val("men").change();

  // hero slider
  var swiper = new Swiper(".mySwiper", {
    // effect: "fade",
    autoplay: {
      delay: 3000, // Set the delay between slides in milliseconds
      disableOnInteraction: false // Allow autoplay to continue even when the user interacts with the slider
    },
    loop: true, // Set to true for infinite loop
    speed: 1000, // Adjust the speed value to control the slide transition speed
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
  // buyer slider
  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4.4,
    spaceBetween: 40,
    // centeredSlides: true,
    loop: false, // Set to true for infinite loop
    speed: 1000, // Adjust the speed value to control the slide transition speed
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      1024: {
        slidesPerView: 4.4,
        slidesPerGroup: 1,
        spaceBetween: 30
      },
      769: {
        slidesPerView: 3.4,
        slidesPerGroup: 1,
        spaceBetween: 16
      },
      600: {
        slidesPerView: 2.4,
        slidesPerGroup: 1,
        spaceBetween: 16
      },
      300: {
        slidesPerView: 1.2,
        slidesPerGroup: 1,
        spaceBetween: 16
      }
    }
  });
  // we-develop
  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 3000, // Set the delay between slides in milliseconds
      disableOnInteraction: false // Allow autoplay to continue even when the user interacts with the slider
    },
    loop: false, // Set to true for infinite loop
    speed: 1000, // Adjust the speed value to control the slide transition speed
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 1
      },
      769: {
        slidesPerView: 3.4,
        slidesPerGroup: 1,
        spaceBetween: 16
      },
      600: {
        slidesPerView: 2.4,
        slidesPerGroup: 1,
        spaceBetween: 16
      },
      300: {
        slidesPerView: 2.4,
        slidesPerGroup: 1,
        spaceBetween: 16
      }
    }
  });

  // testimonial slider
  var swiper = new Swiper(".mySwiper4", {
    // effect: "fade",
    autoplay: {
      delay: 3000, // Set the delay between slides in milliseconds
      disableOnInteraction: false // Allow autoplay to continue even when the user interacts with the slider
    },
    loop: false, // Set to true for infinite loop
    speed: 1000, // Adjust the speed value to control the slide transition speed
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });

  // we-develop
  var swiper = new Swiper(".brandsSlider", {
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
      delay: 3000, // Set the delay between slides in milliseconds
      disableOnInteraction: false // Allow autoplay to continue even when the user interacts with the slider
    },
    loop: true, // Set to true for infinite loop
    speed: 1000, // Adjust the speed value to control the slide transition speed
    pagination: {
      el: ".swiper-pagination",
      type: "fraction"
    },
    breakpoints: {
      1024: {
        slidesPerView: 5,
        slidesPerGroup: 1
      },
      769: {
        slidesPerView: 5,
        slidesPerGroup: 1
      },
      600: {
        slidesPerView: 4,
        slidesPerGroup: 1
      },
      300: {
        slidesPerView: 3,
        slidesPerGroup: 1
      }
    }
  });
  // email sending
  document
    .getElementById("emailForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("emailInput").value;
      const message = document.getElementById("messageInput").value;

      const data = { email, message };

      fetch("/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then((result) => {
          console.log(result);
          // Handle success or error responses from the backend
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle any errors that occur during the fetch
        });
    });
});
