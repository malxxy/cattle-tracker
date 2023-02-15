// document.getElementByID("ranchID").style.display = "none";

const livestockFormHandler = async (event) => {
  event.preventDefault();

  console.log("hello cows");

  const ranchNumEl = document.querySelector("#ranchID");
  const ranchNumhtml = ranchNumEl.innerHTML;
  const ranchNum = parseInt(ranchNumhtml);
  const tagIDhtml = document.querySelector("#tagID").value.trim();
  const tagID = parseInt(tagIDhtml);
  const name = document.querySelector("#name").value.trim();
  const sex = document.querySelector("#sex").value.trim();
  const fatherIDhtml = document.querySelector("#fatherID").value.trim();
  const fatherID = parseInt(fatherIDhtml);
  const motherIDhtml = document.querySelector("#motherID").value.trim();
  const motherID = parseInt(motherIDhtml);
  const birthday = document.querySelector("#birthday").value.trim();
  const currentLocation = document
    .querySelector("#currentLocation")
    .value.trim();
  const notes = document.querySelector("#notes").value.trim();
  const vaccine = document.querySelector("#vaccine:checked") ? true : false;

  console.log(
    ranchNum,
    tagID,
    name,
    sex,
    fatherID,
    motherID,
    birthday,
    currentLocation,
    notes,
    vaccine
  );

  const response = await fetch("/api/addCattle", {
    method: "POST",
    body: JSON.stringify({
      ranchNum,
      tagID,
      name,
      sex,
      vaccine,
      fatherID,
      motherID,
      birthday,
      currentLocation,
      notes,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  if (response.ok) {
    document.location.replace("/viewCattle");
  } else {
    alert("Failed to add livestock");
  }
};

document
  .querySelector(".livestock-form")
  .addEventListener("submit", livestockFormHandler);
