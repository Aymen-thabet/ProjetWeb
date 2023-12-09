const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var comment = document.getElementById("comment").value;

    if (name.trim() === "" || email.trim() === "" || subject.trim() === "") {
        alert("Please enter your name, email, and subject.");
    } else if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
    } else {
        alert("Form submitted successfully!");
    }
}

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
