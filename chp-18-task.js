let successIcon = `<i class="fa-solid fa-circle-check success"></i>`;
let errorIcon = `<i class="fa-solid fa-circle-xmark error"></i>`;

let allInputs = document.querySelectorAll('input');
let allSpans = document.querySelectorAll('span');
let button = document.querySelector('button');

// Name Validation 
allInputs[0].onblur = () => {
    if (allInputs[0].value != "") {
        allSpans[0].innerHTML = successIcon;
        allInputs[0].classList.add('success-inp')
        allInputs[0].classList.remove('error-inp')
        button.disabled = false;
    }
    else {
        allSpans[0].innerHTML = errorIcon;
        allInputs[0].classList.add('error-inp')
        allInputs[0].classList.remove('success-inp');
        button.disabled = true;
    }
}

allInputs[0].onfocus = () => {
    if (allInputs[0].value != "") {
        allSpans[0].innerHTML = successIcon;
    }
    else {
        allInputs[0].classList.remove('error-inp');
        allSpans[0].innerHTML = "";
    }
}

// Roll Number Validation
allInputs[1].onblur = () => {
    if (allInputs[1].value != "") {
        allSpans[1].innerHTML = successIcon;
        allInputs[1].classList.add('success-inp')
        allInputs[1].classList.remove('error-inp')
        button.disabled = false;
    }
    else {
        allSpans[1].innerHTML = errorIcon;
        allInputs[1].classList.add('error-inp')
        allInputs[1].classList.remove('success-inp');
        button.disabled = true;
    }
}

allInputs[1].onfocus = () => {
    if (allInputs[1].value != "") {
        allSpans[1].innerHTML = successIcon;
    }
    else {
        allInputs[1].classList.remove('error-inp');
        allSpans[1].innerHTML = "";
    }
}

// Email Validation
allInputs[2].onblur = () => {
    if (allInputs[2].value != "") {
        allSpans[2].innerHTML = successIcon;
        allInputs[2].classList.add('success-inp')
        allInputs[2].classList.remove('error-inp')
        button.disabled = false;
    }
    else {
        allSpans[2].innerHTML = errorIcon;
        allInputs[2].classList.add('error-inp')
        allInputs[2].classList.remove('success-inp');
        button.disabled = true;
    }
}

allInputs[2].onfocus = () => {
    if (allInputs[2].value != "") {
        allSpans[2].innerHTML = successIcon;
    }
    else {
        allInputs[2].classList.remove('error-inp');
        allSpans[2].innerHTML = "";
    }
}

// Password Validation
allInputs[3].onblur = () => {
    if (allInputs[3].value != "") {
        allSpans[3].innerHTML = successIcon;
        allInputs[3].classList.add('success-inp')
        allInputs[3].classList.remove('error-inp')
        button.disabled = false;
    }
    else {
        allSpans[3].innerHTML = errorIcon;
        allInputs[3].classList.add('error-inp')
        allInputs[3].classList.remove('success-inp');
        button.disabled = true;
    }
}

allInputs[3].onfocus = () => {
    if (allInputs[3].value != "") {
        allSpans[3].innerHTML = successIcon;
    }
    else {
        allInputs[3].classList.remove('error-inp');
        allSpans[3].innerHTML = "";
    }
}

// DOB Validation
allInputs[4].onblur = () => {
    if (allInputs[4].value != "") {
        allSpans[4].innerHTML = successIcon;
        allInputs[4].classList.add('success-inp')
        allInputs[4].classList.remove('error-inp')
        button.disabled = false;
    }
    else {
        allSpans[4].innerHTML = errorIcon;
        allInputs[4].classList.add('error-inp')
        allInputs[4].classList.remove('success-inp');
        button.disabled = true;
    }
}

allInputs[4].onfocus = () => {
    if (allInputs[4].value != "") {
        allSpans[4].innerHTML = successIcon;
    }
    else {
        allInputs[4].classList.remove('error-inp');
        allSpans[4].innerHTML = "";
    }
}

button.onclick = (e) => {
    e.preventDefault();

    for (let i = 0; i < allInputs.length; i++) {
        if (allInputs[i].value != "") {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Form Validation Completed",
                showConfirmButton: false,
                timer: 1500
            });

            allSpans[i].innerHTML = successIcon;
            allInputs[i].classList.add('success-inp')
            allInputs[i].classList.remove('error-inp')

            button.innerText = "SUCCESS";
            button.classList.add('success-inp')
            button.classList.remove('error-inp')
            button.style.color = "green"
            button.style.backgroundColor = "aliceBlue"
        }
        else {

            allSpans[i].innerHTML = errorIcon;
            allInputs[i].classList.add('error-inp')
            allInputs[i].classList.remove('success-inp');

            button.innerText = "SUBMIT";
            button.classList.add('error-inp')
            button.classList.remove('success-inp')
            button.style.color = "red"
            button.style.backgroundColor = "aliceBlue"
        }
    }

    // if (allInputs[0].value != "" && allInputs[1].value != "" && allInputs[2].value != "" && allInputs[3].value != "" && allInputs[4].value != "") {
    //     Swal.fire({
    //         position: "top-end",
    //         icon: "success",
    //         title: "Form Validation Completed",
    //         showConfirmButton: false,
    //         timer: 1500
    //     });

    //     button.innerText = "SUCCESS";
    //     button.classList.add('success-inp')
    //     button.classList.remove('error-inp')
    //     button.style.color = "green"
    //     button.style.backgroundColor = "aliceBlue"
    // }
    // else {

    //     button.innerText = "SUBMIT";
    //     button.classList.add('error-inp')
    //     button.classList.remove('success-inp')
    //     button.style.color = "red"
    //     button.style.backgroundColor = "aliceBlue"
    // }
}