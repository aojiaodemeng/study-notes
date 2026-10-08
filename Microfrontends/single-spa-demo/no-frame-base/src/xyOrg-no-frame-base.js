let containerDom = null;

export async function bootstrap() {
  console.log("应用正在启动");
}
export async function mount() {
  console.log("应用正在挂载");
  containerDom = document.createElement("div");
  containerDom.id = "containerDom";
  containerDom.innerHTML = "Hello, this is NO FRAME BASE";
  document.body.appendChild(containerDom);
}
export async function unmount() {
  console.log("应用正在卸载");
  document.body.removeChild(containerDom);
}
