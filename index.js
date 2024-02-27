//alert("hi");
const theWholeDiv = document.querySelector(".industry");

var allIndustries = document.querySelectorAll(".each");
allIndustries.forEach(function (allIndustries) {
  allIndustries.addEventListener("click", function (e) {
    switch (theWholeDiv.getAttribute("clicked")) {
      case "false":
        theWholeDiv.setAttribute("clicked", "true");
        var theDesiredIndustry = e.target.getAttribute("id");

        document
          .querySelector("#" + theDesiredIndustry)
          .setAttribute("class", "selected");

        break;
      case "true":
        var previousChoice = document.querySelector(".selected");
        previousChoice.classList.remove("selected");
        previousChoice.setAttribute("class", "each");
        var theDesiredIndustry = e.target.getAttribute("id");
        document
          .querySelector("#" + theDesiredIndustry)
          .setAttribute("class", "selected");
        break;

      default:
        console.log("error");
        break;
    }
  });
});

const theGenerateButton = document.querySelector("#generatebutton");
theGenerateButton.addEventListener("click", function () {
  switch (theWholeDiv.getAttribute("clicked")) {
    case "false":
      alert("Please make your selection first");

      break;
    case "true":
      var theDomainOfIndustry = document
        .querySelector(".selected")
        .getAttribute("id");
      nameGenerator(theDomainOfIndustry);
      break;

    default:
      break;
  }
});

/*
common adjectives


*/

/*
nouns to add at the end

*/
function randomAdjectiveNumber(r) {
  var adjectiveNumber = Math.round(Math.random() * r);
  return adjectiveNumber;
}
var allAdjectives = {
  adjective0: "Dynamic",
  adjective1: "Innovative",
  adjective2: "Agile",
  adjective3: "Creative",
  adjective4: "Vibrant",
  adjective5: "Bold",
  adjective6: "Sleek",
  adjective7: "Elegant",
  adjective8: "Modern",
  adjective9: "Tech-savvy",
  adjective10: "Reliable",
  adjective11: "Efficient",
  adjective12: "Versatile",
  adjective13: "Sustainable",
  adjective14: "Empowering",
  adjective15: "Progressive",
  adjective16: "Visionary",
  adjective17: "Strategic",
  adjective18: "Premium",
  adjective19: "Distinctive",
  adjective20: "Agile",
};
var allCars = {
  car0: "Automobile",
  car1: "Car",
  car2: "Truck",
  car3: "SUV",
  car4: "Sedan",
  car5: "Coupe",
  car6: "Convertible",
  car7: "Hatchback",
  car8: "Minivan",
  car9: "EV",
  car10: "Hybrid",
  car11: "Engine",
  car12: "Transmission",
  car13: "Chassis",
  car14: "Suspension",
  car15: "Steering",
  car16: "Brake",
  car17: "Tire",
  car18: "Wheel",
  car19: "Fuel",
  car20: "Battery",
  car21: "Piston",
};
var allNouns = {
  noun0: "Solutions",
  noun1: "Ventures",
  noun2: "Labs",
  noun3: "Technologies",
  noun4: "Innovations",
  noun5: "Studio",
  noun6: "Creations",
  noun7: "Group",
  noun8: "Enterprises",
  noun9: "Partners",
  noun10: "Systems",
  noun11: "Services",
  noun12: "Ventures",
  noun13: "Industries",
  noun14: "Network",
  noun15: "Works",
  noun16: "Ventures",
  noun17: "Labs",
  noun18: "Agency",
  noun19: "Projects",
  noun20: "bros",
};
function nameGenerator(theDomainOfIndustry) {
  console.log(theDomainOfIndustry);
  if (theDomainOfIndustry === "car") {
    var adjectiveNumberForCar = "adjective" + randomAdjectiveNumber((r = 20));
    var adjectiveForCar = allAdjectives[adjectiveNumberForCar];
    console.log(adjectiveNumberForCar, adjectiveForCar);
    var carNumber = "car" + randomAdjectiveNumber((r = 21));
    var car = allCars[carNumber];
    console.log(car);
    var nounNumber = "noun" + randomAdjectiveNumber((r = 20));
    var noun = allNouns[nounNumber];
    console.log(noun);
    var completeName =
      adjectiveForCar.toUpperCase() + car.toUpperCase() + noun.toUpperCase();

    console.log(completeName);
    document.querySelector(".answer").innerHTML = completeName;
    document.querySelector(".answer").setAttribute("output", "on");
  } else if (theDomainOfIndustry != "car") {
    alert("I have not written the code yet. I am tired. Come later");
  }
}
