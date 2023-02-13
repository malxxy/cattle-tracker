const livestockFormHandler = async (event) => {
    event.preventDefault();

    console.log("hello cows")

const ranchNum = document.querySelector('#ranchNum').value.trim();
const tagID = document.querySelector('#tagID').value.trim();
const name = document.querySelector('#name').value.trim();
const sex = document.querySelector('#sex').value.trim();
const fatherID = document.querySelector('#fatherID').value.trim();
const motherID = document.querySelector('#motherID').value.trim();
const birthday = document.querySelector('#birthday').value.trim();
const currentLocation = document.querySelector('#currentLocation').value.trim();
const notes = document.querySelector('#notes').value.trim();
const vaccine = document.querySelector('#vaccine:checked') ? true : false;

const response = await fetch('/api/users/cattle', {
    method: 'POST',
    body: JSON.stringify({
        ranchNum,
        tagID,
        name,
        sex,
        fatherID,
        motherID,
        birthday,
        currentLocation,
        notes,
        vaccine,
    }), 
    headers: {
        'Content-Type': 'application/json'
    },
});
console.log(response);
if (response.ok) {
    document.location.replace('/cattle')
} else {
    alert("Failed to add livestock")
    }
}

document.querySelector('.livestock-form').addEventListener('submit', livestockFormHandler);