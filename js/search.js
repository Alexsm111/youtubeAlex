
document.addEventListener("DOMContentLoaded", () => {
 
  generateSearchResults("search-results-container", 15)
})


function generateSearchResults(containerId, count) {
  const container = document.getElementById(containerId)
  if (!container) return

  for (let i = 0; i < count; i++) {
    const searchResultCard = document.createElement("div")
    searchResultCard.className = "search-result-card"
    searchResultCard.onclick = () => {
      window.location.href = "video.html"
    }

    
    const minutes = Math.floor(Math.random() * 30) + 1
    const seconds = Math.floor(Math.random() * 60)
    const duration = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`

    
    const views = Math.floor(Math.random() * 10000000)
    const formattedViews = formatViews(views)


    const timeAgo = generateRandomTimeAgo()


    const randomId = Math.floor(Math.random() * 1000)
    const thumbnailUrl = `https://picsum.photos/id/${randomId}/360/202`


    const channelId = Math.floor(Math.random() * 10) + 1
    const channelImg = `assets/channels/channel${channelId <= 4 ? channelId : 1}.jpg`


    const titles = [
      "Tutorial completo de HTML para principiantes - Aprende HTML desde cero",
      "HTML y CSS - Curso completo con proyectos",
      "Aprende HTML en 1 hora - Curso intensivo para principiantes",
      "HTML5 - Novedades y características principales",
      "Estructura básica de un documento HTML - Tutorial para principiantes",
      "Formularios en HTML - Cómo crear formularios interactivos",
      "HTML semántico - Mejora la estructura de tu página web",
      "HTML vs HTML5 - Principales diferencias explicadas",
      "Tablas en HTML - Cómo crear y estilizar tablas",
      "Elementos multimedia en HTML - Audio, video e imágenes",
    ]
    const randomTitle = titles[Math.floor(Math.random() * titles.length)]


    const channels = [
      "Tutoriales HTML",
      "CSS Masters",
      "JavaScript Pro",
      "Canal de Programación",
      "Web Dev Simplified",
      "Coding Addict",
      "Dev Ed",
      "Traversy Media",
      "The Net Ninja",
      "Academind",
    ]
    const randomChannel = channels[Math.floor(Math.random() * channels.length)]


    const descriptions = [
      "En este tutorial aprenderás los fundamentos de HTML para crear tu primera página web desde cero. Veremos elementos básicos, estructura y mucho más.",
      "Curso completo de HTML donde aprenderás a estructurar páginas web profesionales con las mejores prácticas y técnicas modernas.",
      "HTML es el lenguaje de marcado estándar para crear páginas web. En este video aprenderás todo lo que necesitas saber para empezar.",
      "Aprende a utilizar HTML5 y sus nuevas características para crear sitios web modernos y accesibles con este tutorial paso a paso.",
      "En este video explicamos la estructura básica de un documento HTML y cómo crear tu primera página web desde cero.",
    ]
    const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)]

    
    searchResultCard.innerHTML = `
      <div class="search-result-card__thumbnail">
        <img src="${thumbnailUrl}" alt="Thumbnail" class="search-result-card__thumbnail-img">
        <div class="search-result-card__thumbnail-duration">${duration}</div>
      </div>
      <div class="search-result-card__info">
        <h3 class="search-result-card__info-title">${randomTitle}</h3>
        <div class="search-result-card__info-stats">${formattedViews} visualizaciones • hace ${timeAgo}</div>
        <div class="search-result-card__info-channel">
          <img src="${channelImg}" alt="Channel">
          <!-- Reemplazamos el nombre del canal por el ícono de Google -->
          <span><i class="material-icons">google</i></span>
        </div>
        <div class="search-result-card__info-description">${randomDescription}</div>
      </div>
    `

    container.appendChild(searchResultCard)
  }
}


function formatViews(views) {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`
  } else if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`
  } else {
    return views.toString()
  }
}

function generateRandomTimeAgo() {
  const units = ["minutos", "horas", "días", "semanas", "meses", "años"]
  const unit = units[Math.floor(Math.random() * units.length)]
  const value = Math.floor(Math.random() * 10) + 1
  return `${value} ${unit}`
}
