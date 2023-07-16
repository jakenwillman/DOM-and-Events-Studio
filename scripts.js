// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
    const takeoffButton = document.getElementById("takeoff");
    takeoffButton.addEventListener("click", function () {
        const takeoffClicked = window.confirm("Confirm that the shuttle is ready for takeoff");
        if (takeoffClicked) {
            document.getElementById("flightStatus").innerText = "Shuttle in flight";
            document.getElementById("shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerText = 10000;
        }
    });

    const landButton = document.getElementById("landing");
    landButton.addEventListener("click", function () {
        const landButtonClicked = window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerText = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerText = 0;
    });

    const abortButton = document.getElementById("missionAbort");
    abortButton.addEventListener("click", function () {
        const abortButtonClicked = window.confirm("Confirm that you want to abort the mission.")
        if (abortButtonClicked) {
            document.getElementById("flightStatus").innerText = "Mission aborted";
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerText = 0;
        }
    });

    const rocketImage = document.getElementById("rocket");

    const upButton = document.getElementById("up");
    upButton.addEventListener("click", function () {
        rocketImage.style.position = "relative";
        rocketImage.style.bottom = "10px";
        const currentHeight = parseInt(document.getElementById("spaceShuttleHeight").innerText, 10);
        document.getElementById("spaceShuttleHeight").innerText = currentHeight + 10000;
    });

    const downButton = document.getElementById("down");
    downButton.addEventListener("click", function () {
        rocketImage.style.position = "relative";
        rocketImage.style.top = "10px";
        const currentHeight = parseInt(document.getElementById("spaceShuttleHeight").innerText, 10);
        document.getElementById("spaceShuttleHeight").innerText = currentHeight - 10000;
    });

    const rightButton = document.getElementById("right");
    rightButton.addEventListener("click", function () {
        rocketImage.style.position = "relative";
        rocketImage.style.left = "10px";
    });

    const leftButton = document.getElementById("left");
    leftButton.addEventListener("click", function () {
        rocketImage.style.position = "relative";
        rocketImage.style.right = "10px";
    });
});