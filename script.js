function searchSettlements() {

    const search = document.getElementById("searchInput").value.trim();

    if (search === "") {
        alert("Please enter a settlement or company name.");
        return;
    }

    window.location.href =
        "settlements.html?search=" +
        encodeURIComponent(search);
}


function subscribe(event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value;

    document.getElementById("message").textContent =
        "Thanks! Newsletter registration will be connected soon.";

    console.log("Newsletter signup:", email);
}
