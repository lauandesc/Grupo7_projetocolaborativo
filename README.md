# Grupo7 - Projeto Integrador

Participantes: 
Lauandes > Isabela > Flávio > Karoline > Rogério

# E-commerce da Livraria Book

## Descrição

O e-commerce de livros oferece uma ampla variedade de produtos, incluindo livros digitais, físicos novos, produtos de papelaria e uma seção de sebo, com títulos raros e esgotados. A loja física complementa o atendimento oferecendo serviços de encadernação, restauração e doação de livros, proporcionando soluções para quem busca preservar e compartilhar a cultura literária. 

Os produtos são apresentados com informações detalhadas, incluindo descrições, fotos e opiniões de outros clientes, para ajudar na escolha do produto ideal. O pagamento pode ser feito através de diversos métodos, incluindo cartão de crédito e pix, além de opção de retirada na loja física.

O serviço de doação de livros oferece uma opção para quem deseja contribuir para a promoção da cultura e da educação, além de fomentar a sustentabilidade, evitando o descarte desnecessário de livros em bom estado. 

Já os serviços de encadernação e restauração de livros oferecem soluções para quem busca preservar a memória e o valor afetivo dos livros, garantindo a sua durabilidade e aparência estética. 

Com esses serviços, o e-commerce se diferencia no mercado, oferecendo uma gama de opções aos clientes que buscam soluções mais personalizadas e sustentáveis para as suas necessidades.

## Regras de negócio

Produtos:

* O e-commerce oferece livros digitais, livros físicos novos e usados (sebo), e produtos de papelaria.
* Os livros físicos usados possuem uma descrição detalhada do estado de conservação do produto.
* Todos os produtos possuem imagens e descrições detalhadas para ajudar o cliente a escolher o produto ideal.
* Todos os produtos estão sujeitos à disponibilidade de estoque.

Compra no e-commerce:

* O cliente pode realizar a compra pelo site do e-commerce.
* Os preços dos produtos podem variar entre o site e a loja física.
* O pagamento pode ser feito através de cartão de crédito, boleto bancário ou pix.
* O valor do frete é calculado de acordo com o peso e destino do produto (utilizando a API gratuita).

Entrega:

* A entrega dos produtos é realizada pelos Correios ou transportadora contratada.
* O prazo de entrega varia de acordo com o endereço de entrega e o tipo de frete escolhido.
* O cliente pode acompanhar o status da entrega através do site do e-commerce ou entrar em contato com o atendimento ao cliente.

Doação de Livros:

* O e-commerce oferece um serviço de doação de livros usados em bom estado.
* O cliente pode levar os livros até a loja física ou enviar pelos Correios.
* Os livros doados serão repassados para instituições de caridade ou programas de incentivo à leitura.

Encadernação e Restauração de Livros:

* O e-commerce oferece serviços de encadernação e restauração de livros.
* O cliente pode solicitar o serviço pelo site do e-commerce ou na loja física.
* O valor do serviço é calculado de acordo com o tipo de encadernação ou restauração solicitado.

Política de Troca e Devolução:

* O cliente tem até 7 dias para solicitar a troca ou devolução do produto, a partir da data de recebimento.
* O produto deve ser devolvido em sua embalagem original e sem sinais de uso.
* Em caso de defeito no produto, o e-commerce se responsabiliza pelos custos de troca ou devolução.
* Em caso de desistência da compra, o cliente arca com os custos de frete para devolução do produto.

Atendimento ao Cliente:

* O e-commerce oferece um canal de atendimento ao cliente para solucionar dúvidas, reclamações e sugestões.
* O atendimento ao cliente pode ser feito por telefone, whatsapp ou telegram, email ou redes sociais.
* O horário de atendimento é de segunda a sexta-feira, das 8h às 18h.

## Funcionalidades

Algumas das principais funcionalidades baseadas nas regras de negócio:

1. Catálogo de produtos: página dedicada a listar os produtos disponíveis para venda, com fotos e descrições detalhadas para cada item. Os clientes poderão navegar pelo catálogo e encontrar o produto desejado usando filtros, como categoria, preço, estado de conservação e formato (livro físico ou digital).

2. Carrinho de compras: funcionalidade que permitirá ao cliente adicionar produtos ao carrinho de compras e revisar os itens antes de finalizar a compra. Nesta página, o cliente poderá ver o valor total da compra, calcular o frete e escolher o método de pagamento desejado.

3. Formulário de doação de livros: página dedicada a permitir que os clientes façam doações de livros usados em bom estado. O formulário de doação poderá solicitar informações pessoais de identificação do cliente e outras como título, autor, editora e estado de conservação do livro.

