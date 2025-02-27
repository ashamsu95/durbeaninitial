// // Countdown Timer
// var countDownDate = new Date("Mar 30, 2025 15:37:25").getTime();

// var x = setInterval(function () {
//   var now = new Date().getTime();
//   var distance = countDownDate - now;

//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   document.getElementById("days").textContent = days
//     .toString()
//     .padStart(2, "0");
//   document.getElementById("hours").textContent = hours
//     .toString()
//     .padStart(2, "0");
//   document.getElementById("minutes").textContent = minutes
//     .toString()
//     .padStart(2, "0");
//   document.getElementById("seconds").textContent = seconds
//     .toString()
//     .padStart(2, "0");

//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("timer").innerHTML =
//       "We are live! Check us out on the App Store!";
//   }
// }, 1000);

// Form Submission - Send Data via POST Request
document
  .getElementById("beta-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    let email = document.getElementById("email").value.trim();
    let bio = document.getElementById("bio").value.trim();

    if (!email || !bio) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    let postData = {
      email: email,
      bio: bio,
    };

    fetch("https://api.durbean.com/beta-signup/", {
      // Use relative URL for the API
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to submit data");
        }
        return response.json();
      })
      .then((data) => {
        alert(data.message || "Thank you for signing up for beta testing!");
        document.getElementById("beta-form").reset();
      })
      .catch((error) => {
        alert("There was an error submitting your request. Please try again.");
        console.error("Error:", error);
      });
  });
