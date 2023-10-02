function copyEmail() {
    // Get the email element's text
    var emailText = "jadlosz@gmail.com";

    // Create a temporary input element
    var tempInput = document.createElement("input");
    tempInput.value = emailText;
    document.body.appendChild(tempInput);

    // Select the text in the input element
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Show a message or perform any other action to indicate the email has been copied
    alert("Email address copied to clipboard: " + emailText);
}