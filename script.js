const backProject = document.getElementById("backproject");
const container2 = document.querySelector(".container2");
const innerContainer = document.querySelector(".innercontainer");
const closeModal = document.getElementById("closemodal");
const containers = document.querySelectorAll(".backprojectcontainer");
const continueBtns = document.querySelectorAll(".continuebtn");
const thanks = document.querySelector(".thanks");
const gotIt = document.getElementById("gotit");
const bookmarkBtn = document.querySelector(".bookmarkbtn");
const numberSpan1 = document.querySelector(".numberspan1");
const numberSpan2 = document.querySelector(".numberspan2");
const selectbambooRewardBtn = document.querySelector("#selectbambooreward");
const selectblackedRewardBtn = document.querySelector("#selectblackedreward");
const digitsdivspan1 = document.getElementById("digitsdivspan1");
const digitsdivspan2 = document.getElementById("digitsdivspan2");
const listDiv = document.querySelector(".listdiv");
const innerDiv = document.querySelector(".innercontainer");
const enternorewardpledge = document.getElementById(
  "enternorewardpledge"
).value;
const enterbamboopledge = document.getElementById("enterbamboopledge").value;
const enterblackpledge = document.getElementById("enterblackpledge").value;
const entermahoganypledge = document.getElementById(
  "entermahoganypledge"
).value;

const zero$button = document.getElementById("zero$button");
const twentyfive$btn = document.getElementById("twentyfive$btn");
const seventyfive$btn = document.getElementById("seventyfive$btn");
const twohundred$btn = document.getElementById("twohundred$btn");
const continuebtn25 = document.querySelector(".continuebtn25");

backProject.addEventListener("click", function () {
  container2.style.display = "block";
  listDiv.style.opacity = "0.2";
  innerDiv.style.opacity = "0.2";
});
closeModal.addEventListener("click", function () {
  container2.style.display = "none";
  listDiv.style.opacity = "1";
  innerDiv.style.opacity = "1";
});

bookmarkBtn.addEventListener("click", () => {
  bookmarkBtn.textContent = "Bookmarked";
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

selectbambooRewardBtn.addEventListener("click", function () {
  thanks.style.display = "block";
  listDiv.style.opacity = "0.2";
  innerDiv.style.opacity = "0.2";
  let currentNumber = parseInt(numberSpan1.textContent);
  let currentNumber2 = parseInt(
    digitsdivspan1.textContent.replace(/[^0-9]/g, "")
  );
  let currentNumber3 = parseInt(
    digitsdivspan2.textContent.replace(/[^0-9]/g, "")
  );

  digitsdivspan1.textContent = (currentNumber2 + 25).toLocaleString();
  digitsdivspan2.textContent = (currentNumber3 + 1).toLocaleString();
  if (currentNumber > 0) {
    numberSpan1.textContent = currentNumber - 1;
  }
});

selectblackedRewardBtn.addEventListener("click", function () {
  thanks.style.display = "block";
  let currentNumber = parseInt(numberSpan2.textContent);
  let currentNumber2 = parseInt(
    digitsdivspan1.textContent.replace(/[^0-9]/g, "")
  );
  let currentNumber3 = parseInt(
    digitsdivspan2.textContent.replace(/[^0-9]/g, "")
  );

  digitsdivspan1.textContent = (currentNumber2 + 75).toLocaleString();
  digitsdivspan2.textContent = (currentNumber3 + 1).toLocaleString();
  if (currentNumber > 0) {
    numberSpan2.textContent = currentNumber - 1;
  }
});

continueBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    container2.style.display = "none";
    thanks.style.display = "block";
  });
});

let isTwentyFiveClicked = false;

twentyfive$btn.addEventListener("click", () => {
  isTwentyFiveClicked = true;
});

continuebtn25.addEventListener("click", () => {
  let currentNumber2 = parseInt(
    digitsdivspan1.textContent.replace(/[^0-9]/g, "")
  );
  let currentNumber3 = parseInt(
    digitsdivspan2.textContent.replace(/[^0-9]/g, "")
  );

  if (isTwentyFiveClicked) {
    digitsdivspan1.textContent = (currentNumber2 + 25).toLocaleString();
    digitsdivspan2.textContent = (currentNumber3 + 1).toLocaleString();
  } else {
    let bambooPledge = parseInt(enterbamboopledge);
    digitsdivspan1.textContent = (
      currentNumber2 + bambooPledge
    ).toLocaleString();
    digitsdivspan2.textContent = (currentNumber3 + 1).toLocaleString();
  }
});

gotIt.addEventListener("click", function () {
  thanks.style.display = "none";
  listDiv.style.opacity = "1";
  innerDiv.style.opacity = "1";
});
