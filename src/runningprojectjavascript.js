//Function to display the time
function displaytime() {
    const date = new Date();
    document.getElementById("time").innerHTML = date.toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    })
}
//Displays time with every second
setInterval(displaytime, 1000);
displaytime();

//Function to validate the find a dog or cat page form
function verify() {
    var isselectedanimal = document.querySelector('input[name="animal"]:checked');
    var isselectedcatbreed = document.getElementById("secondq").checked;
    var isselectedcatbreed1 = document.getElementById("secondquestion").value.trim();
    var isselecteddogbreed = document.getElementById("thirdq").checked;
    var isgender=document.querySelector('input[name="gender"]:checked');
    var isselecteddogbreed1 = document.getElementById("thirdquestion").value.trim();
    var getalong = document.getElementById("fifthquestion").value.trim();

    if (isselectedanimal && isgender && (isselectedcatbreed || isselectedcatbreed1 !== "") && (isselecteddogbreed || isselecteddogbreed1 !== "") && (getalong !== "")) {
        document.getElementById("formvalidate").innerHTML = "<b>" + "Thank you for filling every field of the form. Have a nice day!" + "</b>"
    }
    else {
        alert("Not every field have been filled up. Please fill all of them.");

    }
}

//Function to validate the give away a pet page form
function validate() {
    var animalselected = document.querySelector('input[name="animal"]:checked');
    var breedcattext = document.getElementById("breedcattext").value.trim();
    var breedcatcheck = document.getElementById("breedcat").checked;
    var breeddogtext = document.getElementById("breeddogtext").value.trim();
    var breeddogcheck = document.getElementById("breeddog").checked;
    var genderselected = document.querySelector('input[name="gender"]:checked');
    var checkalongdog = document.querySelector('input[name="dog"]:checked');
    var checkedalongcat = document.querySelector('input[name="cats"]:checked');
    var checkedalongfamily = document.querySelector('input[name="family"]:checked');
    var givenname = document.getElementById("givenname").value.trim();
    var familyname = document.getElementById("familyname").value.trim();
    var validateemail = document.getElementById("email").value.trim();
    var theat = validateemail.indexOf("@");
    var thedot = validateemail.lastIndexOf(".");

    if (animalselected && (breedcatcheck || breedcattext !== "") && (breeddogcheck || breeddogtext !== "") &&
        genderselected && checkalongdog && checkedalongcat && checkedalongfamily && (givenname !== "") &&
        (familyname !== "") && (!(theat < 1 || thedot < theat + 2 || thedot + 2 >= validateemail.length)))  {

        document.getElementById("formvalidate").innerHTML = "<b>" + "Thank you for filling every field of the form. Have a nice day!" + "</b>"
    }
    else {
        alert("Not every field have been filled up. Please fill all of them.");
    }

}
