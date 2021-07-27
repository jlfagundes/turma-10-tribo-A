SELECT m.title, b.rating
FROM Pixar.Movies AS m
INNER JOIN Pixar.BoxOffice AS b
ON m.id = b.movie_id AND b.rating > 7.5
ORDER BY b.rating DESC;

SELECT title
FROM Pixar.Movies
WHERE id IN (
	SELECT movie_id
    FROM Pixar.BoxOffice
    WHERE rating > 7.5);
    