let counter = 0;
let companyName = [];
let workDuration = [];
let companyDetails = [];

document.getElementById('addExperience').addEventListener('click', function () {
    counter++;

    let experienceDiv = document.getElementById('experienceField');
    let experienceChildDiv = document.createElement('div');

    // Create the HTML structure with a unique ID for the company name input
    experienceChildDiv.innerHTML = `
    <div class="mb-3">
      <label for="companyName${counter}" class="form-label fw-bold">Company/Organization Name: </label>
      <input type="text" class="form-control" id="companyName${counter}" placeholder="Ex: Google California">
    </div>
    <div class="mb-3">
      <label for="workDuration${counter}" class="form-label fw-bold">Duration of Work: </label>
      <input type="text" class="form-control" id="workDuration${counter}" placeholder="Ex: 6months">
    </div>
    <div class="mb-3">
      <label for="workDetails${counter}" class="form-label fw-bold">Work Details</label>
      <textarea class="form-control" id="workDetails${counter}" rows="3"></textarea>
    </div>
  `;

    experienceDiv.appendChild(experienceChildDiv);

    // Get a reference to the newly created company name input element
    let companyNameInput = document.getElementById(`companyName${counter}`);

    // Add an event listener to capture changes in the company name input
    companyNameInput.addEventListener('change', function () {
        // Update the companyName array with the new value
        companyName.push(this.value); // Use "this" to access the current input element
    });

    // Get a reference to the newly created work duration input element
    let workDurationInput = document.getElementById(`workDuration${counter}`);

    // Add an event listener to capture changes in the company name input
    workDurationInput.addEventListener('change', function () {
        // Update the companyName array with the new value
        workDuration.push(this.value); // Use "this" to access the current input element
    });

    // Get a reference to the newly created company details input element
    let companyDetailsInput = document.getElementById(`workDetails${counter}`);

    // Add an event listener to capture changes in the company details input
    companyDetailsInput.addEventListener('change', function () {
        // Update the companyName array with the new value
        companyDetails.push(this.value); // Use "this" to access the current input element
    });
});



// No experience Section
document.getElementById('noExperience').addEventListener('click', function () {
    let experienceDiv = document.getElementById('experienceFieldDiv');
    let eduHr = document.getElementById('eduHr');
    eduHr.style.display = "none";
    experienceDiv.style.display = "none";
});

// skill section here
let skillCounter = 0;
let skillName = [];
let skillPercentage = [];

document.getElementById('addSkill').addEventListener('click', function () {
    skillCounter++;

    let skillContainer = document.getElementById('skillField');
    let skillContainerDiv = document.createElement('div');

    // Create the HTML structure with a unique ID for the company name input
    skillContainerDiv.innerHTML = `
    <div class="mb-3">
      <label for="skillName${skillCounter}" class="form-label fw-bold">Skill Name: </label>
      <input type="text" class="form-control" id="skillName${skillCounter}" placeholder="Ex: HTML">
    </div>
    <div class="mb-3">
      <label for="skillPercentage${skillCounter}" class="form-label fw-bold">Proficiency level: </label>
      <input type="text" class="form-control" id="skillPercentage${skillCounter}" placeholder="Ex: 85%">
    </div>
  `;

    skillContainer.appendChild(skillContainerDiv);

    // Get a reference to the newly created skill name input element
    let skillNameInput = document.getElementById(`skillName${skillCounter}`);

    // Add an event listener to capture changes in the skill name input
    skillNameInput.addEventListener('change', function () {
        // Update the skillName array with the new value
        skillName.push(this.value); // Use "this" to access the current input element
    });

    // Get a reference to the newly created skill percentage input element
    let skillPercentageInput = document.getElementById(`skillPercentage${skillCounter}`);

    // Add an event listener to capture changes in the company name input
    skillPercentageInput.addEventListener('change', function () {
        // Update the companyName array with the new value
        skillPercentage.push(this.value); // Use "this" to access the current input element
    });

    console.log(skillName, skillPercentage);
});

