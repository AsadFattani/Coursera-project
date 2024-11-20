// Task: Adding a New Recommendation with Custom Popup, OK Button, and Tick Icon
function addRecommendation(event) {
    event.preventDefault(); // Prevents form from refreshing the page

    // Get the input values
    const newRecommendation = document.getElementById("new-recommendation").value;
    const name = document.getElementById("name").value;

    // Create a new recommendation element
    const recommendationElement = document.createElement("p");
    recommendationElement.textContent = `"${newRecommendation}"`; // Add quotation marks around the recommendation

    // Create a name element if a name is provided
    if (name) {
        const nameElement = document.createElement("span");
        nameElement.textContent = `~ ${name}`;
        nameElement.classList.add("recommendation-name");
        recommendationElement.appendChild(nameElement);
    }

    // Append to recommendation list
    document.getElementById("recommendation-list").appendChild(recommendationElement);

    // Clear the input fields
    document.getElementById("new-recommendation").value = "";
    document.getElementById("name").value = "";

    // Show custom popup
    showPopup("Recommendation submitted successfully!");
}

function showPopup(message) {
    const popup = document.createElement("div");
    popup.classList.add("custom-popup");

    const iconElement = document.createElement("i");
    iconElement.classList.add("fas", "fa-check-circle", "popup-icon");
    popup.appendChild(iconElement);

    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    popup.appendChild(messageElement);

    const okButton = document.createElement("button");
    okButton.textContent = "OK";
    okButton.classList.add("popup-ok-button");
    okButton.onclick = () => {
        popup.classList.remove("show");
        setTimeout(() => {
            document.body.removeChild(popup);
        }, 300);
    };
    popup.appendChild(okButton);

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.add("show");
    }, 10);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
window.onload = function() {
    showPopup("This portfolio is a part of a project and may not be accurate.");
};