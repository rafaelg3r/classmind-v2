
const date = new Date();
const dateHours = date.getHours();
const dateMinutes = date.getMinutes();
const dateTime = dateHours + ":" + (dateMinutes < 10 ? "0" : "") + dateMinutes;
const dayMonth = date.getDate() + "/" + (date.getMonth() + 1);
let greeting = "";
if (dateHours >= 4 && dateHours < 12) {
  greeting = "Bom dia!";
} else if (dateHours >= 12 && dateHours < 18) {
  greeting = "Boa tarde!";
} else {
  greeting = "Boa noite!";
}

export { dateTime, dayMonth, greeting };