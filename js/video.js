
document.addEventListener("DOMContentLoaded", () => {
  
  generateSuggestedVideos("suggested-videos-container", 15)

 
  generateComments("comments-container", 10)
})


function generateSuggestedVideos(containerId, count) {
  const container = document.getElementById(containerId)
  if (!container) return

  for (let i = 0; i < count; i++) {
    const suggestedVideo = document.createElement("div")
    suggestedVideo.className = "suggested-video"
    suggestedVideo.onclick = () => {
      window.location.href = "video.html"
    }

 
    const minutes = Math.floor(Math.random() * 30) + 1
    const seconds = Math.floor(Math.random() * 60)
    const duration = `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`

    
    const views = Math.floor(Math.random() * 10000000)
    const formattedViews = formatViews(views)

    
    const timeAgo = generateRandomTimeAgo()

     const randomId = Math.floor(Math.random() * 1000)
    const thumbnailUrl = `https://picsum.photos/id/${randomId}/168/94  * 1000);
    const thumbnailUrl = \`https://picsum.photos/id/${randomId}/168/94`

    
    const channelId = Math.floor(Math.random() * 10) + 1
    const channelImg = `assets/channels/channel${channelId <= 4 ? channelId : 1}.jpg`

    
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

    suggestedVideo.innerHTML = `
      <div class="suggested-video__thumbnail">
        <img src="${thumbnailUrl}" alt="Thumbnail" class="suggested-video__thumbnail-img">
        <div class="suggested-video__thumbnail-duration">${duration}</div>
      </div>
      <div class="suggested-video__info">
        <div class="suggested-video__info-title">${randomTitle}</div>
        <div class="suggested-video__info-channel">${randomChannel}</div>
        <div class="suggested-video__info-stats">${formattedViews} visualizaciones • hace ${timeAgo}</div>
      </div>
    `

    container.appendChild(suggestedVideo)
  }
}


function generateComments(containerId, count) {
  const container = document.getElementById(containerId)
  if (!container) return

  for (let i = 0; i < count; i++) {
    const comment = document.createElement("div")
    comment.className = "comment"

    
    const profileId = Math.floor(Math.random() * 10) + 1
    const profileImg = `assets/profiles/profile${profileId <= 4 ? profileId : 1}.jpg`

    const timeAgo = generateRandomTimeAgo()


    const likes = Math.floor(Math.random() * 1000)

  
    const authors = [
      "Usuario123",
      "WebDeveloper",
      "CodingFan",
      "HTMLMaster",
      "CSSWizard",
      "JSLearner",
      "TechEnthusiast",
      "CodeNewbie",
      "WebDesigner",
      "ProgrammingStudent",
    ]
    const randomAuthor = authors[Math.floor(Math.random() * authors.length)]

  
    const comments = [
      "Excelente tutorial, me ha ayudado mucho a entender HTML. ¡Gracias por compartir!",
      "Muy bien explicado, ahora entiendo mucho mejor cómo funciona CSS con HTML.",
      "¿Podrías hacer un tutorial sobre JavaScript para complementar este video?",
      "He estado buscando un tutorial así durante mucho tiempo, ¡gracias!",
      "Acabo de empezar a aprender desarrollo web y este video es justo lo que necesitaba.",
      "Muy claro y conciso. Me encanta tu forma de explicar los conceptos.",
      "¿Tienes algún consejo para alguien que está empezando en el desarrollo web?",
      "He seguido paso a paso tu tutorial y he conseguido crear mi primera página web. ¡Muchas gracias!",
      "¿Cuál es el mejor editor de código para principiantes según tu experiencia?",
      "Me gustaría ver más tutoriales sobre diseño responsive.",
    ]
    const randomComment = comments[Math.floor(Math.random() * comments.length)]

    comment.innerHTML = `
      <img src="${profileImg}" alt="Profile" class="comment__profile">
      <div class="comment__content">
        <div class="comment__content-header">
          <div class="comment__author">${randomAuthor}</div>
          <div class="comment__time">hace ${timeAgo}</div>
        </div>
        <div class="comment__content-text">${randomComment}</div>
        <div class="comment__content-actions">
          <button class="comment__action-btn">
            <img src="assets/icons/like.svg" alt="Like">
            <span>${likes}</span>
          </button>
          <button class="comment__action-btn">
            <img src="assets/icons/dislike.svg" alt="Dislike">
            <span></span>
          </button>
          <button class="comment__action-btn">
            <span>Responder</span>
          </button>
        </div>
      </div>
    `

    container.appendChild(comment)
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

