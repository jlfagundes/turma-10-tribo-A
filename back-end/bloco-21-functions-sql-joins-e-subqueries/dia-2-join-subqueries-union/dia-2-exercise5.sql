SELECT t.name, m.title, m.director, m.year
FROM Pixar.Theater AS t
RIGHT JOIN Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY m.title
