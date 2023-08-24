// var currentTab = 0;
// showTab(currentTab);

// function showTab(n) {
//   var x = document.getElementsByClassName("tab");
//   x[n].style.display = "block";

//   if (n == 0) {
//     document.getElementsByClassName("prevBtn")[0].style.display = "none";
//   } else {
//     document.getElementsByClassName("prevBtn")[0].style.display = "inline";
//   }

//   if (n == x.length - 1) {
//     document.getElementsByClassName("nextBtn")[0].innerHTML = "Submit";
//   } else {
//     document.getElementsByClassName("nextBtn")[0].innerHTML = "Next";
//   }

//   fixStepIndicator(n);
// }

// function nextPrev(n) {
//   var x = document.getElementsByClassName("tab");

//   if (n == 1 && !validateForm()) return false;

//   x[currentTab].style.display = "none";
//   currentTab += n;

//   if (currentTab < 0) {
//     currentTab = 0;
//   }

//   if (currentTab >= x.length) {
//     window.location.href = "/demo/index.html"; 
//     alert("Form submitted!");
//   }
  

//   showTab(currentTab);
// }

// function validateForm() {
//   var x, y, i, valid = true;
//   x = document.getElementsByClassName("tab");
//   y = x[currentTab].getElementsByTagName("input");

//   if (valid) {
//     document.getElementsByClassName("step")[currentTab].className += " finish";
//   }

//   return valid;
// }

// function fixStepIndicator(n) {
//   var i, x = document.getElementsByClassName("step");

//   for (i = 0; i < x.length; i++) {
//     x[i].className = x[i].className.replace(" active", "");
//   }

//   x[n].className += " active";
// }



  var currentTab = 0;
  showTab(currentTab);

  function showTab(n) {
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
  
    // Remove the "active" class from all step indicators
    var stepIndicators = document.getElementsByClassName("step");
    for (var i = 0; i < stepIndicators.length; i++) {
      stepIndicators[i].classList.remove("active");
    }
  
    // Add the "active" class to the current step indicator
    stepIndicators[n].classList.add("active");
  
    if (n == 0) {
      document.getElementsByClassName("prevBtn")[0].style.display = "none";
    } else {
      document.getElementsByClassName("prevBtn")[0].style.display = "inline";
    }
  
    if (n == x.length - 1) {
      document.getElementsByClassName("nextBtn")[0].innerHTML = "Submit";
    } else {
      document.getElementsByClassName("nextBtn")[0].innerHTML = "Next";
    }
  }
  

  function nextPrev(n) {
    var x = document.getElementsByClassName("tab");

    if (n == 1 && !validateForm()) return false;

    x[currentTab].style.display = "none";
    currentTab += n;

    if (currentTab < 0) {
      currentTab = 0;
    }

    if (currentTab >= x.length) {
      window.location.href = "/demo/index.html"; 
      alert("Form submitted!");
    }

    showTab(currentTab);
  }

  function validateForm() {
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");

    if (valid) {
      document.getElementsByClassName("step")[currentTab].className += " finish";
    }

    return valid;
  }

  function fixStepIndicator(n) {
    var i, x = document.getElementsByClassName("step");

    for (i = 0; i < x.length; i++) {
      x[i].className = x[i].className.replace(" active", "");
    }

    x[n].className += " active";
  }

  function selectOption(option, stepIndex) {
    // Update the selected option state
    var options = document.getElementsByClassName("option");
    for (var i = 0; i < options.length; i++) {
      options[i].classList.remove("selected");
    }
    option.classList.add("selected");
  }

