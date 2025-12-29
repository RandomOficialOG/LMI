console.log("🔧 Inicializando aplicación...");

// Verificar que todo está cargado
const required = [
  {name: 'tanks_data', obj: window.tanks_data},
  {name: 'aircraft_data', obj: window.aircraft_data},
  {name: 'navy_data', obj: window.navy_data},
  {name: 'countries_latam', obj: window.countries_latam},
  {name: 'getEquipment', obj: window.getEquipment},
  {name: 'calculate', obj: window.calculate}
];

required.forEach(item => {
  if (item.obj) {
    console.log(`✅ ${item.name} cargado`);
  } else {
    console.error(`❌ ${item.name} NO cargado`);
  }
});

// Inicializar UI si existe
if (window.initUI) {
  window.initUI();
}

// init.js (AL FINAL DEL ARCHIVO)

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then(() => console.log("✅ Service Worker registrado"))
      .catch(err => console.error("❌ SW error:", err));
  });
}