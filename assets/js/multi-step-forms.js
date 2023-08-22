var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";

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

  fixStepIndicator(n);
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
    // Form submission or additional processing
    window.location.href = "/index.html"; // Corrected navigation
    console.log("URL:", window.location.href);
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
