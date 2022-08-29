document.querySelectorAll(".col>.row>input").forEach(input => {
    input.addEventListener('focus', ev => {
        ev.currentTarget.parentElement.getElementsByTagName("label")[0].classList.add("focused");
    })
    input.addEventListener('blur', ev => {
        if(ev.currentTarget.value === "")
            ev.currentTarget.parentElement.getElementsByTagName("label")[0].classList.remove("focused");
    })
})