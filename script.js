:root {
  --bg-color: #ffffff;
  --text-color: #000000;
  --info-bg: rgba(255, 255, 255, 0.6);
}
[data-theme="dark"] {
  --bg-color: #1e1e1e;
  --text-color: #ffffff;
  --info-bg: rgba(0, 0, 0, 0.6);
}
body {
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: sans-serif;
  margin: 0;
}
.carousel img {
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
}
.thumbnails img {
  width: 160px;
  height: 100px;
  object-fit: cover;
  margin: 4px;
}
