const items = [
  {
    name: "HTML",
    category: "Tech",
    description: "Used to build the structure of web pages"
  },
  {
    name: "CSS",
    category: "Tech",
    description: "Used to style and design web pages"
  },
  {
    name: "JavaScript",
    category: "Tech",
    description: "Used to add interactivity to websites"
  },
  {
    name: "Soccer Training",
    category: "Soccer",
    description: "Helps improve fitness, discipline, and teamwork"
  },
  {
    name: "Team Games",
    category: "Soccer",
    description: "Builds communication and game awareness"
  },
  {
    name: "IT Coursework",
    category: "School",
    description: "Learning about systems and technology"
  },
  {
    name: "Web Projects",
    category: "School",
    description: "Building websites for class assignments"
  }
];

function renderItems(list) {
  const container = document.getElementById("results-container");
  container.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    const card = document.createElement("div");
    card.className = "item-card";

    card.innerHTML =
      "<h3>" + list[i].name + "</h3>" +
      "<p>"  + list[i].description + "</p>" +
      "<span class='item-tag'>" + list[i].category + "</span>";

    container.appendChild(card);
  }

  document.getElementById("result-count").textContent =
    list.length + " items shown";
}

function filterItems(category) {
  switch (category) {
    case "":
      renderItems(items);
      break;

    case "Tech":
      const filtered1 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Tech") {
          filtered1.push(items[i]);
        }
      }
      renderItems(filtered1);
      break;

    case "Soccer":
      const filtered2 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Soccer") {
          filtered2.push(items[i]);
        }
      }
      renderItems(filtered2);
      break;

    case "School":
      const filtered3 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "School") {
          filtered3.push(items[i]);
        }
      }
      renderItems(filtered3);
      break;

    default:
      renderItems(items);
      break;
  }
}

filterItems("");
