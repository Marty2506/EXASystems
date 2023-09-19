const mapWrapper = document.querySelector(".contacts__map-wrapper");
const map = mapWrapper.querySelector("iframe");
let mapTooltip = document.createElement("div");
let mapActive = false;
mapTooltip.textContent = "Для активации карты нажмите по ней";
mapTooltip.classList.add("contacts__map-tooltip");
mapTooltip.classList.add("contacts__map-tooltip--hidden");

if (mapWrapper) {
  mapWrapper.appendChild(mapTooltip);
  mapWrapper.addEventListener("click", () => {
    map.style = "";
    mapTooltip.classList.add("contacts__map-tooltip--hidden");
    mapActive = true;
  });
  mapWrapper.addEventListener("mouseenter", (event) => {
    if (!mapActive) {
      mapTooltip.classList.remove("contacts__map-tooltip--hidden");
    }
  });
  mapWrapper.addEventListener("mousemove", (event) => {
    if (event.offsetY > 10) mapTooltip.style.top = event.offsetY + 20 + "px";
    if (event.offsetX > 10) mapTooltip.style.left = event.offsetX + 20 + "px";
  });
  mapWrapper.addEventListener("mouseleave", () => {
    mapTooltip.classList.add("contacts__map-tooltip--hidden");
  });
  document.addEventListener("click", (evt) => {
    if (!evt.target.closest(".contacts__map")) {
      if (document.querySelector(".contacts__map-tooltip")) {
        map.style = "pointer-events: none";
        mapActive = false;
      }
    }
  });
}
