

export const capitalizeText = (text) => {
  const parsedText = text.split("_").join(" ")
  const capitalizedFirstLetter = parsedText[0].toUpperCase()
  return `${capitalizedFirstLetter}${parsedText.slice(1)}`
}


export const getCompetitionDet = (
  title,
    description,
    status,
    province,
    city,
    days,
    dueDate
) => {
  return [
    { name: "Titulo", content: title },
    { name: "Descripción ", content: description},
    { name: "Estado", content: status },
    { name: "Provincia", content: province },
    { name: "Ciudad", content: city },
    { name: "Días", content: days },
    { name: "Fecha final de inscripción", content: dueDate }
  ]
}
