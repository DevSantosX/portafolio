exports.onCreatePage = async ({ page, actions }) => {
  const { createPage, deletePage } = actions

  // Comprueba si la página es una 404 localizada
  if (page.path.match(/^\/[a-z]{2}\/404\/$/)) {
    const oldPage = { ...page }

    // Obtiene el idioma de la ruta y empareja todas las rutas
    // que empiecen con este código (aparte de otras rutas válidas)
    const langCode = page.path.split(`/`)[1]
    page.matchPath = `/${langCode}/*`

    // Recrea la página modificada
    deletePage(oldPage)
    createPage(page)
  }
}