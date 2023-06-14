--
--
--
--
--
--///////////////////////COMEÇO DDL

CREATE TABLE usuario (
  ID SERIAL PRIMARY KEY,
  nome_completo VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  senha VARCHAR(100) NOT NULL,
  consentimento_informativos_promocoes BOOLEAN
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
  uf VARCHAR(2) NOT NULL,
  pais VARCHAR(50) NOT NULL,
  cep VARCHAR(10) NOT NULL
);

--Para encurtar o projeto conceitual, retirei a papelaria.
--Importante observar que os livros digitais são iguais aos novos. Agora, se houver formatos de livros digitais
--seria necessário criar uma entidade específica para esses livros digitais.
--Outra questão importante é que se há tipo de livro capa dura, capa normal, box, etc. Então também seria necessário
--criar uma nova entidade.
CREATE TABLE livro (
  ID SERIAL PRIMARY KEY,
  titulo VARCHAR(300) NOT NULL,
  ano INTEGER NOT NULL,
  peso FLOAT NOT NULL,
  preco FLOAT NOT NULL,
  tipo_livro VARCHAR(20) NOT NULL, --novo, digital ou usado (se usado há um atributo para o estado de conservação)
  editora VARCHAR(100) NOT NULL, --observando que não há papelaria :)
  autor VARCHAR(100) NOT NULL --observando que não há papelaria :)
);

CREATE TABLE livro_usado (
  ID SERIAL PRIMARY KEY,
  fk_id_livro INT NOT NULL,
  CONSTRAINT fk_livro FOREIGN KEY (fk_id_livro) REFERENCES livro (ID) ON DELETE CASCADE,
  condicao VARCHAR(20) NOT NULL --condição do livro usado (novo, seminovo, usado)
);

CREATE TABLE carrinho (
  ID SERIAL PRIMARY KEY,
  custo_frete FLOAT,
  cupom VARCHAR(50),
  fk_id_usuario INT NOT NULL,
  CONSTRAINT fk_usuario_carrinho FOREIGN KEY (fk_id_usuario) REFERENCES usuario (ID) ON DELETE CASCADE
);

