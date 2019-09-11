
// && - in AND operator it Check COndtion and It's Mendatory to True both the side
// || - In OR operator it Check Any one Side Condition Should be true
//  ! - Not IS Reverse PSycology.

 var GuestUser = true
 var VerifiedUser = true
 var Payment = true
 var IsLoggedIn=true

if (VerifiedUser && Payment && IsLoggedIn) {
     console.log("Allow Access To All the Selected Courses");
     console.log("Greeting Message")
} else if (VerifiedUser || GuestUser) {
    console.log("Allow Free Preview")
} else {
    console.log("Please Contact Admin")
} 
     