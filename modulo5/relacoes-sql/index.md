### Exercício 1

a) É uma chave que cria relações entre as tabelas, deve sempre se referenciar a uma PRIMARY KEY da outra tabela.
b) 
insert into Rating (id, comment, rate, movie_id) 
values (
		"001",
    "Filme bozin!",
    8.5,
	"004"
);

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4416903-leandro-santos`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

Deu erro, pois não existe o "id" passado

d) alter table Movies drop column rating;

e) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jbl-4416903-leandro-santos`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

Deu erro, pois o filme está com uma foreign key.


### Exercício 2

a) Essa tabela cria duas colunas e as referencia pela FOREIGN KEY nas colunas Movie e Actor.

b) 
insert into MovieCast (movie_id, actor_id) 
values (
"004",
"006"
);

c) Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`jbl-4416903-leandro-santos`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movies` (`id`))

Deu erro, pois o id não existe em nenhuma das tabelas para fazer relação

d) Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`jbl-4416903-leandro-santos`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
Deu erro, pois o ator está com uma foreign key relacionado.


### Exercício 3

a) O comando seleciona todos as informações da tabela Moveis e o comando INNER JOIN relaciona as informações das tabelas repassadas e utiliza o ON para especificar quais dados relacionar se possuem as relações pela foreign key.

b) select m.id as movies_id, r.rate as rating from Movies m
inner join Rating r on m.id = r.movie_id;


### CÓDIGOS
select * from Movies;
select * from Actor;
select * from Rating;
select * from MovieCast;

CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id)
);

insert into Rating (id, comment, rate, movie_id) 
values (
		"010",
    "Filme bozin!",
    9.5,
	"010"
);

alter table Movies drop column rating;

DELETE FROM Movies WHERE id= "001";

CREATE TABLE MovieCast (
		movie_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movies(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

insert into MovieCast (movie_id, actor_id) 
values (
"010",
"010"
);

DELETE FROM Actor WHERE id= "001";

SELECT * FROM Movies 
INNER JOIN Rating ON Movies.id = Rating.movie_id;

select m.id as movies_id, r.rate as rating from Movies m
inner join Rating r on m.id = r.movie_id;




