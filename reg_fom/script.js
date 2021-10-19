// const cname = document.getElementById('cname')
// const email = document.getElementById('email') 
// const form = document.getElementById('form')
// const errorElement = document.getElementById('error')




function clearErrors(){
    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}


function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;
}

function validateForm(){
    var returnval = true;
    clearErrors();

    var siGn = document.forms['myForm']['filename'].value;
    if (sign == 0){
        seterror("sign", "Please select Signature");
        returnval = false;
    
    }

    var compName = document.forms['myForm']["cname"].value;
    localStorage.setItem("COMPANY NAME", compName);
    if (compName.length<3 || compName == 0){
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
    if (compPhone.length!=10){
        seterror("phone", "Phone number should be of 10 digit");
        returnval = false;
    }

    var compContEmail = document.forms['myForm']["ccontemail"].value;
    var atposition=compContEmail.indexOf("@");  
    var dotposition=compContEmail.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+1 || dotposition+2>=compContEmail.length){
        seterror("contemail", "Invalid Email");
        returnval = false;
    }

    var compPhone1 = document.forms['myForm']["cphone1"].value;
    if (compPhone1.length!=10){
        seterror("phone1", "Phone number should be of 10 digit");
        returnval = false;
    }

    var compPhone2 = document.forms['myForm']["cphone2"].value;
    if (compPhone2.length!=10){
        seterror("phone2", "Alternate Number");
        returnval = false;
    }
 return returnval;

}

function passvalue()
{
    window.open('index2.html','details','width=200');

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

}