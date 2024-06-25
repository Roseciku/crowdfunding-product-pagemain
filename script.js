const backProject = document.getElementById("backproject");
const container2 = document.querySelector(".container2");
const innerContainer = document.querySelector(".innercontainer");
const closeModal = document.getElementById("closemodal");
const containers = document.querySelectorAll(".backprojectcontainer");
const continueBtns = document.querySelectorAll(".continuebtn");
const thanks = document.querySelector(".thanks");
const gotIt = document.getElementById("gotit");
const numberSpan = document.querySelector(".numberspan");
const selectRewardBtn = document.querySelectorAll("#selectreward");

backProject.addEventListener("click", function () {
  container2.style.display = "block";
});
closeModal.addEventListener("click", function () {
  container2.style.display = "none";
});

function resetContainers() {
  containers.forEach((container) => {
    container.style.border = "1px solid gray";
    container.querySelector(".innertwospans").style.display = "none";
    container.querySelector(".fillpledge").style.display = "none";
  });
}

containers.forEach((container, index) => {
  container.addEventListener("click", function () {
    resetContainers();
    container.style.border = "3px solid hsl(176, 72%, 28%)";
    container.querySelector(".innertwospans").style.display = "block";
    container.querySelector(".fillpledge").style.display = "flex";
    document.querySelector(`.hr${index + 1}`).style.display = "block";
  });
});

selectRewardBtn.forEach((btns) => {
  btns.addEventListener("click", function () {
    thanks.style.display = "block";
    let currentNumber = parseInt(numberSpan.textContent);
    if (currentNumber > 0) {
      numberSpan.textContent = currentNumber - 1;
    }
  });
});

continueBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    container2.style.display = "none";
    thanks.style.display = "block";
  });
});

gotIt.addEventListener("click", function () {
  thanks.style.display = "none";
});
