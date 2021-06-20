document.getElementById("viewBtn").addEventListener("click", showMore);

showMore(); //Delete this line before deployment.

function showMore() {
    document.getElementById("nameContainer").classList.add("disappear-out");

    setTimeout(switchFrames, 1000);
}

function switchFrames() {
    document.getElementById("nameContainer").style.display = "none";

    var portfolioContainer = document.getElementById("portfolioContainer");
    portfolioContainer.style.display = "block";
    portfolioContainer.classList.add("appear-in");
}