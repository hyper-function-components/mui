import props from "hfc-prop-names";

class MuiIcon {
  static tag = "svg";
  static props = props;
  constructor(container, props) {
    const style = props.attrs.iconStyle || "outlined";

    const host =
      props.attrs.host || "https://unpkg.com/@material-design-icons/svg/";
    const url = host + style + "/" + props.attrs.name + ".svg";
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        const html = xhr.responseText;
        const t = document.createElement("template");
        t.innerHTML = html;
        const svg = t.content.firstChild;
        svg.style.fill = "currentColor";

        if (props.attrs.size) {
          svg.setAttribute("width", props.attrs.size);
          svg.setAttribute("height", props.attrs.size);
        }

        if (props.attrs.color) {
          svg.style.color = props.attrs.color;
        }

        if (props.attrs.class) {
          svg.setAttribute("class", props.attrs.class);
        }

        container.parentNode.replaceChild(svg, container);
      }
    };
    xhr.send();
  }
}

export default MuiIcon;
