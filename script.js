var friends = ["Allison", "Celia", "Meri-Kathryn", "Lydia", "Meagan"];
var locations = ["Kitchen", "Laundry Room", "Living Room", "Patio", "Garden", "Bathroom", "Foyer", "Guest Bedroom", "Hallway", "Master Bedroom"];
var weapons = ["Knife", "Spoon", "Fork", "Hoe", "Rope", "Axe", "Book", "Cat", "Pistol", "Riffle", "Ak-47", "Glock", "Vase", "Slime", "Bowl", "Toothpick", "Statue", "Computer", "Microphone", "Elbow"];
$(document).ready(function () {
    for (var i = 1; i <= 100; i++) {
        var accusation = $("<h3 id='" + i + "'>Accusation " + i + "</h3>");
        accusation.click(myAlert);
        $(document.body).append(accusation);
    };
});

function myAlert(event) {
    var num = event.target.id;
    window.alert("Accusation" + num + "I accuse " + friends[num % 5] + "with the" + weapons[num % 20] + "in the " + locations[num % 10]);
};