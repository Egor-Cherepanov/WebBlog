export const sanitazeContent = (content: string) => {
  if (!content) return ""

  // Заменяем параграфы на переносы строк
  return content
    .replace(/<p[^>]*>/gi, "") // Удаляем открывающие теги <p>
    .replace(/<\/?div>/gi, "\n") // Заменяет все открывающие и закрывающие div
    .replace(/<\/p[^>]*>/gi, "\n\n") // Заменяем закрывающие теги на двойные переносы
    .replace(/<br[^>]*>/gi, "\n") // Заменяем <br> на переносы
    .replace(/&nbsp;/gi, " ") // Заменяем неразрывные пробелы
    .replace(/\n{3,}/g, "\n\n") // Удаляем лишние переносы
    .trim()
}