4. Página de serviços: seção dedicada a listar os serviços de encadernação e restauração de livros oferecidos pelo e-commerce. Nesta página, os clientes poderão ver os preços e opções disponíveis e fazer pedidos.

5. Acompanhamento de pedidos: página dedicada a permitir que os clientes acompanhem o status de seus pedidos, incluindo o prazo de entrega e informações de rastreamento da entrega.

6. Política de troca e devolução: página dedicada a explicar a política de troca e devolução da empresa, incluindo prazos, condições e procedimentos para solicitar uma troca ou devolução.

7. Atendimento ao cliente: seção dedicada a fornecer informações de contato para o atendimento ao cliente, incluindo telefone, e-mail, whatsapp, telegram e redes sociais. O cliente poderá entrar em contato com a empresa durante o horário de atendimento para solucionar dúvidas, reclamações e sugestões.

## Funcionalidade - Página de Conta (cadastro)

A tela de Página de Conta realiza a operação de registrar, uma única vez, informações básicas do cliente com o objetivo de criar um login que permite que o cliente autentique sua identidade para a utilização em operações de compras ou retornos à plataforma da livraria. O cadastro ocorre com a digitação pelo cliente e a captura de apenas três informações essenciais com o objetivo de ganhar rapidez ao logar a plataforma. As três informações são o nome completo, o e-mail e a senha.

Nessa interface de cadastro, há ainda dois mecanismos de ajuda para completar o cadastro:

- um para avaliar a qualidade da senha produzida no momento que o usuário digita a senha; 
- outro de opção para visualizar ou esconder a senha que está se criando.

Já as ações que devem ser realizadas após o login, por exemplo, redirecionamento para uma página de perfil ou dashboard, retorno à página anterior, desenvolvimento de banco de dados para autenticação e conteúdo protegido, serão definidas a posteriori em nova funcionalidade.

Um ponto importante que faz parte da descrição do e-commerce de livros deve ser implementada em outras entregas é a opção do checkbox para o usuário receber informativos e promoções diretamente no e-mail que vai ser cadastrado. Essa opção conhecida como opt-in (optar por participar) faz parte de uma regra de negócio do e-commerce de livros ainda não definida com o objetivo de engajar clientes da plataforma. Essa opção poderá ser removida se houver necessidade de utilização de API específica ou houver desacordo com a Lei Geral de Proteção de Dados Pessoais, a LGPD no Brasil.

## Funcionalidade - Página de Conta (login)

A tela de login é a interface que permite que os clientes se autentiquem à plataforma com a combinação criada no cadastro com e-mail e senha que correspondam a um registro válido no sistema. A tela de login será a primeira tela que o cliente encontra após clicar no botão de comprar livro e é projetada para garantir que apenas clientes cadastrados possam acessar as informações protegidas pelo login com o objetivo final de comprar.

Uma vez que o usuário tenha entrado com suas informações de login, a tela de login vai redirecionar o cliente para a página que estava antes do login ou uma página de perfil ou dashboard onde ele pode acessar as informações que foram protegidas pelo login.

## Observações

As funcionalidades previstas neste documento poderão sofrer alterações a depender da evolução de ideias acordadas entre as partes interessadas. 

Qualquer API que venha a ser utilizada no projeto precisa ser gratuita e disponível para a comunidade de desenvolvedores em páginas construídas offline (sem hospedagem).

<img width="627" alt="image" src="https://user-images.githubusercontent.com/128855021/230237759-63f1f500-9e39-4a10-9db5-f8407af7de9f.png">
<img width="439" alt="image" src="https://user-images.githubusercontent.com/128855021/230237857-b3c41d6e-0e83-4594-b987-d8f55674b83e.png">
<img width="436" alt="image" src="https://user-images.githubusercontent.com/128855021/230237888-b26e729e-c501-43d3-897e-29b87196f975.png">
<img width="445" alt="image" src="https://user-images.githubusercontent.com/128855021/230237915-1f1f76ed-c077-4d6c-b467-154dcc5164f1.png">
<img width="352" alt="image" src="https://user-images.githubusercontent.com/128855021/230237963-db32aeae-21ea-4510-a770-ce1d1c063cb7.png">

Regra de negócio: https://docs.google.com/document/d/1I04-eaZo0NNnOgRcvPWUE1lXIkYO5eEmltPg4d0XVdg/edit?usp=sharing

Interfaces do projeto via Miro: https://miro.com/app/board/uXjVMXxgvzg=/?share_link_id=142301735069

Link da board de gerenciamento de tarefas: https://docs.google.com/document/d/19q33lWnZXr3maqxUyMX4M--6ITDrbSlX72L4UIwDIg8/edit?usp=sharing

