import props from "hfc-prop-names";
import { reactToHfc } from "react-to-hfc";
import Component from "./component";

console.log(Component);

export default reactToHfc(Component, {
  tag: "div",
  props,
  connected(container, props) {
    container.style.display = "contents";
  },
  disconnected() {},
});
