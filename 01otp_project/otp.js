let coundownFunc;
let otp = '';
function getOtp() {
    otp = Math.floor(Math.random() * 9000 + 1000).toString()
    // document.getElementById('otp').value = otp
    alert(`Generated OTP-${otp} `)
    coundown()
}
function coundown() {
    let timeRemaining = 120;
    clearInterval(coundownFunc);
    coundownFunc = setInterval(function () {
        timeRemaining--;
        let displayTimer = document.getElementById('timer')
        displayTimer.innerText = `The time remaining 2:00`
        if (timeRemaining < 0) {
            clearInterval(coundownFunc);
            alert("Times Up-Your has exprired")
        } else {
            const minutes = Math.floor(timeRemaining / 60);
            console.log(minutes);
            const seconds = timeRemaining % 60;
            displayTimer.innerText = `Time remaining: ${minutes}:${seconds}`

        }
    }, 400);
}
function checkOtp() {
    const correctotp = document.getElementById('otp').value
    if (otp === correctotp) {
        alert("OTP Successfull")
        clearInterval(coundownFunc)
    }
    else {
        alert("OTP not maches please try again")
    }

}