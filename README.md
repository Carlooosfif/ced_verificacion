Proyecto de Verificación de Identidad y Edad
Este proyecto proporciona una aplicación web para verificar la validez de cédulas ecuatorianas, calcular la edad basada en la fecha de nacimiento, y obtener la fecha actual. El proyecto está compuesto por tres microservicios y un frontend desarrollado con React.

Tabla de Contenidos
Descripción
Estructura del Proyecto
Instalación
Uso
Tecnologías Utilizadas
Contribuciones
Licencia
Descripción
La aplicación permite:

Verificar la validez de una cédula ecuatoriana.
Calcular la edad de una persona basándose en su fecha de nacimiento.
Obtener la fecha actual.

Estructura del Proyecto

.
├── age-verification
│   ├── index.js
│   ├── package.json
├── id-verification
│   ├── index.js
│   ├── package.json
├── date-service
│   ├── index.js
│   ├── package.json
├── ced-verificacion-frontend
│   ├── src
│   │   ├── App.js
│   │   ├── App.css
│   ├── public
│   ├── package.json
└── README.md

Instalación
Prerrequisitos
Node.js y npm deben estar instalados en tu máquina.

Clonar el repositorio
git clone https://github.com/Carlooosfif/ced_verificacion.git
cd ced_verificacion
Configurar los Microservicios
Cada microservicio debe instalar sus dependencias y correr por separado.

Age Verification
cd age-verification
npm install
node index.js

ID Verification
cd id-verification
npm install
node index.js

Date Service
cd date-service
npm install
node index.js

Configurar el Frontend
cd ced-verificacion-frontend
npm install
npm start
Uso
Abre tu navegador y navega a http://localhost:3001.
Ingresa una cédula ecuatoriana y haz clic en "Verificar Cédula".
Ingresa una fecha de nacimiento y haz clic en "Verificar Edad".
Haz clic en "Obtener Fecha Actual" para ver la fecha actual.

Tecnologías Utilizadas
Backend: Node.js, Express
Frontend: React
Styling: CSS

Contribuciones
Las contribuciones son bienvenidas. Por favor sigue estos pasos:

Haz un fork del proyecto.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -am 'Añadir nueva funcionalidad').
Sube tu rama (git push origin feature/nueva-funcionalidad).
Crea un nuevo Pull Request.
Licencia
Este proyecto está licenciado bajo la Licencia MIT. Para más detalles, ver el archivo LICENSE.
