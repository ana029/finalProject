let storyText1 = "Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit.Aliqu diam amet diam et eos labore.";
let storyText2 = "Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit";

let missionText1 = "To help people and institutions prosper by providing financial services that meet the needs, exceed the expectations, and enhance the lives of our clients, communities, colleagues, and ultimately our shareholders.";
let missionText2 = "To help those who are at the bottom of the pyramid.";

let vissionText1 = "To attain globally best standards and become a world-class financial services enterprise – guided by its purpose to move towards a greater degree of sophistication and maturity.";
let vissionText2 = "To promote a work culture that fosters individual growth, team spirit and creativity to overcome challenges and attain goals. To encourage ideas, talent and value systems.";

function changeStory() {
    document.getElementById("changedStory1").innerHTML=storyText1;
    document.getElementById("changedStory2").innerHTML=storyText2;
}

function changeMission() {
    document.getElementById("changedStory1").innerHTML=missionText1;
    document.getElementById("changedStory2").innerHTML=missionText2;
}

function changeVission() {
    document.getElementById("changedStory1").innerHTML=vissionText1;
    document.getElementById("changedStory2").innerHTML=vissionText2;
}