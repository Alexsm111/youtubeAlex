"use client"

import { useEffect } from "react"

export default function SyntheticVMPageForDeployment() {
  useEffect(() => {
    // Cargamos el script de video.js dinámicamente
    const script = document.createElement("script")
    script.src = "/js/video.js"
    script.async = true
    document.body.appendChild(script)

    // Limpieza al desmontar el componente
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="video-page-container">
      <div className="video-content">
        {/* Contenido principal del video */}
        <div className="video-player-container">{/* Aquí iría el reproductor de video */}</div>

        <div id="comments-container" className="comments-container">
          {/* Aquí se cargarán los comentarios */}
        </div>
      </div>

      <div id="suggested-videos-container" className="suggested-videos-container">
        {/* Aquí se cargarán los videos sugeridos */}
      </div>

      {/* Aseguramos que los contenedores estén correctamente posicionados con CSS */}
      <style jsx>{`
        .video-page-container {
          display: flex;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        
        .video-content {
          flex: 1;
          margin-right: 20px;
        }
        
        .suggested-videos-container {
          width: 350px;
          overflow-y: auto;
          max-height: 100vh;
        }
        
        .comments-container {
          margin-top: 20px;
        }
        
        @media (max-width: 768px) {
          .video-page-container {
            flex-direction: column;
          }
          
          .video-content {
            margin-right: 0;
            margin-bottom: 20px;
          }
          
          .suggested-videos-container {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

