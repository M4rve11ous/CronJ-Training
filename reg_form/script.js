
var imagesObject = [];

function handleFileSelect(evt) {
    var files = evt.target.files;

    for (var i = 0, f; f = files[i]; i++) {
        if (!f.type.match('image.*')) {
            continue;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
            addImage(e.target.result);
        };
        reader.readAsDataURL(f);
    }
}

function addImage(imgData) {
    imagesObject.push(imgData);
    localStorage.setItem("SignImage", JSON.stringify(imagesObject));
    window.sessionStorage.setItem('SignImage', JSON.stringify(imagesObject));
}

document.getElementById('files').addEventListener('change', handleFileSelect, false);


var inputs = document.querySelectorAll('.file-input')

for (var i = 0, len = inputs.length; i < len; i++) {
    customInput(inputs[i])
}

function customInput(el) {
    const fileInput = el.querySelector('[type="file"]')
    const label = el.querySelector('[data-js-label]')

    fileInput.onchange =
        fileInput.onmouseout = function() {
            if (!fileInput.value) return

            var value = fileInput.value.replace(/^.*[\\\/]/, '')
            el.className += ' -chosen'
            label.innerText = value
        }
}

// #######################################


function clearErrors() {
    errors = document.getElementsByClassName('formerror');
    for (let item of errors) {
        item.innerHTML = "";
    }
}


function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

let validd = function validateForm() {

    var returnval = true;

    clearErrors();

    // var siGn = document.forms['myForm']['filename'].value;
    // if (sign == 0) {
    //     seterror("sign", "Please select Signature");
    //     returnval = false;

    // }

    var compName = document.forms['myForm']["cname"].value;

    if (compName.length < 3 || compName == 0) {
        seterror("name", "Length is must be more than 3");
        returnval = false;
    }


    // var compEmail = document.forms['myForm']["cemail"].value;
    // var atposition=compEmail.indexOf("@");  
    // var dotposition=compEmail.lastIndexOf(".");  
    // if (atposition<1 || dotposition<atposition+1 || dotposition+2>=compEmail.length){
    //     seterror("email", "Invalid Email");
    //     returnval = false;
    // }

    var compPhone = document.forms['myForm']["cphone"].value;
    if (compPhone.length != 10) {
        seterror("phone", "Phone number should be of 10 digit");
        returnval = false;
    }

    // var compContEmail = document.forms['myForm']["ccontemail"].value;
    // var atposition=compContEmail.indexOf("@");  
    // var dotposition=compContEmail.lastIndexOf(".");  
    // if (atposition<1 || dotposition<atposition+1 || dotposition+2>=compContEmail.length){
    //     seterror("contemail", "Invalid Email");
    //     returnval = false;
    // }

    var compPhone1 = document.forms['myForm']["cphone1"].value;
    if (compPhone1.length != 10) {
        seterror("phone1", "Phone number should be of 10 digit");
        returnval = false;
    }

    // var compPhone2 = document.forms['myForm']["cphone2"].value;
    // if (compPhone2.length==10 || compPhone2.length== 0 ){
    //     seterror("phone2", "Alternate Number");
    //     returnval = true;
    // }
    return returnval;


}

function signUp() {


    window.open('index.html', 'details', 'width=200', '_blank');
}




