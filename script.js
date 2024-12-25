// Diccionario con los textos en diferentes idiomas
const textos = {
    es: {
        titulo: "GRUPO VOCAL E INSTRUMENTAL ATLANTICO",
        linkGrupo: "Currículum del Grupo",
        linkDirector: "Currículum del Director",
        linkVideos: "Enlaces a Vídeos",
        tituloGrupo: "Currículum del Grupo",
        textoGrupo: "Aquí irá la información sobre el grupo musical.",
        tituloDirector: "Currículum del Director",
        textoDirector: "Aquí irá la información sobre el director del grupo.",
        tituloVideos: "Enlaces a Vídeos de Actuaciones",
        textoVideos: "Aquí puedes incluir enlaces a YouTube u otras plataformas:",
        footer: "&copy; 2024 Nombre del Grupo Musical. Todos los derechos reservados."
    },
    gl: {
        titulo: "GRUPO VOGAL E INSTRUMENTAL ATLÁNTICO",
        linkGrupo: "Currículo do Grupo",
        linkDirector: "Currículo do Director",
        linkVideos: "Ligazóns a Vídeos",
        tituloGrupo: "Currículo do Grupo",
        textoGrupo: "Aquí irá a información sobre o grupo musical.",
        tituloDirector: "Currículo do Director",
        textoDirector: "Aquí irá a información sobre o director do grupo.",
        tituloVideos: "Ligazóns a Vídeos das Actuacións",
        textoVideos: "Aquí podes incluir ligazóns a YouTube ou outras plataformas:",
        footer: "&copy; 2024 Grupo Vogal e Instrumental Atlántico. Todos os dereitos reservados."
    },
    en: {
        titulo: "GROUP VOCAL AND INSTRUMENTAL ATLANTICO",
        linkGrupo: "Group's Curriculum",
        linkDirector: "Director's Curriculum",
        linkVideos: "Video Links",
        tituloGrupo: "Group's Curriculum",
        textoGrupo: "Here you will find information about the musical group.",
        tituloDirector: "Director's Curriculum",
        textoDirector: "Here you will find information about the group's director.",
        tituloVideos: "Links to Performance Videos",
        textoVideos: "You can include links to YouTube or other platforms here:",
        footer: "&copy; 2024 Name of the Musical Group. All rights reserved."
    }
};

// Función para cambiar el idioma
document.getElementById("idioma").addEventListener("change", (event) => {
    const idioma = event.target.value;
    if (idioma === "es") {
        window.location.href = "index.html";
    } else if (idioma === "gl") {
        window.location.href = "index_gl.html";
    } else if (idioma === "en") {
        window.location.href = "index_en.html";
    }
});