document.getElementById('submitInput').addEventListener('click', function () {
    let resumeContainer = document.getElementById('resumeContainer');
    resumeContainer.style.display = "block";
    // getting all input id's
    let userNameInput = document.getElementById('userNameInput');
    let userName = userNameInput.value;
    let userRoleInput = document.getElementById('userRole');
    let userRole = userRoleInput.value;
    let userNameFieldText = document.getElementById('userNameField');
    let userRoleFieldText = document.getElementById('userRoleField');
    let userAddresssInput = document.getElementById('addressInput');
    let userAddress = userAddresssInput.value;
    let userPhoneInput = document.getElementById('numberInput');
    let userPhone = userPhoneInput.value;
    let userEmailInput = document.getElementById('emailInput');
    let userEmail = userEmailInput.value;
    let userLinkInput = document.getElementById('linkInput');
    let userLink = userLinkInput.value;
    // user contact section starts here
    let userAddressFieldText = document.getElementById('address');
    let userPhoneFieldText = document.getElementById('phone');
    let userEmailFieldText = document.getElementById('email');
    let userLinkFieldText = document.getElementById('link');
    // user contact section ends here

    // user image
    // let profileValue = document.getElementById('userProfile');
    // let profile = profileValue.value;
    // console.log(profile)

    // Qualification section starts here------------------------------------------------------------
    /* Getting all the id's that we need*/

    // 1. education level id's
    let eduLevelOneText = document.getElementById('qualificationOne');
    let eduLevelTwoText = document.getElementById('qualificationTwo');
    let eduLevelThreeText = document.getElementById('qualificationThree');

    // 2. education level institution id's
    let eduInstitutionOneText = document.getElementById('qualificationInstitutionOne');
    let eduInstitutionTwoText = document.getElementById('qualificationInstitutionTwo');
    let eduInstitutionThreeText = document.getElementById('qualificationInstitutionThree');

    // 3. education level session id's
    let eduSessionOneText = document.getElementById('qualificationOneSession');
    let eduSessionTwoText = document.getElementById('qualificationTwoSession');
    let eduSessionThreeText = document.getElementById('qualificationThreeSession');

    // 4. education level details id's
    let eduDetailsOneText = document.getElementById('qualificationDetailsOne');
    let eduDetailsTwoText = document.getElementById('qualificationDetailsTwo');
    let eduDetailsThreeText = document.getElementById('qualificationDetailsThree');

    // 1. education level id's values
    let eduLevelOne = eduLevelOneText.value;
    let eduLevelTwo = eduLevelTwoText.value;
    let eduLevelThree = eduLevelThreeText.value;

    // 2. education level institution id's values
    let eduInstitutionOne = eduInstitutionOneText.value;
    let eduInstitutionTwo = eduInstitutionTwoText.value;
    let eduInstitutionThree = eduInstitutionThreeText.value;

    // 3. education level session id's values
    let eduSessionOne = eduSessionOneText.value;
    let eduSessionTwo = eduSessionTwoText.value;
    let eduSessionThree = eduSessionThreeText.value;

    // 4. education level details values
    let eduDetailsOne = eduDetailsOneText.value;
    let eduDetailsTwo = eduDetailsTwoText.value;
    let eduDetailsThree = eduDetailsThreeText.value;

    // storing the values to an array
    let eduLevelArr = [eduLevelOne, eduLevelTwo, eduLevelThree];
    let eduInstitutionArr = [eduInstitutionOne, eduInstitutionTwo, eduInstitutionThree];
    let eduSessionArr = [eduSessionOne, eduSessionTwo, eduSessionThree];
    let eduDetailsArr = [eduDetailsOne, eduDetailsTwo, eduDetailsThree];

    // Creating new elements
    for (let i = 0; i < 3; i++) {
        let eduDiv = document.createElement('div');
        eduDiv.innerHTML = `
    <div class="row mt-2">
    <div class="col-md-6">
        <li id="qualificationTitle" class="fw-bold text-primary">${eduLevelArr[i]}</li>
        <span>${eduSessionArr[i]}</span>
    </div>
    <div class="col-md-6">
        <h5>${eduInstitutionArr[i]}</h5>
        <p>${eduDetailsArr[i]}</p>
    </div>
</div>
    `;

        educationListParent.append(eduDiv);
    }

    // Qualification section ends here------------------------------------------------------------

    // inserting value into the UI
    userNameFieldText.innerText = userName;
    userRoleFieldText.innerText = userRole;
    userAddressFieldText.innerText = userAddress;
    userPhoneFieldText.innerText = userPhone;
    userEmailFieldText.innerText = userEmail;
    userLinkFieldText.innerText = userLink;

    // adding user experience to the UI
    if (companyName.length == 0 && companyDetails.length == 0) {
        let experience = document.getElementById('experienceContainer');
        experience.style.display = "none";
    }
    else {
        let experience = document.getElementById('experienceList');
        // Creating new experience elements
        for (let i = 0; i < counter; i++) {
            let expDiv = document.createElement('div');
            expDiv.innerHTML = `
    <div class="row">
    <div class="col-md-6">
        <li class="fw-bold text-primary">${companyName[i]}</li>
        <span>${workDuration[i]}</span>
    </div>
    <div class="col-md-6">
        <p>${companyDetails[i]}</p>
    </div>
    </div>
    `;

            experience.append(expDiv);
        }
    }

    // adding skill to the UI
    // adding user experience to the UI
    let skill = document.getElementById('skillList');
    // Creating new experience elements
    for (let i = 0; i < skillCounter; i++) {
        let skillDiv = document.createElement('div');
        skillDiv.classList.add('col-md-6');
        skillDiv.innerHTML = `
        <span>${skillName[i]}</span>
        <div class="progress" role="progressbar" aria-label="Example 20px high" aria-valuenow="25"
            aria-valuemin="0" aria-valuemax="100" style="height: 20px">
            <div class="progress-bar" style="width: ${skillPercentage[i]}">${skillPercentage[i]}</div>
        </div>
    `;

        skill.append(skillDiv);
    }


    // // error handiling----------------------------------------------------------------------
    // Error handling
    let hasErrors = false;

    // Validate required fields
    const requiredFields = [
        'userNameInput',
        'userRole',
        'addressInput',
        'numberInput',
        'emailInput',
    ];
    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field.value.trim() === '') {
            field.classList.add('error'); // Visually highlight error
            hasErrors = true;
            alert(`Please fill in the ${field.placeholder} field.`);
            location.reload();
        } else {
            field.classList.remove('error');
        }
    });

    // Validate email format
    const emailInput = document.getElementById('emailInput');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('error');
        hasErrors = true;
        alert('Please enter a valid email address.');
        location.reload();
    } else {
        emailInput.classList.remove('error');
    }

    // Validate skill percentage
    const skillPercentageInputs = document.querySelectorAll('input[id^="skillPercentage"]');
    skillPercentageInputs.forEach(input => {
        const percentage = parseInt(input.value);
        if (isNaN(percentage) || percentage < 0 || percentage > 100) {
            input.classList.add('error');
            hasErrors = true;
            alert('Please enter a skill percentage between 0 and 100.');
            location.reload();
        } else {
            input.classList.remove('error');
        }
    });

    if (!hasErrors) {
        resumeContainer.style.display = "block";
        // hiding the input section after submission
        document.getElementById('inputSection').style.display = "none";
        // clearing input field
        const inputs = document.querySelectorAll('input');
        const textareaInputs = document.querySelectorAll('textarea');

        inputs.forEach(input => {
            input.value = '';
        });
        textareaInputs.forEach(textarea => {
            textarea.value = '';
        });
    }
    else {
        resumeContainer.style.display = "none";
    }
});

