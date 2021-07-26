-- Usando o IF na tabela sakila.film , exiba o id do filme , o título e uma coluna extra chamada 'conheço o filme?' , em que deve-se avaliar se o nome do filme é ' ACE GOLDFINGER '. Caso seja, exiba "Já assisti esse filme". Caso contrário, exiba "Não conheço o filme". Não esqueça de usar um alias para renomear a coluna da condicional.

SELECT film_id,
  title,
  IF(title = 'ACE GOLDFINGER', 'á assisti esse filme', 'Não conheço o filme') AS films_view
  FROM sakila.film;
