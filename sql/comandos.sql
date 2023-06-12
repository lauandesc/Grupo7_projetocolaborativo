--
--
--
--
--
--///////////////////////COMEÇO DDL

CREATE TABLE usuario (
  ID SERIAL PRIMARY KEY,
  nome_completo VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  senha VARCHAR(100) NOT NULL
);

CREATE TABLE telefone (
  ID SERIAL PRIMARY KEY,
  fk_id_usuario INT NOT NULL,
  CONSTRAINT fk_usuario_telefone FOREIGN KEY (fk_id_usuario) REFERENCES usuario (ID) ON DELETE CASCADE,
  ddi VARCHAR(3) NOT NULL,
  ddd VARCHAR(3) NOT NULL,
  numero VARCHAR(20) NOT NULL
);

CREATE TABLE endereco (
  ID SERIAL PRIMARY KEY,
  fk_id_usuario INT NOT NULL,
  CONSTRAINT fk_usuario_endereco FOREIGN KEY (fk_id_usuario) REFERENCES usuario (ID) ON DELETE CASCADE,
  logradouro VARCHAR(100) NOT NULL,
  numero INT NOT NULL,
  cidade VARCHAR(100) NOT NULL,
  bairro VARCHAR(100) NOT NULL,
  pais VARCHAR(100) NOT NULL,
  cep VARCHAR(10) NOT NULL,
  consentimento_informativos_promocoes BOOLEAN
);

--Para encurtar o projeto conceitual, retirei a papelaria.
--Importante observar que os livros digitais são iguais aos novos. Agora, se houve formatos de livros digitais
--seria necessário criar uma entidade específica para esses livros digitais.
--Outra questão importante é que se há tipo de livro capa dura, capa normal, box, etc. Então também seria necessário
--criar uma nova entidade.
CREATE TABLE produto (
  ID SERIAL PRIMARY KEY,
  titulo_produto VARCHAR(300) NOT NULL,
  ano INTEGER NOT NULL,
  peso FLOAT NOT NULL,
  preco FLOAT NOT NULL,
  tipo_livro VARCHAR(20) NOT NULL, --novo, digital ou usado (se usado precisa verificar o estado de conservação)
  editora VARCHAR(100) NOT NULL, --observando que não há papelaria :)
  autor VARCHAR(100) NOT NULL --observando que não há papelaria :)
);

CREATE TABLE carrinho (
  ID SERIAL PRIMARY KEY,
  custo_frete FLOAT,
  cupom VARCHAR(50),
  fk_id_usuario INT NOT NULL,
  CONSTRAINT fk_usuario FOREIGN KEY (fk_id_usuario) REFERENCES usuario (ID) ON DELETE CASCADE
);

CREATE TABLE item_carrinho (
  ID SERIAL PRIMARY KEY,
  fk_id_carrinho INT NOT NULL,
  CONSTRAINT fk_carrinho FOREIGN KEY (fk_id_carrinho) REFERENCES carrinho (ID) ON DELETE CASCADE,
  fk_id_produto INT NOT NULL,
  CONSTRAINT fk_produto FOREIGN KEY (fk_id_produto) REFERENCES produto (ID) ON DELETE CASCADE,
  quantidade INTEGER
);

CREATE TABLE pagamento (
  ID SERIAL PRIMARY KEY,
  fk_id_usuario INT NOT NULL,
  CONSTRAINT fk_usuario_pagamento FOREIGN KEY (fk_id_usuario) REFERENCES usuario (ID) ON DELETE CASCADE,
  fk_id_carrinho INT NOT NULL,
  CONSTRAINT fk_carrinho_pagamento FOREIGN KEY (fk_id_carrinho) REFERENCES carrinho (ID) ON DELETE CASCADE,
  valor_total FLOAT NOT NULL,
  data_pagamento TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE livro_usado (
  ID SERIAL PRIMARY KEY,
  fk_id_produto INT NOT NULL,
  CONSTRAINT fk_produto_usado FOREIGN KEY (fk_id_produto) REFERENCES produto (ID) ON DELETE CASCADE,
  condicao VARCHAR(20) NOT NULL --condição do livro usado (novo, seminovo, usado)
);

--///////////////////////FIM DDL

--///////////////////////COMEÇO DML

--======================Tabela Usuario=============
INSERT INTO usuario (nome_completo, email, senha) VALUES
  ('João da Silva', 'joao@example.com', 'senha123'),
  ('Maria Oliveira', 'maria@example.com', 'senha456'),
  ('Pedro Santos', 'pedro@example.com', 'senha789'),
  ('Ana Souza', 'ana@example.com', 'senha321'),
  ('Carlos Fernandes', 'carlos@example.com', 'senha654');

--======================Tabela Telefone=============
INSERT INTO telefone (fk_id_usuario, ddi, ddd, numero) VALUES
  (1, '55', '11', '999999999'),
  (2, '55', '21', '888888888'),
  (3, '55', '31', '777777777'),
  (4, '55', '41', '666666666'),
  (5, '55', '51', '555555555');

--======================Tabela Endereço=============
INSERT INTO endereco (fk_id_usuario, logradouro, numero, cidade, bairro, pais, cep, consentimento_informativos_promocoes) VALUES
  (1, 'Rua A', 123, 'São Paulo', 'Centro', 'Brasil', '01234-567', true),
  (2, 'Avenida B', 456, 'Rio de Janeiro', 'Copacabana', 'Brasil', '98765-432', false),
  (3, 'Rua C', 789, 'Belo Horizonte', 'Savassi', 'Brasil', '54321-876', true),
  (4, 'Rua D', 1011, 'Curitiba', 'Batel', 'Brasil', '78965-432', true),
  (5, 'Avenida E', 1213, 'Porto Alegre', 'Moinhos de Vento', 'Brasil', '14785-369', false);

--======================Tabela Produto=============
INSERT INTO produto (titulo_produto, ano, peso, preco, tipo_livro, editora, autor) VALUES
  ('Livro A', 2022, 0.5, 29.99, 'novo', 'Editora X', 'Autor Y'),
  ('Livro B', 2018, 0.8, 19.99, 'usado', 'Editora Z', 'Autor W'),
  ('Livro C', 2020, 1.2, 39.99, 'novo', 'Editora X', 'Autor Z'),
  ('Livro D', 2017, 0.9, 24.99, 'novo', 'Editora Y', 'Autor X'),
  ('Livro E', 2019, 1.5, 49.99, 'usado', 'Editora Z', 'Autor Y');

--======================Tabela Carrinho=============
INSERT INTO carrinho (custo_frete, cupom, fk_id_usuario) VALUES
  (15.59, 'DESC10', 1),
  (12.50, NULL, 2),
  (0.00, 'FRETEGRATIS', 3),
  (14.5, 'DESC20', 4),
  (11.00, NULL, 5);

--======================Tabela Item_Carrinho=============
INSERT INTO item_carrinho (fk_id_carrinho, fk_id_produto, quantidade) VALUES
  (1, 1, 2),
  (1, 2, 1),
  (2, 3, 3),
  (2, 4, 1),
  (3, 5, 2);

--======================Tabela Pagamento=============
INSERT INTO pagamento (fk_id_usuario, fk_id_carrinho, valor_total) VALUES
  (1, 1, 64.98),
  (2, 2, 22.49),
  (3, 3, 46.97),
  (4, 4, 36.98),
  (5, 5, 54.98);

--======================Tabela Livro Usado=============
INSERT INTO livro_usado (fk_id_produto, condicao) VALUES
  (2, 'usado'),
  (5, 'seminovo');

--///////////////////////FIM DML