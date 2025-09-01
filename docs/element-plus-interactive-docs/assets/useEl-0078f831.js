import { aY as reactive } from "./vendor-bdcf0029.js";
function useElDisplay(flag, display = "flex") {
  return reactive({
    display: flag ? display : "none"
  });
}
export {
  useElDisplay as u
};
