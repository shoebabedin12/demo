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

// multiple question select
// Initialize an array to store selected options for each question
const selectedOptions = [];

function selectOption(option, questionIndex) {
  // Remove 'active' class and hide checkmark icon from all options in this question
  const options = document.querySelectorAll('.question-container')[questionIndex].querySelectorAll('.option');
  options.forEach((opt) => {
    opt.classList.remove('active');
    opt.querySelector('.fa-check').style.display = 'none';
  });

  // Add 'active' class and display checkmark for the selected option
  option.classList.add('active');
  option.querySelector('.fa-check').style.display = 'inline-block';

  // Update the selected option in the array
  selectedOptions[questionIndex] = option.textContent.trim();
  
  // Log the selected options (you can do something else with them)
  console.log(`Selected options for question ${questionIndex}: ${selectedOptions[questionIndex]}`);
}



// drag & drop
document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
  const dropZoneElement = inputElement.closest(".drop-zone");

  dropZoneElement.addEventListener("click", (e) => {
    inputElement.click();
  });

  inputElement.addEventListener("change", (e) => {
    if (inputElement.files.length) {
      updateThumbnail(dropZoneElement, inputElement.files[0]);
    }
  });

  dropZoneElement.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZoneElement.classList.add("drop-zone--over");
  });

  ["dragleave", "dragend"].forEach((type) => {
    dropZoneElement.addEventListener(type, (e) => {
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });

  dropZoneElement.addEventListener("drop", (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length) {
      inputElement.files = e.dataTransfer.files;
      updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
    }

    dropZoneElement.classList.remove("drop-zone--over");
  });
});

/**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
  let thumbnailElement =
    dropZoneElement.querySelector(".drop-zone__thumb");

  // First time - remove the prompt
  if (dropZoneElement.querySelector(".drop-zone__prompt")) {
    dropZoneElement.querySelector(".drop-zone__prompt").remove();
  }

  // First time - there is no thumbnail element, so lets create it
  if (!thumbnailElement) {
    thumbnailElement = document.createElement("div");
    thumbnailElement.classList.add("drop-zone__thumb");
    dropZoneElement.appendChild(thumbnailElement);
  }

  thumbnailElement.dataset.label = file.name;

  // Show thumbnail for image files
  if (file.type.startsWith("image/")) {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
    };
  } else {
    thumbnailElement.style.backgroundImage = null;
  }
}