function passValue() {


    //window.open('index2.html','details','width=200');

    let compName = document.forms['myForm']["cname"].value;
    let mailadd = document.forms['myForm']["cmailadd"].value;
    let compPhone = document.forms['myForm']["cphone"].value;
    let fax = document.forms['myForm']["cfax"].value;
    let email = document.forms['myForm']["cemail"].value;
    let cnameTitle = document.forms['myForm']["cpointCntTitle"].value;
    let website = document.forms['myForm']["cwebsite"].value;
    let conEmail = document.forms['myForm']["ccontemail"].value;
    let conP1 = document.forms['myForm']["cphone1"].value;
    let conP2 = document.forms['myForm']["cphone2"].value;


    let servGood = document.forms['myForm']["cserviceGoods"].value;
    let establish = document.forms['myForm']["cestablish"].value;
    let anSale = document.forms['myForm']["cannualSale"].value;
    let geoAr = document.forms['myForm']["cgeographicArea"].value;
    let struct = document.forms['myForm']["clegalStructure"].value;
    let busiType = document.forms['myForm']["cbusinessType"].value;
    let pReg = document.forms['myForm']["cyearsReg"].value;
    let insured = document.forms['myForm']["insured"].value;
    let bond = document.forms['myForm']["bonded"].value;
    let license = document.forms['myForm']["licensed"].value;
    let licenseNO = document.forms['myForm']["clicenseNo"].value;
    let addInfo = document.forms['myForm']["caddInfo"].value;


    let bankName = document.forms['myForm']["cbankName"].value;
    let beneName = document.forms['myForm']["cbeneName"].value;
    let accNo = document.forms['myForm']["caccNO"].value;
    let bankAdd = document.forms['myForm']["cbankAdd"].value;


    let prinTypName = document.forms['myForm']["cprintTyped"].value;
    let title = document.forms['myForm']["title"].value;
    let sign = document.forms['myForm']["filename"].value;
    let date = document.forms['myForm']["cdate"].value;


    // bannerImage = document.getElementById('bannerImg');
    // imgData = getBase64Image(bannerImage);
    // localStorage.setItem("imgData", imgData);


    //````````````````````````````````````````````````````````````


    localStorage.setItem("COMPANY NAME", compName);
    localStorage.setItem("MAILING ADDRESS", mailadd);
    localStorage.setItem("TELEPHONE", compPhone);
    localStorage.setItem("FAX", fax);
    localStorage.setItem("EMAIL", email);
    localStorage.setItem("POINT OF CONTACT NAME & TITLE", cnameTitle);
    localStorage.setItem("WEBSITE", website);
    localStorage.setItem("CONTACT EMAIL", conEmail);
    localStorage.setItem("CONTACT PHONE 1", conP1);
    localStorage.setItem("CONTACT PHONE 2", conP2);


    localStorage.setItem("GENERAL DETAILS OF SERVICES/GOODS", servGood);
    localStorage.setItem("DATE COMPANY ESTABLISHED", establish);
    localStorage.setItem("GROSS ANUAL SALES", anSale);
    localStorage.setItem("GEOGRAPHIC SERVICE AREA", geoAr);
    localStorage.setItem("LEGAL STRUCTURE", struct);
    localStorage.setItem("BUSINESS TYPE", busiType);
    localStorage.setItem("YEARS PREVIOUSLY REGISTERED", pReg);
    localStorage.setItem("INSURED?", insured);
    localStorage.setItem("BONDED?", bond);
    localStorage.setItem("LICENSED?", license);
    localStorage.setItem("LICENSE NUMBER", licenseNO);
    localStorage.setItem("ADDITIONAL INFO", addInfo);


    localStorage.setItem("BANK NAME", bankName);
    localStorage.setItem("BENEFICIARY NAME", beneName);
    localStorage.setItem("ACCOUNT NUMBER", accNo);
    localStorage.setItem("BANK ADDRESS", bankAdd);


    localStorage.setItem("PRINTED/TYPED NAME", prinTypName);
    localStorage.setItem("TITLE", title);
    localStorage.setItem("SIGNATURE", sign);
    localStorage.setItem("DATE", date);


    //`````````````````````````````````````````````````````````````````````

    sessionStorage.setItem("COMPANY NAME", compName);
    sessionStorage.setItem("MAILING ADDRESS", mailadd);
    sessionStorage.setItem("TELEPHONE", compPhone);
    sessionStorage.setItem("FAX", fax);
    sessionStorage.setItem("EMAIL", email);
    sessionStorage.setItem("POINT OF CONTACT NAME & TITLE", cnameTitle);
    sessionStorage.setItem("WEBSITE", website);
    sessionStorage.setItem("CONTACT EMAIL", conEmail);
    sessionStorage.setItem("CONTACT PHONE 1", conP1);
    sessionStorage.setItem("CONTACT PHONE 2", conP2);


    sessionStorage.setItem("GENERAL DETAILS OF SERVICES/GOODS", servGood);
    sessionStorage.setItem("DATE COMPANY ESTABLISHED", establish);
    sessionStorage.setItem("GROSS ANUAL SALES", anSale);
    sessionStorage.setItem("GEOGRAPHIC SERVICE AREA", geoAr);
    sessionStorage.setItem("LEGAL STRUCTURE", struct);
    sessionStorage.setItem("BUSINESS TYPE", busiType);
    sessionStorage.setItem("YEARS PREVIOUSLY REGISTERED", pReg);
    sessionStorage.setItem("INSURED?", insured);
    sessionStorage.setItem("BONDED?", bond);
    sessionStorage.setItem("LICENSED?", license);
    sessionStorage.setItem("LICENSE NUMBER", licenseNO);
    sessionStorage.setItem("ADDITIONAL INFO", addInfo);


    sessionStorage.setItem("BANK NAME", bankName);
    sessionStorage.setItem("BENEFICIARY NAME", beneName);
    sessionStorage.setItem("ACCOUNT NUMBER", accNo);
    sessionStorage.setItem("BANK ADDRESS", bankAdd);


    sessionStorage.setItem("PRINTED/TYPED NAME", prinTypName);
    sessionStorage.setItem("TITLE", title);
    sessionStorage.setItem("SIGNATURE", sign);
    sessionStorage.setItem("DATE", date);

    //return signUp();
    // if(validateForm == true){
    //     return signup();}

}

