-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT MAX(salary) - MIN(salary) 
  AS diference_salary
  FROM hr.employees;
