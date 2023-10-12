const web = {
  nombre: "bluuweb",
  links: {
    enlace: "http://www.youtube.com",
  },
  redesSociales: {
    youtube: {
      enlace: "youtebe.com/bluuweb",
      nombre: "bluuweb",
    },
  },
};

console.log(web.redesSociales.youtube.enlace);

const nameYoutube = web.redesSociales.youtube.nombre;
console.log(nameYoutube);

const { enlace, nombre } = web.redesSociales.youtube;
console.log(enlace, nombre);
