function getRating(ratings) {
  const message = document.querySelector(".message");
  console.log(message);

  this.ratings = document.querySelectorAll(".rating");
  //   console.log(ratings);
  ratings.forEach((rating) => {
    rating.addEventListener("click", (e) => {
      ratings.forEach((r) => {
        r.classList.remove("active");
      });
      e.target.classList.add("active");
      message.textContent = `You selected ${rating.textContent} out of 5`;
      console.log(message.textContent);
    });
  });
}

function checkforNull() {
  const rating = document.querySelectorAll(".rating");

  return Array.from(rating).some((rating) =>
    rating.classList.contains("active")
  );
}

function UI() {
  const body = document.querySelector("body");
  const btn = document.querySelector(".btn");
  const thankYouState = document.querySelector(".thanks");
  const init_card = document.querySelector(".init");
  const error_message = document.createElement("div");
  error_message.classList.add("error-message");
  error_message.textContent = "Please select a rating";
  console.log(btn);
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Button Clicked");
    if (!checkforNull()) {
      body.insertBefore(error_message, init_card);
      setTimeout(() => {
        body.removeChild(error_message);
      }, 1000);
      return;
    }

    thankYouState.style.display = "block";
    init_card.style.display = "none";
    thankYouState.classList.add("active");
  });

  const rating = document.querySelectorAll(".rating");
  getRating(rating);
}

UI();
