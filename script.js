// Countdown Timer
var countDownDate = new Date("Mar 30, 2025 15:37:25").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days < 10 ? `0${days}` : days;
  document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.getElementById("minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.getElementById("seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML =
      "We are live! Check us out on the App Store!";
  }
}, 1000);

// Form Submission - Send Data via POST Request
document
  .getElementById("beta-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    let email = document.getElementById("email").value;
    let bio = document.getElementById("bio").value;

    let postData = {
      email: email,
      bio: bio,
    };

    fetch("https://your-api-endpoint.com/beta-signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Thank you for signing up for beta testing!");
        document.getElementById("beta-form").reset();
      })
      .catch((error) => {
        alert("There was an error submitting your request. Please try again.");
        console.error("Error:", error);
      });
  });
