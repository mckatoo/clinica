# BDD Specs

## Narrativa 1

```
  Com a atendente online.
  Cadastrar clientes da clinica.
  Agendar consultas e seções.
  Consultar agenda.
```

## Cenários

```
  Dado que o cliente tem acesso a internet,
  quando a atendente solicitar carregar agenda,
  o sistema deve exibir as consultas e seções
  vindo de uma API e substituir os dados do cache
  com os dados mais recentes.
```

## Narrativa 2

```
  Com a atendente offline.
  Cadastrar clientes da clinica,
  Agendar consultas e seções.
  Consultar agenda mesmo sem internet.
```

## Cenários

```
  Dado que o cliente NÃO tem acesso a internet,
  e exista algum dado gravado no cache
  e os dados sejam mais novos, então quando o cliente solicita
  para carregar dos dados cadastrados na API e
  exibir a agenda atualizada com dados do cache.

  Dado que o cliente NÃO tem acesso a internet,
  e exista algum dado gravado no cache
  e os dados sejam mais velhos, então quando o cliente solicita
  para carregar dos dados cadastrados na API e
  exibir a agenda atualizada com dados do cache.
```