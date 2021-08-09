export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "frontend",
        htmlAttrs: {
            lang: "en"
        },
        bodyAttrs: {
            class: "fixed-header"
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" }
        ],
        script: [
            {
                src: "/js/pace.min.js",
                type: "text/javascript",
                body: true,
                defer: true
            },
            {
                src: "/js/liga.js",
                type: "text/javascript",
                body: true,
                defer: true
            },
            {
                src: "/js/jquery-3.2.1.min.js",
                type: "text/javascript",
                body: true,
                defer: true
            },
            {
                src: "/js/modernizr.custom.js",
                type: "text/javascript",
                body: true,
                defer: true
            },
            {
                src: "/js/jquery-ui.min.js",
                type: "text/javascript",
                body: true,
                defer: true
            },
            {
                src: "/js/popper.min.js",
                type: "text/javascript",
                body: true,
                defer: true
            },
            {
                src: "/js/bootstrap.min.js",
                type: "text/javascript",
                body: true,
                defer: true
            },
            {
                src: "/js/jquery-easy.js",
                type: "text/javascript",
                body: true,
                defer: true
            },
            {
                src: "/js/jquery.unveil.min.js",
                type: "text/javascript",
                body: true,
                defer: true
            },
            {
                src: "/js/jquery.ioslist.min.js",
                type: "text/javascript",
                body: true,
                defer: true
            },
            {
                src: "/js/jquery.actual.min.js",
                type: "text/javascript",
                body: true,
                defer: true
            },
            {
                src: "/js/jquery.scrollbar.min.js",
                type: "text/javascript",
                body: true,
                defer: true
            },
            {
                src: "/js/select2.full.min.js",
                type: "text/javascript",
                body: true,
                defer: true
            },
            {
                src: "/js/classie.js",
                type: "text/javascript",
                body: true,
                defer: true
            },
            {
                src: "/js/pages.js",
                type: "text/javascript",
                body: true,
                defer: true
            },
            {
                src: "/js/scripts.js",
                type: "text/javascript",
                body: true,
                defer: true
            }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        "@/assets/pace/pace-theme-flash.css",
        "@/assets/bootstrap/css/bootstrap.min.css",
        "@/assets/jquery-scrollbar/jquery.scrollbar.css",
        "@/assets/select2/css/select2.min.css",
        "@assets/pages/css/pages.css",
        "@/assets/css/style.css"
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        "@nuxtjs/auth-next"
    ],

    auth: {
      strategies: {
        'laravelSanctum': {
          provider: 'laravel/sanctum',
          url: 'http://localhost:8000',
          endpoints: {
              login: {
                  url: '/api/login'
              },
              logout: {
                  url: '/api/logout'
              },
              user: {
                  url: '/api/user'
              }
          },
          user: {
              property: false
          }
        },
      },
      redirect: {
          login: '/auth/login',
          logout: '/',
          home: '/dashboard'
      }
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        baseURL: "http://localhost:8000/",
        credentials: true
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        babel: {
            plugins: [
                [
                    "@babel/plugin-proposal-private-property-in-object",
                    { loose: true }
                ]
            ]
        }
    }
};
