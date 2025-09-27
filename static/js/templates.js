const routes = {
    '/': {
        title: 'Remesas y mensajes',
        content: `
        <div class="acordeon-container mostrar" id="acordeon-1">
            <div class="acordeon" id="acordeon-inicio">
                <video src="static/img/fondos/video2.mp4" class="video-fondo" muted loop preload="auto" alt="Video de la empresa"></video>
                <div class="caja-acordeon">
                    <div class="acordeon-caja">
                        <button class="titulo-caja">Servicios</button>
                        <div class="opciones">
                            <a href="#/Contactos" data-link class="opcion">Contáctanos <ion-icon name="chevron-forward-outline"></ion-icon></a>
                            <a href="#/Servicios" data-link class="opcion">Servicios <ion-icon name="chevron-forward-outline"></ion-icon></a>
                            <a href="#/GServicios" data-link class="opcion">Garantías de Servicios <ion-icon name="chevron-forward-outline"></ion-icon></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="acordeon" id="acordeon-medio">
                <video src="static/img/fondos/video1.mp4" class="video-fondo" muted loop preload="auto" alt="Video de la empresa"></video>
                <div class="caja-acordeon">
                    <div class="acordeon-caja">
                        <button class="titulo-caja">Empresas</button>
                        <div class="opciones">
                            <a href="http://www.sotcarga.com/remesasymensajes/" class="opcion">Cliente Corporativo <ion-icon name="chevron-forward-outline"></ion-icon></a>
                            <a href="#/Empresas" data-link class="opcion">¿Quieres Enviar con Nosotros? <ion-icon name="chevron-forward-outline"></ion-icon></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="acordeon" id="acordeon-final">
                <video src="static/img/fondos/video3.mp4" class="video-fondo" muted loop preload="auto" alt="Video de la empresa"></video>
                <div class="caja-acordeon-final">
                    <div class="acordeon-caja">
                        <button class="titulo-caja">Saber Más... </button>
                        <div class="opciones">
                            <a href="#/Nosotros" data-link class="opcion">Nosotros <ion-icon name="chevron-forward-outline"></ion-icon></a>
                            <a href="#/Tyc" data-link class="opcion">Términos y Condiciones <ion-icon name="chevron-forward-outline"></ion-icon></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `,
        backgroundImage: 'none'
    },
    '/Contactos': {
        title: 'Contactos',
        content: `
        <div class="caja-w" onclick="cerrarContenido(event, 'w')">
                <div class="opciones-w">
                    <button class="opcion-w" onclick="mostrarContenido('contenido-w4', event, 'w')">Bogotá</button>
                    <button class="opcion-w" onclick="mostrarContenido('contenido-w5', event, 'w')">Envigado</button>
                    <button class="opcion-w" onclick="mostrarContenido('contenido-w6', event, 'w')">Villavicencio</button>
                    <button class="opcion-w" onclick="mostrarContenido('contenido-w7', event, 'w')">Yopal</button>
                    <button class="opcion-w" onclick="mostrarContenido('contenido-w8', event, 'w')">PQR's</button>
                </div>
                <div class="contenido-w" id="contenido-w4">
                    <h2>Bogotá</h2>
                    <p>Dirección. Autopista Medellin Km 3.5 Via Siberia-Cota Terminal Terrestre De Carga Modulo 7 Bodega 41</p>
                    <p>Celular: 3102680869</p>
                    <br><a href="https://www.google.com/maps?q=4.75119242932939, -74.15100721616543"><img src="static/img/mapas/mapa_sede_Bogota.webp" alt="Mapa de sede en Bogotá" class="mapas"></a>
                    </div>
                <div class="contenido-w" id="contenido-w5">
                    <h2>Envigado</h2>
                    <p>Dirección. CARRERA 49 A #48 SUR-60 INTERIOR 104 BODEGAS UNIVEGAS</p>
                    <br><a href="https://www.google.com/maps?q=6.165447565751389, -75.60225784533067"><img src="static/img/mapas/mapa_sede_Envigado.webp" alt="Mapa de sede en Envigado" class="mapas"></a>
                </div>
                <div class="contenido-w" id="contenido-w6">
                    <h2>Villavicencio</h2>
                    <p>Parque Comercial La Primavera Carrera 22 #5B-114 Local A6</p>
                    <br><a href="https://www.google.com/maps?q=4.128337117890325, -73.62149655153866"><img src="static/img/mapas/mapa_sede_Vcencio.webp" alt="Mapa de sede en Villavicencio" class="mapas"></a>
                </div>
                <div class="contenido-w" id="contenido-w7">
                    <h2>Yopal</h2>
                    <p>Carrera 5 #34-34 Local 2 Zona Industrial Bodegas de Serpet</p>
                    <br><a href="https://www.google.com/maps?q=5.319710532574351, -72.40521511940669"><img src="static/img/mapas/mapa_sede_Yopal.webp" alt="Mapa de sede en Yopal" class="mapas"></a>
                </div>
                <div class="contenido-w" id="contenido-w8">
                    <form class="form-contacto" action="https://formsubmit.co/yorland1998@gmail.com" method="POST">
                        <label for="name">Nombre: </label>
                        <input type="text" name="Nombre" id="name" placeholder="Nombre completo" required>
                        <label for="email">Correo Electrónico: </label>
                        <input type="email" name="Correo Electrónico" id="email" placeholder="Correo Electrónico" required>
                        <label for="subject">Asunto: </label>
                        <input type="text" name="Asunto" id="subject" placeholder="(Petición, queja o reclamo)" required>
                        <label for="coments">PQR: </label>
                        <textarea name="PQR's" id="coments" cols="30" rows="5" placeholder="Escribe tu Petición, queja o reclamo" required></textarea>
                        <input class="btn" type="submit" value="Enviar">
                        <input type="hidden" name="_next" value="http://127.0.0.1:5500/">
                        <input type="hidden" name="_captcha" value="false">
                    </form>
            </div>
        `,
        backgroundImage: 'url(static/img/fondos/creciente.webp)'
    },
    '/Empresas': {
        title: 'Únete',
        content: `
        <div class="emp-form-wrapper">
        <h2>Nuestros clientes...</h2>
        <div class="cinta-imagenes">
            <div class="cinta-track">
                <img src="static/img/iconos/logo_natura.png" alt="logo de NATURA">
                <img src="static/img/iconos/logo_auteco.png" alt="logo de AUTECO motos>
                <img src="static/img/iconos/logo_yambal.png" alt="logo de YAMBAL">
                <img src="static/img/iconos/logo_yambal.png" alt="logo de YAMBAL">
                <img src="static/img/iconos/logo_akt.png" alt="logo de AKT motos">

                <img src="static/img/iconos/logo_natura.png" alt="logo de NATURA">
                <img src="static/img/iconos/logo_auteco.png" alt="logo de AUTECO motos>
                <img src="static/img/iconos/logo_yambal.png" alt="logo de YAMBAL">
                <img src="static/img/iconos/logo_yambal.png" alt="logo de YAMBAL">
                <img src="static/img/iconos/logo_akt.png" alt="logo de AKT motos">

                <img src="static/img/iconos/logo_natura.png" alt="logo de NATURA">
                <img src="static/img/iconos/logo_auteco.png" alt="logo de AUTECO motos>
                <img src="static/img/iconos/logo_yambal.png" alt="logo de YAMBAL">
                <img src="static/img/iconos/logo_yambal.png" alt="logo de YAMBAL">
                <img src="static/img/iconos/logo_akt.png" alt="logo de AKT motos">
            </div>
        </div>
            <h2 class="emp-title">¿Quieres enviar grandes cantidades con nosotros?</h2>
            <p class="emp-subtitle">Por favor diligencia el siguiente formulario empresarial</p>
                    <form class="form-contacto" action="https://formsubmit.co/yorland1998@gmail.com" method="POST">
                        <label for="name">Nombre del cliente o empresa : </label>
                        <input type="text" name="Nombre" id="name" placeholder="Nombre" required>
                        <label for="email">Correo Electrónico: </label>
                        <input type="email" name="Correo Electrónico" id="email" placeholder="Correo Electrónico" required>
                        <label for="subject">Objeto Social: </label>
                        <input type="text" name="Objeto social de la empresa:" id="subject" placeholder="¿A qué se dedica la empresa?" required>
                        <label for="coments">¿Qué vas a transportar? </label>
                        <textarea name="Tipo de mercancia" id="coments" cols="30" rows="1" placeholder="Tipo de mercancia" required></textarea>
                        <label for="emp_tipo_carga">Capacidad de almacenamiento</label>
                        <select id="emp_tipo_carga" name="Capacidad de carga" required>
                            <option value="">Selecciona la capacidad de carga</option>
                            <option value="semimasivo(camión pequeño)">Semimasivo (Camión pequeño)</option>
                            <option value="masivo(Camión grande)">Masivo (Camión grande)</option>
                        </select>
                        <label for="emp_frecuencia">Frecuencia de envío</label>
                        <select id="emp_frecuencia" name="frecuencia" required>
                            <option value="">Selecciona la frecuencia</option>
                            <option value="poca">Poca frecuencia (ocasional)</option>
                            <option value="regular">Frecuencia regular (mensual)</option>
                            <option value="muy frecuente">Muy frecuente (semanal o más)</option>
                        </select>
                        <label for="coments">Comentarios adicionales</label>
                        <textarea name="Comentarios adicionales" id="coments" cols="30" rows="2" placeholder="Especificaciones" required></textarea>
                        <input class="btn" type="submit" value="Enviar">
                        <input type="hidden" name="_next" value="http://127.0.0.1:5500/">
                        <input type="hidden" name="_captcha" value="false">
                    </form>
        </div>
        `,
        backgroundImage: 'url(static/img/fondos/amanecer.webp)'
    },
    '/GServicios': {
        title: 'Garantias del Servicio',
        content: `
        <div class="caja-g" onclick="cerrarContenido(event, 'g')">
            <div class="opciones-g">
                <button class="opcion-g" onclick="mostrarContenido('contenido-g1', event, 'g')">Nuestro Compromiso</button>
                <button class="opcion-g" onclick="mostrarContenido('contenido-g2', event, 'g')">Gestión de Riesgo</button>
            </div>
                <div class="contenido-g" id="contenido-g1">
                <button class="opcion-g" onclick="mostrarSubcontenido('subcontenido-g1', event, 'g')">Calidad</button>
                <button class="opcion-g" onclick="mostrarSubcontenido('subcontenido-g2', event, 'g')">Satisfacción</button>
                <button class="opcion-g" onclick="mostrarSubcontenido('subcontenido-g3', event, 'g')">Transparencia</button>
                <button class="opcion-g" onclick="mostrarSubcontenido('subcontenido-g4', event, 'g')">Verdes</button>
                <button class="opcion-g" onclick="mostrarSubcontenido('subcontenido-g5', event, 'g')">Protección</button>
                <div class="subcontenido-g" id="subcontenido-g1">
                    <h2>Compromiso por la Calidad del Servicio</h2><br>
                    <p>Consideramos que la calidad de nuestro servicio es la piedra 
                    angular de nuestra operación, y en tal sentido nos esforzamos por implementar soluciones de servicio de 
                    primera categoría con un equipo operativo y humano idóneo que cumpla efectivamente  los requerimientos de las 
                    necesidades de nuestros clientes y de los mercados;  por lo tanto, continuamente nos capacitamos, investigamos 
                    y adoptamos las mejores prácticas en todas las áreas, complementando su ejecución con nuestro sistema de 
                    gestión de calidad por procesos BPM garantizándole a nuestros clientes la ejecución de una operación adecuada 
                    en el momento indicado y ejecutada de forma correcta, cumpliendo con la normativa de ley para cada caso, con 
                    sus expectativas operativas, las de sus clientes y dando cumplimiento a nuestra promesa de servicio de forma 
                    idónea en el momento justo.</p>
                </div>
                <div class="subcontenido-g" id="subcontenido-g2">
                    <h2>Compromiso por la Satisfacción del Cliente</h2><br>
                    <p>En Remesas & Mensajes somos conscientes que el éxito de su negocio 
                    garantiza el nuestro, por lo tanto, en nuestras operaciones priorizamos la certeza sobre la percepción; ya que 
                    estar totalmente seguros de que cumplimos cuantitativa y cualitativamente sus expectativas y nuestra promesa de 
                    servicio es el único medio valido para alcanzar nuestro principal objetivo. Consecuentes con este pensamiento, 
                    estamos convencidos que lo que no se mide no es susceptible de mejora; por lo tanto, constantemente medimos 
                    nuestra operación con el fin de evaluarnos a partir de los objetivos trazados en nuestro sistema de gestión de 
                    calidad por procesos BPM, robusteciendo, ajustando o estableciendo programas de mejora continua que nos 
                    permitan alcanzar la excelencia y nuestro principal objetivo, “su confianza”.</p>
                </div>
                <div class="subcontenido-g" id="subcontenido-g3">
                    <h2>Compromiso por los Valores Éticos y Legales</h2><br>
                    <p>Velamos por la integridad de la operación de nuestros clientes y 
                    de nuestros funcionarios durante el ejercicio de nuestras labores, velando continuamente por que se ejecuten 
                    en un entorno de rectitud y honestidad. Nuestra operación a nivel nacional se ejecuta y cumple con la 
                    normatividad vigente para el sector al que pertenecemos, de igual forma velamos por ejercerla atendiendo nuestros 
                    valores corporativos de manera ética y de acuerdo con las buenas prácticas legales ajustadas a la ley y 
                    constitución nacional.</p>
                </div>
                <div class="subcontenido-g" id="subcontenido-g4">
                    <h2>Compromiso por Preservar el Medio Ambiente</h2><br>
                    <p>Somos conscientes de nuestro impacto en el medio ambiente por lo tanto 
                    estamos comprometidos con disminuir nuestros índices de contaminación en el menor tiempo posible y para esto 
                    permanecemos atentos de nuevas tecnologías que nos permitan alcanzar estos objetivos, así como del diseño de 
                    programas preventivos que involucren a nuestro capital humano ya que consideramos el mismo parte fundamental para 
                    la concientización ambiental.</p>
                </div>
                <div class="subcontenido-g" id="subcontenido-g5">
                    <h2>Compromiso por la Protección de tus Datos</h2><br>
                    <p>Nos encontramos altamente comprometidos con proteger los datos e información 
                    que nos confían nuestros clientes, en tal sentido nos esforzamos en implementar procesos que cumplan dicho fin así 
                    como de empoderar a nuestro equipo para que se concientice y vele por proteger dicha información, esto incluye 
                    datos técnicos, financieros, operativos y comercial, nuestros funcionarios y la compañía nos comprometemos a 
                    respetar la privacidad de los mismos y las leyes y regulaciones tanto propias como gubernamentales expedidas al 
                    respecto</p>
                </div>
            </div>
            <div class="contenido-g" id="contenido-g2">
                <button class="opcion-g" onclick="mostrarSubcontenido('subcontenido-g6', event, 'g')">Gestionamos</button>
                <div class="subcontenido-g" id="subcontenido-g6">
                    <h2>Gestión del Riesgo</h2><br>
                    <p>Nuestra gestión del riesgo trata de identificar y cuantificar las 
                    potenciales perturbaciones para reducir su impacto en nuestra operación, y en tal sentido en Remesas & Mensajes 
                    nos esforzamos en poder gestionar el riesgo diseñando planes de contingencia que mitiguen en mayor o menor medida 
                    los potenciales riesgos a los que nos podamos enfrentar y nos permitan garantizar la continuidad de la operación. 
                    Para enfrentar y estar competentemente preparados ante una situación de riesgo hemos establecido las siguientes 
                    fases a partir del tipo de operación atendida ya sea en términos de gestión de almacén o transporte y distribución:</p><br>
                    <li>Identificar los potenciales riesgos que pueden suceder</li><br>
                    <li>Valorar y clasificar el riesgo</li><br>
                    <li>Desarrollar un plan de respuesta adecuado</li><br>
                    <li>Ejecutar el plan de respuesta si fuese necesario</li><br><br>
                    <p>Procedemos y asignamos un índice de riesgo a cada proceso a partir de su probabilidad y su impacto, identificando 
                    cuantitativamente su impacto y estableciendo las correspondientes acciones preventivas y correctivas. Nuestras 
                    acciones preventivas son nuestra respuesta proactiva ante riesgos con un alto índice de riesgo ya que nos enfocamos 
                    por enfrentarlos y no esperar a recurrir a respuestas urgentes.</p>
                </div>
            </div>
        </div>
        `,
        backgroundImage: 'url(static/img/fondos/Carretera.webp)'
    },
    '/Servicios': {
        title: 'Servicios',
        content: `
            <div class="caja-s" onclick="cerrarContenido(event, 's')">
                <div class="opciones-s">
                    <button class="opcion-s" onclick="mostrarContenido('contenido1', event, 's')">Métodos</button>
                    <button class="opcion-s" onclick="mostrarContenido('contenido2', event, 's')">Cantidades</button>
                    <button class="opcion-s" onclick="mostrarContenido('contenido3', event, 's')">PL's</button>
                </div>
                <div class="contenido-s" id="contenido1">
                    <button class="opcion-s" onclick="mostrarSubcontenido('subcontenido1', event, 's')">Almacenamiento</button>
                    <button class="opcion-s" onclick="mostrarSubcontenido('subcontenido2', event, 's')">Transporte</button>
                    <button class="opcion-s" onclick="mostrarSubcontenido('subcontenido3', event, 's')">Distribución</button>
                    <div class="subcontenido-s" id="subcontenido1">
                        <h2>Características:</h2><br>
                        <ul>
                        <li>° Centros de Distribución a la medida</li><br>
                        <li>° Unidades almacenables: Pallets, Cajas, Items sueltos, Motos</li><br>
                        <li>° Sistemas de Picking: Automático, Semiautomático, Manual</li><br>
                        <li>° Sistema de cross docking flexible y dinámico</li><br>
                        <li>° Profundidad de almacenamiento simple, doble o múltiple</li><br>
                        <li>° Sistemas de información integrables</li><br>
                        <li>° Recepción, consolidación, alistamiento y despacho</li><br>
                        <li>° Soluciones de servicio en nuestro stage o In-house</li><br>
                        <li>° Servicio basado en B.P.M + Q.P.M a partir de KPL´s</li><br>
                        <li>° Gestión del riesgo y pólizas 360º (cumplimiento y todo riesgo)</li><br>
                        <li>° Soluciones ajustadas a su presupuesto</li>
                        </ul>
                    </div>
                    <div class="subcontenido-s" id="subcontenido2">
                        <h2>Características:</h2><br>
                        <ul>
                        <li>° Transporte y distribución puerta a puerta</li><br>
                        <li>° Consulta virtual en tiempo real</li><br>
                        <li>° Gestión en logística inversa</li><br>
                        <li>° Distribución en ruta sin recargo para semimasivos y masivos</li><br>
                        <li>° Tiempos de 24/48/72 hrs según el destino</li><br>
                        <li>° Vehículos dedicados y configurados a la medida</li><br>
                        <li>° Gestión del riesgo y monitoreo operativo 7-24</li><br>
                        <li>° Servicio basado en B.P.M + Q.P.M</li><br>
                        <li>° Entregas críticas - Express -</li><br>
                        <li>° Gestión del riesgo y pólizas 360º (cumplimiento y todo riesgo)</li><br>
                        <li>° Consolidación controlada, reduciendo riesgo por contaminación</li>
                        </ul>
                    </div>
                    <div class="subcontenido-s" id="subcontenido3">
                    <h2>Características:</h2><br>
                    <ul>
                        <li>° Centro de distribución temporal (recepción y crossdocking)</li><br>
                        <li>° Distribución puerta a puerta urbana y rural (según el destino)</li><br>
                        <li>° Procesos adicionales de redistribución sin costo (*)</li><br>
                        <li>° Solución de última milla configurada a la medida</li><br>
                        <li>° Gestión y monitoreo operativo 7-24</li><br>
                        <li>° Servicio basado en B.P.M + Q.P.M</li><br>
                        <li>° Aplican condiciones y limitaciones</li>
                    </ul>
                    </div>
                </div>
                <div class="contenido-s" id="contenido2">
                    <button class="opcion-s" onclick="mostrarSubcontenido('subcontenido4', event, 's')">Paqueteo</button>
                    <button class="opcion-s" onclick="mostrarSubcontenido('subcontenido5', event, 's')">Semimasivo</button>
                    <button class="opcion-s" onclick="mostrarSubcontenido('subcontenido6', event, 's')">Masivo</button>
                    <div class="subcontenido-s" id="subcontenido4">
                        <h2>Características:</h2><br>
                        <ul>
                        <li>° Servicio puerta a puerta</li><br>
                        <li>° Consulta virtual en tiempo real</li><br>
                        <li>° Pago contado, al destino y crédito</li><br>
                        <li>° Redistribución adicional</li><br>
                        <li>° Tiempos de 24/48/72 hrs s/ destino</li><br>
                        <li>° Gestión del riesgo 7-24</li><br>
                        <li>° Monitoreo del servicio 7-24</li><br>
                        <li>° Servicio basado en B.P.M + Q.P.M</li><br>
                        <li>° Transporte aéreo y terrestre</li><br>
                        <li>° Soluciones de última milla</li><br>
                        <li>° Entregas críticas - Express -</li>
                        </ul>
                    </div>
                    <div class="subcontenido-s" id="subcontenido5">
                        <h2>Características:</h2><br>
                        <ul>
                        <li>° Servicio puerta a puerta</li><br>
                        <li>° Consulta virtual en tiempo real</li><br>
                        <li>° Pago contado, al destino y crédito</li><br>
                        <li>° Distribución en ruta sin recargo</li><br>
                        <li>° Tiempos de 24/48/72 hrs s/ destino</li><br>
                        <li>° Gestión del riesgo + Contingencias</li><br>
                        <li>° Monitoreo del servicio certiplus</li><br>
                        <li>° Servicio basado en B.P.M + Q.P.M</li><br>
                        <li>° Transporte aéreo y terrestre</li><br>
                        <li>° Consolidación controlada</li>
                        </ul>
                    </div>
                    <div class="subcontenido-s" id="subcontenido6">
                        <h2>Características:</h2><br>
                        <ul>
                        <li>° Servicio puerta a puerta</li><br>
                        <li>° Consulta virtual en tiempo real</li><br>
                        <li>° Gestión del riesgo a la medida</li><br>
                        <li>° Distribución en ruta sin recargo</li><br>
                        <li>° Vehículo dedicado/configurado a la medida</li><br>
                        <li>° Servicio ajustado a la medida</li><br>
                        <li>° Monitoreo del servicio certiplus</li><br>
                        <li>° Servicio basado en B.P.M + Q.P.M</li><br>
                        <li>° Aplican condiciones</li>
                        </ul>
                    </div>
                </div>
                <div class="contenido-s" id="contenido3">
                    <button class="opcion-s" onclick="mostrarSubcontenido('subcontenido7', event, 's')">2-PL</button>
                    <button class="opcion-s" onclick="mostrarSubcontenido('subcontenido8', event, 's')">3-PL</button>
                    <button class="opcion-s" onclick="mostrarSubcontenido('subcontenido9', event, 's')">4-PL</button>
                    <div class="subcontenido-s" id="subcontenido7">
                        <h2>Características:</h2><br>
                        <ul>
                        <li>° Transporte de mercancías</li><br>
                        <li>° Operación exclusiva o consolidada</li><br>
                        <li>° Plataforma terrestre y aérea</li><br>
                        <li>° Planeación y gestión de recursos</li><br>
                        <li>° Diseño operativo a la medida</li><br>
                        <li>° Soporte de servicio a la medida</li><br>
                        <li>° Gestión de indicadores de servicio</li><br>
                        <li>° Monitoreo operativo 7-24</li><br>
                        <li>° Soluciones de última milla</li><br>
                        <li>° Entregas críticas - Express -</li><br>
                        <li>° Sistema de información integrable</li>
                        </ul>
                    </div>
                    <div class="subcontenido-s" id="subcontenido8">
                        <h2>Características:</h2><br>
                        <ul>
                        <li>° Gestión en almacenaje de mercancías</li><br>
                        <li>° Operación exclusiva o compartida</li><br>
                        <li>° Instalaciones y equipos a la medida</li><br>
                        <li>° Planificación y monitoreo técnico</li><br>
                        <li>° Gestión de Kpli´s y flujo</li><br>
                        <li>° Gestión en logística inversa</li><br>
                        <li>° Sistema de información integrable</li><br>
                        <li>° Servicio basado en B.P.M + Q.P.M</li><br>
                        <li>° Aplican condiciones</li>
                        </ul>
                    </div>
                    <div class="subcontenido-s" id="subcontenido9">
                        <h2>Características:</h2><br>
                        <ul>
                        <li>° Almacén y distribución integrados</li><br>
                        <li>° Operación exclusiva o compartida</li><br>
                        <li>° Servicio de torre de control</li><br>
                        <li>° Diseño y gestión de red a la medida</li><br>
                        <li>° Instalaciones y equipos a la medida</li><br>
                        <li>° Sistema de información integrable</li><br>
                        <li>° Servicio basado en B.P.M + Q.P.M</li><br>
                        <li>° Aplican condiciones</li>
                        </ul>
                    </div>
                </div>
            </div>
        `,
        backgroundImage: 'url(static/img/fondos/Carretera.webp)'
    },
    '/Nosotros': {
        title: 'Nosotros',
        content: `
            <div class="caja-w" onclick="cerrarContenido(event, 'w')">
                <div class="opciones-w">
                    <button class="opcion-w" onclick="mostrarContenido('contenido-w1', event, 'w')">¿Quienes Somos?</button>
                    <button class="opcion-w" onclick="mostrarContenido('contenido-w2', event, 'w')">Nuestro Sentimiento</button>
                    <button class="opcion-w" onclick="mostrarContenido('contenido-w3', event, 'w')">Nuestra Premisa</button>
                </div>
                <div class="contenido-w" id="contenido-w1">
                    <p>Somos un operador de nivel 
                    estratégico que genera valor en la cadena de suministro, estamos 
                    presentes en la industria cosmética, solar, banca, farmacéutica, ingeniería, agrícola, veterinaria, licores, confección, 
                    telecomunicaciones, automotriz y comercio; implementamos soluciones operativas a la medida para requerimientos 
                    logísticos de nivel 2PL 3PL y 4PL.  Diseñamos, integramos y directamente (no tercerizamos) prestamos soluciones en:</p><br>
                    <li>° Transporte de Mercancías</li><br>
                    <li>° Servicios Logísticos</li><br>
                    <li>° Distribución de última Milla</li><br>
                    <li>° Entregas Críticas</li><br>
                </div>
                <div class="contenido-w" id="contenido-w2">
                    <p>Se dice que quien conoce el llano, de él se enamora y jamás lo deja...</p><br>
                    <p>Y aunque han transcurrido más de 20 años transitando por lo que anteriormente eran caminos con barro y hoy en su mayoría 
                    son vías de progreso en las que transportamos diariamente el esfuerzo y los sueños de sus  comunidades, aún nos enorgullece 
                    poder ser testigos de su progreso, su crecimiento, sus logros, incluso sus dificultades, las cuales hemos aprendido juntos 
                    a enfrentar a la cara, a levantarnos y seguir adelante.  Para nosotros cada día esta bella región nos entrega más de lo que 
                    le entregamos nosotros a ella y en tal sentido solo tenemos palabras de agradecimiento por la confianza depositada en 
                    nuestros servicios, y este amanecer que apreciamos todos los días así como otras bellas imágenes que usted podrá apreciar 
                    en algunas de nuestras paginas es nuestro homenaje a este llano que tanto apreciamos y al que no queremos dejar.</p>
                </div>
                <div class="contenido-w" id="contenido-w3">
                    <p>Somos un equipo multidisciplinario de profesionales enfocados en que primero está el cliente, en tal sentido estamos 
                    conscientes que en cada lugar donde llegamos lo representamos a usted y que si cumplimos bien con nuestra misión la suya 
                    estará cumplida.</p><br>    
                    <p>Nos esforzamos no solo por cumplir nuestra promesa de servicio, nos esforzamos por continuamente superar sus expectativas, 
                    y para lograrlo diariamente monitoreamos nuestros indicadores pero aún vamos más allá, ya que colocamos todo nuestro empeño en 
                    entender los requerimientos específicos de cada empresa, de cada persona, pues al final del día lo único que importa es la 
                    experiencia de servicio que hemos entregado.</p>
                </div>
            </div>
        `,
        backgroundImage: 'url(static/img/fondos/atardecer.webp)'
    },
    '/Tyc': {
        title: 'Términos y Condiciones',
        content: `
        <div class="caja-w" onclick="cerrarContenido(event, 'w')">
                <div class="opciones-w">
                    <button class="opcion-w" onclick="mostrarContenido('contenido-w4', event, 'w')">Términos Legales</button>
                    <button class="opcion-w" onclick="mostrarContenido('contenido-w5', event, 'w')">Política de Protección de Datos</button>
                    <button class="opcion-w" onclick="mostrarContenido('contenido-w6', event, 'w')">Autorización para el uso de Datos</button>
                </div>
                <div class="contenido-w" id="contenido-w4">
                    <br><h2>Términos legales</h2>
                        <p>Al ingresar a este sitio, usted acepta nuestras condiciones y políticas de uso. </p>
                    <br><h2>Respecto del contenido</h2> 
                        <p>R&M no se hace responsables del uso, entendimiento e interpretación que el usuario haga del contenido presentado en 
                        nuestro web site www.remesasymensajes.com y sus micro sites.   El contenido de estos sitios es desarrollado por R&M, 
                        y/o un tercero autorizado, por lo tanto, nos reservamos la facultad de modificar su contenido, su configuración y/o sus 
                        servicios sin notificación previa.</p>
                    <br><h2>Límite de responsabilidad</h2> 
                        <p>R&M no asumen responsabilidad alguna por los daños y perjuicios que puedan derivarse de la utilización de los 
                        servicios y de los contenidos, o por la falta de veracidad y/o autenticidad de la información que el usuario proporcione 
                        acerca de sí mismo; por lo tanto como consecuencia del incumplimiento de cualquiera de las obligaciones derivadas de las 
                        condiciones de uso y de las que la ley establece con relación a la utilización de este web site el usuario responderá por 
                        los daños y perjuicios de toda naturaleza que R&M pueda sufrir, directa o indirectamente. </p>
                        <p>Todo usuario asume y acepta que ni R&M y ningún tercero es responsable por los perjuicios que se deriven directa o 
                        indirectamente de la existencia, imposibilidad de uso o de acceso a este web site o a cualquiera de sus vínculos.  En tal 
                        sentido, acepta que R&M no ofrece garantía sobre la exactitud e integridad del software, los servicios e información 
                        presentados en este web site.  En tal sentido acepta que él, es el único responsable por las decisiones que adopte con 
                        base en la información o contenido de esta página o de sus vínculos o enlaces... </p>
                        <p>Así mismo, los daños que puedan ocurrir por la presencia de virus y otros en los servicios prestados por terceros o 
                        cualquier consecuencia que pueda causar la prestación de dichos servicios, tampoco son responsabilidad de R&M y en 
                        particular, aunque no exclusivamente, R&M tampoco se hace responsable por daños y perjuicios que pueda provocar la 
                        suplantación de un tercero, efectuada por 
                        un usuario en cualquier clase de información. </p>
                    <br><h2>Derecho de propiedad</h2>
                        <p>Todo usuario acepta y reconoce que el contenido de este web site, está protegido por derechos de autor y en general, por 
                        las diferentes formas del derecho de propiedad y no podrá modificar, transmitir o distribuir el contenido incluido el código 
                        fuente y el software, lo anterior so pena de incurrir en responsabilidad civil y responsabilidad penal, según las normas 
                        vigentes.</p>
                </div>
                <div class="contenido-w" id="contenido-w5">
                    <br><h2>Política de Protección de Datos</h2>
                    <p>En cumplimiento de la Ley 1581 de 2012, Decreto 1377 de 2013 y demás normas que traten y regulen sobre esta materia por la 
                        cual se dictan disposiciones para la protección de datos personales en Remesas y Mensajes Ltda en su calidad de responsable 
                        del tratamiento de datos. </p>
                        <p>Remesas y Mensajes Ltda. Identificada con Nit 800.167.994-5, designa como responsable del tratamiento de la base de datos 
                        personales al funcionario de Sistema de Gestión y Cumplimiento, con sede principal en Bogotá, terminal terrestre de carga Bodega 
                        45 Modulo 7 autopista Medellín vía Siberia kilómetro 3.5, Email informenos@remesaymensajes.com celular: 3106994902 fijo 8759184. </p> 
                    <br><h2>Derechos de los titulares de la información</h2> 
                        <p>Los siguientes son los derechos que como responsables del tratamiento de los datos personales garantizaremos en el tratamiento 
                        de nuestras bases de datos:</p>
                        <br><p>° Acceder, conocer, actualizar y rectificar sus datos personales como responsables del tratamiento; a este derecho se podrá 
                        ejercer, entre otros, frente a los datos parciales, anexados, incompletos, fraccionados, que induzcan a error, o aquellos cuyo 
                        tratamiento este expresamente prohibido o no haya sido autorizado. </p> 
                        <br><p>° Solicitar autorización otorgada para el tratamiento de datos, mediante cualquier medio valido, salvo en los casos en que no 
                        es necesaria la autorización. </p>
                        <br><p>° Ser informado respecto del uso que se le ha dado a sus datos personales.
                        <br><p>° Presentar ante la superintendencia de industria y Comercio, o la entidad que hiciere sus veces, quejas por infracciones a lo 
                        dispuesto en la ley 1581 de 2012 y las demás normas que la modifiquen, adicionen o complementen previo tramite de consulta o 
                        requerimiento.</p>
                        <br><p>° Revocar la autorización y/o solicitar la supresión del dato cuando en el tratamiento no se respeten los principios, derechos y 
                        garantías constitucionales y legales. </p>
                        <br><p>° Acceso gratuito a sus datos personales al menos una vez cada mes calendario, y cada vez que existan modificaciones sustanciales 
                        de la presente política que motiven nuevas consultas.</p> 
                        <br><h2> Estos derechos podrán ser ejercidos por: </h2>
                        <br><p>° El titular, quien deberá acreditar su identidad en forma suficiente. </p>
                        <br><p>° Los causahabientes del titular, quienes deberán acreditar tal capacidad. </p>
                        <br><p>° El representante y/o apoderado del titular, previa acreditación. </p>
                        <br><p>° Otro a favor o para el cual el titular hubiere estipulado. </p>
                    <br><h2>R&M como responsable y encargado del tratamiento de los datos personales reconoce la 
                        titularidad de los datos personales y por tanto garantizara: </h2>
                        <br><p>° Al titular, el pleno y efectivo ejercicio del derecho de habeas data. </p>
                        <br><p>° Solicitar la respectiva autorización para el tratamiento de datos personales. </p>
                        <br><p>° Informar debidamente la finalidad de la recolección y los derechos que la asisten. </p>
                        <br><p>° Conservar la información en condiciones que impidan adulteración, acceso no autorizado o fraudulento.</p>
                        <br><p>° Que la información sea veraz y completa</p>
                        <br><p>° Actualizar oportunamente la información</p>
                        <br><p>° Rectificar la información cuando sea incorrecta. </p>
                        <br><p>° Respetar las condiciones de seguridad y privacidad de la información del titular. </p>
                        <br><p>° Gestionar las consultas y reclamos formulados en los términos señalados por la ley. </p>
                        <br><p>° Identificar cuando la información se encuentra en discusión. </p>
                        <br><p>° A solicitud del titular informar sobre el uso dado a sus datos. </p>
                        <br><p>° Informar a la autoridad cuando se presenten violaciones o riesgos de la información. </p>
                        <br><p>° Cumplir los requerimientos de la superintendencia de industria y comercio sobre el tema. </p>
                        <br><p>° Usar únicamente datos cuyo tratamiento este previamente autorizado. </p>
                        <br><p>° Velar por el uso adecuado de los datos personales de los niños, niñas y adolescentes. </p>
                        <br><p>° Cuando aplique registrar los "reclamo en trámite" en la forma en que se regula en la ley. </p>
                        <br><p>° Registrar "información en discusión judicial" por notificado de la autoridad competente. </p>
                        <br><p>° Abstenerse de circular información que este siendo controvertida. </p>
                        <br><p>° Permitir el acceso a la información únicamente a las personas con acceso a ella. </p>
                        <br><p>° Usar los datos solo para aquellas finalidades para las que se encuentre facultada debidamente. </p>
                <br><h2>Tratamiento al cual serán sometidos los datos</h2>
                    <br><h2>R&M es una compañía especializada en la prestación de soluciones logísticas dentro de los procesos 
                        de la cadena de abastecimiento, en tal sentido recopila, almacena, utiliza y realiza actividades 
                        relacionadas con el tratamiento de datos personales en desarrollo de las siguientes labores: </h2>
                        <br><p>° Para fines comerciales; de servicio, mercadeo, y operacional</p>
                        <br><p>° Suministrar reporte de todas aquellas novedades que sucedan durante el servicio</p>
                        <br><p>° Cumplimiento de obligaciones derivadas de contratos laborales y comerciales. </p>
                        <br><p>° Para fines legales</p>
                        <br><p>° Adopción de medidas de control y seguridad</p>
                        <br><p>° Cumplimiento de obligaciones relacionadas con la ejecución del objeto social de la compañía.</p>
                        <br><p>° Gestionar solicitudes y servicios de atención al cliente</p>
                <br><h2>En nuestros canales para la atención del cliente, éste podrá realizar: </h2>
                    <br><h2>Consultas</h2>
                        <p>Las cuáles serán atendidas en un término máximo de diez (10) días hábiles contados a partir de la fecha de su recibo, cuando no 
                        fuere posible atender la consulta dentro de dicho termino, se informará al interesado antes del vencimiento de los 10 días, 
                        expresando los motivos de la demora y señalando la fecha en que se atenderá dicha consulta.</p>
                <br><h2>Reclamos y Petición de Actualización y/o Rectificación</h2>
                        <p>El titular que consideren que la información contenida debe ser objeto de corrección, actualización o supresión, debe ser dirigida 
                        con la identificación del titular, la descripción de los hechos que dan lugar al reclamo; si el reclamo resulta incompleto, se
                        requerirá al interesado dentro de los cinco (5) días siguientes a la recepción del reclamo para que subsane las fallas. Transcurridos
                        dos (2) meses desde la fecha del requerimiento, sin que el solicitante presente la información requerida, se entenderá que ha 
                        desistido del reclamo; una vez recibido el reclamo completo, este se catalogara con una etiqueta "reclamo en trámite" y el motivo de 
                        este, en un término no mayor a dos (2) días hábiles. Dicha etiqueta se mantendrá hasta que el reclamo sea decidido. El término máximo 
                        para atender el reclamo será de quince (15) días hábiles contados a partir del día siguiente a la fecha de su recibo; en caso de que 
                        no fuere posible atender el reclamo dentro de dicho termino, se informara al interesado los motivos de la demora y la fecha en que éste 
                        se atenderá, la cual en ningún caso podrá superar ocho (8) días hábiles siguientes al vencimiento del primer término. </p>
                    <br><h2>Petición de supresión de datos</h2>
                <br><h2>El titular tiene derecho de solicitar la eliminación de la información en los siguientes eventos: </h2>
                        <br><p>° Si considera que no están siendo tratados conforme a los deberes y obligaciones previstos.</p>
                        <br><p>° Cuando hayan dejado de ser necesarios para la finalidad de su naturaleza</p>
                        <br><p>° Cuando se haya superado el periodo necesario para el cumplimiento de sus fines</p>
                    <br><h2>Esta supresión implica la eliminación total o parcial de la información; Sin embargo, este 
                        derecho del titular no es absoluto y en consecuencia R&M podrá negar el ejercicio de este cuando:</h2> 
                        <br><p>° El titular tenga un deber legal o contractual de permanecer en la base de datos.</p>
                        <br><p>° Obstaculice procesos judiciales o administrativas</p>
                        <p>Las consultas/reclamos y peticiones podrán formularse al correo nvalencia@remesaymensajes.com o a nuestro site 
                        http://remesasymensajes.com/contactos. </p>
                    <br><h2>Vigencia</h2>
                        <p>La presente política de tratamiento de datos personales rige a partir de su publicación y se 
                        mantendrá vigente mientras resulte necesario para el desarrollo de las finalidades establecidas.</p>
                </div>
                <div class="contenido-w" id="contenido-w6">
                    <br><h2>Autorización para el Tratamiento de Datos Personales</h>
                    <br><h2> (Clientes – Proveedores) </h2>
                        <p>Por medio del presente documento, otorgo mi consentimiento previo, expreso e informado, a R&M para la recolección, almacenamiento, 
                        uso, circulación, transferencia o supresión de la información suministrada y toda aquella información adicional a la cual llegare a 
                        tener acceso en desarrollo de la relación bien sea comercial, laboral, contractual o legal.Declaro que, en cumplimiento en la 
                        normatividad de protección de datos personales, fui informado de las finalidades, y usos que tendrán mis datos personales, derechos y 
                        los canales de comunicación para: </p>
                        <br><p>° Efectuar gestiones pertinentes para el desarrollo de las distintas etapas contractuales con R&M y terceros que contraten con él, 
                        en desarrollo de los servicios ofrecidos y/o en desarrollo de cualquier relación comercial que tengan. </p>
                        <br><p>° Para fines comerciales, de servicio al cliente, acreditación y actualización; es decir, para todas aquellas actividades asociadas 
                        a la relación comercial o vinculo existente con R&M o terceros que contraten. </p>
                        <br><p>° Gestionar consultas, solicitudes, quejas y reclamos a través de nuestro canal web site http://www.remesasymensajes.com/contactenos 
                        para la atención al público o en el Email nvalencia@remesaymensajes.com</p>
                        <br><p>° Suministrar información y reporte de todas aquellas novedades o eventualidades que sucedan durante los servicios contratados. </p>
                        <br><p>° Dar a conocer y/o transmitir mis datos personales dentro del país a cualquier empresa o tercero como consecuencia de contrato o 
                        vínculo que lo requiera para el cumplimiento de sus finalidades. </p>
                        <br><p>° Crear bases de datos para los fines descritos en la política de tratamiento de datos. </p>
                        <p>Así mismo, declaro que R&M me dio a conocer las finalidades para las cuales serán tratados mis datos personales, dando claridad y 
                        mayor énfasis en mi libertad de suministrar o no mi información y por lo tanto autorizar en aquellos casos en los que mis datos revisten 
                        la calidad de datos sensibles, R&M, adoptara medidas adicionales para: </p>
                        <br><p>° Reforzar el cumplimiento de los principios que regulan el tratamiento de la información personal. </p>
                        <br><p>° Ninguna actividad se condicione al suministro de datos personales sensibles</p>
                        <br><p>° Obtener autorización expresa de los titulares, antes de la ejecución de las actividades. </p>
                    <br><h2>Por lo tanto, autorizo bajo mi consentimiento tratar mi información personal de acuerdo con la política de tratamiento de datos personales de R&M. </h2>
                        <a href="static/pdf/TyC Remesas y Mensajes.pdf" download class="descarga"><ion-icon name="download-outline"></ion-icon> Descargar PDF</a>
                </div>
            </div>
        `,
        backgroundImage: 'url(static/img/fondos/creciente.webp)'
    },
};