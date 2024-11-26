<template>
    <div class="container">
        <!-- Calendario -->
         <div>
            <br>
         </div>
        <div class="mb-4">
            <label for="datepicker" class="form-label">Seleccione una fecha:</label>
            <input type="text" id="datepicker" class="form-control" placeholder="Seleccione una fecha">
        </div>

        <!-- Clases Programadas -->
        <div class="mb-4" id="class-section" style="display:none;">
            <label for="classSelect" class="form-label">Clases programadas:</label>
            <select id="classSelect" class="form-select">
                <!-- Opciones de clases se cargarán dinámicamente -->
            </select>
        </div>

        <!-- Sección de Notificaciones -->
        <div id="notification-section">
            <h5 class="mb-3">Enviar Notificación</h5>
            <p>Fecha seleccionada: <span id="selectedDate">Ninguna fecha seleccionada</span></p>

            <!-- Botones de Envío Rápido -->
            <button class="btn btn-p w-100 mb-2" onclick="sendNotification('Recordatorio: Mañana es tu clase.')">Enviar Recordatorio</button>
            <button class="btn btn-p w-100 mb-2" onclick="sendNotification('Tu clase ha sido cancelada.')">Enviar Cancelación</button>
            <button class="btn btn-p w-100 mb-2" onclick="sendNotification('Puedes acercarte a la academia, necesitamos hablar contigo.')">Enviar Solicitud de Contacto</button>

            <!-- Mensaje Personalizado -->
            <textarea class="form-control mb-2" id="customMessage" placeholder="Escribe tu mensaje personalizado aquí"></textarea>
            
            <!-- Checkbox Enviar al Maestro -->
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="sendToTeacher">
                <label class="form-check-label" for="sendToTeacher">Enviar también al maestro</label>
            </div>

            <!-- Botón de Envío Personalizado -->
            <button class="btn btn-e w-100" onclick="sendCustomNotification()">Enviar Mensaje Personalizado</button>
            <div>
                <br>
             </div>
        </div>
    </div>
  </template>
  
<script setup>
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:"Cormorant Garamond", serif;
}

body{
    width: 100%;
    background: linear-gradient( 317deg, #5f2f9a, #076a81, #b269cd) no-repeat center;
    min-height: 100vh;
}
.imgt{
  width: 110px;
  height: 50px;

}
.nb{
  background: repeating-linear-gradient(#5f2f9a, #b269cd);
}

.navbar-brand{
  font-weight: 500;
  color: rgb(254, 254, 254);
  font-size: 24px;
  transition: 0.3s color;
}


.navbar-toggler {
border: none;
font-size: 1.25rem;
}

.navbar-toggler:focus,.btn-close {
box-shadow: none;
outline: none;
}
.nav-link {
color: rgb(0, 0, 0);
font-weight: 500;
position: relative;
}

.nav-link:hover, .nav-link.active {
color: rgb(255, 255, 255);
}

@media (min-width: 991px) {
.nav-link::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background-color: rgb(228, 19, 179);
  visibility: hidden;
  transition: 0.3s ease-in-out;
}

.nav-link:hover::before,
.nav-link:active::before {
  width: 100%;
  visibility: visible;
}
}

.footer{
  position: relative;
  width: 100%;
  background-color: rgb(0, 0, 0);
  min-height: 100px;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.social-icon{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 10px 5px;
  flex-wrap: wrap;
}

.icon-elem{
  list-style: none;
}

.icon{
  color: rgb(255, 255, 255);
  font-size: 32px;
  display: inline-block;
  margin: 0 10px;
  transition: 0.5s;
}
.iconp{
  color: rgb(255, 255, 255);
  font-size: 40px;
  display: inline-block;
  margin: 0 10px;
  transition: 0.5s;
}

.icon:hover{
  transform: translateY(-10px);
}

.menu{
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  margin: 10px 0;
  flex-wrap: wrap;
}
.menu-elem{
  list-style: none;
}

.menu-icon{
  color:rgb(255, 255, 255);
  font-size: 20px;
  display: inline-block;
  text-decoration: none;
  margin: 5px 10px;
  opacity: 0.5;
  transition: 0.3s;
}

.menu-icon:hover{
  opacity: 1;
}

.text{
  color:beige;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 10px;
  font-size: 20px;
}

.card {
    background-color: #fff;
    border-radius: 15px;
    border: none;
}

.card-title {
    color: #6c757d;
}

.form-control {
    border-radius: 10px;
}

.btn-primary {
    background-color: #87CEEB;
    border-color: #87CEEB;
    color: #fff;
}

.btn-primary:hover {
    background-color: #4682B4;
    border-color: #4682B4;
}

.form-label {
    color: #6c757d;
}

.btn:hover {
    transform: scale(0.9);
}

.btn {
    transition: transform 0.1s ease;
}
.mtop{
    margin-top: 50px;
}

.container {
    max-width: 400px;
    margin: 20px auto;
}

.btn-p{
    background-color: #9854b1;
}

.btn-e{
    background-color: #b269cd;
}

.container{
    background-color: rgb(255, 255, 255);
    border-radius: 5%;
}

</style>