document.getElementById('generateAgain').addEventListener('click', function () {
    location.reload();
})

// var doc = new jsPDF();

// function saveDiv(divId, title) {
//     const divElement = document.getElementById(divId);
//     const styles = divElement.style.cssText; // Get element's inline styles
//     const html = `<html><head><title>${title}</title><style>${styles}</style></head><body>`
//         + divElement.innerHTML + `</body></html>`;
//     doc.fromHTML(html);
//     doc.save('div.pdf');
// }


// function printDiv(divId,
//     title) {

//     let mywindow = window.open('', 'PRINT', 'height=650,width=900,top=100,left=150');

//     mywindow.document.write(`<html><head><title>${title}</title>`);
//     mywindow.document.write('</head><body >');
//     mywindow.document.write(document.getElementById(divId).innerHTML);
//     mywindow.document.write('</body></html>');

//     mywindow.document.close(); // necessary for IE >= 10
//     mywindow.focus(); // necessary for IE >= 10*/

//     mywindow.print();
//     mywindow.close();

//     return true;
// }


async function captureAndSaveAsPDF() {
    const element = document.getElementById('resume');

    // Capture the element with html2canvas
    const canvas = await html2canvas(element, {
        scale: 2, // Adjust scale as needed to manage resolution
        useCORS: true, // This might help with images hosted on other domains
    });

    // Initialize jsPDF. Adjust the orientation, units, and format as needed
    const pdf = new jspdf.jsPDF({
        orientation: 'p',
        unit: 'px',
        format: [canvas.width, canvas.height]
    });

    // Calculate the aspect ratio of the content to fit properly
    const aspectRatio = canvas.width / canvas.height;

    // Calculate the width and height of the content in the PDF
    let pdfWidth = pdf.internal.pageSize.getWidth();
    let pdfHeight = pdfWidth / aspectRatio;

    // If the calculated height exceeds the height of the PDF, adjust the height and width
    if (pdfHeight > pdf.internal.pageSize.getHeight()) {
        pdfHeight = pdf.internal.pageSize.getHeight();
        pdfWidth = pdfHeight * aspectRatio;
    }

    // Add the canvas as an image to the PDF. Adjust the format ('PNG' or 'JPEG') as needed
    pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, pdfWidth, pdfHeight);

    // Save the PDF
    pdf.save('my-resume(Git: Suprio-Das).pdf');
}