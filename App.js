document.getElementById('passportForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Collect form data
    const fullName = document.getElementById('fullName').value;
    const dob = document.getElementById('dob').value;
    const passportNumber = document.getElementById('passportNumber').value;
    const nationality = document.getElementById('nationality').value;
    const gender = document.getElementById('gender').value;
    const photo = document.getElementById('photo').files[0];

    // Display the passport
    document.getElementById('displayName').textContent = fullName;
    document.getElementById('displayDob').textContent = dob;
    document.getElementById('displayPassportNumber').textContent = passportNumber;
    document.getElementById('displayNationality').textContent = nationality;
    document.getElementById('displayGender').textContent = gender;

    // Handle the uploaded photo
    const reader = new FileReader();
    reader.onload = function (event) {
        document.getElementById('passportPhoto').src = event.target.result;
    };
    reader.readAsDataURL(photo);

    // Show the passport container
    document.getElementById('passport').style.display = 'block';
});
