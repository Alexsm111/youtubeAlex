// Wait for DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Generate random videos for the main page
  generateVideos("videos-container", 8)
  generateShorts("shorts-container", 6)
  generateVideos("more-videos-container", 8)
})

// Function to generate random videos
function generateVideos(containerId, count) {
  const container = document.getElementById(containerId)
  if (!container) return

  for (let i = 0; i < count; i++) {
    const videoCard = document.createElement("div")
    videoCard.className = "video-card"
    videoCard.onclick = () => {
      window.location.href = "video.html"
    }

    // Generate random duration
    const minutes = Math.floor(Math.random() * 30) + 1
    const seconds = Math.floor(Math.random() * 60)
    const duration = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`

    // Generate random views
    const views = Math.floor(Math.random() * 10000000)
    const formattedViews = formatViews(views)

    // Generate random time
    const timeAgo = generateRandomTimeAgo()

    // Generate random thumbnail
    const randomId = Math.floor(Math.random() * 1000)
    const thumbnailUrl = `https://picsum.photos/id/${randomId}/300/168`

    // Generate random channel
    const channelId = Math.floor(Math.random() * 10) + 1
    const channelImg = `assets/channels/channel${channelId <= 4 ? channelId : 1}.jpg`

    // Generate random title
    const titles = [
      "Tutorial completo de HTML y CSS para principiantes",
      "Aprende JavaScript en 1 hora - Curso intensivo",
      "Cómo crear una página web responsive con Flexbox",
      "Diseño web moderno con CSS Grid y Flexbox",
      "Curso de SASS para mejorar tu CSS",
      "Aprende a usar Git y GitHub en 20 minutos",
      "Cómo crear animaciones con CSS",
      "Introducción a React.js para principiantes",
      "Curso completo de Node.js y Express",
      "Cómo optimizar el rendimiento de tu sitio web",
    ]
    const randomTitle = titles[Math.floor(Math.random() * titles.length)]

    // Generate random channel name
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

    videoCard.innerHTML = `
      <div class="video-card__thumbnail">
        <img src="${thumbnailUrl}" alt="Thumbnail" class="video-card__thumbnail-img">
        <div class="video-card__thumbnail-duration">${duration}</div>
      </div>
      <div class="video-card__info">
        <div class="video-card__info-channel">
          <img src="${channelImg}" alt="Channel">
        </div>
        <div class="video-card__info-text">
          <div class="video-card__info-text-title">${randomTitle}</div>
          <div class="video-card__info-text-channel">${randomChannel}</div>
          <div class="video-card__info-text-stats">${formattedViews} visualizaciones • hace ${timeAgo}</div>
        </div>
      </div>
    `

    container.appendChild(videoCard)
  }
}

// Function to generate random shorts
function generateShorts(containerId, count) {
  const container = document.getElementById(containerId)
  if (!container) return

  for (let i = 0; i < count; i++) {
    const shortCard = document.createElement("div")
    shortCard.className = "short-card"

    // Generate random views
    const views = Math.floor(Math.random() * 10000000)
    const formattedViews = formatViews(views)

    // Generate random thumbnail (vertical for shorts)
    const randomId = Math.floor(Math.random() * 1000)
    const thumbnailUrl = `https://picsum.photos/id/${randomId}/180/320`

    // Generate random title
    const titles = [
      "Truco de CSS que no conocías",
      "Aprende este atajo de teclado",
      "Cómo centrar un div en 10 segundos",
      "El mejor hack de JavaScript",
      "Truco para mejorar tu código",
      "Cómo hacer este efecto con CSS",
      "Tip de productividad para programadores",
      "Aprende esta función de JavaScript",
      "Cómo resolver este error común",
      "Truco para optimizar tu código",
    ]
    const randomTitle = titles[Math.floor(Math.random() * titles.length)]

    shortCard.innerHTML = `
      <div class="short-card__thumbnail">
        <img src="${thumbnailUrl}" alt="Short Thumbnail" class="short-card__thumbnail-img">
      </div>
      <div class="short-card__info">
        <div class="short-card__info-title">${randomTitle}</div>
        <div class="short-card__info-views">${formattedViews} visualizaciones</div>
      </div>
    `

    container.appendChild(shortCard)
  }
}

// Helper function to format views
function formatViews(views) {
  if (views >= 1000000) {
    return `${(views / 1000000).toFixed(1)}M`
  } else if (views >= 1000) {
    return `${(views / 1000).toFixed(1)}K`
  } else {
    return views.toString()
  }
}

// Helper function to generate random time ago
function generateRandomTimeAgo() {
  const units = ["minutos", "horas", "días", "semanas", "meses", "años"]
  const unit = units[Math.floor(Math.random() * units.length)]
  const value = Math.floor(Math.random() * 10) + 1
  return `${value} ${unit}`
}

