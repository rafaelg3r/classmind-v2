const date = new Date();
const dateHours = date.getHours();
let greeting = "";
if (dateHours >= 4 && dateHours < 12) {
  greeting = "Bom dia";
} else if (dateHours >= 12 && dateHours < 18) {
  greeting = "Boa tarde";
} else {
  greeting = "Boa noite";
}

export {greeting };