function validation() {
    var form = document.getElementById('form');
    var email = document.getElementById('email1').value;
    var text = document.getElementById('text1');
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("Invalid");
        text.innerHTML = "Entered Email is Valid";
    } else {
        form.classList.remove("valid");
        form.classList.add("Invalid");
        text.innerHTML = "Entered Email is Invalid";
    }
}

function validation2() {
    var form = document.getElementById('form');
    var email = document.getElementById('email2').value;
    var text2 = document.getElementById('text2');
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("Invalid");
        text2.innerHTML = "Entered Email is Valid";
    } else {
        form.classList.remove("valid");
        form.classList.add("Invalid");
        text2.innerHTML = "Entered Email is Invalid";
    }
}

function telval() {
    var form = document.getElementById('form');
    var phone1 = document.getElementById('phone1').value;
    var text3 = document.getElementById('text3');
    var pattern3 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
    if (phone1.match(pattern3)) {
        form.classList.add("valid");
        form.classList.remove("Invalid");
        text3.innerHTML = "Entered phone number is valid";

    } else {
        form.classList.remove("valid");
        form.classList.add("Invalid");
        text3.innerHTML = "Entered phone number is Invalid";
    }
}

function telval2() {
    var form = document.getElementById('form');
    var phoneNo2 = document.getElementById('phoneNo2').value;
    var text4 = document.getElementById('text4');
    var pattern4 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
    if (phoneNo2.match(pattern4)) {
        form.classList.add("valid");
        form.classList.remove("Invalid");
        text4.innerHTML = "Entered phone number is valid";

    } else {
        form.classList.remove("valid");
        form.classList.add("Invalid");
        text4.innerHTML = "Entered phone number is Invalid";
    }
}

function telval3() {
    var form = document.getElementById('form');
    var phoneNo3 = document.getElementById('phoneNo3').value;
    var text5 = document.getElementById('text5');
    var pattern5 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
    if (phoneNo3.match(pattern5)) {
        form.classList.add("valid");
        form.classList.remove("Invalid");
        text5.innerHTML = "Entered phone number is valid";

    } else {
        form.classList.remove("valid");
        form.classList.add("Invalid");
        text5.innerHTML = "Entered phone number is Invalid";
    }
}