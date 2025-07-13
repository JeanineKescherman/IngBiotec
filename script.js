
function toggle(boton) {
  boton.classList.toggle("aprobada");
  saveState();
}

function saveState() {
  const aprobado = [];
  document.querySelectorAll("button").forEach(btn => {
    if (btn.classList.contains("aprobada")) {
      aprobado.push(btn.innerText);
    }
  });
  localStorage.setItem("aprobadas", JSON.stringify(aprobado));
}

function loadState() {
  const guardadas = JSON.parse(localStorage.getItem("aprobadas") || "[]");
  document.querySelectorAll("button").forEach(btn => {
    if (guardadas.includes(btn.innerText)) {
      btn.classList.add("aprobada");
    }
  });
}

window.onload = loadState;
