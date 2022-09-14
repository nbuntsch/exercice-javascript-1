var change = document.querySelector(".change-color");
var blue = function () {
  change.classList.add("blue");
};

change.addEventListener("click", blue);

var toggle = document.querySelector(".toggle-color");
var red = function () {
  toggle.classList.toggle("red");
};

toggle.addEventListener("click", red);

var trigger = document.querySelector(".trigger");
var invisible = function () {
  trigger.classList.add("invisible");
};

trigger.addEventListener("click", invisible);

var target = document.querySelector(".target");
var position = function () {
  target.classList.toggle("position");
};

target.addEventListener("click", position);

var all = document.querySelector(".trigger-all");

all.addEventListener("click", blue);
all.addEventListener("click", red);

var allself = document.querySelector(".trigger-all-self");
var self = function () {
  allself.classList.toggle("self");
};

allself.addEventListener("click", blue);
allself.addEventListener("click", red);
allself.addEventListener("click", self);
