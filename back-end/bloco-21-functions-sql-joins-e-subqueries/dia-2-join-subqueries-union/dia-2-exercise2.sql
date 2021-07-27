USE Pixar;

SELECT m.id, m.title, b.domestic_sales, b.international_sales	
  FROM Movies AS m
  INNER JOIN BoxOffice AS b
  ON m.id = b.movie_id AND b.international_sales > domestic_sales;
  