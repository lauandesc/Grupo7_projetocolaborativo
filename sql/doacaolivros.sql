CREATE TABLE doacao_livro (
  ID SERIAL PRIMARY KEY,
  nome_doador VARCHAR(60) NOT NULL,
  email VARCHAR(60) NOT NULL,
  quantidade INTEGER NOT NULL,
  titulo VARCHAR(60) NOT NULL,
  autor VARCHAR(60) NOT NULL,
  editora VARCHAR(60) NOT NULL,
  img_conservacao VARCHAR(1000) NOT NULL,
  fk_id_doacao_telefone INT not null,
  fk_id_doacao_livro_tipo INT NOT NULL,
  fk_id_doacao_livro_conservacao INT NOT NULL
)

CREATE TABLE tipo (
  ID SERIAL PRIMARY KEY,
  nome_tipo VARCHAR(20) NOT NULL,
  fk_id_doacao_livro_tipo INT NOT NULL,
  CONSTRAINT fk_id_doacao_livro FOREIGN KEY (fk_id_doacao_livro_tipo) REFERENCES doacao_livro (ID) ON DELETE CASCADE
)
 
 CREATE TABLE conservacao (
  ID SERIAL PRIMARY KEY,
  nome_conservacao VARCHAR(60) NOT NULL,
  fk_id_doacao_livro_conservacao INT NOT NULL,
  CONSTRAINT fk_id_doacao_conservacao FOREIGN KEY (fk_id_doacao_livro_conservacao) REFERENCES doacao_livro (ID) ON DELETE CASCADE
  );
  
  
CREATE TABLE telefone (
  ID SERIAL PRIMARY KEY,
  ddi VARCHAR(3) NOT NULL,
  ddd VARCHAR(3) NOT NULL,
  numero VARCHAR(20) NOT NULL,
  fk_id_doacao_telefone INT NOT NULL,
  CONSTRAINT fk_doacao_telefone FOREIGN KEY (fk_id_doacao_telefone) REFERENCES doacao_livro (ID) ON DELETE CASCADE
);
