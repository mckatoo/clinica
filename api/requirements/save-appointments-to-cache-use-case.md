# Gravar Agendamento no Cache

> ## Caso de sucesso
1. Sistema executa o comando "Salvar Agendamento"
2. Sistema cria uma data para ser armazenada no cache
3. Sistema limpa os dados do Cache atual
4. Sistema grava os novos dados no Cache
5. Sistema não retorna nenhum erro

> ## Exceção - Erro ao apagar dados do cache
1. Sistema retorna o erro

> ## Exceção - Erro ao gravar dados do cache
1. Sistema retorna o erro