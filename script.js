let data = [
  {
    id: 1,
    name: "Mironshoh",
    gmail: "nima@gmail.com",
  },
  {
    id: 2,
    name: "Jasurbek",
    gmail: "jasurbek@gmail.com",
  },
];

let renderFunc = () => {
  let table = document.querySelector("table");
  data.map((obj) => {
    let row = document.createElement("tr");
    let boxGmail = document.createElement("td");
    let boxId = document.createElement("td");
    boxId.textContent = obj.id;
    let boxName = document.createElement("td");
    boxName.textContent = obj.name;
    boxGmail.textContent = obj.gmail;
    row.append(boxId);
    row.append(boxName);
    row.append(boxGmail);
    table.append(row);
  });
};
renderFunc();
