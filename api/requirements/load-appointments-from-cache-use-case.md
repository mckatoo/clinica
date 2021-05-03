# Carregar Agendamentos do Cache

> ## Caso de sucesso
1. Sistema executa o comando "Carregar Agenda"
2. Sistema carrega os dados do Cache
3. Sistema valida se o cache tem menos de 24 horas
4. Sistema cria uma lista de agendamentos a partir dos dados do Cache
5. Sistema retorna a lista de agendamentos

> ## Exceção - Cache expirado
1. Sistema limpa o cache
2. Sistema retorna o erro

> ## Exceção - Cache vazio
1. Sistema retorna o erro