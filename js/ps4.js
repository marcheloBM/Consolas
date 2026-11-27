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
// R2RETRO
{
  console: "PS4",
  name: "R2RETRO",
  image: "img/PS4/r2retro.png",

  description:
    "Frontend de emulación para PlayStation 4 que permite ejecutar juegos de Nintendo 64, Game Boy, Game Boy Color, Game Boy Advance, NES y SNES desde una única interfaz.",

  website: "https://github.com/R2two/R2RETRO",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/LUoE0a7L#W4gPixCtkHFdoT8F0Ka2Dw",
    },
    {
      name: "Github Releases",
      url: "https://github.com/R2two/R2RETRO/releases",
    },
  ],

  guide: {
    function:
      "Permite organizar y ejecutar múltiples sistemas clásicos desde una única aplicación optimizada para PS4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      N64: "✅ Compatible",
      GB: "✅ Compatible",
      GBC: "✅ Compatible",
      GBA: "✅ Compatible",
      NES: "✅ Compatible",
      SNES: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "R2RETRO",
      "USB ExFAT",
    ],

    installation: [
      "Copiar el PKG al USB.",
      "Instalar desde Package Installer.",
      "Ejecutar R2RETRO.",
      "Crear la estructura de carpetas para las ROMs.",
    ],

    usage:
      "Permite cargar juegos retro desde USB o almacenamiento interno mediante una biblioteca unificada.",

    notes:
      "Las ROMs deben colocarse en la estructura de carpetas compatible para que sean detectadas automáticamente. 【1-ab2eb8】",

    version: "Actual",
    author: "R2two",

    details: [
      {
        title: "Sistemas Compatibles",
        description:
          "Plataformas soportadas.",

        items: [
          "Nintendo 64",
          "Game Boy",
          "Game Boy Color",
          "Game Boy Advance",
          "NES",
          "SNES",
        ],
      },

      {
        title: "Prueba Inicial",
        description:
          "Verificar funcionamiento.",

        items: [
          "Abrir Acerca de.",
          "Seleccionar Prueba Nintendo 64.",
          "Comprobar la instalación.",
        ],
      },

      {
        title: "Ubicación de ROMs",
        description:
          "Ruta interna.",

        items: [
          "/data/R2N64/roms/",
          "Detección automática.",
          "Organización por sistema.",
        ],
      },

      {
        title: "Ubicación USB",
        description:
          "Ruta recomendada.",

        items: [
          "R2N64/roms/n64/",
          "R2N64/roms/gb/",
          "R2N64/roms/gbc/",
          "R2N64/roms/gba/",
          "R2N64/roms/nes/",
          "R2N64/roms/snes/",
        ],
      },

      {
        title: "Biblioteca",
        description:
          "Gestión de juegos.",

        items: [
          "TRIÁNGULO buscar juegos.",
          "X ver detalles.",
          "X iniciar juego.",
          "Biblioteca integrada.",
        ],
      },

      {
        title: "Nintendo 64",
        description:
          "Sistema principal.",

        items: [
          "Emulación N64.",
          "Biblioteca integrada.",
          "Carga rápida.",
          "Compatible con DualShock 4.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Multisistema.",
          "Interfaz moderna.",
          "Compatible con GoldHEN.",
          "Organización automática.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Otros sistemas de emulación.",

        items: [
          "RetroArch",
          "Batocera PS4",
          "Dolphin PS4",
          "pFBN Neo",
          "MultiGAMES in 1",
        ],
      },
    ],
  },
},
// Crema
{
  console: "PS4",
  name: "Crema",
  image: "img/PS4/crema.jpg",

  description:
    "Frontend para PlayStation 4 diseñado para gestionar y ejecutar juegos compatibles con CemuPS4, ofreciendo una interfaz optimizada para Wii U.",

  website: "https://github.com/iHaiDeeZ/Crema",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/LMQyDDLR#wQZqjAuG9C_1b-EjPmzyXw",
    },
    {
      name: "Github Releases",
      url: "https://github.com/iHaiDeeZ/Crema/releases",
    },
  ],

  guide: {
    function:
      "Permite administrar bibliotecas de juegos compatibles con CemuPS4 y mejorar la experiencia de uso mediante una interfaz dedicada.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      WiiU: "✅ Compatible",
      CemuPS4: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "Crema",
      "CemuPS4",
      "USB ExFAT",
    ],

    installation: [
      "Instalar Crema.",
      "Preparar la carpeta de juegos.",
      "Copiar los títulos compatibles.",
      "Iniciar la aplicación.",
    ],

    usage:
      "Permite organizar y lanzar juegos compatibles con CemuPS4 desde una interfaz unificada.",

    notes:
      "Puede utilizar cachés de sombreadores para mejorar la experiencia en juegos compatibles. 【1-2c13e4】",

    version: "Actual",
    author: "iHaiDeeZ",

    details: [
      {
        title: "Sistema Compatible",
        description:
          "Plataforma principal.",

        items: [
          "Nintendo Wii U",
          "CemuPS4",
          "GoldHEN",
          "PlayStation 4",
        ],
      },

      {
        title: "Ubicación de Juegos",
        description:
          "Directorios compatibles.",

        items: [
          "/data/CemuPS4/games",
          "usb0/CemuPS4/games",
        ],
      },

      {
        title: "Shaders Cache",
        description:
          "Caché de sombreadores.",

        items: [
          "shaders.zip",
          "/data/crema/cache/shaders/transferable",
          "Cemu 1.25",
          "Cemu 1.26",
          "Cemu 2.x",
        ],
      },

      {
        title: "Biblioteca",
        description:
          "Gestión de juegos.",

        items: [
          "Detección automática.",
          "Acceso rápido.",
          "Organización sencilla.",
          "Lanzamiento directo.",
        ],
      },

      {
        title: "Almacenamiento",
        description:
          "Métodos compatibles.",

        items: [
          "Disco interno.",
          "USB ExFAT.",
          "Biblioteca local.",
          "Carga rápida.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Integración con CemuPS4.",
          "Compatible con Wii U.",
          "Interfaz moderna.",
          "Compatible con GoldHEN.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Otros sistemas de emulación.",

        items: [
          "Dolphin PS4",
          "RetroArch",
          "Batocera PS4",
          "R2RETRO",
          "pFBN Neo",
        ],
      },
    ],
  },
},
// PS4SX2
{
  console: "PS4",
  name: "PS4SX2",
  image: "img/PS4/ps4sx2.jpg",

  description:
    "Emulador de PlayStation 2 para PlayStation 4 basado en PCSX2, diseñado para ejecutar juegos PS2 desde almacenamiento interno.",

  website: "https://github.com/Phoenixx1202/PS4SX2",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/3No2RDTB#sMmglX08EUGmrS6wRy5p8A",
    },
    {
      name: "Github Releases",
      url: "https://github.com/Phoenixx1202/PS4SX2/releases",
    },
  ],

  guide: {
    function:
      "Permite ejecutar juegos de PlayStation 2 directamente desde PlayStation 4 mediante una interfaz optimizada para consola.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      PS2: "✅ Compatible",
      BIOS: "✅ Requerido",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "PS4SX2",
      "BIOS de PlayStation 2",
      "Juegos compatibles",
    ],

    installation: [
      "Instalar PS4SX2.",
      "Copiar la BIOS requerida.",
      "Copiar los juegos compatibles.",
      "Agregar carátulas opcionales.",
      "Abrir la aplicación.",
    ],

    usage:
      "Permite organizar y ejecutar juegos de PlayStation 2 desde una biblioteca integrada.",

    notes:
      "Para una mejor experiencia se recomienda configurar correctamente BIOS, carátulas y biblioteca de juegos. 【1-d09956】",

    version: "Actual",
    author: "Phoenixx1202",

    details: [
      {
        title: "Sistema Compatible",
        description:
          "Consola emulada.",

        items: [
          "PlayStation 2",
          "PS2",
          "Retro Gaming",
          "Biblioteca integrada",
        ],
      },

      {
        title: "Ubicación de Juegos",
        description:
          "Ruta utilizada por el emulador.",

        items: [
          "/data/PS4SX2/roms",
          "Detección automática",
          "Biblioteca local",
        ],
      },

      {
        title: "Ubicación BIOS",
        description:
          "Archivos requeridos.",

        items: [
          "/data/PS4SX2/bios",
          "Carga automática",
          "Configuración inicial",
        ],
      },

      {
        title: "Carátulas",
        description:
          "Biblioteca visual.",

        items: [
          "/data/PS4SX2/covers",
          "Carátulas personalizadas",
          "Identificación rápida",
          "Biblioteca organizada",
        ],
      },

      {
        title: "Biblioteca de Juegos",
        description:
          "Gestión integrada.",

        items: [
          "Listado automático.",
          "Acceso rápido.",
          "Navegación sencilla.",
          "Carga directa.",
        ],
      },

      {
        title: "Interfaz",
        description:
          "Experiencia de usuario.",

        items: [
          "Diseño optimizado.",
          "Compatible con DualShock 4.",
          "Biblioteca visual.",
          "Acceso directo.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Emulación PlayStation 2.",
          "Biblioteca integrada.",
          "Compatible con GoldHEN.",
          "Soporte para carátulas.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Otros sistemas de emulación.",

        items: [
          "RetroArch",
          "Batocera PS4",
          "Dolphin PS4",
          "R2RETRO",
          "pFBN Neo",
        ],
      },
    ],
  },
},
// HENkaku PS4
{
  console: "PS4",
  name: "HENkaku PS4",
  image: "img/PS4/henkaku-ps4.jpg",

  description:
    "Aplicación para PlayStation 4 que permite ejecutar un entorno basado en PS Vita y administrar juegos compatibles directamente desde la consola.",

  website: "https://github.com/iHaiDeeZ/HENkaku-PS4",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/yQZQnR5T#RFrSLyhuQww1G3Cr5fJjZg",
    },
    {
      name: "Github Releases",
      url: "https://github.com/iHaiDeeZ/HENkaku-PS4/releases",
    },
  ],

  guide: {
    function:
      "Permite preparar un entorno PS Vita dentro de PS4 para ejecutar aplicaciones y juegos compatibles.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      PSVita: "✅ Compatible",
      Homebrew: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "HENkaku PS4",
      "PSP2UPDAT.PUP",
      "PSVUPDAT.PUP",
    ],

    installation: [
      "Instalar HENkaku PS4.",
      "Copiar los archivos requeridos.",
      "Abrir la aplicación.",
      "Completar la instalación inicial.",
    ],

    usage:
      "Permite instalar los archivos necesarios y ejecutar juegos compatibles desde la biblioteca integrada.",

    notes:
      "La primera ejecución puede tardar mientras se generan los accesos y se prepara la biblioteca de juegos. 【1-a0b2e8】",

    version: "Actual",
    author: "iHaiDeeZ",

    details: [
      {
        title: "Archivos Requeridos",
        description:
          "Instalación inicial.",

        items: [
          "PSP2UPDAT.PUP",
          "PSVUPDAT.PUP",
          "Instalación obligatoria",
          "Preparación inicial",
        ],
      },

      {
        title: "Ruta de Instalación",
        description:
          "Ubicación de archivos.",

        items: [
          "/data/HENkaku/install",
          "PSP2UPDAT.PUP",
          "PSVUPDAT.PUP",
        ],
      },

      {
        title: "Instalación",
        description:
          "Orden recomendado.",

        items: [
          "Instalar PSP2UPDAT.PUP",
          "Instalar PSVUPDAT.PUP",
          "Cerrar aplicación",
          "Reiniciar entorno",
        ],
      },

      {
        title: "Ubicación de Juegos",
        description:
          "Biblioteca principal.",

        items: [
          "/data/HENkaku/fs/ux0/app",
          "Copiar juegos",
          "Actualizar biblioteca",
          "Detectar contenido",
        ],
      },

      {
        title: "Primer Inicio",
        description:
          "Carga inicial.",

        items: [
          "Abrir burbujas.",
          "Generar accesos.",
          "Esperar primera carga.",
          "Iniciar juegos.",
        ],
      },

      {
        title: "Compatibilidad",
        description:
          "Entorno emulado.",

        items: [
          "PS Vita.",
          "Aplicaciones compatibles.",
          "Homebrew.",
          "Biblioteca integrada.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Entorno PS Vita.",
          "Biblioteca visual.",
          "Compatible con GoldHEN.",
          "Instalación sencilla.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Otros sistemas de emulación.",

        items: [
          "PS4SX2",
          "Dolphin PS4",
          "Crema",
          "RetroArch",
          "Batocera PS4",
        ],
      },
    ],
  },
},
// Crear Avatar
{
  console: "PS4",
  name: "Crear Avatar",
  image: "img/PS4/crear-avatar.jpg",

  description:
    "Guía para crear e instalar avatares personalizados en PlayStation 4 de forma offline, sin necesidad de iniciar sesión en PSN.",

  website: null,

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/DR4WQKbT#5XkSIMYG_FzU6SrxrPAy3g",
    },
  ],

  guide: {
    function:
      "Permite crear archivos de avatar personalizados e instalarlos en perfiles locales de PlayStation 4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      Offline: "✅ Compatible",
      PSN: "❌ No requerido",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "PS4 Xplorer",
      "PC con Windows",
      "USB ExFAT",
    ],

    installation: [
      "Descargar las herramientas.",
      "Crear el avatar personalizado.",
      "Exportar archivo .xavatar.",
      "Copiar al USB.",
      "Instalar desde PS4 Xplorer.",
    ],

    usage:
      "Permite personalizar la imagen de perfil de usuarios locales mediante avatares personalizados.",

    notes:
      "Las imágenes cuadradas ofrecen los mejores resultados para generar avatares personalizados. 【1-89dfa3】",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Método Automático",
        description:
          "Creación mediante PS4 Avatar Maker.",

        items: [
          "PS4 Avatar Maker - Lapy",
          "Export Avatar",
          "Generar archivo .xavatar",
          "Instalación sencilla",
        ],
      },

      {
        title: "Instalación en PS4",
        description:
          "Aplicar avatar creado.",

        items: [
          "Copiar a USB.",
          "Abrir PS4 Xplorer.",
          "Seleccionar usuario.",
          "Instalar avatar.",
        ],
      },

      {
        title: "Método Manual",
        description:
          "Creación personalizada.",

        items: [
          "Editar imágenes.",
          "Modificar online.json.",
          "Preparar archivos.",
          "Transferir mediante FTP.",
        ],
      },

      {
        title: "Resoluciones",
        description:
          "Archivos utilizados.",

        items: [
          "avatar64.dds",
          "avatar128.dds",
          "avatar260.dds",
          "avatar440.dds",
        ],
      },

      {
        title: "Imagen Principal",
        description:
          "Avatar principal.",

        items: [
          "Avatar.png",
          "440x400 píxeles",
          "Imagen cuadrada recomendada",
        ],
      },

      {
        title: "Ubicación Manual",
        description:
          "Ruta para FTP.",

        items: [
          "/system_data/priv/cache/profile",
          "Transferencia FTP",
          "Aplicación manual",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Sin PSN.",
          "Totalmente offline.",
          "Avatares personalizados.",
          "Compatible con GoldHEN.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas de personalización.",

        items: [
          "Avatar Changer",
          "Icon Mask",
          "PS4 Xplorer",
          "GoldHEN",
        ],
      },
    ],
  },
},
// Sega Saturn FPKG
{
  console: "PS4",
  name: "Sega Saturn FPKG",
  image: "img/PS4/sega-saturn-fpkg.jpg",

  description:
    "Guía para convertir juegos de Sega Saturn a formato FPKG e instalarlos directamente en PlayStation 4.",

  website: "https://www.psx-place.com/threads/update-v1-2-saturn-fpkg-convert-saturn-games-into-ps4-fpkgs.36031/",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/aMQUDBjT#t8kcfOAYpjZzOIKqbP5dZA",
    },
  ],

  guide: {
    function:
      "Permite convertir juegos de Sega Saturn en paquetes FPKG compatibles con PlayStation 4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      SegaSaturn: "✅ Compatible",
      FPKG: "✅ Compatible",
    },

    requirements: [
      "PC con Windows",
      "SATURN-FPKG",
      "Juego Sega Saturn",
      "USB ExFAT",
    ],

    installation: [
      "Descargar SATURN-FPKG.",
      "Preparar las imágenes del juego.",
      "Crear el paquete FPKG.",
      "Copiar el PKG al USB.",
      "Instalar en PS4.",
    ],

    usage:
      "Permite generar paquetes instalables para ejecutar juegos de Sega Saturn desde el menú principal de PS4.",

    notes:
      "Cada juego debe utilizar un NP Title único para evitar conflictos durante la instalación. 【1-5cd73a】",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Herramienta Utilizada",
        description:
          "Conversión a FPKG.",

        items: [
          "SATURN-FPKG",
          "Conversión automática",
          "Compatible con PS4",
          "Formato instalable",
        ],
      },

      {
        title: "Imágenes Requeridas",
        description:
          "Material gráfico.",

        items: [
          "icon0.png",
          "512x512 píxeles",
          "pic1.png",
          "1920x1080 píxeles",
        ],
      },

      {
        title: "Configuración",
        description:
          "Preparación del proyecto.",

        items: [
          "Seleccionar juego.",
          "Verificar NP Title.",
          "Agregar icono.",
          "Agregar splash.",
        ],
      },

      {
        title: "Generar FPKG",
        description:
          "Creación del paquete.",

        items: [
          "Create fPKG",
          "Guardar PKG",
          "Esperar confirmación",
          "Instalación posterior",
        ],
      },

      {
        title: "Instalación en PS4",
        description:
          "Proceso final.",

        items: [
          "USB ExFAT",
          "Package Installer",
          "Instalar PKG",
          "Ejecutar juego",
        ],
      },

      {
        title: "Sistema Compatible",
        description:
          "Plataforma soportada.",

        items: [
          "Sega Saturn",
          "32 Bits",
          "Retro Gaming",
          "Compatible con PS4",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Instalación directa.",
          "Integración con PS4.",
          "Biblioteca personalizada.",
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
          "PS4SX2",
          "Dolphin PS4",
          "pFBN Neo",
        ],
      },
    ],
  },
},
// Crear Tus Propios Trucos
{
  console: "PS4",
  name: "Crear Tus Propios Trucos",
  image: "img/PS4/crear-trucos.jpg",

  description:
    "Guía para crear cheats personalizados en PlayStation 4 utilizando PS4debug y herramientas de búsqueda de memoria desde un PC.",

  website: null,

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/LA4RkbAJ#6uSdFAdu7-GUXknH9q-6uA",
    },
  ],

  guide: {
    function:
      "Permite crear archivos de trucos personalizados para juegos de PS4 mediante análisis y edición de memoria.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4debug: "✅ Compatible",
      PS4: "✅ Compatible",
      Cheats: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "PS4debug",
      "PC con Windows",
      "PS4 Games Reaper",
    ],

    installation: [
      "Activar PS4debug.",
      "Anotar la IP de la consola.",
      "Abrir el juego a modificar.",
      "Ejecutar PS4 Games Reaper.",
      "Conectar con la PS4.",
    ],

    usage:
      "Permite localizar valores en memoria y convertirlos en cheats reutilizables para otros usuarios.",

    notes:
      "Es recomendable realizar pruebas en varios momentos del juego para localizar correctamente los valores buscados. 【1-b45679】",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Herramienta Utilizada",
        description:
          "Software principal.",

        items: [
          "PS4 Games Reaper",
          "PS4debug",
          "Análisis de memoria",
          "Creación de cheats",
        ],
      },

      {
        title: "Conectar con PS4",
        description:
          "Preparación inicial.",

        items: [
          "Activar PS4debug.",
          "Anotar IP.",
          "Conectar desde PC.",
          "Detectar juego abierto.",
        ],
      },

      {
        title: "Buscar Valores",
        description:
          "Escaneo de memoria.",

        items: [
          "First Scan",
          "Next Scan",
          "4 Bytes",
          "Select All",
        ],
      },

      {
        title: "Editar Valores",
        description:
          "Modificar datos.",

        items: [
          "Value",
          "Cambiar cantidad.",
          "Probar resultado.",
          "Verificar cambios.",
        ],
      },

      {
        title: "Bloquear Valor",
        description:
          "Cheat permanente.",

        items: [
          "Lock",
          "Congelar valor",
          "Mantener cantidad",
          "Activación continua",
        ],
      },

      {
        title: "Guardar Cheat",
        description:
          "Compartir resultados.",

        items: [
          "Address",
          "CHT Legacy",
          "New Address",
          "Guardar .cht",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Crear cheats propios.",
          "Compatible con PS4debug.",
          "Guardar archivos .cht.",
          "Compartir con otros usuarios.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "GoldHEN Cheats Manager",
          "PS4debug",
          "GoldHEN",
          "PS4 Toolset",
          "PS4 Xplorer",
        ],
      },
    ],
  },
},
// Enviar PKG a PS4
{
  console: "PS4",
  name: "Enviar PKG a PS4",
  image: "img/PS4/enviar-pkg-ps4.jpg",

  description:
    "Guía para transferir e instalar archivos PKG desde un PC a PlayStation 4 mediante la red local utilizando Remote PKG Sender.",

  website: "https://github.com/Gkiokan/ps4-remote-pkg-sender",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/CI4jVQSb#rAUvb2zzjFwhJj24tFcOig",
    },
    {
      name: "Github Releases",
      url: "https://github.com/Gkiokan/ps4-remote-pkg-sender/releases",
    },
  ],

  guide: {
    function:
      "Permite enviar e instalar archivos PKG desde un ordenador directamente a PlayStation 4 sin utilizar dispositivos USB.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      LAN: "✅ Compatible",
      WiFi: "✅ Compatible",
      PKG: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "Remote PKG Installer",
      "PS4 Remote PKG Sender",
      "PC conectado a la misma red",
    ],

    installation: [
      "Instalar Remote PKG Installer en PS4.",
      "Instalar PS4 Remote PKG Sender en PC.",
      "Configurar las direcciones IP.",
      "Verificar la conexión.",
      "Enviar los PKG a la consola.",
    ],

    usage:
      "Permite instalar juegos, actualizaciones y aplicaciones directamente desde el PC mediante la red local.",

    notes:
      "Para archivos grandes se recomienda utilizar una conexión LAN cableada para mejorar la estabilidad de la transferencia. 【1-6d65b1】",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Software Utilizado",
        description:
          "Herramientas necesarias.",

        items: [
          "Remote PKG Installer",
          "PS4 Remote PKG Sender",
          "Red local",
          "GoldHEN",
        ],
      },

      {
        title: "Configuración",
        description:
          "Preparación inicial.",

        items: [
          "IP del PC.",
          "IP de la PS4.",
          "PKG Base Path.",
          "Apply.",
        ],
      },

      {
        title: "Comprobaciones",
        description:
          "Verificación de conexión.",

        items: [
          "Check Server.",
          "Check PS4.",
          "Estado del servicio.",
          "Validar comunicación.",
        ],
      },

      {
        title: "Biblioteca PKG",
        description:
          "Detección de contenido.",

        items: [
          "Scan sub directories.",
          "Detectar PKG.",
          "Organizar biblioteca.",
          "Preparar envíos.",
        ],
      },

      {
        title: "Enviar PKG",
        description:
          "Transferencia a la consola.",

        items: [
          "Agregar a la cola.",
          "Processing Center.",
          "Iniciar envío.",
          "Instalación automática.",
        ],
      },

      {
        title: "Instalación Automática",
        description:
          "Resultado final.",

        items: [
          "Transferencia directa.",
          "Instalación automática.",
          "Sin USB.",
          "Gestión remota.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "No requiere USB.",
          "Ideal para PKG grandes.",
          "Compatible con GoldHEN.",
          "Instalación remota.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "Remote PKG Installer",
          "ezRemote Client",
          "PS4 Xplorer",
          "GoldHEN",
          "Homebrew Store",
        ],
      },
    ],
  },
},
// Duxas PS4 Patch Repackager
{
  console: "PS4",
  name: "Duxas PS4 Patch Repackager",
  image: "img/PS4/duxas-ps4-patch-repackager.jpg",

  description:
    "Herramienta para PlayStation 4 que permite reconstruir actualizaciones PKG y solucionar errores de instalación como CE-36434-0.",

  website: null,

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/uUpRlapL#TCLZb4qqMdg_U2h4rpAqMw",
    },
  ],

  guide: {
    function:
      "Permite recombinar un juego y su actualización para generar un nuevo PKG compatible con PlayStation 4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      PKG: "✅ Compatible",
      Patches: "✅ Compatible",
    },

    requirements: [
      "PC con Windows",
      "Juego PKG",
      "Patch PKG",
      "Duxas PS4 Patch Repackager",
    ],

    installation: [
      "Descargar la herramienta.",
      "Extraer los archivos.",
      "Instalar dependencias necesarias.",
      "Ejecutar Duxas PS4 Patch Repackager.",
    ],

    usage:
      "Permite seleccionar el PKG del juego y el PKG del parche para generar un nuevo paquete corregido.",

    notes:
      "Algunos juegos pueden no procesarse correctamente y requerir diferentes versiones o pruebas adicionales. 【1-50a1cc】",

    version: "Tutorial",
    author: "Duxa",

    details: [
      {
        title: "¿Qué Soluciona?",
        description:
          "Errores comunes.",

        items: [
          "CE-36434-0",
          "Errores de actualización",
          "Problemas de instalación",
          "Parches incompatibles",
        ],
      },

      {
        title: "Archivos Necesarios",
        description:
          "Elementos requeridos.",

        items: [
          "Juego PKG",
          "Patch PKG",
          "Duxas Repackager",
          "Dependencias",
        ],
      },

      {
        title: "Dependencias",
        description:
          "Archivos adicionales.",

        items: [
          "Carpeta Dependencies",
          "README.txt",
          "Instalación previa",
          "Componentes requeridos",
        ],
      },

      {
        title: "Reconstrucción",
        description:
          "Proceso principal.",

        items: [
          "Seleccionar GAME.",
          "Seleccionar PATCH.",
          "Presionar GO.",
          "Guardar resultado.",
        ],
      },

      {
        title: "Guardar PKG",
        description:
          "Recomendación.",

        items: [
          "Carpetas sin espacios.",
          "Ruta sencilla.",
          "Evitar errores.",
          "Guardar resultado final.",
        ],
      },

      {
        title: "Instalación",
        description:
          "Uso final.",

        items: [
          "Copiar PKG al USB.",
          "Abrir Package Installer.",
          "Instalar paquete.",
          "Verificar funcionamiento.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Soluciona CE-36434-0.",
          "Compatible con actualizaciones.",
          "Proceso sencillo.",
          "Compatible con GoldHEN.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "Patch Installer",
          "Remote PKG Installer",
          "Enviar PKG a PS4",
          "PS4 Xplorer",
          "GoldHEN",
        ],
      },
    ],
  },
},
// PARAM.SFO Editor
{
  console: "PS4",
  name: "PARAM.SFO Editor",
  image: "img/PS4/param-sfo-editor.jpg",

  description:
    "Herramienta para editar archivos PARAM.SFO y modificar información de juegos y aplicaciones de PlayStation.",

  website: "https://github.com/xXxTheDarkprogramerxXx/PS3Tools",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/nd5zVL5B#FGrW1us2UIyvtVzwVpEqxQ",
    },
    {
      name: "Github Releases",
      url: "https://github.com/xXxTheDarkprogramerxXx/PS3Tools/releases/",
    },
  ],

  guide: {
    function:
      "Permite analizar y modificar archivos PARAM.SFO utilizados por juegos y aplicaciones de PlayStation.",

    compatibility: {
      PS3: "✅ Compatible",
      PSVita: "✅ Compatible",
      PS4: "✅ Compatible",
      PARAMSFO: "✅ Compatible",
    },

    requirements: [
      "PC con Windows",
      "PARAM.SFO Editor",
      "Archivo PARAM.SFO",
    ],

    installation: [
      "Descargar PARAM.SFO Editor.",
      "Extraer los archivos.",
      "Ejecutar PARAM.SFO_Editor.exe.",
      "Abrir el archivo PARAM.SFO.",
    ],

    usage:
      "Permite visualizar y editar la información almacenada dentro de archivos PARAM.SFO.",

    notes:
      "Antes de modificar cualquier archivo se recomienda conservar una copia de seguridad del original. 【1-c96f29】",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "¿Qué es PARAM.SFO?",
        description:
          "Archivo de configuración.",

        items: [
          "Información del juego.",
          "Datos de la aplicación.",
          "Configuración interna.",
          "Metadatos.",
        ],
      },

      {
        title: "Sistemas Compatibles",
        description:
          "Plataformas soportadas.",

        items: [
          "PS3",
          "PS Vita",
          "PS4",
          "Homebrew",
        ],
      },

      {
        title: "Abrir Archivo",
        description:
          "Carga de información.",

        items: [
          "Seleccionar PARAM.SFO.",
          "Abrir archivo.",
          "Leer información.",
          "Visualizar parámetros.",
        ],
      },

      {
        title: "Información Disponible",
        description:
          "Datos editables.",

        items: [
          "Title ID",
          "Nombre",
          "Versión",
          "Datos internos",
        ],
      },

      {
        title: "Modificar Parámetros",
        description:
          "Editar contenido.",

        items: [
          "Cambiar valores.",
          "Editar información.",
          "Modificar configuraciones.",
          "Aplicar cambios.",
        ],
      },

      {
        title: "Guardar Cambios",
        description:
          "Exportación final.",

        items: [
          "Botón Save.",
          "Guardar archivo.",
          "Reemplazar PARAM.SFO.",
          "Mantener respaldo.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Edición sencilla.",
          "Compatible con PS3.",
          "Compatible con PS Vita.",
          "Compatible con PS4.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "Duxas PS4 Patch Repackager",
          "PS4 Toolset",
          "PS4 Xplorer",
          "GoldHEN",
          "Patch Installer",
        ],
      },
    ],
  },
},
// Dump de Juegos PS4
{
  console: "PS4",
  name: "Dump de Juegos PS4",
  image: "img/PS4/dump-juegos-ps4.jpg",

  description:
    "Guía para realizar copias de seguridad de juegos de PlayStation 4 mediante Itemzflow, FTP Dump y herramientas de generación de PKG.",

  website: null ,

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/2MYViAbS#W5tzR01GP44eoU0tsDpmdg",
    },
    {
      name: "Github ftpdump",
      url: "https://github.com/hippie68/ftpdump",
    },
    {
      name: "Github PS4-Fake-PKG-Tools-3.87",
      url: "https://github.com/CyB1K/PS4-Fake-PKG-Tools-3.87",
    },
  ],

  guide: {
    function:
      "Permite crear copias de seguridad de juegos físicos o instalados y convertirlos en paquetes instalables para PS4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      FTP: "✅ Compatible",
      PKG: "✅ Compatible",
      USB: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",    
      "USB ExFAT",
      "Itemzflow Game Manager",
      "PS4 Fake PKG Tools",
      "PC con Windows o Linux",
    ],

    installation: [
      "Preparar el almacenamiento USB.",
      "Seleccionar el método de dump.",
      "Copiar el contenido del juego.",
      "Generar el archivo GP4.",
      "Crear el PKG final.",
    ],

    usage:
      "Permite respaldar juegos y convertirlos a formato PKG para reinstalación o almacenamiento.",

    notes:
      "Algunos métodos requieren herramientas adicionales para reconstruir correctamente el PKG y verificar archivos de trofeos. 【1-3796b9】",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Método Itemzflow",
        description:
          "Copiado desde la consola.",

        items: [
          "Disco original.",
          "USB ExFAT.",
          "Función Dump.",
          "Proceso integrado.",
        ],
      },

      {
        title: "Método FTP Dump",
        description:
          "Transferencia por red.",

        items: [
          "FTP Payload.",
          "Enable BinLoader.",
          "ftpdump.",
          "Linux o Windows.",
        ],
      },

      {
        title: "Método Game Dumper",
        description:
          "Payloads dedicados.",

        items: [
          "GAME-Dumper.",
          "UPDATE-Dumper.",
          "Dump automático.",
          "Exportación USB.",
        ],
      },

      {
        title: "Creación GP4",
        description:
          "Preparación del proyecto.",

        items: [
          "gengp4_app",
          "SAVE.GP4",
          "Proyecto PKG",
          "Verificación previa",
        ],
      },

      {
        title: "Orbis Pub Gen",
        description:
          "Creación del PKG.",

        items: [
          "orbis-pub-gen.exe",
          "Open GP4",
          "Build",
          "Modifiable Package",
        ],
      },

      {
        title: "Trofeos",
        description:
          "Comprobación de archivos.",

        items: [
          "TROPHY.TRP",
          "/user/trophy/conf",
          "Verificación manual",
          "Corrección de errores",
        ],
      },

      {
        title: "Herramientas Utilizadas",
        description:
          "Programas recomendados.",

        items: [
          "Itemzflow",
          "PS4 Fake PKG Tools",
          "ftpdump",
          "Orbis Pub Gen",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Copias de seguridad.",
          "Creación de PKG.",
          "Compatible con GoldHEN.",
          "Múltiples métodos disponibles.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "Itemzflow Game Manager",
          "PS4 Xplorer",
          "Duxas PS4 Patch Repackager",
          "PARAM.SFO Editor",
          "GoldHEN",
        ],
      },
    ],
  },
},
// Crear Accesos Directos
{
  console: "PS4",
  name: "Crear Accesos Directos",
  image: "img/PS4/crear-accesos-directos.jpg",

  description:
    "Guía para crear accesos directos personalizados dentro del menú de notificaciones de PlayStation 4.",

  website: "https://sqlitebrowser.org/",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/DMBCzILQ#dGzMdVWS_jgAz8EJdY-FJg",
    },
  ],

  guide: {
    function:
      "Permite crear accesos directos personalizados editando la base de datos de notificaciones de PS4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      FTP: "✅ Compatible",
      SQLite: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "FTP Server",
      "DB Browser for SQLite",
      "PC con Windows",
    ],

    installation: [
      "Activar FTP en la consola.",
      "Copiar notification.db al PC.",
      "Instalar DB Browser for SQLite.",
      "Editar los accesos personalizados.",
      "Reemplazar el archivo modificado.",
    ],

    usage:
      "Permite crear accesos directos personalizados para abrir enlaces y servicios desde el panel de notificaciones.",

    notes:
      "Se recomienda guardar una copia de seguridad de notification.db antes de realizar modificaciones. 【1-6bda89】",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Archivo Utilizado",
        description:
          "Base de datos principal.",

        items: [
          "notification.db",
          "SQLite",
          "Base de datos PS4",
          "Personalización",
        ],
      },

      {
        title: "Ubicación del Archivo",
        description:
          "Ruta dentro de PS4.",

        items: [
          "/system_data/priv/mms",
          "notification.db",
          "Acceso mediante FTP",
          "Copia de seguridad",
        ],
      },

      {
        title: "DB Browser",
        description:
          "Herramienta utilizada.",

        items: [
          "Abrir base de datos.",
          "Editar registros.",
          "Guardar cambios.",
          "Exportar modificaciones.",
        ],
      },

      {
        title: "Título Personalizado",
        description:
          "Nombre del acceso directo.",

        items: [
          "Campo subject.",
          "Texto personalizado.",
          "Nombre visible.",
          "Acceso identificado.",
        ],
      },

      {
        title: "Icono Personalizado",
        description:
          "Imagen del acceso.",

        items: [
          "Campo title_icon.",
          "PNG 512x512.",
          "URL de imagen.",
          "Icono personalizado.",
        ],
      },

      {
        title: "Enlace de Destino",
        description:
          "Acción del acceso.",

        items: [
          "Campo action_uri.",
          "Página web.",
          "Servicio online.",
          "Acceso directo.",
        ],
      },

      {
        title: "Guardar Cambios",
        description:
          "Aplicación final.",

        items: [
          "Guardar base de datos.",
          "Subir mediante FTP.",
          "Reemplazar archivo.",
          "Revisar notificaciones.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Totalmente personalizable.",
          "Acceso rápido.",
          "Compatible con GoldHEN.",
          "Integración con notificaciones.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "Notification Shortcuts",
          "Avatar Changer",
          "PS4 Xplorer",
          "ezRemote Client",
          "GoldHEN",
        ],
      },
    ],
  },
},
// Crear Juegos PS1 y PSP
{
  console: "PS4",
  name: "Crear Juegos PS1 y PSP",
  image: "img/PS4/crear-ps1-psp.jpg",

  description:
    "Guía para convertir juegos de PlayStation 1 y PSP a formato FPKG e instalarlos directamente en PlayStation 4.",

  website: "https://github.com/John-K/pspdecrypt/",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/LIZRjazC#Y3j6zVdm7zgjx6LW_cqL6Q",
    },
    {
      name: "logic-sunrise.com",
      url: "https://www.logic-sunrise.com/news-1162226-ps4-psx-2-ps4-v10-vos-iso-ps1-sur-ps4.html",
    },
    {
      name: "Github Releases",
      url: "https://github.com/John-K/pspdecrypt/releases",
    },
  ],

  guide: {
    function:
      "Permite crear paquetes instalables de juegos PS1 y PSP compatibles con PlayStation 4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS1: "✅ Compatible",
      PSP: "✅ Compatible",
      FPKG: "✅ Compatible",
    },

    requirements: [
      "PC con Windows",
      "Herramientas PS1 y PSP",
      "Juego PS1 o PSP",
      "USB ExFAT",
    ],

    installation: [
      "Descargar las herramientas.",
      "Preparar el juego de origen.",
      "Crear el paquete FPKG.",
      "Copiar al USB.",
      "Instalar en la consola.",
    ],

    usage:
      "Permite transformar juegos clásicos en aplicaciones instalables para PS4.",

    notes:
      "Los juegos de PS1 suelen tener una compatibilidad superior a los juegos de PSP según la guía original. 【1-ddee40】",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Compatibilidad",
        description:
          "Sistemas soportados.",

        items: [
          "PlayStation 1",
          "PlayStation Portable",
          "FPKG",
          "PS4",
        ],
      },

      {
        title: "Juegos PSP",
        description:
          "Conversión sencilla.",

        items: [
          "ISO compatible",
          "No compatible con CSO",
          "Create fPKG",
          "Instalación directa",
        ],
      },

      {
        title: "Juegos PS1",
        description:
          "Creación automática.",

        items: [
          "Menú por comandos",
          "Proceso guiado",
          "Generación automática",
          "FPKG listo para instalar",
        ],
      },

      {
        title: "Herramientas Utilizadas",
        description:
          "Software principal.",

        items: [
          "pspdecrypt",
          "PS1 Creator",
          "Conversión FPKG",
          "Generador automático",
        ],
      },

      {
        title: "Proceso PSP",
        description:
          "Pasos principales.",

        items: [
          "Seleccionar ISO",
          "Configurar proyecto",
          "Create fPKG",
          "Guardar resultado",
        ],
      },

      {
        title: "Proceso PS1",
        description:
          "Pasos principales.",

        items: [
          "Copiar juego",
          "Ejecutar script",
          "Elegir opción 1",
          "Generar paquete",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Instalación directa.",
          "Biblioteca integrada.",
          "Compatible con GoldHEN.",
          "Mantiene formato PKG.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas de emulación.",

        items: [
          "RetroArch",
          "PS4SX2",
          "Sega Saturn FPKG",
          "Batocera PS4",
          "MultiGAMES in 1",
        ],
      },
    ],
  },
},
// Remote Store
{
  console: "PS4",
  name: "Remote Store",
  image: "img/PS4/remote-store.jpg",

  description:
    "Guía para instalar juegos y aplicaciones PKG desde un servidor local utilizando Homebrew Store en PlayStation 4.",

  website: "https://github.com/LightningMods/Store-CDN-Tool",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/DJgU2LiA#hwAQrNVUWyse4eEOdCqD-w",
    },
    {
      name: "Github Releases",
      url: "https://github.com/LightningMods/Store-CDN-Tool/releases",
    },
  ],

  guide: {
    function:
      "Permite servir archivos PKG desde un ordenador y mostrarlos directamente dentro de Homebrew Store para su instalación.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      HomebrewStore: "✅ Compatible",
      LAN: "✅ Compatible",
      PKG: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "Homebrew Store",
      "Store CDN Tool",
      "PC conectado a la misma red",
    ],

    installation: [
      "Instalar Homebrew Store.",
      "Preparar Store CDN Tool.",
      "Agregar archivos PKG.",
      "Iniciar el servidor local.",
      "Configurar Homebrew Store.",
    ],

    usage:
      "Permite visualizar e instalar paquetes PKG almacenados en el ordenador directamente desde Homebrew Store.",

    notes:
      "Recuerda restaurar la URL original de Homebrew Store cuando finalices el uso del servidor local. 【1-48e41a】",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Archivos Necesarios",
        description:
          "Preparación inicial.",

        items: [
          "homebrew.elf",
          "homebrew.elf.sig",
          "remote.md5",
          "Store CDN Tool",
        ],
      },

      {
        title: "Servidor Local",
        description:
          "Configuración del PC.",

        items: [
          "Store CDN Tool.exe",
          "IP del PC",
          "Pkg Directory",
          "Start WebServer",
        ],
      },

      {
        title: "Biblioteca PKG",
        description:
          "Agregar contenido.",

        items: [
          "Add Package",
          "Detectar PKG",
          "Catálogo local",
          "Gestión automática",
        ],
      },

      {
        title: "Configuración PS4",
        description:
          "Preparación de Homebrew Store.",

        items: [
          "Configuración",
          "Red de reparto",
          "URL personalizada",
          "Guardar cambios",
        ],
      },

      {
        title: "URL Original",
        description:
          "Restauración de la tienda.",

        items: [
          "http://api.pkg-zone.com",
          "Configuración predeterminada",
          "URL oficial",
          "Restaurar cuando finalice",
        ],
      },

      {
        title: "Instalación de PKG",
        description:
          "Uso diario.",

        items: [
          "Abrir Homebrew Store",
          "Ver catálogo local",
          "Seleccionar contenido",
          "Instalar PKG",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Sin USB.",
          "Catálogo personalizado.",
          "Compatible con GoldHEN.",
          "Instalación por red.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "Homebrew Store",
          "Remote PKG Installer",
          "Enviar PKG a PS4",
          "ezRemote Client",
          "PS4 Xplorer",
        ],
      },
    ],
  },
},
// Trofeos Encriptados para PKG
{
  console: "PS4",
  name: "Trofeos Encriptados para PKG",
  image: "img/PS4/trofeos-encriptados.jpg",

  description:
    "Guía para verificar y corregir trofeos encriptados antes de generar paquetes PKG para PlayStation 4.",

  website: null,

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/nd4gRIqJ#CsFjcfBCBL_B050SF0G-Uw",
    },
  ],

  guide: {
    function:
      "Permite comprobar si los trofeos de un juego o actualización están encriptados y corregirlos antes de crear un PKG.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      PKG: "✅ Compatible",
      FTP: "✅ Compatible",
    },

    requirements: [
      "PS4 Fake PKG Tools",
      "FileZilla",
      "PS4 con FTP",
      "Juego dumpiado",
      "PC con Windows",
    ],

    installation: [
      "Descargar PS4 Fake PKG Tools.",
      "Extraer las herramientas.",
      "Preparar las carpetas APP y PATCH.",
      "Verificar los trofeos.",
      "Corregir los archivos necesarios.",
    ],

    usage:
      "Permite analizar carpetas APP y PATCH para comprobar si contienen trofeos encriptados.",

    notes:
      "Es recomendable verificar tanto la carpeta APP como PATCH antes de generar el PKG final. 【1-ace939】",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Herramienta Utilizada",
        description:
          "Software principal.",

        items: [
          "PS4 Fake PKG Tools",
          "helper.exe",
          "Análisis automático",
          "Verificación de trofeos",
        ],
      },

      {
        title: "Verificar APP",
        description:
          "Juego principal.",

        items: [
          "CUASXXXXXX-app",
          "Arrastrar sobre helper.exe",
          "Analizar resultado",
          "Verificar estado",
        ],
      },

      {
        title: "Verificar PATCH",
        description:
          "Actualización del juego.",

        items: [
          "CUASXXXXXX-patch",
          "Comprobar cifrado",
          "Obtener ID",
          "Verificar trofeos",
        ],
      },

      {
        title: "FTP",
        description:
          "Obtención de archivos.",

        items: [
          "Activar FTP.",
          "Conectar con FileZilla.",
          "Acceder al sistema.",
          "Copiar trofeos.",
        ],
      },

      {
        title: "Ruta de Trofeos",
        description:
          "Ubicación en PS4.",

        items: [
          "/user/trophy/conf",
          "TROPHY.TRP",
          "ID del juego",
          "Archivo original",
        ],
      },

      {
        title: "Reemplazar Trofeos",
        description:
          "Proceso de corrección.",

        items: [
          "Copiar TROPHY.TRP",
          "Reemplazar archivo",
          "Eliminar anterior",
          "Verificar resultado",
        ],
      },

      {
        title: "Comprobación Final",
        description:
          "Validación del proceso.",

        items: [
          "Repetir análisis.",
          "Trofeos desencriptados.",
          "APP correcta.",
          "PATCH correcto.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Evita errores en PKG.",
          "Verificación sencilla.",
          "Compatible con PS4 Fake PKG Tools.",
          "Compatible con GoldHEN.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "Dump de Juegos PS4",
          "Duxas PS4 Patch Repackager",
          "PARAM.SFO Editor",
          "PS4 Xplorer",
          "GoldHEN",
        ],
      },
    ],
  },
},
// pkgMerge
{
  console: "PS4",
  name: "pkgMerge",
  image: "img/PS4/pkgmerge.jpg",

  description:
    "Herramienta para fusionar múltiples partes de un paquete PKG en un único archivo instalable para PlayStation 4.",

  website: "https://github.com/Tustin/pkg-merge",
  
  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/KN5DGAzL#mmVXvdF0yUhuOYL9fy3N9A",
    },
    {
      name: "Github Releases",
      url: "https://github.com/Tustin/pkg-merge/releases",
    },
  ],

  guide: {
    function:
      "Permite unir archivos PKG divididos en varias partes para generar un único paquete listo para instalar.",

    compatibility: {
      PS4: "✅ Compatible",
      PKG: "✅ Compatible",
      Updates: "✅ Compatible",
      GoldHEN: "✅ Compatible",
    },

    requirements: [
      "PC con Windows",
      "pkgMerge",
      "Archivos PKG divididos",
      "USB ExFAT",
    ],

    installation: [
      "Descargar pkgMerge.",
      "Extraer los archivos.",
      "Preparar las partes del PKG.",
      "Copiar los archivos al directorio packages.",
      "Ejecutar pkg-merge-x64.exe.",
    ],

    usage:
      "Permite fusionar automáticamente todas las partes de un PKG para generar un único archivo instalable.",

    notes:
      "Especialmente útil para actualizaciones descargadas en múltiples partes desde servidores de parches. 【1-6b7756】",

    version: "Actual",
    author: "Scene PS4",

    details: [
      {
        title: "¿Qué es pkgMerge?",
        description:
          "Fusión de paquetes.",

        items: [
          "Unir PKG divididos.",
          "Generar archivo único.",
          "Automatización.",
          "Compatible con PS4.",
        ],
      },

      {
        title: "Actualizaciones",
        description:
          "Uso principal.",

        items: [
          "Parches oficiales.",
          "Actualizaciones divididas.",
          "Versiones grandes.",
          "Archivos multi-parte.",
        ],
      },

      {
        title: "Preparación",
        description:
          "Archivos requeridos.",

        items: [
          "pkg-merge-x64",
          "Carpeta packages",
          "Partes del PKG",
          "Espacio libre suficiente",
        ],
      },

      {
        title: "Proceso de Unión",
        description:
          "Creación del PKG.",

        items: [
          "Abrir pkgMerge.",
          "Detectar fragmentos.",
          "Fusionar automáticamente.",
          "Generar PKG final.",
        ],
      },

      {
        title: "Origen de Parches",
        description:
          "Búsqueda de actualizaciones.",

        items: [
          "ID del juego.",
          "Parches compatibles.",
          "Versiones soportadas.",
          "Actualizaciones disponibles.",
        ],
      },

      {
        title: "Instalación",
        description:
          "Uso final.",

        items: [
          "Copiar a USB.",
          "Package Installer.",
          "Instalar actualización.",
          "Verificar versión.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Proceso automático.",
          "Compatible con grandes archivos.",
          "Un solo PKG final.",
          "Compatible con GoldHEN.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas complementarias.",

        items: [
          "Duxas PS4 Patch Repackager",
          "Trofeos Encriptados para PKG",
          "PARAM.SFO Editor",
          "Dump de Juegos PS4",
          "Remote PKG Installer",
        ],
      },
    ],
  },
},
// PS4 PKG Viewer
{
  console: "PS4",
  name: "PS4 PKG Viewer",
  image: "img/PS4/ps4-pkg-viewer.jpg",

  description:
    "Herramienta para visualizar información avanzada de archivos PKG de PlayStation 4 antes de su instalación o modificación.",

  website: null,

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/Gdw0BSAI#3IMjJqr__cF4fYVpq-WG1A",
    },
  ],

  guide: {
    function:
      "Permite inspeccionar archivos PKG y consultar información interna de juegos, aplicaciones, actualizaciones y contenido adicional.",

    compatibility: {
      PS4: "✅ Compatible",
      PKG: "✅ Compatible",
      Updates: "✅ Compatible",
      DLC: "✅ Compatible",
    },

    requirements: [
      "PC con Windows",
      "PS4 PKG Viewer",
      "Archivo PKG",
    ],

    installation: [
      "Descargar PS4 PKG Viewer.",
      "Extraer el archivo comprimido.",
      "Ejecutar PS4PKGViewer.exe.",
      "Abrir el PKG que deseas analizar.",
    ],

    usage:
      "Permite examinar el contenido y los metadatos de cualquier archivo PKG compatible.",

    notes:
      "Muy útil para comprobar Title ID, versión, contenido y otros datos antes de modificar o instalar un paquete. 【1-984a34】",

    version: "1.5",
    author: "LeecherMan",

    details: [
      {
        title: "Información del PKG",
        description:
          "Datos disponibles.",

        items: [
          "Title ID",
          "Nombre del juego",
          "Versión",
          "Tipo de contenido",
        ],
      },

      {
        title: "Tipos Compatibles",
        description:
          "Archivos soportados.",

        items: [
          "Juegos",
          "Actualizaciones",
          "DLC",
          "Homebrew",
        ],
      },

      {
        title: "Inspección de PKG",
        description:
          "Análisis detallado.",

        items: [
          "Metadatos internos.",
          "Información avanzada.",
          "Verificación rápida.",
          "Consulta detallada.",
        ],
      },

      {
        title: "Uso Principal",
        description:
          "Funciones más comunes.",

        items: [
          "Ver información.",
          "Identificar versiones.",
          "Comprobar contenido.",
          "Revisar paquetes.",
        ],
      },

      {
        title: "Compatible con",
        description:
          "Herramientas complementarias.",

        items: [
          "PS4 Fake PKG Tools",
          "pkgMerge",
          "Duxas Repackager",
          "PARAM.SFO Editor",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Muy ligero.",
          "Información detallada.",
          "Fácil de usar.",
          "Compatible con cualquier PKG.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "pkgMerge",
          "PARAM.SFO Editor",
          "Duxas PS4 Patch Repackager",
          "Trofeos Encriptados para PKG",
          "Dump de Juegos PS4",
        ],
      },
    ],
  },
},
// Chiaki (Uso a distancia)
{
  console: "PS4",
  name: "Chiaki",
  image: "img/PS4/chiaki.jpg",

  description:
    "Cliente de Remote Play para PlayStation 4 que permite jugar de forma remota desde Windows, Android y otros dispositivos compatibles.",

  website: "https://git.sr.ht/~thestr4ng3r/chiaki",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/rQRgEIbB#rbmAbavJBvGSM0YIl5rWAw",
    },
    {
      name: "GIT refs",
      url: "https://git.sr.ht/~thestr4ng3r/chiaki/refs",
    },
    {
      name: "PSN Account ID",
      url: "https://psn.flipscreen.games/",
    },
  ],

  guide: {
    function:
      "Permite acceder y controlar una PlayStation 4 remotamente desde un ordenador o dispositivo Android.",

    compatibility: {
      PS4: "✅ Compatible",
      Windows: "✅ Compatible",
      Android: "✅ Compatible",
      RemotePlay: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4",
      "Chiaki",
      "Red local o Internet",
      "Cuenta PSN",
    ],

    installation: [
      "Descargar Chiaki.",
      "Instalar o extraer la aplicación.",
      "Detectar la consola.",
      "Registrar el dispositivo.",
      "Iniciar la sesión remota.",
    ],

    usage:
      "Permite jugar, controlar y visualizar la consola desde otro dispositivo mediante streaming.",

    notes:
      "Para registrar la consola se necesita el PIN de Uso a distancia y el Account-ID del usuario PSN. 【1-c01ade】",

    version: "Actual",
    author: "thestr4ng3r",

    details: [
      {
        title: "¿Qué es Chiaki?",
        description:
          "Cliente Remote Play.",

        items: [
          "Código abierto.",
          "Remote Play.",
          "Windows.",
          "Android.",
        ],
      },

      {
        title: "Registro de Consola",
        description:
          "Configuración inicial.",

        items: [
          "IP de la PS4.",
          "PSN Account-ID.",
          "PIN de registro.",
          "Vinculación segura.",
        ],
      },

      {
        title: "Uso en PC",
        description:
          "Cliente Windows.",

        items: [
          "chiaki.exe",
          "Detección automática.",
          "Registro manual.",
          "Streaming remoto.",
        ],
      },

      {
        title: "Uso en Android",
        description:
          "Cliente móvil.",

        items: [
          "Chiaki-Up.",
          "Configuración rápida.",
          "Compatible con Android.",
          "Jugar desde móvil.",
        ],
      },

      {
        title: "Datos Necesarios",
        description:
          "Información requerida.",

        items: [
          "PSN Online-ID.",
          "PSN Account-ID.",
          "PIN de Uso a Distancia.",
          "IP de la consola.",
        ],
      },

      {
        title: "Funciones",
        description:
          "Uso principal.",

        items: [
          "Juego remoto.",
          "Streaming de vídeo.",
          "Control completo.",
          "Acceso desde otros dispositivos.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Código abierto.",
          "Compatible con Android.",
          "Compatible con Windows.",
          "Alternativa a Remote Play oficial.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "PSLAN Loader",
          "ezRemote Client",
          "Remote Store",
          "GoldHEN",
          "PS4 Xplorer",
        ],
      },
    ],
  },
},
// PS2 FPKG
{
  console: "PS4",
  name: "PS2 FPKG",

  image: "img/PS4/ps2-fpkg.jpg",

  description:
    "Herramienta para convertir juegos de PlayStation 2 en paquetes FPKG compatibles con PlayStation 4.",

  website: "https://www.psx-place.com/threads/release-ps2-fpkg-v0-7-beta-a-complete-rewrite-of-my-ps2-to-ps4-converter.41916/",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/6dJjATTS#SGYyrs4xSji7TRDaMWLzmg",
    }
  ],

  guide: {
    function:
      "Permite convertir imágenes ISO de PlayStation 2 en paquetes instalables para PlayStation 4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      PS2: "✅ Compatible",
      FPKG: "✅ Compatible",
    },

    requirements: [
      "PC con Windows",
      "PS2-FPKG",
      "Juego PS2 en formato ISO",
      "USB ExFAT",
    ],

    installation: [
      "Descargar PS2-FPKG.",
      "Extraer el archivo comprimido.",
      "Ejecutar PS2-FPKG.exe.",
      "Seleccionar la ISO del juego.",
      "Crear el paquete FPKG.",
    ],

    usage:
      "Permite generar juegos de PlayStation 2 instalables directamente desde el menú principal de PS4.",

    notes:
      "Antes de crear el paquete es recomendable comprobar la compatibilidad del juego en las listas de compatibilidad disponibles. 【1-896214】",

    version: "Actual",
    author: "PSX-Place Community",

    details: [
      {
        title: "Juego PS2",
        description:
          "Archivo principal.",

        items: [
          "ISO compatible",
          "Detección automática",
          "Lectura del juego",
          "Conversión a FPKG",
        ],
      },

      {
        title: "Juegos Multidisco",
        description:
          "Compatibilidad avanzada.",

        items: [
          "Disc 1",
          "Disc 2",
          "Múltiples discos",
          "Selección automática",
        ],
      },

      {
        title: "Personalización",
        description:
          "Aspecto visual.",

        items: [
          "Icon.png",
          "Background.png",
          "Imagen personalizada",
          "Biblioteca visual",
        ],
      },

      {
        title: "Información del Juego",
        description:
          "Metadatos.",

        items: [
          "NP Title",
          "Nombre del juego",
          "Título personalizado",
          "Identificación automática",
        ],
      },

      {
        title: "Crear FPKG",
        description:
          "Proceso principal.",

        items: [
          "Create fPKG",
          "Seleccionar destino",
          "Generar paquete",
          "Guardar resultado",
        ],
      },

      {
        title: "Instalación",
        description:
          "Uso final.",

        items: [
          "USB ExFAT",
          "Package Installer",
          "Instalar PKG",
          "Ejecutar juego",
        ],
      },

      {
        title: "Compatibilidad",
        description:
          "Verificación recomendada.",

        items: [
          "Listado de compatibilidad",
          "Juegos soportados",
          "Pruebas comunitarias",
          "Nuevos títulos",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Conversión sencilla.",
          "Compatible con GoldHEN.",
          "Soporte multidisco.",
          "Personalización visual.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas complementarias.",

        items: [
          "PS4SX2",
          "Crear Juegos PS1 y PSP",
          "Sega Saturn FPKG",
          "PS4 PKG Viewer",
          "pkgMerge",
        ],
      },
    ],
  },
},
// PSP FPKG
{
  console: "PS4",
  name: "PSP FPKG",

  image: "img/PS4/psp-fpkg.jpg",

  description:
    "Herramienta para convertir juegos de PSP en paquetes FPKG compatibles con PlayStation 4 utilizando el emulador PSPHD.",

  website: "https://www.psx-place.com/threads/psp-fpkg-v1-0-1-play-psp-games-with-the-ps-plus-emulator.37947/",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/vJpnBYiT#JdXGRVcyzNAqn3V-tkQpWQ",
    },
  ],

  guide: {
    function:
      "Permite convertir juegos de PlayStation Portable en aplicaciones instalables para PlayStation 4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      PSP: "✅ Compatible",
      FPKG: "✅ Compatible",
    },

    requirements: [
      "PC con Windows",
      "PSP-FPKG",
      "Juego PSP en formato ISO",
      "USB ExFAT",
    ],

    installation: [
      "Descargar PSP-FPKG.",
      "Extraer los archivos.",
      "Ejecutar PSP-FPKG.exe.",
      "Seleccionar la ISO del juego.",
      "Crear el paquete FPKG.",
    ],

    usage:
      "Permite generar paquetes instalables de PSP para ejecutarlos desde el menú principal de PS4.",

    notes:
      "La herramienta completa automáticamente parte de la información del juego al cargar la ISO. 【1-c5d7ef】",

    version: "Actual",
    author: "PSX-Place Community",

    details: [
      {
        title: "Juego PSP",
        description:
          "Archivo principal.",

        items: [
          "ISO PSP",
          "Lectura automática",
          "Conversión FPKG",
          "Compatible con PS4",
        ],
      },

      {
        title: "Personalización",
        description:
          "Aspecto visual.",

        items: [
          "Icon",
          "Splash",
          "Imagen personalizada",
          "Biblioteca visual",
        ],
      },

      {
        title: "Información Automática",
        description:
          "Metadatos del juego.",

        items: [
          "NP Title",
          "Nombre del juego",
          "Detección automática",
          "Información integrada",
        ],
      },

      {
        title: "PSPHD",
        description:
          "Motor utilizado.",

        items: [
          "Emulador PSPHD",
          "PS Plus",
          "Integración PS4",
          "Ejecución directa",
        ],
      },

      {
        title: "Crear FPKG",
        description:
          "Proceso principal.",

        items: [
          "Seleccionar ISO",
          "Configurar imágenes",
          "Create fPKG",
          "Guardar resultado",
        ],
      },

      {
        title: "Instalación",
        description:
          "Uso final.",

        items: [
          "USB ExFAT",
          "Package Installer",
          "Instalar PKG",
          "Ejecutar juego",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Conversión sencilla.",
          "Compatible con GoldHEN.",
          "Proceso automático.",
          "Personalización visual.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas complementarias.",

        items: [
          "PS2 FPKG",
          "Crear Juegos PS1 y PSP",
          "Sega Saturn FPKG",
          "PS4 PKG Viewer",
          "pkgMerge",
        ],
      },
    ],
  },
},
// Saturn PS4
{
  console: "PS4",
  name: "Saturn PS4",

  image: "img/PS4/saturn-ps4.jpg",

  description:
    "Herramienta para convertir juegos de Sega Saturn en paquetes FPKG instalables directamente desde el menú principal de PlayStation 4.",

  website: "https://www.logic-sunrise.com/news-1172671-ps4-saturn2ps4-v10-pour-505-672-et-900.html",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/CNRBXaIZ#D3FntUm2znBCEyv3cvh-qw",
    },
  ],

  guide: {
    function:
      "Permite crear paquetes FPKG de Sega Saturn con portada personalizada, fondo e identificador propio para PlayStation 4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      SegaSaturn: "✅ Compatible",
      FPKG: "✅ Compatible",
    },

    requirements: [
      "PC con Windows",
      "Saturn PS4",
      "Juego de Sega Saturn",
      "USB ExFAT",
    ],

    installation: [
      "Descargar Saturn PS4.",
      "Extraer los archivos.",
      "Copiar el juego a la carpeta game.",
      "Ejecutar Create_Saturn_PKG_v1.1.bat.",
      "Generar el PKG final.",
    ],

    usage:
      "Permite convertir juegos de Sega Saturn en aplicaciones instalables para PlayStation 4.",

    notes:
      "Es posible personalizar el icono, la imagen de fondo y el identificador del juego antes de generar el paquete. 【1-544a34】",

    version: "Actual",
    author: "Logic-Sunrise Community",

    details: [
      {
        title: "Archivos de la Herramienta",
        description:
          "Contenido principal.",

        items: [
          "Saturn2PS4",
          "Create_Saturn_PKG_v1.1.bat",
          "Carpeta game",
          "Herramientas de compilación",
        ],
      },

      {
        title: "Preparar Juego",
        description:
          "Configuración inicial.",

        items: [
          "Copiar juego a game.",
          "Agregar portada.",
          "Agregar fondo.",
          "Preparar proyecto.",
        ],
      },

      {
        title: "Configuración del PKG",
        description:
          "Datos personalizados.",

        items: [
          "ID personalizado.",
          "Nombre del juego.",
          "Portada personalizada.",
          "Fondo personalizado.",
        ],
      },

      {
        title: "Crear PKG",
        description:
          "Proceso principal.",

        items: [
          "Abrir Create_Saturn_PKG_v1.1.bat",
          "Seleccionar idioma",
          "Elegir opción 1",
          "Continuar creación",
        ],
      },

      {
        title: "Compilación",
        description:
          "Generación del paquete.",

        items: [
          "Opción 5",
          "Compilar juego",
          "Generar PKG",
          "Esperar finalización",
        ],
      },

      {
        title: "Instalación",
        description:
          "Uso en PlayStation 4.",

        items: [
          "Copiar PKG al USB.",
          "USB ExFAT.",
          "Package Installer.",
          "Ejecutar juego.",
        ],
      },

      {
        title: "Sistema Compatible",
        description:
          "Plataforma soportada.",

        items: [
          "Sega Saturn",
          "32 Bits",
          "Retro Gaming",
          "PS4",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Conversión sencilla.",
          "Iconos personalizados.",
          "Fondos personalizados.",
          "Compatible con GoldHEN.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas complementarias.",

        items: [
          "PS2 FPKG",
          "PSP FPKG",
          "Crear Juegos PS1 y PSP",
          "PS4 PKG Viewer",
          "pkgMerge",
        ],
      },
    ],
  },
},
// Mods de PC para PS4
{
  console: "PS4",
  name: "Mods de PC para PS4",

  image: "img/PS4/mods-pc-ps4.jpg",

  description:
    "Guía para adaptar e instalar mods de PC en juegos de PlayStation 4 utilizando RE-PAK, PS4-RE-TEX y GoldHEN Plugins Loader.",

  website: "https://github.com/praydog/RE-PAK",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/yZAVjQhb#O2TllGUBDLEf_GPJU1v4fQ",
    },
    {
      name: "Github Releases",
      url: "https://github.com/Backporter/RE-PAK/releases",
    },
    {
      name: "Github PS4-RE-TEX",
      url: "https://github.com/Backporter/PS4-RE-TEX/releases",
    },
    {
      name: "Github GoldHEN Plugins Repository",
      url: "https://github.com/GoldHEN/GoldHEN_Plugins_Repository/releases",
    },
  ],

  guide: {
    function:
      "Permite convertir mods de PC para utilizarlos en juegos compatibles de PlayStation 4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      Mods: "✅ Compatible",
      FTP: "✅ Compatible",
      Plugins: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "RE-PAK",
      "PS4-RE-TEX",
      "GoldHEN Plugins Loader",
      "FTP Server",
      "PC con Windows",
    ],

    installation: [
      "Obtener el Title ID del juego.",
      "Descargar el mod compatible.",
      "Extraer los archivos necesarios.",
      "Convertir los archivos para PS4.",
      "Copiar los archivos mediante FTP.",
    ],

    usage:
      "Permite cargar mods personalizados en juegos compatibles utilizando el sistema AFR de GoldHEN.",

    notes:
      "La guía utiliza como ejemplo juegos basados en RE Engine y mods descargados desde NexusMods. 【1-189b05】",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Herramientas Utilizadas",
        description:
          "Software requerido.",

        items: [
          "RE-PAK",
          "PS4-RE-TEX",
          "GoldPlugins",
          "FTP Server",
        ],
      },

      {
        title: "Identificar Juego",
        description:
          "Información necesaria.",

        items: [
          "Show TitleID",
          "TitleID & AppVer",
          "Versión instalada",
          "ID del juego",
        ],
      },

      {
        title: "Descargar Mods",
        description:
          "Contenido compatible.",

        items: [
          "NexusMods",
          "Descarga manual",
          "Mods compatibles",
          "Archivos del juego",
        ],
      },

      {
        title: "Acceso FTP",
        description:
          "Obtención de archivos.",

        items: [
          "Enable FTP Server",
          "FileZilla",
          "mnt/sandbox/pfsmnt",
          "Acceso remoto",
        ],
      },

      {
        title: "Modificar Archivos",
        description:
          "Preparación del mod.",

        items: [
          "re_chunk_000.pak",
          "re_chunk_001.pak",
          "Carpeta natives",
          "Conversión PS4",
        ],
      },

      {
        title: "Crear Mod PAK",
        description:
          "Compilación.",

        items: [
          "Open Save",
          "PAK Creator",
          "Create",
          "Generar archivos patch",
        ],
      },

      {
        title: "Instalación AFR",
        description:
          "Integración con GoldHEN.",

        items: [
          "/data/GoldHEN/AFR",
          "Carpeta CUSA",
          "Copiar archivos patch",
          "Activar Plugins Loader",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Usar mods de PC.",
          "Compatible con GoldHEN.",
          "Instalación sin reconstruir PKG.",
          "Personalización avanzada.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "GoldHEN Cheats Manager",
          "PS4 Xplorer",
          "ezRemote Client",
          "Orbis Toolbox",
          "Crear Tus Propios Trucos",
        ],
      },
    ],
  },
},
// PSX FPKG
{
  console: "PS4",
  name: "PSX FPKG",

  image: "img/PS4/psx-fpkg.jpg",

  description:
    "Herramienta para convertir juegos de PlayStation 1 en paquetes FPKG instalables en PlayStation 4.",

  website: "https://www.psx-place.com/threads/psx-fpkg-by-jabu-a-tool-to-convert-ps1-psx-games-for-use-on-ps4.30498/",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/nQ5A2LCB#mSRKEwPey74xXoEuQUXvGA",
    },
    {
      name: "WEB logic-sunrise",
      url: "https://www.logic-sunrise.com/news-1177662-ps4-psx2ps4-v151-nouvel-emulateur-et-ajout-du-multi-discs.html",
    },
  ],

  guide: {
    function:
      "Permite convertir juegos de PS1 en aplicaciones instalables para PlayStation 4 utilizando PSX-FPKG o psx2ps4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      PS1: "✅ Compatible",
      FPKG: "✅ Compatible",
      MultiDisc: "✅ Compatible",
    },

    requirements: [
      "PC con Windows",
      "PSX-FPKG",
      "psx2ps4",
      "Juego PS1",
      "USB ExFAT",
    ],

    installation: [
      "Descargar la herramienta.",
      "Seleccionar la imagen del juego.",
      "Configurar opciones y portadas.",
      "Crear el paquete FPKG.",
      "Instalar en PS4.",
    ],

    usage:
      "Permite generar paquetes PKG de PlayStation 1 personalizados para ejecutarlos desde el menú principal de PS4.",

    notes:
      "Compatible con juegos multidisco y distintas opciones de emulación configurables durante la creación del paquete. 【1-86300b】",

    version: "Actual",
    author: "PSX-Place Community",

    details: [
      {
        title: "Herramientas Incluidas",
        description:
          "Métodos disponibles.",

        items: [
          "PSX-FPKG",
          "psx2ps4",
          "Conversión automática",
          "Creación de PKG",
        ],
      },

      {
        title: "Juegos Multidisco",
        description:
          "Compatibilidad avanzada.",

        items: [
          "Disc 1",
          "Disc 2",
          "Múltiples discos",
          "Selección automática",
        ],
      },

      {
        title: "PSX-FPKG",
        description:
          "Método gráfico.",

        items: [
          "Select Game.",
          "Discs.",
          "Create fPKG.",
          "Configuración visual.",
        ],
      },

      {
        title: "Opciones de Emulación",
        description:
          "Configuración adicional.",

        items: [
          "Skip Bootlogo",
          "Force 60Hz",
          "Emulate Analog Sticks",
          "Game Config",
        ],
      },

      {
        title: "psx2ps4",
        description:
          "Método alternativo.",

        items: [
          "MENU_PSX2PS4",
          "Modo consola.",
          "Configuración guiada.",
          "Creación automática.",
        ],
      },

      {
        title: "Personalización",
        description:
          "Aspecto visual.",

        items: [
          "Icono personalizado.",
          "Portada.",
          "Imagen de fondo.",
          "Título personalizado.",
        ],
      },

      {
        title: "Instalación",
        description:
          "Uso final.",

        items: [
          "USB ExFAT.",
          "Package Installer.",
          "Instalar PKG.",
          "Ejecutar juego.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Compatible con PS1.",
          "Soporte multidisco.",
          "Opciones de emulación.",
          "Compatible con GoldHEN.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas complementarias.",

        items: [
          "PSP FPKG",
          "PS2 FPKG",
          "Saturn PS4",
          "PS4 PKG Viewer",
          "pkgMerge",
        ],
      },
    ],
  },
},
// PS2 CodeBreaker Cheats
{
  console: "PS4",
  name: "PS2 CodeBreaker Cheats",

  image: "img/PS4/ps2-codebreaker-cheats.jpg",

  description:
    "Guía para agregar CodeBreaker Cheats a juegos de PlayStation 2 convertidos para PlayStation 4.",

  website: "https://nuclearhacks.es/como-utilizar-codebreaker-en-ps4-para-juegos-de-playstation-2/",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/jAJHHQKI#586fnLo36TI7eUSSi9N2yw",
    },
  ],

  guide: {
    function:
      "Permite crear juegos PS2 con soporte para CodeBreaker Cheats y ejecutarlos desde PlayStation 4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      PS2: "✅ Compatible",
      Cheats: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "ISO de PlayStation 2",
      "PS2 CodeBreaker Cheats PS4 FPKG",
      "PS4 PS2 Classics GUI",
      "PC con Windows",
    ],

    installation: [
      "Extraer la ISO del juego.",
      "Modificar el archivo SYSTEM.CNF.",
      "Reconstruir la ISO.",
      "Crear el PKG de PS2.",
      "Instalar el PKG en PS4.",
    ],

    usage:
      "Permite lanzar CodeBreaker antes de iniciar el juego y activar trucos compatibles.",

    notes:
      "La guía recomienda utilizar versiones americanas de los juegos para una mejor compatibilidad con los códigos disponibles. 【1-fb98d5】",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "¿Qué es CodeBreaker?",
        description:
          "Sistema de trucos para PS2.",

        items: [
          "Cheats para PS2",
          "CodeBreaker",
          "Compatible con PS4",
          "Integrado en FPKG",
        ],
      },

      {
        title: "Archivos Necesarios",
        description:
          "Herramientas utilizadas.",

        items: [
          "PS2 CodeBreaker Cheats PS4 FPKG",
          "Cdvdgen",
          "cdvd_iml2iso",
          "PS4 PS2 Classics GUI",
        ],
      },

      {
        title: "Preparar Juego",
        description:
          "Modificación inicial.",

        items: [
          "Extraer ISO",
          "Editar SYSTEM.CNF",
          "Modificar BOOT2",
          "Guardar cambios",
        ],
      },

      {
        title: "Reconstruir ISO",
        description:
          "Creación del juego.",

        items: [
          "Cdvdgen",
          "Export IML",
          "Convertir a ISO",
          "Verificar resultado",
        ],
      },

      {
        title: "Crear FPKG",
        description:
          "Generación del PKG.",

        items: [
          "PS4 PS2 Classics GUI",
          "Cargar ISO",
          "Añadir carátulas",
          "Crear PKG",
        ],
      },

      {
        title: "Activar Cheats",
        description:
          "Uso de CodeBreaker.",

        items: [
          "Select Cheats",
          "Elegir juego",
          "Activar códigos",
          "Start Game",
        ],
      },

      {
        title: "Administrador ELF",
        description:
          "Acceso a aplicaciones.",

        items: [
          "PS2LOADELF",
          "CODEBR-1.ELF",
          "cdfs:/--ELF--/",
          "Gestor de archivos",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Cheats para juegos PS2.",
          "Compatible con GoldHEN.",
          "Integración en PS4.",
          "Biblioteca personalizada.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas complementarias.",

        items: [
          "PS2 FPKG",
          "PS4SX2",
          "GoldHEN Cheats Manager",
          "Crear Tus Propios Trucos",
          "PS4 PS2 Classics GUI",
        ],
      },
    ],
  },
},
// RetroArch PS2 en PS4
{
  console: "PS4",
  name: "RetroArch PS2 en PS4",

  image: "img/PS4/retroarch-ps2-en-ps4.jpg",

  description:
    "Herramienta que permite crear paquetes FPKG con RetroArch para ejecutar emuladores y juegos retro desde el entorno PS2 de PlayStation 4.",

  website: "https://www.logic-sunrise.com/news-1175709-ps4-creer-un-fpkg-demulateur-en-un-clic.html",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/fIIwAa4J#k5wx0qTa9YGYrKtqILAi0Q",
    },
  ],

  guide: {
    function:
      "Permite generar paquetes instalables que ejecutan RetroArch PS2 dentro de PlayStation 4 para cargar múltiples sistemas retro.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      RetroArch: "✅ Compatible",
      PS2Emu: "✅ Compatible",
      FPKG: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "Retroarch_PS2_on_PS4",
      "PC con Windows",
      "USB ExFAT",
    ],

    installation: [
      "Extraer Retroarch_PS2_on_PS4.",
      "Colocar los juegos en la carpeta games.",
      "Ejecutar Retroarch_PS2_on_PS4.bat.",
      "Seleccionar el emulador deseado.",
      "Generar e instalar el PKG.",
    ],

    usage:
      "Permite ejecutar RetroArch desde el entorno PS2 de la consola para cargar juegos retro compatibles.",

    notes:
      "El paquete generado inicia primero el administrador de archivos PS2 y posteriormente carga el core seleccionado de RetroArch. 【1-22b704】",

    version: "Actual",
    author: "Scene PS4",

    details: [
      {
        title: "Herramienta Utilizada",
        description:
          "Contenido principal.",

        items: [
          "Retroarch_PS2_on_PS4",
          "RetroArch",
          "PS2 Emulator",
          "FPKG",
        ],
      },

      {
        title: "Preparar Juegos",
        description:
          "Contenido compatible.",

        items: [
          "Carpeta games",
          "Biblioteca personalizada",
          "Carga automática",
          "Organización sencilla",
        ],
      },

      {
        title: "Crear PKG",
        description:
          "Proceso principal.",

        items: [
          "Retroarch_PS2_on_PS4.bat",
          "Seleccionar emulador",
          "Crear paquete",
          "Generar PKG",
        ],
      },

      {
        title: "RetroArch PS2",
        description:
          "Inicio de la aplicación.",

        items: [
          "Administrador PS2",
          "Cores Libretro",
          "Carga automática",
          "Entorno RetroArch",
        ],
      },

      {
        title: "Cores Compatibles",
        description:
          "Ejemplo mostrado.",

        items: [
          "PICODRIVE_LIBRETRO_PS2",
          "Mega Drive",
          "Genesis",
          "Otros cores compatibles",
        ],
      },

      {
        title: "Carga de Juegos",
        description:
          "Navegación dentro de RetroArch.",

        items: [
          "Load Content",
          "Downloads",
          "Load Archive",
          "Seleccionar juego",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "RetroArch portátil.",
          "Compatible con GoldHEN.",
          "Múltiples sistemas.",
          "Instalación mediante PKG.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas de emulación.",

        items: [
          "RetroArch",
          "PS2 FPKG",
          "PS4SX2",
          "Batocera PS4",
          "pFBN Neo",
        ],
      },
    ],
  },
},
// PS4 PKG Tool
{
  console: "PS4",
  name: "PS4 PKG Tool",

  image: "img/PS4/ps4-pkg-tool.jpg",

  description:
    "Herramienta para administrar bibliotecas de archivos PKG de PlayStation 4 y visualizar información de juegos, actualizaciones y DLC.",

  website: "https://github.com/pearlxcore/PS4PKGTool",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/Hc5iQL7I#6PeLoNywopih0i_wawqbJQ",
    },
    {
      name: "Github Releases",
      url: "https://github.com/pearlxcore/PS4PKGTool/releases",
    },
  ],

  guide: {
    function:
      "Permite organizar y analizar bibliotecas de paquetes PKG para identificar fácilmente juegos, actualizaciones y contenido descargable.",

    compatibility: {
      PS4: "✅ Compatible",
      PKG: "✅ Compatible",
      DLC: "✅ Compatible",
      Updates: "✅ Compatible",
    },

    requirements: [
      "PC con Windows",
      "PS4 PKG Tool",
      "Archivos PKG",
    ],

    installation: [
      "Descargar PS4 PKG Tool.",
      "Extraer el archivo comprimido.",
      "Ejecutar la aplicación.",
      "Agregar la biblioteca de PKG.",
    ],

    usage:
      "Permite visualizar y administrar colecciones de archivos PKG desde una única interfaz.",

    notes:
      "Facilita la identificación rápida de juegos base, actualizaciones y DLC dentro de una misma biblioteca. 【1-9178df】",

    version: "Actual",
    author: "Scene PS4",

    details: [
      {
        title: "Biblioteca PKG",
        description:
          "Gestión centralizada.",

        items: [
          "Juegos",
          "Actualizaciones",
          "DLC",
          "Homebrew",
        ],
      },

      {
        title: "Clasificación",
        description:
          "Identificación rápida.",

        items: [
          "Game",
          "Update",
          "DLC",
          "Contenido detectado",
        ],
      },

      {
        title: "Administración",
        description:
          "Organización de archivos.",

        items: [
          "Biblioteca local.",
          "Listado de paquetes.",
          "Gestión sencilla.",
          "Acceso rápido.",
        ],
      },

      {
        title: "Información Disponible",
        description:
          "Datos del paquete.",

        items: [
          "Nombre del contenido.",
          "Tipo de paquete.",
          "Versión.",
          "Contenido asociado.",
        ],
      },

      {
        title: "Uso Principal",
        description:
          "Utilidad práctica.",

        items: [
          "Ordenar bibliotecas.",
          "Verificar descargas.",
          "Revisar paquetes.",
          "Administrar colecciones.",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Organización sencilla.",
          "Compatible con bibliotecas grandes.",
          "Información rápida.",
          "Administración centralizada.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas complementarias.",

        items: [
          "PS4 PKG Viewer",
          "pkgMerge",
          "PARAM.SFO Editor",
          "Duxas PS4 Patch Repackager",
          "Remote PKG Installer",
        ],
      },
    ],
  },
},
// Desbloquea Tus Trofeos
{
  console: "PS4",
  name: "Desbloquea Tus Trofeos",

  image: "img/PS4/trophy-unlocker.jpg",

  description:
    "Herramienta para gestionar y desbloquear trofeos de PlayStation 4 utilizando Trophy Unlocker.",

  website: "https://github.com/xXxTheDarkprogramerxXx/PS4_Tools/tree/master/TrophyUnlocker",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/fBI2iZJK#9ShHdozeziyA5dXfY2RWMg",
    },
  ],

  guide: {
    function:
      "Permite administrar y desbloquear trofeos compatibles desde una interfaz diseñada para PlayStation 4.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      Trofeos: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "Trophy Unlocker",
      "Juego compatible",
    ],

    installation: [
      "Descargar Trophy Unlocker.",
      "Instalar la aplicación.",
      "Ejecutar la herramienta.",
      "Seleccionar el perfil o juego.",
    ],

    usage:
      "Permite administrar y gestionar trofeos compatibles desde la consola.",

    notes:
      "Se recomienda realizar una copia de seguridad de los datos importantes antes de modificar información relacionada con trofeos.",

    version: "Actual",
    author: "xXxTheDarkprogramerxXx",

    details: [
      {
        title: "Gestión de Trofeos",
        description:
          "Funciones principales.",

        items: [
          "Trofeos PS4",
          "Biblioteca local",
          "Administración sencilla",
          "Acceso rápido",
        ],
      },

      {
        title: "Compatibilidad",
        description:
          "Requisitos del sistema.",

        items: [
          "PlayStation 4",
          "GoldHEN",
          "Juegos compatibles",
          "Perfil local",
        ],
      },

      {
        title: "Interfaz",
        description:
          "Experiencia de usuario.",

        items: [
          "Menús sencillos",
          "Acceso rápido",
          "Información organizada",
          "Uso intuitivo",
        ],
      },

      {
        title: "Desarrollador",
        description:
          "Proyecto original.",

        items: [
          "xXxTheDarkprogramerxXx",
          "PS4 Tools",
          "Open Source",
          "GitHub",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Gestión de trofeos.",
          "Compatible con GoldHEN.",
          "Fácil utilización.",
          "Integración con PS4.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas complementarias.",

        items: [
          "GoldHEN Cheats Manager",
          "Crear Tus Propios Trucos",
          "PS2 CodeBreaker Cheats",
          "PS4debug",
          "Orbis Toolbox",
        ],
      },
    ],
  },
},
// DNS + Cancelar Update
{
  console: "PS4",
  name: "DNS + Cancelar Update",

  image: "img/PS4/dns-cancelar-update.jpg",

  description:
    "Guía para evitar actualizaciones automáticas del sistema y configurar medidas de protección en PlayStation 4.",

  website: null,

  downloads: [],

  guide: {
    function:
      "Permite configurar diferentes métodos para prevenir actualizaciones automáticas del sistema.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      DNS: "✅ Compatible",
      DebugSettings: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4",
      "GoldHEN",
      "Acceso a Internet",
    ],

    installation: [
      "Configurar Debug Settings.",
      "Ajustar parámetros DNS.",
      "Desactivar descargas automáticas.",
      "Aplicar bloqueo de actualizaciones.",
    ],

    usage:
      "Permite mantener la configuración deseada de la consola evitando descargas automáticas del sistema.",

    notes:
      "La guía reúne varios métodos de configuración disponibles desde la propia consola. 【1-d2cc77】",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Método Debug Settings",
        description:
          "Configuración avanzada.",

        items: [
          "Debug Settings",
          "PlayStation Network",
          "NP Environment",
          "sp-int",
        ],
      },

      {
        title: "Configuración DNS",
        description:
          "Método alternativo.",

        items: [
          "DNS personalizada",
          "Configuración manual",
          "Ethernet",
          "Wi-Fi",
        ],
      },

      {
        title: "Descargas Automáticas",
        description:
          "Opciones del sistema.",

        items: [
          "Descargas automáticas",
          "Software del sistema",
          "Configuración manual",
          "Control de actualizaciones",
        ],
      },

      {
        title: "Informes del Sistema",
        description:
          "Opciones adicionales.",

        items: [
          "Informar errores",
          "Configuración manual",
          "Opciones del sistema",
          "Privacidad",
        ],
      },

      {
        title: "Payloads Relacionados",
        description:
          "Herramientas complementarias.",

        items: [
          "Disable Update",
          "GoldHEN",
          "Host Web",
          "Jailbreak",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Configuración sencilla.",
          "Compatible con GoldHEN.",
          "Múltiples métodos.",
          "Mayor control del sistema.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas recomendadas.",

        items: [
          "GoldHEN",
          "Host Web",
          "Payloads PS4",
          "Homebrew Store",
          "PS4 Xplorer",
        ],
      },
    ],
  },
},
// Uso a Distancia con PS Vita
{
  console: "PS4",
  name: "Uso a Distancia con PS Vita",

  image: "img/PS4/distancia-psvita.jpg",

  description:
    "Guía para utilizar PlayStation Vita como dispositivo de uso remoto para controlar y jugar en PlayStation 4.",

  website: null,

  downloads: [],

  guide: {
    function:
      "Permite conectar una PS Vita a una PlayStation 4 mediante Uso a Distancia para jugar desde la portátil.",

    compatibility: {
      PS4: "✅ Compatible",
      PSVita: "✅ Compatible",
      PSVTV: "✅ Compatible",
      RemotePlay: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4",
      "PlayStation Vita o PS TV",
      "Misma red local",
      "Uso a Distancia activado",
    ],

    installation: [
      "Configurar la PS Vita.",
      "Activar Uso a Distancia en PS4.",
      "Registrar el dispositivo.",
      "Introducir el código de vinculación.",
      "Completar la conexión.",
    ],

    usage:
      "Permite transmitir y controlar la PS4 desde una PS Vita mediante la red local.",

    notes:
      "La guía utiliza la aplicación Enlace PS4 de PS Vita para realizar la vinculación manual con la consola. 【1-dcce66】",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Dispositivos Compatibles",
        description:
          "Equipos soportados.",

        items: [
          "PlayStation 4",
          "PlayStation Vita",
          "PS TV",
          "Remote Play",
        ],
      },

      {
        title: "Configuración PS Vita",
        description:
          "Preparación inicial.",

        items: [
          "HENkaku Settings",
          "Version Spoofing",
          "Firmware 3.74",
          "Configuración previa",
        ],
      },

      {
        title: "Configuración PS4",
        description:
          "Opciones necesarias.",

        items: [
          "Uso a Distancia",
          "Activar función",
          "Conexión PS Vita",
          "Añadir dispositivo",
        ],
      },

      {
        title: "Registro Manual",
        description:
          "Vinculación de dispositivos.",

        items: [
          "Código de registro",
          "Emparejamiento",
          "Sin detección automática",
          "Configuración manual",
        ],
      },

      {
        title: "Aplicación Utilizada",
        description:
          "Software en PSVita.",

        items: [
          "Enlace PS4",
          "Uso a Distancia",
          "Registro",
          "Conexión remota",
        ],
      },

      {
        title: "Red Local",
        description:
          "Conectividad.",

        items: [
          "Misma red",
          "Wi-Fi doméstica",
          "Conexión local",
          "Sin cable adicional",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Jugar desde PS Vita.",
          "Compatible con PS TV.",
          "Configuración sencilla.",
          "Integración oficial Sony.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas similares.",

        items: [
          "Chiaki",
          "PSLAN Loader",
          "Remote Store",
          "ezRemote Client",
          "HENkaku PS4",
        ],
      },
    ],
  },
},
// Recuperar Juegos de PS4
{
  console: "PS4",
  name: "Recuperar Juegos de PS4",

  image: "img/PS4/recuperar-juegos-ps4.jpg",

  description:
    "Guía para recuperar juegos y aplicaciones desaparecidos de la biblioteca de PS4 mediante restauración de base de datos.",

  website: "https://github.com/aizenar/PS4_db_Rebuilder_EXT",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/bBRCHLDC#f5Jvla-dFcJ6PZExRjU41A",
    },
    {
      name: "Github Releases",
      url: "https://github.com/aizenar/PS4_db_Rebuilder_EXT/releases",
    },
  ],

  guide: {
    function:
      "Permite restaurar juegos y aplicaciones que continúan instalados en la consola pero ya no aparecen en el menú principal.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      FTP: "✅ Compatible",
      Database: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "PS4_db_Rebuilder_EXT",
      "FTP Server",
      "PC con Windows",
      "Python",
    ],

    installation: [
      "Activar FTP en PS4.",
      "Instalar Python en el PC.",
      "Descargar PS4_db_Rebuilder_EXT.",
      "Conectar con la consola.",
      "Ejecutar la restauración.",
    ],

    usage:
      "Permite reconstruir la base de datos de aplicaciones para recuperar juegos y homebrew desaparecidos.",

    notes:
      "La guía incluye restauración mediante copia de seguridad, reconstrucción automática y restauración manual vía FTP. 【1-b451b9】",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Problema Solucionado",
        description:
          "Recuperación de contenido.",

        items: [
          "Juegos desaparecidos",
          "Aplicaciones ocultas",
          "Homebrew perdido",
          "Errores de base de datos",
        ],
      },

      {
        title: "Método DB Backup",
        description:
          "Recuperación desde respaldo.",

        items: [
          "DB Backup",
          "DB Restore",
          "Copia previa",
          "Restauración rápida",
        ],
      },

      {
        title: "PS4_db_Rebuilder_EXT",
        description:
          "Reconstrucción automática.",

        items: [
          "Python",
          "fix_db.py",
          "IP de la consola",
          "Reconstrucción completa",
        ],
      },

      {
        title: "Método FTP",
        description:
          "Recuperación manual.",

        items: [
          "FileZilla",
          "FTP Server",
          "app.db",
          "Restauración manual",
        ],
      },

      {
        title: "Base de Datos",
        description:
          "Archivo principal.",

        items: [
          "/system_data/priv/mms",
          "app.db",
          "Biblioteca PS4",
          "Información instalada",
        ],
      },

      {
        title: "Herramientas Necesarias",
        description:
          "Software recomendado.",

        items: [
          "Python",
          "PS4_db_Rebuilder_EXT",
          "FileZilla",
          "FTP Server",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Recuperar juegos ocultos.",
          "No requiere reinstalar.",
          "Compatible con GoldHEN.",
          "Múltiples métodos disponibles.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas complementarias.",

        items: [
          "PS4 Xplorer",
          "FTP Server",
          "GoldHEN",
          "DB Backup",
          "PS4 PKG Tool",
        ],
      },
    ],
  },
},
// Activar Cuenta PSN
{
  console: "PS4",
  name: "Activar Cuenta PSN",

  image: "img/PS4/activar-cuenta-psn.jpg",

  description:
    "Guía para activar un usuario local de PS4 utilizando Web Activator y habilitar funciones asociadas a cuentas activadas.",

  website: null,

  downloads: [],

  guide: {
    function:
      "Permite activar una cuenta local para utilizar determinadas funciones del sistema que requieren una cuenta activada.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      Accounts: "✅ Compatible",
      SaveData: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "Web Activator",
      "Navegador PS4",
    ],

    installation: [
      "Ejecutar GoldHEN.",
      "Abrir Web Activator.",
      "Seleccionar el usuario.",
      "Activar la cuenta.",
      "Reiniciar la consola.",
    ],

    usage:
      "Permite habilitar funciones asociadas a cuentas activadas directamente desde la consola.",

    notes:
      "Después de la activación es recomendable reiniciar la consola para aplicar correctamente los cambios. 【1-0dd167】",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Requisitos",
        description:
          "Elementos necesarios.",

        items: [
          "GoldHEN",
          "Web Activator",
          "Navegador PS4",
          "Usuario local",
        ],
      },

      {
        title: "Activación",
        description:
          "Proceso principal.",

        items: [
          "Seleccionar usuario",
          "Cambiar Account ID",
          "Set & Activate",
          "Aplicar cambios",
        ],
      },

      {
        title: "Web Activator",
        description:
          "Herramienta utilizada.",

        items: [
          "Activación local",
          "Gestión de usuarios",
          "Interfaz web",
          "Integración GoldHEN",
        ],
      },

      {
        title: "Funciones Habilitadas",
        description:
          "Usos habituales.",

        items: [
          "Copiar partidas",
          "Gestión de datos guardados",
          "Funciones de cuenta",
          "Opciones adicionales",
        ],
      },

      {
        title: "Reinicio",
        description:
          "Paso final.",

        items: [
          "Guardar cambios",
          "Reiniciar consola",
          "Aplicar activación",
          "Verificar resultado",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Configuración sencilla.",
          "Compatible con GoldHEN.",
          "Permite usar Save Data.",
          "Activación rápida.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas complementarias.",

        items: [
          "Apollo Save Tool",
          "PS4 Xplorer",
          "GoldHEN",
          "Recuperar Juegos de PS4",
          "DNS + Cancelar Update",
        ],
      },
    ],
  },
},
// Cambiar HDD de PS4
{
  console: "PS4",
  name: "Cambiar HDD de PS4",

  image: "img/PS4/cambiar-hdd-ps4.jpg",

  description:
    "Guía para reemplazar el disco duro interno de PlayStation 4 por una unidad de mayor capacidad y restaurar los datos posteriormente.",

  website: null,

  downloads: [
    {
      name: "PS4 Update",
      url: "https://darthsternie.net/ps4-firmwares/",
    },
  ],

  guide: {
    function:
      "Permite sustituir el disco duro interno de la consola y restaurar los datos mediante copias de seguridad.",

    compatibility: {
      PS4: "✅ Compatible",
      HDD: "✅ Compatible",
      SSD: "✅ Compatible",
      Backup: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4",
      "Nuevo HDD o SSD",
      "USB para copias de seguridad",
      "Firmware de reinstalación",
    ],

    installation: [
      "Crear una copia de seguridad.",
      "Instalar el nuevo disco.",
      "Preparar el USB con el firmware.",
      "Reinstalar el sistema.",
      "Restaurar la copia de seguridad.",
    ],

    usage:
      "Permite ampliar la capacidad de almacenamiento manteniendo los datos importantes de la consola.",

    notes:
      "La guía incluye respaldo de base de datos, copia de seguridad completa y restauración posterior del sistema. 【1-80ccb6】",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Copias de Seguridad",
        description:
          "Protección de datos.",

        items: [
          "DB Backup",
          "DB Restore",
          "USB externo",
          "Respaldo previo",
        ],
      },

      {
        title: "Disco de Reemplazo",
        description:
          "Nuevo almacenamiento.",

        items: [
          "HDD",
          "SSD",
          "Mayor capacidad",
          "Sustitución interna",
        ],
      },

      {
        title: "Firmware",
        description:
          "Reinstalación del sistema.",

        items: [
          "PS4 Update",
          "Firmware Recovery",
          "USB",
          "Instalación limpia",
        ],
      },

      {
        title: "Modo Recovery",
        description:
          "Inicialización del sistema.",

        items: [
          "Modo seguro",
          "Reinstalar sistema",
          "Reconocer disco",
          "Configuración inicial",
        ],
      },

      {
        title: "Restauración",
        description:
          "Recuperar datos.",

        items: [
          "Restaurar Backup",
          "Partidas",
          "Aplicaciones",
          "Configuración",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Más almacenamiento.",
          "Compatible con SSD.",
          "Conservación de datos.",
          "Mejor organización.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas complementarias.",

        items: [
          "Recuperar Juegos de PS4",
          "Activar Cuenta PSN",
          "Apollo Save Tool",
          "GoldHEN",
          "PS4 Xplorer",
        ],
      },
    ],
  },
},
// Backup FPKG
{
  console: "PS4",
  name: "Backup FPKG",

  image: "img/PS4/backup-fpkg.jpg",

  description:
    "Guía para realizar copias de seguridad de juegos físicos o digitales y convertirlos en paquetes FPKG instalables.",

  website: null,

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/aBQk2JiA#1TFWt0tbjsXX1uPncHANew",
    },
  ],

  guide: {
    function:
      "Permite realizar un respaldo completo de juegos instalados y generar archivos FPKG para su futura instalación.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      FPKG: "✅ Compatible",
      FTP: "✅ Compatible",
      USB: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "Disco USB o HDD externo",
      "FTP Server",
      "FileZilla",
      "PS4 Fake PKG Tools",
    ],

    installation: [
      "Instalar el juego en la consola.",
      "Preparar el dispositivo USB.",
      "Activar FTP Server.",
      "Ejecutar Game Dumper.",
      "Generar los archivos GP4 y PKG.",
    ],

    usage:
      "Permite convertir juegos instalados en respaldos FPKG para preservación o reinstalación.",

    notes:
      "La guía incluye respaldo de juego base, actualizaciones y verificación de archivos de trofeos antes de la creación del FPKG. 【1-2a688b】",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Juego Fuente",
        description:
          "Contenido a respaldar.",

        items: [
          "Juego físico",
          "Juego digital",
          "Parche opcional",
          "Contenido instalado",
        ],
      },

      {
        title: "Preparar USB",
        description:
          "Almacenamiento externo.",

        items: [
          "Disco duro externo",
          "Memoria USB",
          "Espacio disponible",
          "Conexión permanente",
        ],
      },

      {
        title: "FTP Server",
        description:
          "Acceso a archivos.",

        items: [
          "GoldHEN",
          "Enable FTP Server",
          "IP de consola",
          "FileZilla",
        ],
      },

      {
        title: "Game Dumper",
        description:
          "Extracción del juego.",

        items: [
          "Dump App",
          "Dump Patch",
          "Copiado al USB",
          "Extracción automática",
        ],
      },

      {
        title: "Trofeos",
        description:
          "Verificación previa.",

        items: [
          "trophy00.trp",
          "HxD",
          "Trofeos encriptados",
          "Validación manual",
        ],
      },

      {
        title: "Fake PKG Tools",
        description:
          "Creación de paquetes.",

        items: [
          "gengp4_app",
          "gengp4_patch",
          "GP4",
          "Orbis Pub Gen",
        ],
      },

      {
        title: "Generación PKG",
        description:
          "Resultado final.",

        items: [
          "Juego base",
          "Actualización",
          "FPKG instalable",
          "Respaldo permanente",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Conservar juegos instalados.",
          "Crear FPKG propios.",
          "Compatible con GoldHEN.",
          "Respaldo de actualizaciones.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas complementarias.",

        items: [
          "Dump de Juegos PS4",
          "PS4 PKG Tool",
          "PS4 PKG Viewer",
          "pkgMerge",
          "Trofeos Encriptados para PKG",
        ],
      },
    ],
  },
},
// Eliminar DLC
{
  console: "PS4",
  name: "Eliminar DLC",

  image: "img/PS4/eliminar-dlc.jpg",

  description:
    "Guía para eliminar DLC, complementos y temas instalados en PlayStation 4 desde Debug Settings.",

  website: null,

  downloads: [],

  guide: {
    function:
      "Permite administrar y eliminar contenido adicional instalado en la consola sin necesidad de desinstalar el juego completo.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      DLC: "✅ Compatible",
      Themes: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "Debug Settings",
      "Juego con DLC instalado",
    ],

    installation: [
      "Activar GoldHEN.",
      "Abrir Debug Settings.",
      "Acceder a Add Content Manager.",
      "Seleccionar el contenido.",
      "Eliminar los DLC deseados.",
    ],

    usage:
      "Permite borrar DLC, contenido adicional o temas instalados individualmente.",

    notes:
      "La eliminación se realiza desde Add Content Manager sin afectar necesariamente al juego base. 【1-baa309】",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Add Content Manager",
        description:
          "Gestión de contenido.",

        items: [
          "Debug Settings",
          "Game",
          "Add Content Manager",
          "Delete",
        ],
      },

      {
        title: "Contenido Compatible",
        description:
          "Elementos administrables.",

        items: [
          "DLC",
          "Complementos",
          "Temas",
          "Contenido instalado",
        ],
      },

      {
        title: "Selección",
        description:
          "Administración manual.",

        items: [
          "Seleccionar juego",
          "Elegir DLC",
          "Selección múltiple",
          "Selección individual",
        ],
      },

      {
        title: "Temas de PS4",
        description:
          "Contenido adicional.",

        items: [
          "Otros",
          "Temas instalados",
          "Eliminar temas",
          "Gestión manual",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Eliminar DLC concretos.",
          "No requiere reinstalar.",
          "Compatible con GoldHEN.",
          "Administración sencilla.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas complementarias.",

        items: [
          "PS4 Xplorer",
          "GoldHEN",
          "Recuperar Juegos de PS4",
          "PS4 PKG Tool",
          "Activar Cuenta PSN",
        ],
      },
    ],
  },
},
// Cambiar Iconos PS4
{
  console: "PS4",
  name: "Cambiar Iconos PS4",

  image: "img/PS4/cambiar-iconos-ps4.jpg",

  description:
    "Personaliza los iconos de usuario de PlayStation 4 utilizando la herramienta Iconit.",

  website: "https://github.com/OfficialAhmed/Iconit-PS4",

  downloads: [
    {
      name: "Mirror MEGA",
      url: "https://mega.nz/folder/7YB1XbCK#NvyhHrt7dg_Q7oJvUZO4lQ",
    },
    {
      name: "Github Releases",
      url: "https://github.com/OfficialAhmed/Iconit-PS4/releases",
    },
  ],

  guide: {
    function:
      "Permite reemplazar los iconos de usuario de PS4 con imágenes personalizadas creadas por el usuario.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      FTP: "✅ Compatible",
      Iconit: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "Iconit",
      "FTP habilitado",
      "Imagen PNG",
      "PC con Windows",
    ],

    installation: [
      "Crear el icono personalizado.",
      "Guardar la imagen en PNG.",
      "Activar FTP en la consola.",
      "Conectar Iconit a PS4.",
      "Aplicar el nuevo icono.",
    ],

    usage:
      "Permite modificar la imagen de perfil de los usuarios registrados en la consola.",

    notes:
      "Los iconos deben estar en formato PNG para garantizar la compatibilidad con la herramienta. 【1-024716】",

    version: "Actual",
    author: "Iconit",

    details: [
      {
        title: "Diseño del Icono",
        description:
          "Creación de imágenes.",

        items: [
          "Plantilla circular",
          "PNG",
          "Diseño personalizado",
          "Edición gráfica",
        ],
      },

      {
        title: "Programas Compatibles",
        description:
          "Edición de imágenes.",

        items: [
          "Photoshop",
          "GIMP",
          "Paint.NET",
          "PNG Export",
        ],
      },

      {
        title: "Conexión PS4",
        description:
          "Acceso a la consola.",

        items: [
          "FTP",
          "IP de consola",
          "Puerto FTP",
          "GoldHEN",
        ],
      },

      {
        title: "Iconit",
        description:
          "Herramienta principal.",

        items: [
          "Connect PS4",
          "Cambiar icono",
          "Idioma español",
          "Gestión visual",
        ],
      },

      {
        title: "Verificación",
        description:
          "Comprobación de cambios.",

        items: [
          "Cambiar usuario",
          "Modo reposo",
          "Recargar perfil",
          "Ver icono nuevo",
        ],
      },

      {
        title: "Ventajas",
        description:
          "Beneficios principales.",

        items: [
          "Personalización visual.",
          "Compatible con GoldHEN.",
          "Iconos personalizados.",
          "Resultado inmediato.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description:
          "Herramientas similares.",

        items: [
          "Iconit",
          "Temas PS4",
          "Eliminar DLC",
          "PS4 Xplorer",
          "FTP Server",
        ],
      },
    ],
  },
},
// Activar Multimedia
{
  console: "PS4",
  name: "Activar Multimedia",

  image: "img/PS4/activar-multimedia.jpg",

  description:
    "Guía para habilitar las funciones multimedia y la reproducción de discos DVD y Blu-ray en PlayStation 4.",

  website: null,

  downloads: [],

  guide: {
    function:
      "Permite activar las licencias multimedia necesarias para la reproducción de contenido en DVD y Blu-ray.",

    compatibility: {
      GoldHEN: "✅ Compatible",
      PS4: "✅ Compatible",
      DVD: "✅ Compatible",
      BluRay: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4 con GoldHEN",
      "USB ExFAT",
    ],

    installation: [
      "Ejecutar GoldHEN.",
      "Abrir Debug Settings.",
      "Acceder a License Activation.",
      "Activar las licencias multimedia.",
      "Probar la reproducción.",
    ],

    usage:
      "Permite habilitar funciones multimedia para reproducir contenido en discos compatibles.",

    notes:
      "La activación se realiza desde Debug Settings mediante el apartado License Activation. 【1-51c49f】",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Licencias Multimedia",
        description: "Activación requerida.",

        items: [
          "License Activation",
          "DVD",
          "Blu-ray",
          "Códecs multimedia",
        ],
      },

      {
        title: "Debug Settings",
        description: "Menú utilizado.",

        items: [
          "GoldHEN",
          "Debug Settings",
          "Configuración avanzada",
          "Activación",
        ],
      },

      {
        title: "Compatibilidad",
        description: "Contenido soportado.",

        items: [
          "Películas DVD",
          "Películas Blu-ray",
          "Contenido multimedia",
          "Discos físicos",
        ],
      },

      {
        title: "Requisitos",
        description: "Elementos necesarios.",

        items: [
          "PS4",
          "GoldHEN",
          "USB ExFAT",
          "Disco multimedia",
        ],
      },

      {
        title: "Ventajas",
        description: "Beneficios principales.",

        items: [
          "Reproducción multimedia.",
          "Activación rápida.",
          "Compatible con GoldHEN.",
          "Uso sencillo.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description: "Herramientas complementarias.",

        items: [
          "Activar Cuenta PSN",
          "DNS + Cancelar Update",
          "GoldHEN",
          "PS4 Xplorer",
          "Uso a Distancia con PS Vita",
        ],
      },
    ],
  },
},
// PS4 Modo Seguro
{
  console: "PS4",
  name: "PS4 Modo Seguro",

  image: "img/PS4/ps4-modo-seguro.jpg",

  description:
    "Guía para acceder al Modo Seguro de PlayStation 4 y utilizar sus herramientas de recuperación, reparación y mantenimiento.",

  website: null,

  downloads: [],

  guide: {
    function:
      "Permite acceder a las opciones avanzadas de recuperación y diagnóstico del sistema PlayStation 4.",

    compatibility: {
      PS4: "✅ Compatible",
      Recovery: "✅ Compatible",
      SafeMode: "✅ Compatible",
      GoldHEN: "✅ Compatible",
    },

    requirements: [
      "PlayStation 4",
      "Mando DualShock 4",
      "Cable USB",
    ],

    installation: [
      "Apagar completamente la consola.",
      "Mantener pulsado POWER.",
      "Esperar al segundo pitido.",
      "Conectar el mando por USB.",
      "Acceder al menú Recovery.",
    ],

    usage:
      "Permite solucionar errores del sistema, reconstruir bases de datos y reinstalar el firmware cuando sea necesario.",

    notes:
      "El menú Recovery incluye opciones de actualización, reparación y restauración del sistema. 【1-598d69】",

    version: "Tutorial",
    author: "MarcheBMPC",

    details: [
      {
        title: "Acceso al Recovery",
        description: "Inicio del modo seguro.",

        items: [
          "Consola apagada",
          "Botón POWER",
          "Segundo pitido",
          "Control USB",
        ],
      },

      {
        title: "Reconstruir Base de Datos",
        description: "Mantenimiento recomendado.",

        items: [
          "Reorganizar contenido",
          "Corregir errores",
          "Optimizar sistema",
          "Reindexar aplicaciones",
        ],
      },

      {
        title: "Actualizar Firmware",
        description: "Recuperación del sistema.",

        items: [
          "Internet",
          "USB",
          "PS4UPDATE.PUP",
          "Firmware oficial",
        ],
      },

      {
        title: "Restaurar Ajustes",
        description: "Recuperación parcial.",

        items: [
          "Configuración",
          "Valores predeterminados",
          "Sin borrar juegos",
          "Sin borrar partidas",
        ],
      },

      {
        title: "Inicialización",
        description: "Restauración completa.",

        items: [
          "Borrar contenido",
          "Restablecer sistema",
          "Instalación limpia",
          "Reinstalar firmware",
        ],
      },

      {
        title: "Solución de Problemas",
        description: "Casos frecuentes.",

        items: [
          "Pantalla negra",
          "Errores del sistema",
          "Actualizaciones fallidas",
          "Problemas de arranque",
        ],
      },

      {
        title: "PS4 Pro",
        description: "Opciones exclusivas.",

        items: [
          "HDCP",
          "Compatibilidad 4K",
          "Streaming",
          "Multimedia",
        ],
      },

      {
        title: "Ventajas",
        description: "Beneficios principales.",

        items: [
          "Recuperación avanzada.",
          "Reparación del sistema.",
          "Actualización manual.",
          "Mantenimiento preventivo.",
        ],
      },

      {
        title: "Aplicaciones Relacionadas",
        description: "Guías similares.",

        items: [
          "PS3 Modo Seguro",
          "Cambiar HDD de PS4",
          "Recuperar Juegos de PS4",
          "DNS + Cancelar Update",
          "Activar Multimedia",
        ],
      },
    ],
  },
},
];
