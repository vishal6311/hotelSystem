var data = []
var countryCode = CountryCodeID.countryCodeDropDown[CountryCodeID.countryCodeDropDown.selectedIndex].text
var roomType = roomForm.roomTypeID[roomForm.roomTypeID.selectedIndex].text
var nameID = document.getElementById("nameID")
var email = document.querySelector(".emailInput")
var phone = document.querySelector(".PhoneNoInput")

var address = document.querySelector(".addressInput")
var peopleNo = document.querySelector(".peopleInput")
var NoOfNights = document.querySelector(".noOfNightInput")

var form = document.getElementById("formID")
var submit = document.getElementById("submitID")
var CalculateBtn = document.getElementById("calculateBtnId")

submit.addEventListener("click", (e)=>{
    // console.log(nameID.value);
    data =[]

    var countryCode = CountryCodeID.countryCodeDropDown[CountryCodeID.countryCodeDropDown.selectedIndex].text
    var roomType = roomForm.roomTypeID[roomForm.roomTypeID.selectedIndex].text

    dataObj = {
        "Username":nameID.value,
        "email": email.value,
        "countryCode" : countryCode,
        "phone" : phone.value,
        "address" : address.value,
        "NoOfPeoples" : peopleNo.value,
        "RoomType" : roomType,
        "NoOfNights" : NoOfNights.value,

    }
    data.push(dataObj)
    console.log(data);
    
})


CalculateBtn.addEventListener("click", (e)=>{

    var roomType = roomForm.roomTypeID[roomForm.roomTypeID.selectedIndex].text
    var peopleInRoom
    var costForRoom


    if(roomType == "single Bedroom"){
        peopleInRoom = 2;
        costForRoom = 700;
    }
    else if(roomType == "double Bedroom"){
        peopleInRoom =3;
        costForRoom = 1200;
    }
    else{
        peopleInRoom = 3;
        costForRoom = 1400;
    }

    var x = parseInt(peopleNo.value)/peopleInRoom
    var noOfRooms = Math.ceil(x)
    console.log(noOfRooms + " rooms");

    console.log(costForRoom);

    let y  = document.querySelector(".noOfRooms")
    let totalCost = document.querySelector(".cost")
    y.innerHTML = noOfRooms
    totalCost.innerHTML = costForRoom*noOfRooms

})