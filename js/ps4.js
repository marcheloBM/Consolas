const ps4Apps = [
  // Actualizar o Reinstalar PS4
  {
    console: "PS4",
    name: "Actualizar o Reinstalar PS4",
    image: "img/PS4/update-ps4.jpg",

    description:
      "Guía para actualizar o reinstalar el software del sistema de PlayStation 4 mediante USB y Modo Seguro.",

    website: "https://www.playstation.com/",

    downloads: [
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/aUxD0L4L#la4NaqIURDRFvgnMHtIlbw",
      },
      {
        name: "Web No Oficial",
        url: "https://darthsternie.net/ps4-firmwares/",
      },
    ],

    guide: {
      function:
        "Permite actualizar o reinstalar el firmware de PlayStation 4 usando un dispositivo USB.",

      compatibility: {
        PS4: "✅ Compatible",
        USB: "✅ exFAT",
        OFW: "✅ Compatible",
      },

      requirements: [
        "PlayStation 4",
        "USB en formato exFAT",
        "Archivo PS4UPDATE.PUP",
      ],

      installation: [
        "Descargar el firmware.",
        "Preparar el USB.",
        "Copiar el archivo PS4UPDATE.PUP.",
        "Entrar al Modo Seguro.",
      ],

      usage:
        "Permite actualizar el sistema o reinstalar completamente el software de PlayStation 4.",

      notes:
        "La reinstalación elimina el contenido almacenado en la consola, mientras que la actualización mantiene los datos del usuario si el sistema funciona correctamente.",

      version: "Tutorial",
      author: "MarcheBMPC",

      details: [
        {
          title: "Requisitos",
          description: "Material necesario.",

          items: ["USB exFAT.", "PS4UPDATE.PUP.", "PlayStation 4."],
        },

        {
          title: "Preparar USB",
          description: "Estructura correcta.",

          items: ["PS4", "UPDATE", "PS4UPDATE.PUP"],
        },

        {
          title: "Modo Seguro",
          description: "Acceso al Recovery Mode.",

          items: [
            "Apagar la consola.",
            "Mantener presionado POWER.",
            "Escuchar el segundo pitido.",
            "Conectar mando por USB.",
          ],
        },

        {
          title: "Actualizar Sistema",
          description: "Mantener instalación actual.",

          items: [
            "Seleccionar opción 3.",
            "Actualizar software del sistema.",
            "Detectar USB.",
            "Seguir instrucciones.",
          ],
        },

        {
          title: "Reinstalar Sistema",
          description: "Instalación limpia.",

          items: [
            "Seleccionar opción 7.",
            "Reinstalar software del sistema.",
            "Detectar PS4UPDATE.PUP.",
            "Esperar finalización.",
          ],
        },

        {
          title: "Archivo PUP",
          description: "Firmware utilizado.",

          items: [
            "PS4UPDATE.PUP",
            "Versión de actualización.",
            "Versión de reinstalación.",
          ],
        },

        {
          title: "Cuándo utilizarlo",
          description: "Casos recomendados.",

          items: [
            "Error de sistema.",
            "Disco duro reemplazado.",
            "Consola bloqueada.",
            "Actualizar firmware.",
          ],
        },

        {
          title: "Ventajas",
          description: "Beneficios principales.",

          items: [
            "Instalación limpia.",
            "Recuperación del sistema.",
            "Actualización manual.",
            "Compatible con todas las PS4.",
          ],
        },

        {
          title: "Tutoriales Relacionados",
          description: "Guías recomendadas.",

          items: [
            "Modo Seguro PS4",
            "Instalar GoldHEN",
            "PS4 Xplorer",
            "Homebrew Store",
          ],
        },
      ],
    },
  },
  // Liberar PS4
  {
    console: "PS4",
    name: "Liberar PS4",
    image: "img/PS4/liberar-ps4.jpg",

    description:
      "Guía para utilizar el exploit compatible con PlayStation 4 y ejecutar GoldHEN en versiones soportadas del sistema.",

    website: null,

    downloads: [
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/KY4hAISY#S3eo7XFGwx1HYH3fAVYyBw",
      },
    ],

    guide: {
      function:
        "Permite cargar GoldHEN y habilitar funciones homebrew en consolas PS4 compatibles.",

      compatibility: {
        5.05: "✅ Compatible",
        6.72: "✅ Compatible",
        "7.00": "✅ Compatible",
        7.02: "✅ Compatible",
        "7.50": "✅ Compatible",
        7.51: "✅ Compatible",
        7.55: "✅ Compatible",
        "9.00": "✅ Compatible",
        "11.00": "✅ Compatible",
      },

      requirements: [
        "PlayStation 4 compatible",
        "Conexión a Internet",
        "USB exFAT (según versión)",
        "GoldHEN",
      ],

      installation: [
        "Comprobar la versión del sistema.",
        "Configurar el acceso al host.",
        "Ejecutar el exploit compatible.",
        "Cargar GoldHEN.",
      ],

      usage:
        "Permite cargar GoldHEN desde un host compatible utilizando el navegador de PS4.",

      notes:
        "Si la consola utiliza una versión no compatible será necesario actualizar manualmente a una versión soportada antes de continuar.",

      version: "Tutorial",
      author: "MarcheBMPC",

      details: [
        {
          title: "Versiones Compatibles",
          description: "Firmwares soportados.",
          items: [
            "5.05",
            "6.72",
            "7.00",
            "7.02",
            "7.50",
            "7.51",
            "7.55",
            "9.00",
            "11.00",
          ],
        },

        {
          title: "Comprobar Firmware",
          description: "Verificar versión instalada.",
          items: [
            "Ajustes.",
            "Sistema.",
            "Información del sistema.",
            "Revisar versión actual.",
          ],
        },

        {
          title: "Preparar la Consola",
          description: "Evitar actualizaciones automáticas.",
          items: [
            "Conectar Internet.",
            "Cancelar descargas automáticas.",
            "Deshabilitar actualizaciones.",
            "Preparar el exploit.",
          ],
        },

        {
          title: "Disable Updates",
          description: "Bloquear actualizaciones automáticas.",
          items: [
            "Abrir host compatible.",
            "Buscar Payloads.",
            "Ejecutar Disable Updates.",
            "Confirmar el bloqueo.",
          ],
        },

        {
          title: "Cargar GoldHEN",
          description: "Activar el exploit.",
          items: [
            "Abrir navegador.",
            "Entrar al host compatible.",
            "Seleccionar firmware.",
            "Ejecutar GoldHEN.",
          ],
        },

        {
          title: "Resultado",
          description: "Funciones habilitadas.",
          items: ["Homebrew.", "FPKG.", "FTP.", "Debug Settings."],
        },

        {
          title: "USB 9.00",
          description: "Uso recomendado para firmware 9.00.",
          items: [
            "Preparar USB.",
            "Conectar cuando se solicite.",
            "Esperar la carga.",
            "Retirar cuando finalice.",
          ],
        },

        {
          title: "Ventajas",
          description: "Funciones desbloqueadas.",
          items: [
            "Ejecución de Homebrew.",
            "Instalación FPKG.",
            "Servidor FTP.",
            "Herramientas avanzadas.",
          ],
        },

        {
          title: "Aplicaciones Relacionadas",
          description: "Primeras herramientas recomendadas.",

          items: [
            "GoldHEN",
            "Homebrew Store",
            "PS4 Xplorer",
            "ItemzFlow",
            "Apollo Save Tool",
          ],
        },
      ],
    },
  },
  // Payloads
  {
    console: "PS4",
    name: "Payloads PS4",
    image: "img/PS4/payloads.jpg",

    description:
      "Colección de payloads para PlayStation 4 que permiten ampliar funciones de GoldHEN y ejecutar herramientas adicionales mediante USB o red local.",

      website: null,

    downloads: [
      {
        name: "Mirror MEGA",
        url: "https://mega.nz/folder/fRQD0R5a#lCwqyEbY_kqLH__o8X_iNg",
      },
    ],

    guide: {
      function:
        "Permite cargar payloads adicionales en PlayStation 4 utilizando Payload Guest, USB o aplicaciones de PC.",

      compatibility: {
        GoldHEN: "✅ Compatible",
        5.05: "✅ Compatible",
        6.72: "✅ Compatible",
        7.02: "✅ Compatible",
        7.55: "✅ Compatible",
        "9.00": "✅ Compatible",
      },

      requirements: [
        "PlayStation 4 con GoldHEN",
        "USB en formato exFAT",
        "Payload Guest",
        "Payload compatible",
      ],

      installation: [
        "Instalar Payload Guest.pkg.",
        "Copiar los payloads compatibles.",
        "Preparar el USB.",
        "Habilitar BinLoader.",
      ],

      usage:
        "Permite ejecutar payloads desde USB o enviarlos desde un ordenador mediante la red local.",

      notes:
        "Los payloads deben coincidir con el firmware utilizado por la consola.",

      version: "Actual",
      author: "PS4 Scene",

      details: [
        {
          title: "¿Qué son los Payloads?",
          description: "Funciones adicionales para PS4.",

          items: [
            "Cargas útiles.",
            "Funciones avanzadas.",
            "Herramientas adicionales.",
            "Integración con GoldHEN.",
          ],
        },

        {
          title: "Payload Guest",
          description: "Aplicación para PS4.",

          items: [
            "Instalar PKG.",
            "Ejecutar payloads localmente.",
            "Compatible con USB.",
            "Interfaz sencilla.",
          ],
        },

        {
          title: "Preparar USB",
          description: "Ubicación de payloads.",

          items: [
            "/payloads",
            "Copiar archivos compatibles.",
            "Mantener estructura original.",
            "Conectar a PS4.",
          ],
        },

        {
          title: "Ruta Interna",
          description: "Alternativa desde la consola.",

          items: [
            "/data/payloads",
            "Compatible con Payload Guest.",
            "Acceso desde almacenamiento interno.",
          ],
        },

        {
          title: "GoldHEN",
          description: "Configuración necesaria.",

          items: [
            "Abrir menú GoldHEN.",
            "Activar Enable BinLoader Server.",
            "Verificar puerto activo.",
            "Preparar recepción.",
          ],
        },

        {
          title: "Enviar desde PC",
          description: "Uso mediante red local.",

          items: [
            "Introducir IP de la consola.",
            "Puerto 9090.",
            "Seleccionar payload.",
            "Enviar a PS4.",
          ],
        },

        {
          title: "Aplicaciones PC",
          description: "Herramientas compatibles.",

          items: [
            "PS4 Payload Injector.",
            "NetCat GUI.",
            "BinLoader.",
            "Herramientas de red.",
          ],
        },

        {
          title: "Ventajas",
          description: "Beneficios principales.",

          items: [
            "Mayor funcionalidad.",
            "Compatible con GoldHEN.",
            "Uso por USB o red.",
            "Fácil administración.",
          ],
        },

        {
          title: "Aplicaciones Relacionadas",
          description: "Complementos recomendados.",

          items: [
            "GoldHEN",
            "Homebrew Store",
            "PS4 Xplorer",
            "ItemzFlow",
            "FTP Server",
          ],
        },
      ],
    },
  },
  // LogMeIn Hamachi
  {
  console: "PS4",
  name: "LogMeIn Hamachi (Unofficial)",
  image: "img/PS4/logmein-hamachi.jpg",

  description:
    "Aplicación para PlayStation 4 orientada a crear redes virtuales entre consolas y facilitar sesiones multijugador compatibles.",

  website: "https://github.com/sleirsgoevy/ps4-hamachi",
  
  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/zMwHBZxR#vjKEhTAs4Bu0b5sYyY_9Hg",
    },
    {
      name: "Github Releases",
      url: "https://github.com/sleirsgoevy/ps4-hamachi/releases",
    },
  ],

  guide: {
    function:
      "Permite crear o unirse a redes virtuales desde PS4 para realizar pruebas y conexiones multijugador compatibles.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      LAN: "✅ Compatible",
      Online: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "LogMeIn Hamachi (Unofficial)",
      "Juego compatible",
      "Misma versión del juego",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar la aplicación.",
    ],

    usage:
      "Una consola crea una red y los demás jugadores se conectan utilizando el nombre y contraseña configurados.",

    notes:
      "Para evitar problemas de compatibilidad todos los participantes deben utilizar la misma versión y actualización del juego.",

    version: "Unofficial",
    author: "PS4 Scene",

    details: [
      {
        title: "Instalación",
        description:
          "Instalar como cualquier FPKG.",

        items: [
          "GoldHEN.",
          "Debug Settings.",
          "Package Installer.",
          "Seleccionar PKG.",
          "Instalar aplicación.",
        ],
      },

      {
        title: "Crear Servidor",
        description:
          "Configurar la consola anfitriona.",

        items: [
          "Abrir LogMeIn Hamachi.",
          "Presionar TRIÁNGULO.",
          "Crear nueva red.",
          "Elegir nombre.",
          "Elegir contraseña.",
        ],
      },

      {
        title: "Conectar Clientes",
        description:
          "Unirse a una red existente.",

        items: [
          "Abrir aplicación.",
          "Presionar CUADRADO.",
          "Introducir nombre de red.",
          "Introducir contraseña.",
          "Conectarse al servidor.",
        ],
      },

      {
        title: "Partidas Multijugador",
        description:
          "Configuración recomendada.",

        items: [
          "Mismo juego.",
          "Misma ID.",
          "Misma actualización.",
          "Misma región recomendada.",
        ],
      },

      {
        title: "Consola Servidor",
        description:
          "Funciones del anfitrión.",

        items: [
          "Crear red.",
          "Iniciar juego.",
          "Crear partida.",
          "Esperar jugadores.",
        ],
      },

      {
        title: "Consolas Cliente",
        description:
          "Funciones de los invitados.",

        items: [
          "Conectarse a la red.",
          "Abrir el mismo juego.",
          "Buscar partida.",
          "Unirse al servidor.",
        ],
      },

      {
        title: "Compatibilidad",
        description:
          "Aspectos importantes.",

        items: [
          "Requiere GoldHEN.",
          "Compatible con FPKG.",
          "Dependiente del juego.",
          "Uso mediante red virtual.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Configuración sencilla.",
          "Multijugador entre consolas.",
          "No requiere PC durante la partida.",
          "Compatible con GoldHEN.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "GoldHEN",
          "Payloads PS4",
          "Homebrew Store",
          "PS4 Xplorer",
          "ItemzFlow",
        ],
      },
    ],
  },
},
// Icon Mask
{
  console: "PS4",
  name: "Icon Mask",
  image: "img/PS4/icon-mask.jpg",

  description:
    "Aplicación homebrew para PlayStation 4 que permite cambiar la apariencia de los iconos del menú utilizando máscaras e iconos personalizados.",

  website: "https://pkg-zone.com/details/LAPY20007",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/jJZSya4a#5ZubB9DvA9nxWsOe8rT9tQ",
    },
  ],

  guide: {
    function:
      "Permite personalizar los iconos del menú principal de PS4 mediante máscaras e imágenes personalizadas.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      Personalizacion: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "USB exFAT",
      "Icon Mask",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar Icon Mask.",
    ],

    usage:
      "Permite cambiar máscaras e iconos de aplicaciones directamente desde la consola.",

    notes:
      "Los iconos personalizados deben tener una resolución de 512x512 píxeles.",

    version: "Actual",
    author: "PS4 Scene",

    details: [
      {
        title: "¿Qué es Icon Mask?",
        description:
          "Herramienta de personalización visual.",

        items: [
          "Cambiar iconos.",
          "Aplicar máscaras.",
          "Personalizar el menú.",
          "Compatible con GoldHEN.",
        ],
      },

      {
        title: "Instalación",
        description:
          "Instalación del PKG.",

        items: [
          "GoldHEN.",
          "Debug Settings.",
          "Package Installer.",
          "Instalar aplicación.",
        ],
      },

      {
        title: "Máscaras Incluidas",
        description:
          "Cambiar el estilo general.",

        items: [
          "Múltiples diseños.",
          "Aplicación inmediata.",
          "Vista previa.",
          "Selección rápida.",
        ],
      },

      {
        title: "Carpeta ICON",
        description:
          "Agregar diseños personalizados.",

        items: [
          "Crear carpeta ICON.",
          "Copiar imágenes PNG.",
          "Conectar USB.",
          "Detectar automáticamente.",
        ],
      },

      {
        title: "Cambiar Máscara",
        description:
          "Cambiar estilos disponibles.",

        items: [
          "Usar L1.",
          "Usar R1.",
          "Explorar diseños.",
          "Aplicar favorito.",
        ],
      },

      {
        title: "Iconos Personalizados",
        description:
          "Reemplazar iconos individuales.",

        items: [
          "Abrir Pre-made Icons.",
          "Seleccionar aplicación.",
          "Elegir nuevo icono.",
          "Aplicar cambios.",
        ],
      },

      {
        title: "Resolución Recomendada",
        description:
          "Formato compatible.",

        items: [
          "512x512 píxeles.",
          "Formato PNG.",
          "Imagen cuadrada.",
          "Buena calidad visual.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Personalización rápida.",
          "Interfaz sencilla.",
          "Compatible con GoldHEN.",
          "No modifica aplicaciones.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Más herramientas de personalización.",

        items: [
          "GoldHEN",
          "ItemzFlow",
          "PS4 Xplorer",
          "Homebrew Store",
        ],
      },
    ],
  },
},
// PS4 Temperature
{
  console: "PS4",
  name: "PS4 Temperature",
  image: "img/PS4/ps4-temperature.jpg",

  description:
    "Herramienta homebrew para PlayStation 4 que permite ajustar el comportamiento del ventilador y controlar los niveles de temperatura de la consola.",

  website: "https://pkg-zone.com/details/LAPY20006",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/7NQ2xA6a#0gIfp0YGgvnvtzxq5YKyhQ",
    },
  ],

  guide: {
    function:
      "Permite modificar los parámetros de temperatura utilizados para controlar la velocidad del ventilador.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      Temperatura: "✅ Compatible",
      Ventilador: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "USB exFAT",
      "PS4 Temperature",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar PS4 Temperature.",
    ],

    usage:
      "Permite ajustar los límites de temperatura utilizados por el sistema de control del ventilador.",

    notes:
      "Modificar estos valores requiere precaución. Es recomendable realizar cambios graduales y comprobar el comportamiento de la consola.",

    version: "Actual",
    author: "@Lapy",

    details: [
      {
        title: "Primer Inicio",
        description:
          "Configuración inicial.",

        items: [
          "Abrir PS4 Temperature.",
          "Seleccionar firmware.",
          "Guardar configuración inicial.",
          "Acceder al panel principal.",
        ],
      },

      {
        title: "Monitorización",
        description:
          "Control de temperatura.",

        items: [
          "Temperatura mínima.",
          "Temperatura máxima.",
          "Control del ventilador.",
          "Configuración personalizada.",
        ],
      },

      {
        title: "Velocidad del Ventilador",
        description:
          "Ajustes disponibles.",

        items: [
          "Control automático.",
          "Ajustes personalizados.",
          "Respuesta según temperatura.",
          "Mayor refrigeración.",
        ],
      },

      {
        title: "Configuración",
        description:
          "Personalización del comportamiento térmico.",

        items: [
          "Modificar límites.",
          "Guardar cambios.",
          "Aplicar configuración.",
          "Realizar pruebas.",
        ],
      },

      {
        title: "Precaución",
        description:
          "Uso recomendado.",

        items: [
          "Realizar cambios graduales.",
          "Comprobar estabilidad.",
          "Evitar configuraciones extremas.",
          "Supervisar temperaturas.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Mayor control térmico.",
          "Interfaz sencilla.",
          "Compatible con GoldHEN.",
          "Configuración flexible.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "GoldHEN",
          "ItemzFlow",
          "PS4 Xplorer",
          "Payloads PS4",
          "Homebrew Store",
        ],
      },

      {
        title: "Recomendado Para",
        description:
          "Casos habituales.",

        items: [
          "PS4 FAT.",
          "Consolas con varios años de uso.",
          "Sesiones largas de juego.",
          "Usuarios que desean supervisar la temperatura.",
        ],
      },
    ],
  },
},
// Patch Installer
{
  console: "PS4",
  name: "Patch Installer",
  image: "img/PS4/patch-installer.jpg",

  description:
    "Homebrew para PlayStation 4 que permite instalar, actualizar y gestionar parches de juegos directamente desde la consola.",

  website: "https://orbispatches.com/",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/GYwV1D6L#WWJ-8tUC4wf7wmii4sxr7w",
    },
  ],

  guide: {
    function:
      "Permite descargar e instalar actualizaciones de juegos directamente desde PS4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      JuegosFisicos: "✅ Compatible",
      Parches: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "Conexión a Internet",
      "Patch Installer",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar Patch Installer.",
    ],

    usage:
      "Busca las actualizaciones disponibles para juegos instalados y permite descargarlas directamente.",

    notes:
      "Ideal para mantener actualizados los juegos compatibles sin utilizar un ordenador.",

    version: "Actual",
    author: "PS4 Scene",

    details: [
      {
        title: "¿Qué es Patch Installer?",
        description:
          "Administrador de actualizaciones.",

        items: [
          "Buscar parches.",
          "Actualizar juegos.",
          "Instalación automática.",
          "Interfaz sencilla.",
        ],
      },

      {
        title: "Detección de Juegos",
        description:
          "Exploración automática.",

        items: [
          "Detectar juegos instalados.",
          "Mostrar títulos compatibles.",
          "Listar actualizaciones disponibles.",
        ],
      },

      {
        title: "Seleccionar Patch",
        description:
          "Elegir actualización.",

        items: [
          "Seleccionar juego.",
          "Ver versiones disponibles.",
          "Elegir actualización.",
          "Confirmar descarga.",
        ],
      },

      {
        title: "Instalación",
        description:
          "Proceso automatizado.",

        items: [
          "Descargar parche.",
          "Validar archivos.",
          "Instalar actualización.",
          "Finalizar proceso.",
        ],
      },

      {
        title: "Actualizaciones",
        description:
          "Versiones disponibles.",

        items: [
          "Versiones anteriores.",
          "Versiones recientes.",
          "Selección manual.",
          "Gestión sencilla.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "No requiere PC.",
          "Actualización rápida.",
          "Fácil utilización.",
          "Compatible con GoldHEN.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "GoldHEN",
          "ItemzFlow",
          "PS4 Xplorer",
          "Homebrew Store",
          "Payloads PS4",
        ],
      },
    ],
  },
},
// Apollo Save Tool PS4
{
  console: "PS4",
  name: "Apollo Save Tool PS4",
  image: "img/PS4/apollo-save-tool.jpg",

  description:
    "Administrador de partidas guardadas, trofeos y licencias para PlayStation 4 con soporte para datos de PS1, PS2 y PS4.",

  website: "https://github.com/bucanero/apollo-ps4",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/SQoCgZYa#5ewTMuQiPFuQuiZP-mdgBw",
    },
    {
      name: "Github Releases",
      url: "https://github.com/bucanero/apollo-ps4/releases",
    },
  ],

  guide: {
    function:
      "Permite importar, exportar y administrar archivos de guardado, tarjetas virtuales y datos compatibles desde USB o almacenamiento interno.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      PS2: "✅ Compatible",
      PS1: "✅ Compatible",
      USB: "✅ ExFAT",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "USB ExFAT",
      "Apollo Save Tool",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar Apollo Save Tool.",
    ],

    usage:
      "Permite gestionar partidas guardadas desde USB, disco interno o almacenamiento externo.",

    notes:
      "Compatible con múltiples formatos de guardado y tarjetas de memoria virtual.",

    version: "Actual",
    author: "bucanero",

    details: [
      {
        title: "Partidas PS4",
        description:
          "Gestión de guardados PlayStation 4.",

        items: [
          "Importar partidas.",
          "Exportar partidas.",
          "Guardar en USB.",
          "Gestionar datos guardados.",
        ],
      },

      {
        title: "Partidas PS2",
        description:
          "Compatibilidad con memory cards.",

        items: [
          "*.xps",
          "*.max",
          "*.psu",
          "*.cbs",
          "*.psv",
          "*.sps",
        ],
      },

      {
        title: "Partidas PS1",
        description:
          "Compatibilidad con memory cards clásicas.",

        items: [
          "*.mcs",
          "*.psx",
          "*.ps1",
          "*.mcb",
          "*.psv",
          "*.pda",
        ],
      },

      {
        title: "Tarjetas Virtuales",
        description:
          "Soporte para VMC.",

        items: [
          "PS1 VMC",
          "PS2 VMC",
          "*.vmc",
          "*.bin",
          "*.card",
        ],
      },

      {
        title: "USB",
        description:
          "Ubicaciones compatibles.",

        items: [
          "PS4/APOLLO",
          "PS4/SAVEDATA",
          "PS2/SAVEDATA",
          "PS1/SAVEDATA",
        ],
      },

      {
        title: "Almacenamiento Externo",
        description:
          "Compatibilidad con HDD.",

        items: [
          "/data/fakeusb/",
          "PS1",
          "PS2",
          "PS4",
          "VMC",
        ],
      },

      {
        title: "Herramientas",
        description:
          "Funciones principales.",

        items: [
          "Administrar partidas.",
          "Gestionar trofeos.",
          "Importar guardados.",
          "Exportar guardados.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Compatible con PS1.",
          "Compatible con PS2.",
          "Compatible con PS4.",
          "Gestión desde USB.",
          "Interfaz sencilla.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "GoldHEN",
          "PS4 Xplorer",
          "ItemzFlow",
          "Homebrew Store",
          "Patch Installer",
        ],
      },
    ],
  },
},
// PS4 Toolset
{
  console: "PS4",
  name: "PS4 Toolset",
  image: "img/PS4/ps4-toolset.jpg",

  description:
    "Herramienta de mantenimiento para PlayStation 4 que permite recuperar juegos perdidos del menú y crear o restaurar copias de seguridad.",

  website: "https://pkg-zone.com/details/SAAT29385",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/idQgwKhJ#moz8CqvVtYTsuwO6COK3DQ",
    },
  ],

  guide: {
    function:
      "Permite administrar copias de seguridad de la consola y recuperar juegos que no aparecen correctamente en la biblioteca.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      Backup: "✅ Compatible",
      Recovery: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "USB ExFAT",
      "PS4 Toolset",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar PS4 Toolset.",
    ],

    usage:
      "Permite crear copias de seguridad, restaurarlas posteriormente y recuperar juegos que hayan desaparecido del menú principal.",

    notes:
      "Después de realizar cambios se recomienda reiniciar la consola para refrescar correctamente la base de datos y el menú.",

    version: "Actual",
    author: "PS4 Scene",

    details: [
      {
        title: "Recover Lost Games",
        description:
          "Recuperar juegos desaparecidos.",

        items: [
          "Detectar juegos no visibles.",
          "Reconstruir registros.",
          "Restaurar accesos.",
          "Requiere reinicio posterior.",
        ],
      },

      {
        title: "Backup Manager",
        description:
          "Gestión de copias de seguridad.",

        items: [
          "Crear backup.",
          "Restaurar backup.",
          "Administrar copias.",
          "Protección de datos.",
        ],
      },

      {
        title: "Crear Backup",
        description:
          "Generar una nueva copia.",

        items: [
          "Abrir Backup Manager.",
          "Crear nueva copia.",
          "Esperar proceso.",
          "Guardar respaldo.",
        ],
      },

      {
        title: "Restaurar Backup",
        description:
          "Recuperar una copia previa.",

        items: [
          "Seleccionar respaldo.",
          "Iniciar restauración.",
          "Aplicar cambios.",
          "Reiniciar consola.",
        ],
      },

      {
        title: "Mantenimiento",
        description:
          "Herramientas integradas.",

        items: [
          "Recuperación de juegos.",
          "Gestión de respaldos.",
          "Corrección de biblioteca.",
          "Mantenimiento básico.",
        ],
      },

      {
        title: "Cuándo utilizarlo",
        description:
          "Situaciones recomendadas.",

        items: [
          "Juegos desaparecidos.",
          "Errores en biblioteca.",
          "Antes de modificaciones.",
          "Creación de respaldos.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Interfaz sencilla.",
          "Restauración rápida.",
          "Compatible con GoldHEN.",
          "Protección de datos.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "GoldHEN",
          "Apollo Save Tool",
          "PS4 Xplorer",
          "Patch Installer",
          "ItemzFlow",
        ],
      },
    ],
  },  
},
// Homebrew Store
{
  console: "PS4",
  name: "Homebrew Store",
  image: "img/PS4/homebrew-store.jpg",

  description:
    "Tienda homebrew para PlayStation 4 que permite descargar aplicaciones directamente desde la consola mediante el catálogo de pkg-zone.",

  website: "https://github.com/LightningMods/PS4-Store",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/eJpSwCKD#KbFKaDHlWpYf71vIf7sXYw",
    },
    {
      name: "Github Releases",
      url: "https://github.com/LightningMods/PS4-Store/releases",
    },
  ],

  guide: {
    function:
      "Permite buscar, descargar e instalar aplicaciones homebrew directamente desde la PlayStation 4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      Internet: "✅ Requerido",
      Homebrew: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "Conexión a Internet",
      "Homebrew Store",
    ],

    installation: [
      "Instalar el PKG desde USB.",
      "O instalar directamente desde pkg-zone.",
      "Abrir Homebrew Store.",
      "Explorar el catálogo disponible.",
    ],

    usage:
      "Permite descargar aplicaciones y utilidades homebrew directamente desde la consola sin utilizar ordenador.",

    notes:
      "Se requiere conexión a Internet para acceder al catálogo y descargar contenido.",

    version: "Store-R2",
    author: "pkg-zone",

    details: [
      {
        title: "¿Qué es Homebrew Store?",
        description:
          "Tienda de aplicaciones para PS4.",

        items: [
          "Descargas directas.",
          "Catálogo homebrew.",
          "Actualizaciones rápidas.",
          "Interfaz sencilla.",
        ],
      },

      {
        title: "Instalación Directa",
        description:
          "Método alternativo.",

        items: [
          "Abrir navegador PS4.",
          "Visitar pkg-zone.",
          "Instalar Homebrew Store.",
          "Esperar instalación.",
        ],
      },

      {
        title: "Catálogo",
        description:
          "Contenido disponible.",

        items: [
          "Aplicaciones.",
          "Herramientas.",
          "Utilidades.",
          "Homebrew.",
        ],
      },

      {
        title: "Descargas",
        description:
          "Obtención de aplicaciones.",

        items: [
          "Seleccionar aplicación.",
          "Ver información.",
          "Descargar.",
          "Instalar automáticamente.",
        ],
      },

      {
        title: "Actualizaciones",
        description:
          "Mantener aplicaciones al día.",

        items: [
          "Actualizar herramientas.",
          "Nuevas versiones.",
          "Acceso rápido.",
          "Gestión sencilla.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "No requiere PC.",
          "Instalación sencilla.",
          "Catálogo centralizado.",
          "Compatible con GoldHEN.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Aplicaciones recomendadas.",

        items: [
          "GoldHEN",
          "Apollo Save Tool",
          "PS4 Xplorer",
          "Patch Installer",
          "ItemzFlow",
        ],
      },
    ],
  },
},
// Remote PKG Installer
{
  console: "PS4",
  name: "Remote PKG Installer",
  image: "img/PS4/remote-pkg-installer.jpg",

  description:
    "Herramienta para PlayStation 4 que permite instalar archivos PKG desde un ordenador mediante la red local.",

  website: "https://github.com/BenjaminFaal/ps4-remote-pkg-installer",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/LYhzEZzb#B4QXmRT4kgjouEiVtccQOw",
    },
    {
      name: "Github Releases",
      url: "https://github.com/BenjaminFaal/ps4-remote-pkg-installer/releases",
    },
  ],

  guide: {
    function:
      "Permite enviar e instalar paquetes PKG desde un PC a una PlayStation 4 utilizando la red local.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      LAN: "✅ Compatible",
      WiFi: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "Remote PKG Installer",
      "PC conectado a la misma red",
      "Archivos PKG",
    ],

    installation: [
      "Instalar Remote PKG Installer en PS4.",
      "Instalar la utilidad para PC.",
      "Conectar ambos dispositivos a la misma red.",
      "Obtener la dirección IP de la consola.",
    ],

    usage:
      "Permite seleccionar archivos PKG desde el ordenador y enviarlos directamente a la consola para su instalación.",

    notes:
      "Para una transferencia más estable se recomienda utilizar conexión LAN cuando sea posible.",

    version: "Actual",
    author: "PS4 Scene",

    details: [
      {
        title: "¿Qué es?",
        description:
          "Instalación remota de PKG.",

        items: [
          "Transferencia por red.",
          "Instalación remota.",
          "Compatible con LAN y Wi‑Fi.",
          "No requiere USB para cada instalación.",
        ],
      },

      {
        title: "Instalación PS4",
        description:
          "Preparar la consola.",

        items: [
          "GoldHEN.",
          "Debug Settings.",
          "Package Installer.",
          "Instalar Remote PKG Installer.",
        ],
      },

      {
        title: "Obtener IP",
        description:
          "Información de conexión.",

        items: [
          "Ajustes.",
          "Red.",
          "Ver estado de conexión.",
          "Anotar Dirección IP.",
        ],
      },

      {
        title: "Aplicación PC",
        description:
          "Conexión con la consola.",

        items: [
          "Abrir Remote PKG Installer PC.",
          "Introducir IP.",
          "Conectar.",
          "Verificar comunicación.",
        ],
      },

      {
        title: "Enviar PKG",
        description:
          "Transferencia de archivos.",

        items: [
          "Seleccionar archivos PKG.",
          "Iniciar transferencia.",
          "Esperar envío.",
          "Instalación automática.",
        ],
      },

      {
        title: "Conexión",
        description:
          "Requisitos recomendados.",

        items: [
          "Misma red local.",
          "Wi‑Fi compatible.",
          "LAN recomendada.",
          "Consola encendida.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "No requiere copiar al USB.",
          "Instalación sencilla.",
          "Transferencias rápidas.",
          "Ideal para PKG grandes.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "GoldHEN",
          "Homebrew Store",
          "PS4 Xplorer",
          "Patch Installer",
          "Apollo Save Tool",
        ],
      },
    ],
  },
},
// PS4 Xplorer
{
  console: "PS4",
  name: "PS4 Xplorer",
  image: "img/PS4/ps4-xplorer.jpg",

  description:
    "Explorador de archivos para PlayStation 4 que permite administrar carpetas, instalar PKG y acceder al sistema de archivos de la consola.",

  website: "https://pkg-zone.com/details/LAPY20009",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/XJAxgQwJ#gF6-LOj1zgtsFx_uLwYgNA",
    },
  ],

  guide: {
    function:
      "Permite explorar el almacenamiento interno y externo de la PS4, gestionar archivos y realizar operaciones básicas de administración.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      ExFAT: "✅ Compatible",
      PKG: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "USB ExFAT",
      "PS4 Xplorer",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar PS4 Xplorer.",
    ],

    usage:
      "Permite administrar archivos y carpetas directamente desde la consola sin necesidad de utilizar un ordenador.",

    notes:
      "Es una de las herramientas más utilizadas para gestionar archivos en sistemas PS4 modificados.",

    version: "Actual",
    author: "@Lapy",

    details: [
      {
        title: "Explorador de Archivos",
        description:
          "Funciones principales.",

        items: [
          "Navegar carpetas.",
          "Examinar dispositivos USB.",
          "Explorar almacenamiento interno.",
          "Acceso a directorios del sistema.",
        ],
      },

      {
        title: "Gestión de Archivos",
        description:
          "Operaciones disponibles.",

        items: [
          "Copiar.",
          "Pegar.",
          "Mover.",
          "Renombrar.",
          "Eliminar.",
        ],
      },

      {
        title: "Gestión de Carpetas",
        description:
          "Administración avanzada.",

        items: [
          "Crear carpetas.",
          "Renombrar carpetas.",
          "Eliminar directorios.",
          "Mover contenido.",
        ],
      },

      {
        title: "Instalación PKG",
        description:
          "Instalar aplicaciones desde la consola.",

        items: [
          "Detectar archivos PKG.",
          "Instalar aplicaciones.",
          "Instalar homebrew.",
          "Instalar actualizaciones.",
        ],
      },

      {
        title: "Acceso ROOT",
        description:
          "Exploración avanzada.",

        items: [
          "Acceso al sistema de archivos.",
          "Exploración de directorios.",
          "Visualización avanzada.",
          "Mantenimiento del sistema.",
        ],
      },

      {
        title: "USB ExFAT",
        description:
          "Compatibilidad de almacenamiento.",

        items: [
          "Dispositivos USB.",
          "Transferencia de archivos.",
          "Almacenamiento externo.",
          "Compatibilidad ExFAT.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Administrador de archivos completo.",
          "Instalación directa de PKG.",
          "Compatible con GoldHEN.",
          "Interfaz sencilla.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "GoldHEN",
          "Apollo Save Tool",
          "Homebrew Store",
          "Remote PKG Installer",
          "Patch Installer",
        ],
      },
    ],
  },
},
// GoldHEN Cheats Manager
{
  console: "PS4",
  name: "GoldHEN Cheats Manager",
  image: "img/PS4/goldhen-cheats-manager.jpg",

  description:
    "Administrador de cheats y parches para PlayStation 4 que permite descargar, actualizar y activar trucos compatibles con GoldHEN.",

  website: "https://github.com/GoldHEN/GoldHEN_Cheat_Manager",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/nU4iUC4D#pvdLCj25xIim_5T0_2A5kA",
    },
    {
      name: "Github Releases",
      url: "https://github.com/GoldHEN/GoldHEN_Cheat_Manager/releases",
    },
    {
      name: "GoldHEN CHEATS chronoss09",
      url: "https://github.com/chronoss09/GoldHen-Cheats-PKG/releases",
    },
    {
      name: "GoldCheats-Updater PC",
      url: "https://github.com/Nazky/GoldCheats-Updater/releases",
    },
    {
      name: "GoldHEN CHEATS BD",
      url: "https://github.com/kmeps4/PS4OfflineTrainer",
    },
    {
      name: "GoldHEN Patch Repository",
      url: "https://github.com/GoldHEN/GoldHEN_Patch_Repository",
    },
    {
      name: "GoldHEN Cheats PS2 PKG",
      url: "https://github.com/chronoss09/GoldHen-Cheats-PKG/releases",
    },
    {
      name: "GoldHEN Cheats Plugins",
      url: "https://github.com/GoldHEN/GoldHEN_Plugins_Repository/releases",
    },
  ],

  guide: {
    function:
      "Permite administrar bases de datos de cheats, parches y mejoras para juegos compatibles con GoldHEN.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      Cheats: "✅ Compatible",
      Patches: "✅ Compatible",
      PS2: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "GoldHEN Cheats Manager",
      "Conexión a Internet",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Instalar desde Package Installer.",
      "Abrir GoldHEN Cheats Manager.",
      "Actualizar la base de datos.",
    ],

    usage:
      "Permite descargar cheats, administrar parches y activar mejoras compatibles para distintos juegos.",

    notes:
      "La disponibilidad de cheats y parches depende del juego y de su versión instalada.",

    version: "Actual",
    author: "GoldHEN Community",

    details: [
      {
        title: "Base de Datos",
        description:
          "Actualización automática.",

        items: [
          "Descargar cheats.",
          "Actualizar contenido.",
          "Sincronizar base de datos.",
          "Mantener juegos actualizados.",
        ],
      },

      {
        title: "Cheats",
        description:
          "Trucos compatibles.",

        items: [
          "Listado de juegos.",
          "Activación rápida.",
          "Organización por Title ID.",
          "Base de datos integrada.",
        ],
      },

      {
        title: "Patches",
        description:
          "Mejoras y modificaciones.",

        items: [
          "Parches de rendimiento.",
          "Ajustes personalizados.",
          "Activación individual.",
          "Compatible con GoldHEN.",
        ],
      },

      {
        title: "Activación",
        description:
          "Uso dentro de los juegos.",

        items: [
          "Abrir juego compatible.",
          "Abrir menú GoldHEN.",
          "Seleccionar cheats.",
          "Activar opciones disponibles.",
        ],
      },

      {
        title: "Soporte PS2",
        description:
          "Compatibilidad adicional.",

        items: [
          "Cheats para juegos PS2.",
          "Base de datos dedicada.",
          "Instalación sencilla.",
          "Integración con GoldHEN.",
        ],
      },

      {
        title: "Actualización desde PC",
        description:
          "Método alternativo.",

        items: [
          "GoldCheats Updater.",
          "Actualizar bases de datos.",
          "Transferencia mediante IP.",
          "Gestión avanzada.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Actualización automática.",
          "Gran cantidad de juegos.",
          "Compatible con PS4 y PS2.",
          "Integración con GoldHEN.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "GoldHEN",
          "ItemzFlow",
          "Apollo Save Tool",
          "PS4 Xplorer",
          "Patch Installer",
        ],
      },
    ],
  },
},
// Orbis Toolbox
{
  console: "PS4",
  name: "Orbis Toolbox",
  image: "img/PS4/orbis-toolbox.jpg",

  description:
    "Herramienta avanzada para PlayStation 4 que añade configuraciones adicionales, información en pantalla y opciones de desarrollo integradas en el sistema.",

  website: "https://github.com/OSM-Made/Orbis-Toolbox",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/aEhDgCBZ#8zx9zvrUqLtqjDObjZAUaw",
    },
    {
      name: "Github Releases",
      url: "https://github.com/OSM-Made/Orbis-Toolbox/releases",
    },
  ],

  guide: {
    function:
      "Permite habilitar opciones avanzadas del sistema y mostrar información adicional durante el uso de la consola y los juegos.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      Overlay: "✅ Compatible",
      Debug: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 compatible",
      "Host con soporte para Orbis Toolbox",
      "GoldHEN",
    ],

    installation: [
      "Abrir el host compatible.",
      "Ejecutar Orbis Toolbox.",
      "Esperar la carga del payload.",
      "Revisar las nuevas opciones del sistema.",
    ],

    usage:
      "Después de cargar la herramienta aparecerá un nuevo apartado de configuración dentro de los ajustes de la consola.",

    notes:
      "Algunas funciones están orientadas a usuarios avanzados y pruebas de desarrollo.",

    version: "Actual",
    author: "Orbis Toolbox Team",

    details: [
      {
        title: "¿Qué es Orbis Toolbox?",
        description:
          "Herramienta avanzada para PS4.",

        items: [
          "Configuraciones adicionales.",
          "Opciones avanzadas.",
          "Información del sistema.",
          "Overlay para juegos.",
        ],
      },

      {
        title: "Carga del Payload",
        description:
          "Activación de la herramienta.",

        items: [
          "Abrir host compatible.",
          "Ejecutar Orbis Toolbox.",
          "Esperar notificación.",
          "Abrir Ajustes.",
        ],
      },

      {
        title: "Orbis Toolbox Settings",
        description:
          "Configuración principal.",

        items: [
          "Opciones avanzadas.",
          "Información del sistema.",
          "Configuraciones adicionales.",
          "Personalización de herramientas.",
        ],
      },

      {
        title: "Game Overlay",
        description:
          "Información dentro de los juegos.",

        items: [
          "Mostrar datos en pantalla.",
          "Información del juego.",
          "Acceso rápido.",
          "Monitoreo durante la partida.",
        ],
      },

      {
        title: "Información de Juegos",
        description:
          "Datos adicionales.",

        items: [
          "Title ID.",
          "Información del juego.",
          "Datos técnicos.",
          "Identificación rápida.",
        ],
      },

      {
        title: "Usuarios Avanzados",
        description:
          "Funciones recomendadas.",

        items: [
          "Pruebas de homebrew.",
          "Desarrollo.",
          "Diagnóstico.",
          "Configuraciones avanzadas.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Integración con el sistema.",
          "Información adicional.",
          "Opciones avanzadas.",
          "Compatible con GoldHEN.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "GoldHEN",
          "PS4 Toolset",
          "PS4 Temperature",
          "PS4 Xplorer",
          "ItemzFlow",
        ],
      },
    ],
  },
},
// Itemzflow Game Manager
{
  console: "PS4",
  name: "Itemzflow Game Manager",
  image: "img/PS4/itemzflow-game-manager.jpg",

  description:
    "Administrador de juegos para PlayStation 4 que permite visualizar bibliotecas, descargar carátulas, realizar copias de seguridad y acceder a funciones avanzadas para los juegos.",

  website: "https://github.com/LightningMods/Itemzflow",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/vRIUkByT#A0q5mbqyyOC9vSu_vsJyiQ",
    },
    {
      name: "Github Releases",
      url: "https://github.com/LightningMods/Itemzflow/releases",
    },
  ],

  guide: {
    function:
      "Permite administrar juegos instalados, descargar carátulas y acceder a herramientas avanzadas desde una interfaz visual moderna.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      FPKG: "✅ Compatible",
      USB: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "USB ExFAT",
      "Itemzflow Game Manager",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar Itemzflow.",
    ],

    usage:
      "Permite gestionar juegos instalados desde una interfaz visual similar a un launcher.",

    notes:
      "Al iniciar por primera vez puede descargar automáticamente las carátulas de los juegos detectados.",

    version: "Actual",
    author: "LightningMods",

    details: [
      {
        title: "Biblioteca de Juegos",
        description:
          "Visualización de contenido.",

        items: [
          "Juegos instalados.",
          "Carátulas automáticas.",
          "Información detallada.",
          "Navegación rápida.",
        ],
      },

      {
        title: "Descarga de Carátulas",
        description:
          "Personalización visual.",

        items: [
          "Carátulas automáticas.",
          "Biblioteca organizada.",
          "Mejor apariencia visual.",
          "Identificación rápida.",
        ],
      },

      {
        title: "Opciones Avanzadas",
        description:
          "Funciones adicionales.",

        items: [
          "Información del juego.",
          "Herramientas integradas.",
          "Administración avanzada.",
          "Acciones rápidas.",
        ],
      },

      {
        title: "Respaldo de Juegos",
        description:
          "Copias de seguridad.",

        items: [
          "Copiar juegos.",
          "Respaldar contenido.",
          "Administrar almacenamiento.",
          "Organizar biblioteca.",
        ],
      },

      {
        title: "Interfaz Moderna",
        description:
          "Diseño visual.",

        items: [
          "Vista tipo launcher.",
          "Animaciones fluidas.",
          "Carátulas grandes.",
          "Navegación sencilla.",
        ],
      },

      {
        title: "Compatibilidad",
        description:
          "Sistemas soportados.",

        items: [
          "GoldHEN.",
          "FPKG.",
          "Juegos instalados.",
          "Almacenamiento USB.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Interfaz moderna.",
          "Gestión de juegos.",
          "Carátulas automáticas.",
          "Herramientas integradas.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Complementos recomendados.",

        items: [
          "GoldHEN",
          "PS4 Xplorer",
          "Apollo Save Tool",
          "Patch Installer",
          "Homebrew Store",
        ],
      },
    ],
  },
},
// Consolepedia 3D
{
  console: "PS4",
  name: "Consolepedia 3D",
  image: "img/PS4/consolepedia-3d.jpg",

  description:
    "Enciclopedia interactiva que muestra consolas clásicas y modernas en modelos 3D junto con información sobre su historia, especificaciones y juegos destacados.",

  website: "https://github.com/VitaHEX-Games/Consolepedia-3D",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/TE4klQjK#dc7PsDQrUSqqki3Cwm79IQ",
    },
    {
      name: "Github Releases",
      url: "https://github.com/VitaHEX-Games/Consolepedia-3D/releases",
    },
  ],

  guide: {
    function:
      "Permite explorar una colección de consolas en 3D con información histórica y técnica directamente desde PS4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      Multimedia: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "USB ExFAT",
      "Consolepedia 3D",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar Consolepedia 3D.",
    ],

    usage:
      "Permite visualizar modelos 3D interactivos de diferentes consolas y consultar información relacionada.",

    notes:
      "Perfecta para coleccionistas y aficionados a la historia de los videojuegos.",

    version: "Actual",
    author: "Consolepedia Team",

    details: [
      {
        title: "Modelos 3D",
        description:
          "Visualización interactiva.",

        items: [
          "Consolas clásicas.",
          "Consolas modernas.",
          "Modelos tridimensionales.",
          "Vista libre.",
        ],
      },

      {
        title: "Información Histórica",
        description:
          "Datos disponibles.",

        items: [
          "Historia de la consola.",
          "Fecha de lanzamiento.",
          "Información general.",
          "Datos relevantes.",
        ],
      },

      {
        title: "Especificaciones",
        description:
          "Detalles técnicos.",

        items: [
          "Hardware.",
          "Características.",
          "Información técnica.",
          "Datos del sistema.",
        ],
      },

      {
        title: "Juegos Destacados",
        description:
          "Títulos importantes.",

        items: [
          "Juegos populares.",
          "Información adicional.",
          "Contenido relacionado.",
          "Curiosidades.",
        ],
      },

      {
        title: "Interfaz",
        description:
          "Navegación sencilla.",

        items: [
          "Controles intuitivos.",
          "Exploración rápida.",
          "Modelos interactivos.",
          "Contenido organizado.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Contenido educativo.",
          "Modelos en 3D.",
          "Información histórica.",
          "Uso sencillo.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Otras aplicaciones recomendadas.",

        items: [
          "Homebrew Store",
          "Itemzflow Game Manager",
          "PS4 Xplorer",
          "Apollo Save Tool",
        ],
      },
    ],
  },
},
// ezRemote Client
{
  console: "PS4",
  name: "ezRemote Client",
  image: "img/PS4/ezremote-client.jpg",

  description:
    "Administrador de archivos para PlayStation 4 con soporte para FTP, SFTP, SMB, NFS, WebDAV, HTTP y Google Drive.",

  website: "https://github.com/cy33hc/ps4-ezremote-client",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/LIw00TrJ#QFQTtd8DX0R5RggyqEjaHQ",
    },
    {
      name: "Github Releases",
      url: "https://github.com/cy33hc/ps4-ezremote-client/releases",
    },
    {
      name: "Github Dufs",
      url: "https://github.com/sigoden/dufs/releases",
    },
    {
      name: "mega.io cmd",
      url: "https://mega.io/es/cmd",
    },
  ],

  guide: {
    function:
      "Permite transferir archivos entre la PS4 y servidores locales o en la nube utilizando múltiples protocolos de red.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      FTP: "✅ Compatible",
      SFTP: "✅ Compatible",
      SMB: "✅ Compatible",
      NFS: "✅ Compatible",
      WebDAV: "✅ Compatible",
      HTTP: "✅ Compatible",
      GoogleDrive: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "Conexión de red",
      "ezRemote Client",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Instalar desde Package Installer.",
      "Abrir ezRemote Client.",
      "Configurar la conexión deseada.",
    ],

    usage:
      "Permite explorar archivos locales y remotos, descargar contenido y transferir archivos directamente a la consola.",

    notes:
      "También puede utilizarse para descargar archivos directamente desde enlaces compatibles.",

    version: "Actual",
    author: "cy33hc",

    details: [
      {
        title: "Protocolos Compatibles",
        description:
          "Conexiones disponibles.",

        items: [
          "FTP",
          "SFTP",
          "SMB",
          "NFS",
          "WebDAV",
          "HTTP",
          "Google Drive",
        ],
      },

      {
        title: "Explorador Doble Panel",
        description:
          "Gestión de archivos.",

        items: [
          "Panel local.",
          "Panel remoto.",
          "Copiar archivos.",
          "Mover contenido.",
        ],
      },

      {
        title: "Instalar desde URL",
        description:
          "Descarga directa.",

        items: [
          "Menú TRIÁNGULO.",
          "Install from URL.",
          "Pegar enlace.",
          "Descargar contenido.",
        ],
      },

      {
        title: "Servidor WebDAV",
        description:
          "Conexión remota.",

        items: [
          "Acceso WebDAV.",
          "Exploración remota.",
          "Transferencia directa.",
          "Administración sencilla.",
        ],
      },

      {
        title: "Google Drive",
        description:
          "Almacenamiento en la nube.",

        items: [
          "Acceso remoto.",
          "Explorar carpetas.",
          "Descargar archivos.",
          "Gestionar contenido.",
        ],
      },

      {
        title: "Transferencias",
        description:
          "Funciones disponibles.",

        items: [
          "Copiar.",
          "Mover.",
          "Descargar.",
          "Eliminar.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Múltiples protocolos.",
          "Compatible con la nube.",
          "Gestión avanzada de archivos.",
          "No requiere PC para muchas tareas.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "PS4 Xplorer",
          "Remote PKG Installer",
          "Homebrew Store",
          "GoldHEN",
          "Itemzflow Game Manager",
        ],
      },
    ],
  },
},
// Linux en PS4
{
  console: "PS4",
  name: "Linux en PS4",
  image: "img/PS4/linux-ps4.jpg",

  description:
    "Guía para ejecutar Linux en PlayStation 4 utilizando GoldHEN, payloads compatibles y una imagen Linux preparada para la consola.",

  website: "https://github.com/TheWizWikii/PS4-Payload-Injector-Tool",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/mII2WL4J#0Vr8csPNUbpSDVAHeTwSbA",
    },
    {
      name: "Github Releases",
      url: "https://github.com/TheWizWikii/PS4-Payload-Injector-Tool/releases",
    },
    {
      name: "Mirror Mediafire",
      url: "https://www.mediafire.com/file/6bdd067gx8koblk/ps4gentoo01-2020.img.gz/file?action=check",
    },
  ],

  guide: {
    function:
      "Permite utilizar distribuciones Linux en PlayStation 4 para ejecutar aplicaciones, emuladores y software compatible.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      Linux: "✅ Compatible",
      USB: "✅ Compatible",
      Keyboard: "✅ Requerido",
      Mouse: "✅ Requerido",
    },

    requirements: [
      "PlayStation 4 compatible",
      "GoldHEN",
      "Teclado USB",
      "Ratón USB",
      "Disco USB o HDD externo",
      "Imagen Linux preparada",
    ],

    installation: [
      "Preparar la unidad USB.",
      "Copiar la imagen Linux.",
      "Cargar GoldHEN.",
      "Ejecutar los payloads necesarios.",
      "Iniciar Linux.",
    ],

    usage:
      "Permite convertir temporalmente la PS4 en un equipo Linux para ejecutar aplicaciones compatibles.",

    notes:
      "El rendimiento y la compatibilidad pueden variar según el modelo de consola y la distribución utilizada.",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Requisitos",
        description:
          "Elementos necesarios.",

        items: [
          "GoldHEN.",
          "Teclado.",
          "Ratón.",
          "Unidad USB o HDD.",
        ],
      },

      {
        title: "Distribución Linux",
        description:
          "Sistema operativo utilizado.",

        items: [
          "Gentoo PS4.",
          "Imagen preparada.",
          "Compatible con PS4.",
          "Arranque mediante payload.",
        ],
      },

      {
        title: "Preparar Unidad",
        description:
          "Almacenamiento externo.",

        items: [
          "USB o HDD.",
          "Imagen Linux.",
          "Estructura correcta.",
          "Preparación previa.",
        ],
      },

      {
        title: "Payloads Linux",
        description:
          "Carga del sistema.",

        items: [
          "MiraLoader.",
          "Linux Loader.",
          "Payload Injector.",
          "GoldHEN.",
        ],
      },

      {
        title: "Conexión desde PC",
        description:
          "Herramientas compatibles.",

        items: [
          "Payload Injector.",
          "BinLoader.",
          "Red local.",
          "Conexión mediante IP.",
        ],
      },

      {
        title: "Primer Inicio",
        description:
          "Configuración inicial.",

        items: [
          "Seleccionar idioma.",
          "Configurar red.",
          "Comprobar dispositivos.",
          "Acceder al escritorio.",
        ],
      },

      {
        title: "Posibilidades",
        description:
          "Usos principales.",

        items: [
          "Emulación.",
          "Aplicaciones Linux.",
          "Multimedia.",
          "Herramientas de desarrollo.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "GoldHEN",
          "Payloads PS4",
          "Orbis Toolbox",
          "PS4 Xplorer",
          "ezRemote Client",
        ],
      },
    ],
  },
},
// Batocera PS4
{
  console: "PS4",
  name: "Batocera PS4",
  image: "img/PS4/batocera.jpg",

  description:
    "Sistema de emulación para PlayStation 4 basado en Linux que permite ejecutar múltiples consolas clásicas y modernas desde un USB o disco externo.",

  website: "https://batocera.org/",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/KNZF2agT#-YxENz8fPfoDWXzzzWrgvQ",
    },
    {
      name: "Github Releases",
      url: "https://github.com/batocera-linux/batocera.linux/releases",
    },
    {
      name: "WEB Ayuda",
      url: "https://nuclearhacks.es/como-instalar-batocera-en-ps4-con-pocos-pasos/",
    },
    {
      name: "Telegran",
      url: "https://t.me/+x-84XxF06kcxZDEy",
    },
  ],

  guide: {
    function:
      "Permite ejecutar Batocera en PlayStation 4 para utilizar emuladores y sistemas retro desde una interfaz unificada.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      Linux: "✅ Compatible",
      USB: "✅ Compatible",
      HDD: "✅ Compatible",
      Emulacion: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 compatible",
      "GoldHEN",
      "Batocera",
      "USB o HDD externo",
      "Mando conectado por cable",
    ],

    installation: [
      "Preparar la imagen de Batocera.",
      "Grabar la imagen en USB o HDD.",
      "Copiar el kernel correspondiente.",
      "Configurar GoldHEN.",
      "Iniciar mediante Linux Loader.",
    ],

    usage:
      "Permite ejecutar una amplia variedad de emuladores directamente desde la PS4 usando un sistema Linux optimizado.",

    notes:
      "La compatibilidad puede variar según el modelo de PS4 y la imagen utilizada.",

    version: "Tutorial",
    author: "Batocera Team",

    details: [
      {
        title: "¿Qué es Batocera?",
        description:
          "Sistema especializado en emulación.",

        items: [
          "Basado en Linux.",
          "Multiplataforma.",
          "Diseñado para emulación.",
          "Interfaz sencilla.",
        ],
      },

      {
        title: "Preparar la Imagen",
        description:
          "Creación de la unidad de arranque.",

        items: [
          "Descargar imagen Batocera.",
          "Grabar en USB.",
          "Grabar en HDD.",
          "Verificar integridad.",
        ],
      },

      {
        title: "Configurar PS4",
        description:
          "Ajustes recomendados.",

        items: [
          "Activar FTP Server.",
          "Activar BinLoader.",
          "Desactivar HDCP.",
          "Resolución 1080p.",
        ],
      },

      {
        title: "Kernel Linux",
        description:
          "Compatibilidad con la consola.",

        items: [
          "Seleccionar kernel correcto.",
          "Copiar al dispositivo.",
          "Compatibilidad por modelo.",
          "Preparar arranque.",
        ],
      },

      {
        title: "Iniciar Batocera",
        description:
          "Arranque desde PS4.",

        items: [
          "Conectar dispositivo.",
          "Abrir host compatible.",
          "Cargar Linux Loader.",
          "Esperar inicio.",
        ],
      },

      {
        title: "Emuladores",
        description:
          "Sistemas compatibles.",

        items: [
          "Arcade.",
          "Nintendo.",
          "PlayStation.",
          "Sega.",
          "Multisistema.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Gran compatibilidad.",
          "Interfaz moderna.",
          "Sistema independiente.",
          "Ideal para emulación.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "Linux en PS4",
          "GoldHEN",
          "Payloads PS4",
          "Orbis Toolbox",
          "PS4 Xplorer",
        ],
      },
    ],
  },
},
// FPKGi
{
  console: "PS4",
  name: "FPKGi",
  image: "img/PS4/fpkgi.jpg",

  description:
    "Aplicación homebrew de código abierto para gestionar e instalar paquetes compatibles directamente desde PlayStation 4.",

  website: "https://github.com/ItsJokerZz/FPKGi",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/7ARDzQDR#mVKLpYxZLZn-VhOb3LrZ8g",
    },
    {
      name: "Github Releases",
      url: "https://github.com/ItsJokerZz/FPKGi/releases",
    },
  ],

  guide: {
    function:
      "Permite administrar catálogos compatibles e instalar paquetes utilizando listas de contenido configuradas por el usuario.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      PKG: "✅ Compatible",
      ExFAT: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "FPKGi",
      "USB ExFAT",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar FPKGi.",
    ],

    usage:
      "Permite administrar catálogos compatibles y acceder al contenido configurado desde la propia consola.",

    notes:
      "La aplicación crea automáticamente las carpetas necesarias durante el primer inicio.",

    version: "Actual",
    author: "hippie68",

    details: [
      {
        title: "Primer Inicio",
        description:
          "Configuración inicial.",

        items: [
          "Crear carpetas necesarias.",
          "Preparar estructura.",
          "Inicializar configuración.",
          "Generar archivos base.",
        ],
      },

      {
        title: "Interfaz",
        description:
          "Navegación principal.",

        items: [
          "Listado de contenido.",
          "Categorías disponibles.",
          "Información detallada.",
          "Gestión sencilla.",
        ],
      },

      {
        title: "Catálogos",
        description:
          "Fuentes de contenido.",

        items: [
          "Configuración personalizada.",
          "Listas compatibles.",
          "Gestión de fuentes.",
          "Actualización manual.",
        ],
      },

      {
        title: "FPKGi Extras",
        description:
          "Complemento opcional.",

        items: [
          "Configuración adicional.",
          "Archivos complementarios.",
          "Mejor integración.",
          "Preparación automática.",
        ],
      },

      {
        title: "Instalación",
        description:
          "Gestión de paquetes.",

        items: [
          "Descargar contenido.",
          "Administrar paquetes.",
          "Organizar biblioteca.",
          "Instalación directa.",
        ],
      },

      {
        title: "Almacenamiento",
        description:
          "Ubicaciones compatibles.",

        items: [
          "USB ExFAT.",
          "Almacenamiento interno.",
          "Carpetas configuradas.",
          "Gestión local.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Código abierto.",
          "Interfaz sencilla.",
          "Compatible con GoldHEN.",
          "Administración centralizada.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "GoldHEN",
          "Homebrew Store",
          "Itemzflow Game Manager",
          "PS4 Xplorer",
          "Remote PKG Installer",
        ],
      },
    ],
  },
},
// GameBato
{
  console: "PS4",
  name: "GameBato",
  image: "img/PS4/gamebato.jpg",

  description:
    "Aplicación para PlayStation 4 que permite explorar un catálogo de juegos, actualizaciones y contenido adicional directamente desde la consola.",

  website: "https://gamebatoapp.ir/home/en/",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/KQZnDAKA#f1RPWqBmJcrh-7D8WlT8cw",
    },
  ],

  guide: {
    function:
      "Permite acceder a un catálogo integrado desde PS4 para gestionar juegos, actualizaciones y contenido compatible.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      Internet: "✅ Requerido",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "Conexión a Internet",
      "GameBato",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar GameBato.",
    ],

    usage:
      "Permite navegar por el catálogo disponible y gestionar descargas directamente desde la consola.",

    notes:
      "Algunas funciones pueden requerir registro o planes adicionales dependiendo del servicio utilizado.",

    version: "Actual",
    author: "GameBato Team",

    details: [
      {
        title: "¿Qué es GameBato?",
        description:
          "Catálogo integrado para PS4.",

        items: [
          "Exploración de contenido.",
          "Interfaz sencilla.",
          "Gestión desde consola.",
          "Actualizaciones integradas.",
        ],
      },

      {
        title: "Contenido Disponible",
        description:
          "Secciones principales.",

        items: [
          "Juegos.",
          "Actualizaciones.",
          "DLC.",
          "Contenido adicional.",
        ],
      },

      {
        title: "Primer Inicio",
        description:
          "Configuración inicial.",

        items: [
          "Abrir aplicación.",
          "Conectar a Internet.",
          "Cargar catálogo.",
          "Explorar contenido.",
        ],
      },

      {
        title: "Interfaz",
        description:
          "Navegación principal.",

        items: [
          "Categorías.",
          "Búsqueda.",
          "Información del contenido.",
          "Gestión sencilla.",
        ],
      },

      {
        title: "Actualizaciones",
        description:
          "Mantenimiento del catálogo.",

        items: [
          "Contenido actualizado.",
          "Nuevas incorporaciones.",
          "Sincronización online.",
          "Información reciente.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Uso directo desde PS4.",
          "Interfaz moderna.",
          "Catálogo integrado.",
          "Compatible con GoldHEN.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "Homebrew Store",
          "FPKGi",
          "Itemzflow Game Manager",
          "PS4 Xplorer",
          "GoldHEN",
        ],
      },
    ],
  },
},
// PS4 Controller Homebrew
{
  console: "PS4",
  name: "PS4 Controller Homebrew",
  image: "img/PS4/ps4-controller-homebrew.jpg",

  description:
    "Utilidad para PlayStation 4 que permite comprobar el funcionamiento de los botones y controles del mando DualShock 4.",

  website: "https://pkg-zone.com/details/NPXX51364",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/7ZYwxBZQ#tSjxXuG0yr4W9tSD70AhHA",
    },
  ],

  guide: {
    function:
      "Permite verificar botones, gatillos, sticks y controles del mando para detectar posibles fallos.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      DualShock4: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "DualShock 4",
      "PS4 Controller Homebrew",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar PS4 Controller Homebrew.",
    ],

    usage:
      "Permite visualizar en tiempo real las pulsaciones realizadas en el mando para comprobar su funcionamiento.",

    notes:
      "Según el tutorial original, pulsar el panel táctil puede provocar que la aplicación deje de responder. 【1-8e7b7e】",

    version: "Actual",
    author: "PS4 Scene",

    details: [
      {
        title: "Comprobación de Botones",
        description:
          "Verificar entradas del mando.",

        items: [
          "✕",
          "◯",
          "□",
          "△",
          "L1 y R1",
          "L2 y R2",
        ],
      },

      {
        title: "Sticks Analógicos",
        description:
          "Pruebas de movimiento.",

        items: [
          "Stick izquierdo.",
          "Stick derecho.",
          "Detección analógica.",
          "Movimiento en tiempo real.",
        ],
      },

      {
        title: "Direccional",
        description:
          "Verificación de entradas.",

        items: [
          "Arriba.",
          "Abajo.",
          "Izquierda.",
          "Derecha.",
        ],
      },

      {
        title: "Diagnóstico",
        description:
          "Comprobación general.",

        items: [
          "Botones defectuosos.",
          "Drift de sticks.",
          "Problemas de respuesta.",
          "Verificación rápida.",
        ],
      },

      {
        title: "Advertencia",
        description:
          "Limitaciones conocidas.",

        items: [
          "No pulsar el panel táctil.",
          "Puede congelar la aplicación.",
          "Cerrar y volver a abrir si ocurre.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Muy ligera.",
          "Diagnóstico rápido.",
          "Fácil utilización.",
          "Ideal para pruebas.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "PS4 Xplorer",
          "GoldHEN",
          "Orbis Toolbox",
          "PS4 Toolset",
        ],
      },
    ],
  },
},
// PSLAN Loader
{
  console: "PS4",
  name: "PSLAN Loader",
  image: "img/PS4/pslan-loader.jpg",

  description:
    "Aplicación para PlayStation 4 que permite utilizar funciones multijugador en juegos compatibles mediante servidores PSLAN.",

  website: "https://discord.com/invite/u8tcA6HpbK",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/KFIAgRSb#ChmPYoYYhiWprmxDPpaUVw",
    },
  ],

  guide: {
    function:
      "Permite habilitar funcionalidades multijugador en juegos compatibles utilizando la plataforma PSLAN.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      LAN: "✅ Compatible",
      Multiplayer: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "Conexión a Internet",
      "PSLAN Loader",
      "Juego compatible",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar PSLAN Loader.",
    ],

    usage:
      "Permite iniciar el servicio PSLAN antes de ejecutar juegos compatibles.",

    notes:
      "La compatibilidad depende de cada juego. La lista de títulos compatibles suele mantenerse en la comunidad PSLAN.",

    version: "Actual",
    author: "PSLAN Team",

    details: [
      {
        title: "¿Qué es PSLAN?",
        description:
          "Servicio de juego multijugador.",

        items: [
          "Partidas compatibles.",
          "Juego por red.",
          "Comunidad activa.",
          "Soporte para títulos específicos.",
        ],
      },

      {
        title: "Primer Inicio",
        description:
          "Carga del servicio.",

        items: [
          "Abrir PSLAN Loader.",
          "Esperar la carga.",
          "Minimización automática.",
          "Servicio activo.",
        ],
      },

      {
        title: "Juegos Compatibles",
        description:
          "Requisito principal.",

        items: [
          "Solo títulos compatibles.",
          "Compatibilidad variable.",
          "Actualizaciones frecuentes.",
          "Listado comunitario.",
        ],
      },

      {
        title: "Conexión",
        description:
          "Acceso al servicio.",

        items: [
          "Conexión a Internet.",
          "Servidor PSLAN.",
          "Carga automática.",
          "Acceso desde el juego.",
        ],
      },

      {
        title: "Uso Diario",
        description:
          "Procedimiento habitual.",

        items: [
          "Iniciar PSLAN Loader.",
          "Esperar carga.",
          "Abrir juego compatible.",
          "Acceder al multijugador.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Fácil utilización.",
          "Carga rápida.",
          "Compatible con GoldHEN.",
          "Experiencia multijugador.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "LogMeIn Hamachi",
          "GoldHEN",
          "ezRemote Client",
          "Remote PKG Installer",
          "PS4 Xplorer",
        ],
      },
    ],
  },
},
// Flash0 NOR Dump
{
  console: "PS4",
  name: "Flash0 NOR Dump",
  image: "img/PS4/flash0-nor-dump.jpg",

  description:
    "Herramienta para realizar una copia de seguridad del contenido NOR de PlayStation 4 y almacenarla en un dispositivo USB.",

  website: "https://github.com/Andryshik345/ps4-sflash0-dumper",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/fEQUHLZC#qMQczn7Th83OXzBpUtzswQ",
    },
    {
      name: "Github Releases",
      url: "https://github.com/Andryshik345/ps4-sflash0-dumper/releases",
    },
  ],

  guide: {
    function:
      "Permite crear un respaldo del archivo NOR de la consola para tareas de mantenimiento y recuperación.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PayloadGuest: "✅ Compatible",
      PS4FAT: "✅ Compatible",
      PS4Slim: "✅ Compatible",
      PS4Pro: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 compatible",
      "GoldHEN",
      "Payload Guest",
      "USB ExFAT",
      "Flash0 NOR Dump",
    ],

    installation: [
      "Copiar el payload al USB.",
      "Crear carpeta payloads.",
      "Ejecutar Payload Guest.",
      "Cargar Flash0 NOR Dump.",
    ],

    usage:
      "Permite generar una copia de seguridad del archivo NOR y almacenarla en un dispositivo USB externo.",

    notes:
      "Se recomienda guardar el archivo generado en varios lugares seguros y conservarlo como respaldo permanente de la consola.",

    version: "1.0.0",
    author: "PS4 Scene",

    details: [
      {
        title: "¿Qué es NOR Dump?",
        description:
          "Respaldo de la memoria NOR.",

        items: [
          "Copia de seguridad.",
          "Compatible con PS4.",
          "Archivo único.",
          "Uso de mantenimiento.",
        ],
      },

      {
        title: "Preparar Payload",
        description:
          "Archivos necesarios.",

        items: [
          "ps4-sflash0-dumper.bin",
          "Carpeta payloads",
          "USB ExFAT",
          "Payload Guest",
        ],
      },

      {
        title: "Ruta Compatible",
        description:
          "Ubicaciones soportadas.",

        items: [
          "/payloads",
          "/data/payloads",
          "USB",
          "Almacenamiento interno",
        ],
      },

      {
        title: "Carga del Payload",
        description:
          "Ejecución desde Payload Guest.",

        items: [
          "Abrir Payload Guest.",
          "Seleccionar payload.",
          "Iniciar proceso.",
          "Esperar finalización.",
        ],
      },

      {
        title: "Archivo Generado",
        description:
          "Resultado del volcado.",

        items: [
          "sflash0.bin",
          "Respaldo NOR.",
          "Guardar en PC.",
          "Mantener copia de seguridad.",
        ],
      },

      {
        title: "Modelos Compatibles",
        description:
          "Consolas soportadas.",

        items: [
          "PS4 FAT",
          "PS4 Slim",
          "PS4 Pro",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Respaldo de seguridad.",
          "Proceso sencillo.",
          "Compatible con GoldHEN.",
          "Compatible con Payload Guest.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "GoldHEN",
          "Payloads PS4",
          "PS4 Toolset",
          "Orbis Toolbox",
          "PS4 Xplorer",
        ],
      },
    ],
  },
},
// Notification Shortcuts
{
  console: "PS4",
  name: "Notification Shortcuts",
  image: "img/PS4/notification-shortcuts.jpg",

  description:
    "Utilidad para PlayStation 4 que agrega accesos rápidos a funciones y herramientas directamente desde el menú de notificaciones.",

  website: null,

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/fVoWgJhT#sUNdOW6bfSaUi19kx7GWVQ",
    },
  ],

  guide: {
    function:
      "Permite acceder rápidamente a diversas herramientas desde el centro de notificaciones de la consola.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      PayloadGuest: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "Payload Guest",
      "USB ExFAT",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Instalar desde Package Installer.",
      "Ejecutar Install Permanent Notifications.",
      "Cargar Notification-Shortcut desde Payload Guest.",
    ],

    usage:
      "Añade accesos directos al panel de notificaciones para acceder más rápidamente a herramientas compatibles.",

    notes:
      "Al instalar la versión permanente los accesos estarán disponibles después de reiniciar la consola. 【1-b5daf2】",

    version: "Actual",
    author: "PS4 Scene",

    details: [
      {
        title: "Instalación Permanente",
        description:
          "Activación recomendada.",

        items: [
          "Install Permanent Notifications.",
          "Configuración automática.",
          "Accesos persistentes.",
          "Uso diario.",
        ],
      },

      {
        title: "Payload Guest",
        description:
          "Carga del acceso rápido.",

        items: [
          "Abrir Payload Guest.",
          "Buscar Notification-Shortcut.",
          "Ejecutar payload.",
          "Activar accesos.",
        ],
      },

      {
        title: "Panel de Notificaciones",
        description:
          "Acceso rápido.",

        items: [
          "Herramientas frecuentes.",
          "Funciones rápidas.",
          "Acceso simplificado.",
          "Menor navegación por menús.",
        ],
      },

      {
        title: "Integración",
        description:
          "Compatibilidad con GoldHEN.",

        items: [
          "Sistema integrado.",
          "Funciones adicionales.",
          "Acceso directo.",
          "Mayor comodidad.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Acceso más rápido.",
          "Integración sencilla.",
          "Compatible con GoldHEN.",
          "Uso cotidiano.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "GoldHEN",
          "Payloads PS4",
          "PS4 Toolset",
          "Orbis Toolbox",
          "PS4 Xplorer",
        ],
      },
    ],
  },
},
// Avatar Changer
{
  console: "PS4",
  name: "Avatar Changer",
  image: "img/PS4/avatar-changer.jpg",

  description:
    "Aplicación para PlayStation 4 que permite instalar y cambiar avatares personalizados directamente desde la consola.",

  website: "https://pkg-zone.com/details/LAPY20015",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/OQg3hJZI#LZSA10JkQPK5GSvGm9WyZg",
    },
  ],

  guide: {
    function:
      "Permite explorar e instalar diferentes avatares para personalizar el perfil de usuario en PlayStation 4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      Avatares: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "Avatar Changer",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar Avatar Changer.",
    ],

    usage:
      "Permite seleccionar e instalar avatares disponibles desde la propia aplicación.",

    notes:
      "Después de aplicar un avatar puede ser necesario volver al perfil para visualizar correctamente los cambios.",

    version: "Actual",
    author: "PS4 Scene",

    details: [
      {
        title: "Catálogo de Avatares",
        description:
          "Avatares disponibles.",

        items: [
          "Colección integrada.",
          "Múltiples diseños.",
          "Selección rápida.",
          "Vista previa.",
        ],
      },

      {
        title: "Instalación",
        description:
          "Proceso sencillo.",

        items: [
          "Abrir Avatar Changer.",
          "Seleccionar avatar.",
          "Aplicar cambios.",
          "Confirmar instalación.",
        ],
      },

      {
        title: "Personalización",
        description:
          "Modificar apariencia del perfil.",

        items: [
          "Cambiar avatar.",
          "Personalizar usuario.",
          "Mejorar apariencia.",
          "Configuración sencilla.",
        ],
      },

      {
        title: "Interfaz",
        description:
          "Uso de la aplicación.",

        items: [
          "Listado de avatares.",
          "Vista previa.",
          "Instalación rápida.",
          "Navegación sencilla.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Fácil utilización.",
          "Personalización rápida.",
          "Compatible con GoldHEN.",
          "Amplia variedad de avatares.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "Icon Mask",
          "Itemzflow Game Manager",
          "Homebrew Store",
          "PS4 Xplorer",
          "GoldHEN",
        ],
      },
    ],
  },
},
// Plataformas Streaming
{
  console: "PS4",
  name: "Plataformas Streaming",
  image: "img/PS4/plataformas-streaming.jpg",

  description:
    "Colección de aplicaciones multimedia para PlayStation 4 que permiten acceder a servicios de vídeo, series y streaming desde la consola.",

  website: null,

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/GEgmwZ5J#PXLsE7kwb0H6P7ZUuELWwQ",
    },
  ],

  guide: {
    function:
      "Permite instalar aplicaciones multimedia compatibles para visualizar películas, series y contenido en streaming.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      Streaming: "✅ Compatible",
      Internet: "✅ Requerido",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "Conexión a Internet",
      "USB ExFAT",
    ],

    installation: [
      "Copiar los PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar las aplicaciones deseadas.",
    ],

    usage:
      "Permite utilizar diferentes plataformas multimedia directamente desde la consola.",

    notes:
      "Algunas aplicaciones pueden requerir configuraciones específicas de red para funcionar correctamente. 【1-2835a9】",

    version: "Pack",
    author: "MarcheBMPC",

    details: [
      {
        title: "Aplicaciones Incluidas",
        description:
          "Servicios disponibles.",

        items: [
          "Amazon Prime Video",
          "Netflix",
          "Crunchyroll",
          "Plex",
          "YouTube",
          "Hulu",
        ],
      },

      {
        title: "Instalación",
        description:
          "Proceso de instalación.",

        items: [
          "Seleccionar PKG.",
          "Instalar aplicación.",
          "Esperar finalización.",
          "Abrir desde el menú principal.",
        ],
      },

      {
        title: "Aplicaciones con DNS",
        description:
          "Configuración especial.",

        items: [
          "Hulu",
          "Configuración DNS requerida.",
          "Acceso mediante red configurada.",
        ],
      },

      {
        title: "Aplicaciones Sin DNS",
        description:
          "Instalación estándar.",

        items: [
          "Amazon Prime Video",
          "Netflix",
          "Crunchyroll",
          "Plex",
          "YouTube",
        ],
      },

      {
  title: "Aplicaciones De Plataformas",
  description:
    "Servicios incluidos en el paquete.",

  items: [
    "Amazon Prime Video",
    "Netflix",
    "Crunchyroll",
    "Plex",
    "YouTube",
    "Pluto TV",
    "Hulu",
    "WiiMC",
    "PS4 Media Player",
    "PS4 Player",
  ],
},

      {
        title: "Multimedia",
        description:
          "Uso principal.",

        items: [
          "Películas.",
          "Series.",
          "Anime.",
          "Vídeos online.",
          "Bibliotecas multimedia.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Todo en un solo paquete.",
          "Fácil instalación.",
          "Compatible con PS4.",
          "Amplia variedad de servicios.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas multimedia.",

        items: [
          "Plex",
          "YouTube",
          "Homebrew Store",
          "PS4 Xplorer",
        ],
      },
    ],
  },
},
// pPlay
{
  console: "PS4",
  name: "pPlay",
  image: "img/PS4/pplay.jpg",

  description:
    "Reproductor multimedia para PlayStation 4 con soporte para múltiples formatos de vídeo, subtítulos y reproducción mediante streaming HTTP.",

  website: "https://github.com/Cpasjuste/pplay",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/TQhCGLiZ#QShhZeCqqXKq_Ot-F49Cxg",
    },
    {
      name: "Github Releases",
      url: "https://github.com/Cpasjuste/pplay/releases",
    },
  ],

  guide: {
    function:
      "Permite reproducir vídeos almacenados localmente o mediante streaming desde una interfaz optimizada para PlayStation 4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      Video: "✅ Compatible",
      HTTP: "✅ Compatible",
      Subtitulos: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "pPlay",
      "PS4 Xplorer o FTP",
      "USB ExFAT",
    ],

    installation: [
      "Instalar pPlay desde Package Installer.",
      "Copiar la carpeta DATA.",
      "Transferir la carpeta a /data.",
      "Abrir la aplicación.",
    ],

    usage:
      "Permite explorar el almacenamiento de la consola y reproducir vídeos compatibles desde USB, almacenamiento interno o streaming.",

    notes:
      "La carpeta DATA debe copiarse previamente a la ruta /data para garantizar el funcionamiento correcto de la aplicación. 【1-6189fe】",

    version: "Actual",
    author: "Cpasjuste",

    details: [
      {
        title: "Formatos Multimedia",
        description:
          "Compatibilidad de reproducción.",

        items: [
          "Vídeos.",
          "Subtítulos integrados.",
          "Streaming HTTP.",
          "Múltiples formatos compatibles.",
        ],
      },

      {
        title: "Preparación Inicial",
        description:
          "Configuración requerida.",

        items: [
          "Copiar carpeta DATA.",
          "Transferir a /data.",
          "Usar FTP o PS4 Xplorer.",
          "Reiniciar aplicación.",
        ],
      },

      {
        title: "PS4 Xplorer",
        description:
          "Método recomendado.",

        items: [
          "Abrir PS4 Xplorer.",
          "Localizar USB.",
          "Copiar carpeta DATA.",
          "Pegar en /data.",
        ],
      },

      {
        title: "FTP",
        description:
          "Método alternativo.",

        items: [
          "Conectar mediante FTP.",
          "Acceder a /data.",
          "Transferir carpeta DATA.",
          "Verificar contenido.",
        ],
      },

      {
        title: "Explorador Integrado",
        description:
          "Acceso a archivos.",

        items: [
          "Navegar directorios.",
          "Acceder a la raíz.",
          "Seleccionar vídeos.",
          "Reproducir contenido.",
        ],
      },

      {
        title: "Streaming",
        description:
          "Reproducción remota.",

        items: [
          "Servidor HTTP.",
          "Contenido remoto.",
          "Acceso directo.",
          "Visualización en PS4.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Compatible con subtítulos.",
          "Múltiples formatos.",
          "Streaming integrado.",
          "Interfaz sencilla.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas multimedia.",

        items: [
          "Plataformas Streaming",
          "Plex",
          "YouTube",
          "PS4 Xplorer",
          "ezRemote Client",
        ],
      },
    ],
  },
},
// Media Player
{
  console: "PS4",
  name: "Media Player",
  image: "img/PS4/media-player.jpg",

  description:
    "Reproductor multimedia para PlayStation 4 que permite reproducir vídeos, música e imágenes desde dispositivos USB compatibles.",

  website: "https://pkg-zone.com/details/CUSA02012",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/yFhQiCaK#RunmCNZTDaQ2mpU7JLTHlQ",
    },
  ],

  guide: {
    function:
      "Permite reproducir contenido multimedia directamente desde la consola utilizando almacenamiento externo.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      USB: "✅ Compatible",
      Video: "✅ Compatible",
      Musica: "✅ Compatible",
      Imagenes: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "USB ExFAT",
      "Media Player",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar Media Player.",
    ],

    usage:
      "Permite explorar dispositivos USB y reproducir archivos multimedia compatibles desde la consola.",

    notes:
      "Ideal para visualizar vídeos, escuchar música o ver fotografías sin necesidad de aplicaciones externas. 【1-e8e4ae】",

    version: "Actual",
    author: "Sony",

    details: [
      {
        title: "Contenido Multimedia",
        description:
          "Archivos compatibles.",

        items: [
          "Vídeos.",
          "Música.",
          "Fotografías.",
          "Contenido multimedia local.",
        ],
      },

      {
        title: "Almacenamiento USB",
        description:
          "Soporte externo.",

        items: [
          "USB ExFAT.",
          "Exploración automática.",
          "Acceso rápido.",
          "Detección sencilla.",
        ],
      },

      {
        title: "Biblioteca Multimedia",
        description:
          "Acceso al contenido.",

        items: [
          "Organización de archivos.",
          "Navegación intuitiva.",
          "Selección sencilla.",
          "Reproducción rápida.",
        ],
      },

      {
        title: "Vídeos",
        description:
          "Reproducción de películas y clips.",

        items: [
          "Contenido local.",
          "Reproducción directa.",
          "Control desde el mando.",
          "Visualización a pantalla completa.",
        ],
      },

      {
        title: "Música",
        description:
          "Biblioteca sonora.",

        items: [
          "Canciones.",
          "Álbumes.",
          "Listas de reproducción.",
          "Reproducción continua.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Aplicación ligera.",
          "Interfaz sencilla.",
          "Compatible con USB.",
          "Uso inmediato.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas multimedia.",

        items: [
          "pPlay",
          "Plataformas Streaming",
          "Plex",
          "YouTube",
          "PS4 Xplorer",
        ],
      },
    ],
  },
},
// PS4 Player
{
  console: "PS4",
  name: "PS4 Player",
  image: "img/PS4/ps4-player.jpg",

  description:
    "Reproductor multimedia para PlayStation 4 desarrollado por @Lapy, diseñado para reproducir contenido de vídeo y multimedia directamente desde la consola.",

  website: "https://github.com/Cpasjuste/pplay",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/LIIThBrD#XUkiajJUrtafEVK7br3iQQ",
    },
    {
      name: "Github Releases",
      url: "https://github.com/Cpasjuste/pplay/releases",
    },
  ],

  guide: {
    function:
      "Permite reproducir contenido multimedia desde dispositivos USB y almacenamiento compatible en PlayStation 4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      USB: "✅ Compatible",
      Multimedia: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "PS4 Player",
      "USB ExFAT",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar PS4 Player.",
    ],

    usage:
      "Permite explorar y reproducir contenido multimedia desde la propia consola.",

    notes:
      "Diseñado para ofrecer una alternativa sencilla para la reproducción de contenido multimedia en PS4. 【1-bc8aff】",

    version: "Actual",
    author: "@Lapy",

    details: [
      {
        title: "Multimedia",
        description:
          "Funciones principales.",

        items: [
          "Reproducción de vídeo.",
          "Exploración multimedia.",
          "Acceso desde PS4.",
          "Interfaz sencilla.",
        ],
      },

      {
        title: "Almacenamiento USB",
        description:
          "Contenido externo.",

        items: [
          "USB ExFAT.",
          "Detección automática.",
          "Acceso rápido.",
          "Reproducción directa.",
        ],
      },

      {
        title: "Biblioteca",
        description:
          "Gestión de archivos.",

        items: [
          "Archivos multimedia.",
          "Exploración de carpetas.",
          "Selección sencilla.",
          "Navegación rápida.",
        ],
      },

      {
        title: "Reproducción",
        description:
          "Uso principal.",

        items: [
          "Vídeos.",
          "Contenido multimedia.",
          "Visualización en pantalla completa.",
          "Control mediante DualShock 4.",
        ],
      },

      {
        title: "Interfaz",
        description:
          "Experiencia de usuario.",

        items: [
          "Diseño ligero.",
          "Navegación intuitiva.",
          "Acceso rápido.",
          "Fácil utilización.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Ligero.",
          "Fácil de usar.",
          "Compatible con GoldHEN.",
          "Compatible con USB ExFAT.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas multimedia.",

        items: [
          "Media Player",
          "pPlay",
          "Plataformas Streaming",
          "Plex",
          "PS4 Xplorer",
        ],
      },
    ],
  },
},
// Pluto TV
{
  console: "PS4",
  name: "Pluto TV",
  image: "img/PS4/pluto-tv.jpg",

  description:
    "Aplicación multimedia para PlayStation 4 que permite acceder a canales de televisión en directo y contenido gratuito mediante Internet.",

  website: "https://pkg-zone.com/details/CUSA04688",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/CNRyQAAD#ot_Yd97EgbmtRnd6blHAWA",
    },
  ],

  guide: {
    function:
      "Permite visualizar canales de televisión y contenido multimedia gratuito directamente desde la consola.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      Streaming: "✅ Compatible",
      Internet: "✅ Requerido",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "Conexión a Internet",
      "Pluto TV",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar Pluto TV.",
    ],

    usage:
      "Permite acceder a canales en directo y contenido bajo demanda desde una interfaz optimizada para PS4.",

    notes:
      "Se requiere conexión a Internet para acceder al catálogo y canales disponibles. 【1-f2942c】",

    version: "Actual",
    author: "Pluto TV",

    details: [
      {
        title: "Televisión en Directo",
        description:
          "Canales disponibles.",

        items: [
          "Canales en vivo.",
          "Programación continua.",
          "Contenido gratuito.",
          "Acceso rápido.",
        ],
      },

      {
        title: "Contenido Bajo Demanda",
        description:
          "Visualización flexible.",

        items: [
          "Series.",
          "Películas.",
          "Programas.",
          "Contenido variado.",
        ],
      },

      {
        title: "Primer Inicio",
        description:
          "Configuración básica.",

        items: [
          "Abrir Pluto TV.",
          "Conectar a Internet.",
          "Explorar categorías.",
          "Seleccionar contenido.",
        ],
      },

      {
        title: "Canales",
        description:
          "Contenido disponible.",

        items: [
          "Noticias.",
          "Entretenimiento.",
          "Deportes.",
          "Películas.",
        ],
      },

      {
        title: "Interfaz",
        description:
          "Navegación sencilla.",

        items: [
          "Guía de canales.",
          "Exploración rápida.",
          "Acceso inmediato.",
          "Diseño intuitivo.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Contenido gratuito.",
          "Canales en directo.",
          "Instalación sencilla.",
          "Compatible con PS4.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas multimedia.",

        items: [
          "Plataformas Streaming",
          "Media Player",
          "pPlay",
          "PS4 Player",
          "Plex",
        ],
      },
    ],
  },
},
// pNES
{
  console: "PS4",
  name: "pNES",
  image: "img/PS4/pnes.jpg",

  description:
    "Emulador para PlayStation 4 que permite ejecutar juegos clásicos de Nintendo Entertainment System (NES) desde una interfaz adaptada a la consola.",

  website: "https://github.com/Cpasjuste/pemu",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/7JQkiZpA#c98AXWgNpETUWqNmdP1cMg",
    },
    {
      name: "Github Releases",
      url: "https://github.com/Cpasjuste/pemu/releases",
    },
  ],

  guide: {
    function:
      "Permite ejecutar juegos de Nintendo Entertainment System (NES) directamente desde PlayStation 4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      NES: "✅ Compatible",
      ROMs: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "pNES",
      "USB ExFAT",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar pNES.",
    ],

    usage:
      "Permite cargar y ejecutar juegos compatibles de NES desde una interfaz sencilla adaptada para PS4.",

    notes:
      "Incluye opciones de configuración accesibles desde el menú del emulador. 【1-5f759b】",

    version: "Actual",
    author: "pEMU Team",

    details: [
      {
        title: "Sistema Compatible",
        description:
          "Consola emulada.",

        items: [
          "Nintendo Entertainment System",
          "NES",
          "8 Bits",
          "Retro Gaming",
        ],
      },

      {
        title: "Biblioteca de Juegos",
        description:
          "Selección disponible.",

        items: [
          "Listado de ROMs.",
          "Selección rápida.",
          "Acceso sencillo.",
          "Carga inmediata.",
        ],
      },

      {
        title: "Configuración",
        description:
          "Opciones del emulador.",

        items: [
          "Menú de ajustes.",
          "Opciones de vídeo.",
          "Configuraciones adicionales.",
          "Personalización básica.",
        ],
      },

      {
        title: "Controles",
        description:
          "Uso mediante DualShock 4.",

        items: [
          "Compatible con DualShock 4.",
          "Asignación integrada.",
          "Acceso rápido.",
          "Navegación sencilla.",
        ],
      },

      {
        title: "Interfaz",
        description:
          "Experiencia de uso.",

        items: [
          "Diseño ligero.",
          "Menús simples.",
          "Navegación rápida.",
          "Fácil utilización.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Emulación clásica.",
          "Interfaz sencilla.",
          "Compatible con GoldHEN.",
          "Configuración rápida.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Otros emuladores recomendados.",

        items: [
          "RetroArch",
          "Batocera PS4",
          "Linux en PS4",
          "Otros emuladores pEMU",
        ],
      },
    ],
  },
},
// pSNES
{
  console: "PS4",
  name: "pSNES",
  image: "img/PS4/psnes.jpg",

  description:
    "Emulador para PlayStation 4 basado en Snes9x que permite ejecutar juegos de Super Nintendo Entertainment System (SNES).",

  website: "https://github.com/Cpasjuste/pemu",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/uAoyzA4Z#3Ra2NHjF9FeqxjKeGAye3w",
    },
    {
      name: "Github Releases",
      url: "https://github.com/Cpasjuste/pemu/releases",
    },
  ],

  guide: {
    function:
      "Permite ejecutar juegos clásicos de Super Nintendo directamente desde PlayStation 4 mediante una interfaz optimizada para el mando DualShock 4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      SNES: "✅ Compatible",
      Snes9x: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "pSNES",
      "USB ExFAT",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar pSNES.",
    ],

    usage:
      "Permite cargar y ejecutar juegos de Super Nintendo desde una interfaz sencilla y ligera.",

    notes:
      "Incluye opciones de configuración accesibles desde el menú interno del emulador. 【1-565eac】",

    version: "Actual",
    author: "pEMU Team",

    details: [
      {
        title: "Sistema Compatible",
        description:
          "Consola emulada.",

        items: [
          "Super Nintendo",
          "SNES",
          "16 Bits",
          "Retro Gaming",
        ],
      },

      {
        title: "Biblioteca de Juegos",
        description:
          "Selección de ROMs.",

        items: [
          "Listado de juegos.",
          "Navegación rápida.",
          "Carga sencilla.",
          "Selección inmediata.",
        ],
      },

      {
        title: "Configuración",
        description:
          "Opciones del emulador.",

        items: [
          "Menú de ajustes.",
          "Opciones gráficas.",
          "Configuración de audio.",
          "Personalización básica.",
        ],
      },

      {
        title: "Acceso Rápido",
        description:
          "Menú interno.",

        items: [
          "Botón R1.",
          "Configuración avanzada.",
          "Opciones del sistema.",
          "Ajustes de emulación.",
        ],
      },

      {
        title: "Controles",
        description:
          "Compatibilidad.",

        items: [
          "DualShock 4.",
          "Mapeo integrado.",
          "Control completo.",
          "Navegación sencilla.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Basado en Snes9x.",
          "Compatible con GoldHEN.",
          "Interfaz sencilla.",
          "Emulación ligera.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Otros emuladores recomendados.",

        items: [
          "pNES",
          "RetroArch",
          "Batocera PS4",
          "Linux en PS4",
          "Otros emuladores pEMU",
        ],
      },
    ],
  },
},
// pFBN Neo
{
  console: "PS4",
  name: "pFBN Neo",
  image: "img/PS4/pfbneo.jpg",

  description:
    "Emulador multisistema para PlayStation 4 capaz de ejecutar juegos Arcade, Neo Geo, CPS1, CPS2, CPS3 y diversas consolas clásicas.",

  website: "https://github.com/Cpasjuste/pemu",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/HUxT3agT#JRFqqBfaEEvjn9x3mTO5eA",
    },
    {
      name: "Github Releases",
      url: "https://github.com/Cpasjuste/pemu/releases",
    },
  ],

  guide: {
    function:
      "Permite ejecutar múltiples sistemas arcade y consolas clásicas desde una única aplicación.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      Arcade: "✅ Compatible",
      NeoGeo: "✅ Compatible",
      CPS1: "✅ Compatible",
      CPS2: "✅ Compatible",
      CPS3: "✅ Compatible",
      MegaDrive: "✅ Compatible",
      MasterSystem: "✅ Compatible",
      GameGear: "✅ Compatible",
      PCEngine: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "pFBN Neo",
      "USB ExFAT",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar pFBN Neo.",
    ],

    usage:
      "Permite cargar juegos de múltiples plataformas arcade y consolas retro desde una interfaz unificada.",

    notes:
      "Incluye opciones de configuración accesibles desde el menú interno del emulador. 【1-919ef5】",

    version: "Actual",
    author: "pEMU Team",

    details: [
      {
        title: "Sistemas Arcade",
        description:
          "Plataformas compatibles.",

        items: [
          "Neo Geo",
          "CPS1",
          "CPS2",
          "CPS3",
          "Arcade",
        ],
      },

      {
        title: "Consolas Compatibles",
        description:
          "Sistemas soportados.",

        items: [
          "Mega Drive",
          "Master System",
          "Game Gear",
          "PC Engine",
        ],
      },

      {
        title: "Biblioteca de Juegos",
        description:
          "Selección de títulos.",

        items: [
          "Listado automático.",
          "Selección rápida.",
          "Carga inmediata.",
          "Organización sencilla.",
        ],
      },

      {
        title: "Configuración",
        description:
          "Opciones del emulador.",

        items: [
          "Menú de ajustes.",
          "Botón R1.",
          "Opciones gráficas.",
          "Configuración personalizada.",
        ],
      },

      {
        title: "Interfaz",
        description:
          "Experiencia de usuario.",

        items: [
          "Navegación sencilla.",
          "Diseño ligero.",
          "Acceso rápido.",
          "Multisistema.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Multiplataforma.",
          "Compatible con GoldHEN.",
          "Gran cantidad de sistemas.",
          "Interfaz unificada.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Otros emuladores recomendados.",

        items: [
          "pNES",
          "pSNES",
          "RetroArch",
          "Batocera PS4",
          "Linux en PS4",
        ],
      },
    ],
  },
},
// pGEN
{
  console: "PS4",
  name: "pGEN",
  image: "img/PS4/pgen.jpg",

  description:
    "Emulador para PlayStation 4 basado en Genesis Plus GX que permite ejecutar juegos clásicos de Sega Mega Drive y Sega Genesis.",

  website: "https://github.com/Cpasjuste/pemu",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/LRA3wCzZ#KbqB5tygfnVuwzIgCUuEZw",
    },
    {
      name: "Github Releases",
      url: "https://github.com/Cpasjuste/pemu/releases",
    },
  ],

  guide: {
    function:
      "Permite ejecutar juegos de Sega Mega Drive y Sega Genesis directamente desde PlayStation 4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      MegaDrive: "✅ Compatible",
      Genesis: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "pGEN",
      "USB ExFAT",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar pGEN.",
    ],

    usage:
      "Permite cargar juegos de Mega Drive desde una interfaz ligera adaptada a PS4.",

    notes:
      "Incluye opciones de configuración accesibles desde el menú interno del emulador. 【1-1af717】",

    version: "Actual",
    author: "pEMU Team",

    details: [
      {
        title: "Sistema Compatible",
        description:
          "Consola emulada.",

        items: [
          "Sega Mega Drive",
          "Sega Genesis",
          "16 Bits",
          "Retro Gaming",
        ],
      },

      {
        title: "Biblioteca de Juegos",
        description:
          "Selección de ROMs.",

        items: [
          "Listado de juegos.",
          "Carga rápida.",
          "Selección sencilla.",
          "Acceso inmediato.",
        ],
      },

      {
        title: "Genesis Plus GX",
        description:
          "Motor de emulación.",

        items: [
          "Código abierto.",
          "Alta compatibilidad.",
          "Emulación estable.",
          "Optimizado para PS4.",
        ],
      },

      {
        title: "Configuración",
        description:
          "Ajustes disponibles.",

        items: [
          "Botón R1.",
          "Opciones gráficas.",
          "Configuración de audio.",
          "Ajustes personalizados.",
        ],
      },

      {
        title: "Controles",
        description:
          "Compatibilidad.",

        items: [
          "DualShock 4.",
          "Control completo.",
          "Mapeo integrado.",
          "Navegación sencilla.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Compatible con GoldHEN.",
          "Basado en Genesis Plus GX.",
          "Interfaz ligera.",
          "Configuración simple.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Otros emuladores recomendados.",

        items: [
          "pNES",
          "pSNES",
          "pFBN Neo",
          "RetroArch",
          "Batocera PS4",
        ],
      },
    ],
  },
},
// PICO-8
{
  console: "PS4",
  name: "PICO-8",
  image: "img/PS4/pico8.jpg",

  description:
    "Port de PICO-8 para PlayStation 4, una consola virtual diseñada para crear, compartir y jugar pequeños videojuegos indie.",

  website: "https://github.com/voliva/ps4-p8",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/HUoCBDzK#BwSruE0_5HU6wlOqTvAf7A",
    },
    {
      name: "Github Releases",
      url: "https://github.com/voliva/ps4-p8/releases",
    },
  ],

  guide: {
    function:
      "Permite ejecutar y disfrutar juegos desarrollados para la plataforma PICO-8 directamente desde PlayStation 4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      PICO8: "✅ Compatible",
      IndieGames: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "PICO-8",
      "USB ExFAT",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar PICO-8.",
    ],

    usage:
      "Permite acceder a una biblioteca de juegos PICO-8 desde una interfaz adaptada para PS4.",

    notes:
      "PICO-8 está orientado a juegos independientes y proyectos creados por la comunidad. 【1-fa24c1】",

    version: "Actual",
    author: "PICO-8 Community",

    details: [
      {
        title: "¿Qué es PICO-8?",
        description:
          "Consola virtual.",

        items: [
          "Fantasy Console.",
          "Juegos Indie.",
          "Creación de juegos.",
          "Comunidad activa.",
        ],
      },

      {
        title: "Biblioteca de Juegos",
        description:
          "Contenido disponible.",

        items: [
          "Juegos independientes.",
          "Experiencias retro.",
          "Catálogo variado.",
          "Selección sencilla.",
        ],
      },

      {
        title: "Primer Inicio",
        description:
          "Acceso rápido.",

        items: [
          "Abrir PICO-8.",
          "Explorar catálogo.",
          "Seleccionar juego.",
          "Comenzar a jugar.",
        ],
      },

      {
        title: "Interfaz",
        description:
          "Experiencia de usuario.",

        items: [
          "Diseño minimalista.",
          "Acceso rápido.",
          "Navegación sencilla.",
          "Optimizado para PS4.",
        ],
      },

      {
        title: "Juegos Indie",
        description:
          "Contenido principal.",

        items: [
          "Proyectos comunitarios.",
          "Juegos experimentales.",
          "Experiencias retro.",
          "Catálogo en constante crecimiento.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Muy ligero.",
          "Compatible con GoldHEN.",
          "Gran comunidad.",
          "Miles de juegos creados por usuarios.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Otros emuladores y sistemas.",

        items: [
          "pNES",
          "pSNES",
          "pGEN",
          "pFBN Neo",
          "RetroArch",
        ],
      },
    ],
  },
},
// SNESTicles
{
  console: "PS4",
  name: "SNESTicles",
  image: "img/PS4/snesticles.jpg",

  description:
    "Emulador de Super Nintendo para PlayStation 4 que permite ejecutar juegos SNES mediante una interfaz sencilla y ligera.",

  website: "https://github.com/tmaul/SNESticle",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/eVg21RCZ#BvDQUHedChsy4-vBuxb7vA",
    },
    {
      name: "Github Releases",
      url: "https://github.com/tmaul/SNESticle/releases",
    },
  ],

  guide: {
    function:
      "Permite ejecutar juegos clásicos de Super Nintendo directamente desde PlayStation 4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      SNES: "✅ Compatible",
      RetroGaming: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "SNESTicles",
      "USB ExFAT",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar SNESTicles.",
    ],

    usage:
      "Permite seleccionar y ejecutar juegos de Super Nintendo desde una ruta específica de ROMs.",

    notes:
      "Las ROMs deben ubicarse en la carpeta SNES_ROMS para ser detectadas correctamente por el emulador. 【1-69d172】",

    version: "Actual",
    author: "SNESTicles Team",

    details: [
      {
        title: "Sistema Compatible",
        description:
          "Consola emulada.",

        items: [
          "Super Nintendo",
          "SNES",
          "16 Bits",
          "Retro Gaming",
        ],
      },

      {
        title: "Ubicación de ROMs",
        description:
          "Ruta utilizada por el emulador.",

        items: [
          "cdfs:/SNES_ROMS/",
          "Carga manual.",
          "Biblioteca personalizada.",
          "Acceso directo.",
        ],
      },

      {
        title: "Selección de Juegos",
        description:
          "Carga de contenido.",

        items: [
          "Buscar ROM.",
          "Seleccionar juego.",
          "Iniciar emulación.",
          "Carga rápida.",
        ],
      },

      {
        title: "Interfaz",
        description:
          "Experiencia de uso.",

        items: [
          "Diseño ligero.",
          "Navegación sencilla.",
          "Acceso directo.",
          "Uso intuitivo.",
        ],
      },

      {
        title: "Compatibilidad",
        description:
          "Uso principal.",

        items: [
          "Juegos SNES.",
          "DualShock 4.",
          "GoldHEN.",
          "USB ExFAT.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Ligero.",
          "Fácil configuración.",
          "Compatible con GoldHEN.",
          "Ideal para Super Nintendo.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Otros emuladores recomendados.",

        items: [
          "pSNES",
          "pNES",
          "pGEN",
          "pFBN Neo",
          "RetroArch",
        ],
      },
    ],
  },
},
// RetroArch
{
  console: "PS4",
  name: "RetroArch Para PS4",
  image: "img/PS4/retroarch.jpg",

  description:
    "Frontend de emulación para PlayStation 4 que permite ejecutar múltiples sistemas clásicos mediante cores compatibles desde una única aplicación.",

  website: "https://www.retroarch.com/platforms.html",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/2dhFVQIJ#IBrx8LY1l0klzSylwzuu-Q",
    },
  ],

  guide: {
    function:
      "Permite ejecutar múltiples consolas retro desde una única interfaz mediante el sistema de cores de RetroArch.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      RetroGaming: "✅ Compatible",
      USB: "✅ Compatible",
      FTP: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "RetroArch",
      "RetroArch Cores Installer",
      "USB ExFAT",
    ],

    installation: [
      "Instalar RetroArch.",
      "Instalar RetroArch Cores Installer.",
      "Ejecutar Cores Installer.",
      "Abrir RetroArch.",
      "Esperar la creación de carpetas.",
    ],

    usage:
      "Permite cargar distintos sistemas mediante cores y ejecutar juegos retro desde almacenamiento local o USB.",

    notes:
      "Durante el primer inicio se generan automáticamente los directorios necesarios para la configuración del sistema. 【1-986531】",

    version: "Actual",
    author: "Libretro Team",

    details: [
      {
        title: "¿Qué es RetroArch?",
        description:
          "Frontend de emulación.",

        items: [
          "Sistema de cores.",
          "Multiplataforma.",
          "Código abierto.",
          "Gran compatibilidad.",
        ],
      },

      {
        title: "Cores Installer",
        description:
          "Instalación inicial.",

        items: [
          "Instalar cores.",
          "Preparar RetroArch.",
          "Configuración automática.",
          "Instalación recomendada.",
        ],
      },

      {
        title: "Online Updater",
        description:
          "Actualización interna.",

        items: [
          "Update Assets.",
          "Actualizar recursos.",
          "Mejorar compatibilidad.",
          "Mantener sistema actualizado.",
        ],
      },

      {
        title: "Configuración USB",
        description:
          "Uso de juegos desde USB.",

        items: [
          "retroarch.cfg",
          "/data/retroarch",
          "FTP compatible",
          "USB compatible",
        ],
      },

      {
        title: "Sistemas Compatibles",
        description:
          "Algunos de los sistemas disponibles.",

        items: [
          "NES",
          "SNES",
          "Mega Drive",
          "Game Boy",
          "Arcade",
          "PlayStation",
        ],
      },

      {
        title: "Interfaz XMB",
        description:
          "Experiencia de usuario.",

        items: [
          "Menús intuitivos.",
          "Configuración avanzada.",
          "Accesos rápidos.",
          "Personalización.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Todo en una sola aplicación.",
          "Gran cantidad de sistemas.",
          "Compatible con GoldHEN.",
          "Actualizaciones constantes.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Otros sistemas de emulación.",

        items: [
          "Batocera PS4",
          "pFBN Neo",
          "pGEN",
          "pSNES",
          "pNES",
        ],
      },
    ],
  },
},
// MultiGAMES in 1
{
  console: "PS4",
  name: "MultiGAMES in 1",
  image: "img/PS4/multigames-in-1.jpg",

  description:
    "Colección retro para PlayStation 4 que reúne múltiples juegos y sistemas clásicos en una única aplicación lista para jugar.",

  website: "https://x.com/m0ur0ne",

  downloads: [
    {
      name: "Mirror Mediafire vol1",
      url: "https://www.mediafire.com/file/tjrd31qsgr43eeb/MultiGAMESin1-vol1-PS4-PS5.pkg/file",
    },
    {
      name: "Mirror Mediafire vol2",
      url: "https://www.mediafire.com/file/7zim0js9d6nq3gi/MultiGAMESin1-vol2-PS4-PS5.pkg/file",
    },
    {
      name: "Mirror Mediafire vol3",
      url: "https://www.mediafire.com/file/7dqpaoryr4stku2/MultiGAMESin1-vol3-PS4-PS5.pkg/file",
    },
  ],

  guide: {
    function:
      "Permite disfrutar de múltiples juegos retro desde una única aplicación sin necesidad de configurar varios emuladores por separado.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      RetroGaming: "✅ Compatible",
      USB: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "MultiGAMES in 1",
      "USB ExFAT",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar MultiGAMES in 1.",
    ],

    usage:
      "Permite acceder rápidamente a una colección de juegos clásicos mediante una interfaz preconfigurada.",

    notes:
      "Ideal para usuarios que desean una experiencia retro inmediata sin realizar configuraciones adicionales.",

    version: "Actual",
    author: "m0ur0ne",

    details: [
      {
        title: "Todo en Uno",
        description:
          "Experiencia retro simplificada.",

        items: [
          "Juegos preconfigurados.",
          "Acceso rápido.",
          "Interfaz unificada.",
          "Listo para jugar.",
        ],
      },

      {
        title: "Retro Gaming",
        description:
          "Orientado a juegos clásicos.",

        items: [
          "Arcade.",
          "8 Bits.",
          "16 Bits.",
          "Consolas clásicas.",
        ],
      },

      {
        title: "Biblioteca Integrada",
        description:
          "Colección de contenido.",

        items: [
          "Múltiples juegos.",
          "Selección rápida.",
          "Carga sencilla.",
          "Acceso inmediato.",
        ],
      },

      {
        title: "Interfaz",
        description:
          "Experiencia de usuario.",

        items: [
          "Menús intuitivos.",
          "Navegación rápida.",
          "Compatible con DualShock 4.",
          "Diseño simplificado.",
        ],
      },

      {
        title: "Desarrollador",
        description:
          "Proyecto creado por.",

        items: [
          "m0ur0ne",
          "PlayStation 4",
          "Retro Gaming",
          "Multisistema",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Fácil instalación.",
          "Sin configuraciones complejas.",
          "Compatible con GoldHEN.",
          "Gran variedad de juegos.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Otros sistemas de emulación.",

        items: [
          "RetroArch",
          "Batocera PS4",
          "pFBN Neo",
          "pGEN",
          "pSNES",
        ],
      },
    ],
  },
},
// Dolphin PS4
{
  console: "PS4",
  name: "Dolphin PS4",
  image: "img/PS4/dolphin-ps4.jpg",

  description:
    "Port del emulador Dolphin para PlayStation 4 que permite ejecutar juegos de Nintendo GameCube y Nintendo Wii.",

  website: "https://github.com/iHaiDeeZ/DolphinPS4",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/XJJwERDb#texVFtyg08o6wxkzSenpbA",
    },
    {
      name: "Github Releases",
      url: "https://github.com/iHaiDeeZ/DolphinPS4/releases",
    },
  ],

  guide: {
    function:
      "Permite ejecutar juegos de Nintendo GameCube y Nintendo Wii directamente desde PlayStation 4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      GameCube: "✅ Compatible",
      Wii: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "Dolphin PS4",
      "USB ExFAT",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Abrir GoldHEN.",
      "Entrar en Debug Settings.",
      "Abrir Package Installer.",
      "Instalar Dolphin PS4.",
    ],

    usage:
      "Permite cargar juegos compatibles de GameCube y Wii desde almacenamiento interno o USB.",

    notes:
      "La compatibilidad y el rendimiento pueden variar dependiendo del juego y del modelo de consola.",

    version: "Actual",
    author: "iHaiDeeZ",

    details: [
      {
        title: "Sistemas Compatibles",
        description:
          "Consolas soportadas por Dolphin.",

        items: [
          "Nintendo GameCube",
          "Nintendo Wii",
          "GameCube ISO",
          "Wii ISO",
        ],
      },

      {
        title: "Ubicación de Juegos",
        description:
          "Rutas compatibles.",

        items: [
          "/data/DolphinPS4/games",
          "USB:/DolphinPS4/games",
        ],
      },

      {
        title: "Almacenamiento Interno",
        description:
          "Instalación local.",

        items: [
          "/data/DolphinPS4/games",
          "Carga directa.",
          "Mayor estabilidad.",
          "Acceso rápido.",
        ],
      },

      {
        title: "Almacenamiento USB",
        description:
          "Ejecución externa.",

        items: [
          "USB:/DolphinPS4/games",
          "Compatible con ExFAT.",
          "Fácil administración.",
          "Mayor capacidad.",
        ],
      },

      {
        title: "Biblioteca de Juegos",
        description:
          "Gestión de títulos.",

        items: [
          "Detección automática.",
          "Listado de juegos.",
          "Acceso rápido.",
          "Selección sencilla.",
        ],
      },

      {
        title: "Compatibilidad",
        description:
          "Información general.",

        items: [
          "GameCube.",
          "Wii.",
          "DualShock 4.",
          "GoldHEN.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Emulación GameCube.",
          "Emulación Wii.",
          "Compatible con USB.",
          "Compatible con GoldHEN.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Otros sistemas de emulación.",

        items: [
          "RetroArch",
          "Batocera PS4",
          "pFBN Neo",
          "pGEN",
          "pSNES",
        ],
      },
    ],
  },
},
];
