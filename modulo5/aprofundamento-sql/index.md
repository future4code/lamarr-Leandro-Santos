### Exercício 1

a) O comando está atualizando a tabela Actor, onde está removendo a coluna salary.

b) O comando está atualizando a tabela Actor, onde está alterando o nome gender para sex e requisito para 06 caracteres.

c) O comando está atualizando a tabela Actor, onde está mantendo o nome gender e atualizando o varchar para 25 caracteres.

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100);


### Exercício 2

a) 
UPDATE Actor SET name= "Moacyr Franco", birth_date = "1920-04-26"
WHERE id= "003";

b)
UPDATE Actor SET name= "JULIANA PAES" WHERE id= "005";

UPDATE Actor SET name= "Juliana Paes" WHERE id= "005";

c)
UPDATE Actor SET name= "Claudia Raia", salary= 800000, birth_date = "1940-10-14",  gender= "female"
WHERE id= "005";

d) 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Ele buscou e não loclizou, portanto não houvemudanças, pois o id passado não existe

### Exercício 3

a) DELETE FROM Actor WHERE name = "Fernanda Montenegro"

b) DELETE FROM Actor WHERE gender = "male" AND salary >100000000;

### Exercício 4

a) SELECT AVG(salary) FROM Actor

b) SELECT MIN(salary) FROM Actor WHERE gender = "female";

c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

d) SELECT SUM(salary) FROM Actor;

### Exercício 5

a) A query separa por grupos de gênero, pela quantidade, por usar o COUNT e o GROUP BY

b) SELECT id, name FROM Actor WHERE gender = "male" ORDER BY name DESC;

c) SELECT * FROM Actor ORDER BY salary ASC;

d) SELECT * FROM Actor ORDER BY salary  DESC LIMIT 3;

e) SELECT AVG(salary), gender FROM Actor GROUP BY gender;

### Exercício 6

a) ALTER TABLE Movies ADD playing_limit_date DATE;

b) ALTER TABLE Movies CHANGE evaluation rating FLOAT;

c) UPDATE Movies
SET playing_limit_date= "2022-11-09"
WHERE id= "001"

UPDATE Movies
SET playing_limit_date= "2022-11-25"
WHERE id= "002"

d) DELETE FROM Movies WHERE id= "003"

0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
Ele não faz mudanças, pois ele não localiza mais o id indicado.


### CÓDIGOS

/*SELECT * FROM Actor;
DESCRIBE  Actor;
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
SET SQL_SAFE_UPDATES = 0;

UPDATE Actor SET name= "Moacyr Franco", birth_date = "1920-04-26"
WHERE id= "003";

UPDATE Actor SET name= "JULIANA PAES" WHERE id= "005";

UPDATE Actor SET name= "Juliana Paes" WHERE id= "005";

UPDATE Actor SET name= "Claudia Raia", salary= 800000, birth_date = "1940-10-14",  gender= "female"
WHERE id= "005";

UPDATE Actor SET name= "Fernanda Montenegro" WHERE id= "003";

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

DELETE FROM Actor WHERE gender = "male" AND salary >100000000;

SELECT COUNT(*) FROM Actor;

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT AVG(salary) FROM Actor;

SELECT MAX(salary) FROM Actor;

SELECT MIN(salary) FROM Actor WHERE gender = "female";

SELECT COUNT(*) FROM Actor WHERE gender = "female";

SELECT SUM(salary) FROM Actor;

SELECT * FROM Actor LIMIT 3;

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender; 

SELECT id, name FROM Actor WHERE gender = "male" ORDER BY name DESC;

SELECT * FROM Actor ORDER BY salary ASC;

SELECT * FROM Actor ORDER BY salary  DESC LIMIT 3;

SELECT AVG(salary), gender FROM Actor GROUP BY gender;

SELECT * FROM Movies;

DESCRIBE Movies;

ALTER TABLE Movies ADD playing_limit_date DATE;

UPDATE Movies
SET playing_limit_date= "2022-11-25"
WHERE id= "002";

DELETE FROM Movies WHERE id= "003";

UPDATE Movies SET sinopse= "Esta é a nova sinopse do filme"  WHERE id= "003"*/