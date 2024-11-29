function byteConverter(event) {
    event.preventDefault()
    
    const unitInput = parseFloat(document.querySelector("#number").value);

    const unitFrom = document.querySelector("#from").value;
    
    const unitTo = document.querySelector("#to").value;

    let result = document.querySelector("#result");

    if (unitFrom === "megabytes" && unitTo === "gigabytes") {
        result.textContent = unitInput / 1024;
    } else if (unitFrom === "megabytes" && unitTo === "terrabytes") {
        result.textContent = unitInput / 1048576;
    } else if (unitFrom === "gigabytes" && unitTo === "megabytes") {
        result.textContent = unitInput * 0.0009765625;
    } else if (unitFrom === "gigabytes" && unitTo === "terrabytes") {
        result.textContent = unitInput / 1024;
    } else if (unitFrom === "terrabytes" && unitTo === "megabytes") {
        result.textContent = unitInput * 0.00000095367431640625;
    } else if (unitFrom === "terrabytes" && unitTo === "gigabytes") {
        result.textContent = unitInput * 0.0009765625;
    } else {
        result.textContent = "No inputs";
        result.style.color = "red";
    }
}

const convertButton = document.querySelector("#convertButton")

convertButton.addEventListener("click", byteConverter)