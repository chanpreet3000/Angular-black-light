import User from "./models/User.model.js";

function generateRandomFloat() {
  const randomFloat = Math.random();
  const scaledFloat = randomFloat * 100;
  const roundedFloat = parseFloat(scaledFloat.toFixed(6));
  return roundedFloat;
}
function getRandomTimestamp(startDate, endDate) {
  const startTimestamp = startDate.getTime();
  const endTimestamp = endDate.getTime();
  const randomTimestamp = startTimestamp + Math.random() * (endTimestamp - startTimestamp);
  return new Date(randomTimestamp);
}

async function fetchData() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const res = data.results[0];
    const obj = {};
    obj["uid"] = res.login.uuid;
    obj["name"] = res.name.first + " " + res.name.last;
    obj["score"] = generateRandomFloat();
    obj["country"] = res.nat;
    obj["timestamp"] = getRandomTimestamp(new Date("2024-02-05"), new Date("2024-02-24"));
    await User.create(obj)
      .then(() => {
        console.log("Data inserted");
      })
      .catch((error) => {
        console.error("Error inserting data:", error);
      });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function fetchMultipleData(numTimes) {
  for (let i = 0; i < numTimes; i++) {
    console.log(`Fetching data ${i + 1} of ${numTimes}...`);
    await fetchData();
  }
}

export const populateDatabase = (populationAmount) => {
  fetchMultipleData(populationAmount)
    .then(() => {
      console.log("All data fetched.");
    })
    .catch((error) => {
      console.error("Error fetching multiple data:", error);
    });
};