CREATE TABLE item_carrinho (
  ID SERIAL PRIMARY KEY,
  fk_id_carrinho INT NOT NULL,
  CONSTRAINT fk_carrinho FOREIGN KEY (fk_id_carrinho) REFERENCES carrinho (ID) ON DELETE CASCADE,
  fk_id_livro INT NOT NULL,
  CONSTRAINT fk_livro_item FOREIGN KEY (fk_id_livro) REFERENCES livro (ID) ON DELETE CASCADE,
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

CREATE TABLE doacao_livro (
  ID SERIAL PRIMARY KEY,
  fk_id_usuario INT NOT NULL,
  CONSTRAINT fk_dados_usuario FOREIGN KEY (fk_id_usuario) REFERENCES usuario (ID) ON DELETE CASCADE,
  quantidade INT NOT NULL,
  tipo_doacao VARCHAR(20) NOT NULL,
  conservacao VARCHAR(60) NOT NULL,
  titulo VARCHAR(200) NOT NULL,
  autor VARCHAR(200) NOT NULL,
  editora VARCHAR(200) NOT NULL,
  img_conservacao VARCHAR(1000) NOT NULL
);

--///////////////////////FIM DDL

--///////////////////////COMEÇO DML

--======================Tabela Usuario=============
INSERT INTO usuario (nome_completo, email, senha, consentimento_informativos_promocoes) VALUES
  ('João da Silva', 'joao@example.com', 'senha123', true),
  ('Maria Oliveira', 'maria@example.com', 'senha456', false),
  ('Pedro Santos', 'pedro@example.com', 'senha789', true),
  ('Ana Souza', 'ana@example.com', 'senha321', true),
  ('Carlos Fernandes', 'carlos@example.com', 'senha654', false);

--======================Tabela Telefone=============
INSERT INTO telefone (fk_id_usuario, ddi, ddd, numero) VALUES
  (1, '55', '11', '999999999'),
  (2, '55', '21', '888888888'),
  (3, '55', '31', '777777777'),
  (4, '55', '41', '666666666'),
  (5, '55', '51', '555555555');

--======================Tabela Endereço=============
INSERT INTO endereco (fk_id_usuario, logradouro, numero, cidade, bairro, uf, pais, cep) VALUES
  (1, 'Rua A', 123, 'São Paulo', 'Centro', 'SP', 'Brasil', '01234-567'),
  (2, 'Avenida B', 456, 'Rio de Janeiro', 'Copacabana', 'RJ', 'Brasil', '98765-432'),
  (3, 'Rua C', 789, 'Belo Horizonte', 'Savassi', 'MG', 'Brasil', '54321-876'),
  (4, 'Rua D', 1011, 'Curitiba', 'Batel', 'PR', 'Brasil', '78965-432'),
  (5, 'Avenida E', 1213, 'Porto Alegre', 'Moinhos de Vento', 'RS', 'Brasil', '14785-369');

--======================Tabela livro=============
INSERT INTO livro (titulo, ano, peso, preco, tipo_livro, editora, autor) VALUES
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
INSERT INTO item_carrinho (fk_id_carrinho, fk_id_livro, quantidade) VALUES
  (1, 1, 2),
  (1, 2, 1),
  (2, 3, 3),
  (2, 1, 3),
  (2, 4, 1),
  (3, 5, 2),
  (3, 3, 2),
  (4, 5, 2);

--======================Tabela Pagamento=============
INSERT INTO pagamento (fk_id_usuario, fk_id_carrinho, valor_total) VALUES
  (1, 1, 64.98),
  (2, 2, 22.49),
  (3, 3, 46.97),
  (4, 4, 36.98),
  (5, 5, 54.98);

--======================Tabela Livro Usado=============
INSERT INTO livro_usado (fk_id_livro, condicao) VALUES
  (2, 'usado'),
  (5, 'seminovo');

--======================Tabela Doação de livro=============
INSERT INTO doacao_livro(fk_id_usuario, quantidade, tipo_doacao, conservacao, titulo, autor, editora, img_conservacao) VALUES
(1, 3, 'Revista', 'Novo', 'Livro A', 'Autor y', 'Editora X', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fvetores-gratis%2Fvaca-bonita-sentada-ilustracao-do-icone-do-vetor-dos-desenhos-animados-natureza-animal-conceito-de-icone-isolado-premium-flat_138676-7823.jpg%3Fw%3D2000&tbnid=hfudzMKTTOqXTM&vet=12ahUKEwjMpqiu6sD_AhX9p5UCHYdyDX8QMygAegUIARC8AQ..i&imgrefurl=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fvaquinha&docid=TVPWnWK6qtVSoM&w=2000&h=2000&q=img%20vaquinha%20site&ved=2ahUKEwjMpqiu6sD_AhX9p5UCHYdyDX8QMygAegUIARC8AQ' ),
(4, 5, 'Livro', 'Seminovo', 'Livro B', 'Autor X', 'Editora Nova', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fvetores-gratis%2Fvaca-bonita-sentada-ilustracao-do-icone-do-vetor-dos-desenhos-animados-natureza-animal-conceito-de-icone-isolado-premium-flat_138676-7823.jpg%3Fw%3D2000&tbnid=hfudzMKTTOqXTM&vet=12ahUKEwjMpqiu6sD_AhX9p5UCHYdyDX8QMygAegUIARC8AQ..i&imgrefurl=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fvaquinha&docid=TVPWnWK6qtVSoM&w=2000&h=2000&q=img%20vaquinha%20site&ved=2ahUKEwjMpqiu6sD_AhX9p5UCHYdyDX8QMygAegUIARC8AQ' ),
(2, 1, 'Revista', 'Usado', 'Livro W', 'Autor H', 'Editora TESTE', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Fvetores-gratis%2Fvaca-bonita-sentada-ilustracao-do-icone-do-vetor-dos-desenhos-animados-natureza-animal-conceito-de-icone-isolado-premium-flat_138676-7823.jpg%3Fw%3D2000&tbnid=hfudzMKTTOqXTM&vet=12ahUKEwjMpqiu6sD_AhX9p5UCHYdyDX8QMygAegUIARC8AQ..i&imgrefurl=https%3A%2F%2Fbr.freepik.com%2Ffotos-vetores-gratis%2Fvaquinha&docid=TVPWnWK6qtVSoM&w=2000&h=2000&q=img%20vaquinha%20site&ved=2ahUKEwjMpqiu6sD_AhX9p5UCHYdyDX8QMygAegUIARC8AQ' );

--///////////////////////FIM DML

--Deletando as tabelas
DROP TABLE IF EXISTS item_carrinho CASCADE;
DROP TABLE IF EXISTS livro_usado CASCADE;
DROP TABLE IF EXISTS pagamento CASCADE;
DROP TABLE IF EXISTS livro CASCADE;
DROP TABLE IF EXISTS telefone CASCADE;
DROP TABLE IF EXISTS endereco CASCADE;
DROP TABLE IF EXISTS carrinho CASCADE;
DROP TABLE IF EXISTS usuario CASCADE;
DROP TABLE IF EXISTS doacao_livro CASCADE;

--==============DQL na veia!
SELECT * FROM livro

SELECT * FROM carrinho inner join item_carrinho
on carrinho.id = item_carrinho.id;

--nome do cliente
SELECT carrinho.*, usuario.nome_completo, titulo
FROM carrinho
INNER JOIN item_carrinho ON carrinho.id = item_carrinho.fk_id_carrinho
INNER JOIN usuario ON carrinho.fk_id_usuario = usuario.id
INNER JOIN livro on carrinho.fk_id_usuario = livro.id;

--qual é o usuario com frete grátis?
SELECT usuario.*, carrinho.cupom
FROM usuario
INNER JOIN carrinho ON usuario.id = carrinho.fk_id_usuario
WHERE carrinho.custo_frete = 0;

--quais sao os itens do carrinho do usuario Pedro Santos
SELECT usuario.nome_completo, livro.*
FROM usuario
INNER JOIN carrinho ON usuario.id = carrinho.fk_id_usuario
INNER JOIN item_carrinho ON carrinho.id = item_carrinho.fk_id_carrinho
INNER JOIN livro ON item_carrinho.fk_id_livro = livro.id
WHERE usuario.nome_completo = 'Pedro Santos';

SELECT usuario.nome_completo, doacao_livro.tipo_doacao, doacao_livro.conservacao, doacao_livro.titulo, doacao_livro.autor, doacao_livro.editora, doacao_livro.quantidade
FROM usuario 
INNER JOIN doacao_livro ON usuario.id = doacao_livro.fk_id_usuario
WHERE tipo_doacao = 'Revista';

SELECT usuario.nome_completo, doacao_livro.tipo_doacao, doacao_livro.conservacao, doacao_livro.titulo, doacao_livro.autor, doacao_livro.editora, doacao_livro.quantidade
FROM usuario 
INNER JOIN doacao_livro ON usuario.id = doacao_livro.fk_id_usuario
WHERE tipo_doacao = 'Revista' AND doacao_livro.conservacao = 'Novo';
