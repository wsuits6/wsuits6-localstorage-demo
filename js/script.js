//=============

//storing Data in local Storage == >> Client Side
localStorage.setItem("name", "Wsuits6");
localStorage.setItem("AccountBalance", 50000000000000);
localStorage.setItem("Age", 19);
localStorage.setItem("Location", "tamale");

//Company object to push to local Storage
const companies = {
    companyOne : "WSUITS industries",
    companyTwo : "RedSpectre AI",
    companyThree : "Hsociety"
}

//storing OBject us 
localStorage.setItem("example", JSON.stringify(companies))
document.cookie = "Username = WSUITS6";