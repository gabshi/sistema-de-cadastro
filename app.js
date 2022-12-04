//git log --oneline
//Se, em vez de menos informações, quisermos ver mais como as alterações do commit, podemos usar:

//git log -p
//Também podemos pesquisar as informações do autor daquele commit com o comando:

//git log --author="user_name"
//E pesquisar informações por data:

//git log --since=1.month.ago --until=1.day.ago
//No comando acima, estamos buscando as informações do commit desde um mês atrás até um dia atrás.

//Você também pode formatar a visualização das informações de commit com o comando:
//git log --pretty="format:%h %s"

//Com o git clone você também pode clonar o repositório para uma pasta específica:
//git clone <repositorio> <meu-projeto-clone></meu-projeto-clone>

//Você também pode configurar o git clone e clonar o repositório a partir de uma branch específica, diferente da original dessa forma:
//git clone -branch new_feature <repositorio>

console.log("Rodando o sistema de gerenciamento de jogos")
console.log("aplicação está se conectado ao banco de dados")
// mais um console log de teste:
console.log("O paulo fez esse commit sem você ver na aula!")
console.log("enviando para o git")
