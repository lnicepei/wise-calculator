import "./styles/background.scss";
import "./styles/rewrite.scss";
import "./styles/numbers.scss";
import "./styles/screen.scss";
import "./styles/calculator.scss";
import { calculator } from "./calculator/calculator.js";
import { populateScreen } from "./screen/populateScreen";
import "./buttons/operations";
import "./buttons/numbers";
import { screen } from "./screen/screen";

populateScreen(calculator.value);