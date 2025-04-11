export const sanitazeContent = (content: string) => {
  if (!content) return ""

  return (
    content
      .replace(/&nbsp;/g, " ")
      .replace(/\s+/g, " ") // Обрабатывает все виды пробелов
      .replace(/<div><br><\/div>/gi, "\n") // case-insensitive
      .replace(/<\/?div>/gi, "\n") // Заменяет все открывающие и закрывающие div
      // .replace(/\n+/g, "\n") // Удаляет дублированные переносы строк
      .trim()
  )
}

// export const sanitazeContent = (content: string) =>
//   content
//     .replaceAll("&nbsp;", " ")
//     .replaceAll(/ +/g, " ") // Добавлен флаг 'g'
//     .replaceAll("<div><br></div>", "\n")
//     .replaceAll("</div>", "")
//     .replaceAll("<div>", "\n");
