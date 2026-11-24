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
];
