>## Feature: Atentente online

```
Com a atendente online
Quero que o sistema me mostre os pacientes agendados
Para que não tenha pacientes em espera.
```

>### Scenario: Obter dados da API

```
Dado que a atendente tem conexão com a internet
Quando a atendente solicitar para carregar agenda
Então o sistema deve exibir a agenda vindo da API
E substituir os dados do cache com os dados mais > atuais
```

----------

>## Feature: Atendente offline
```
Como uma atendente offline
Quero que o sistema mostre os próximos agendamentos
Para eu poder realizar novos agendamentos mesmo sem internet
```

>### Scenario: Obter dados do Cache
```
Dado que a atendente não tem conexão com a internet
E exista algum dado gravado no Cache
E os dados do cache forem mais novos que 24 horas
Quando a atendente solicitar para carregar a agenda
Então o sistema deve exibir a agenda vinda do cache

Dado que a atendente não tem conexão com a internet
E exista algum dado gravado no Cache
E os dados do cache forem mais velhos ou iguais a 24 horas
Quando a atendente solicitar para carregar a agenda
Então o sistema deve exibir uma mensagem de erro

Dado que a atendente não tem conexão com a internet
E o cache esteja vazio
Quando a atendente solicitar para carregar a agenda
Então o sistema deve exibir uma mensagem de erro
```