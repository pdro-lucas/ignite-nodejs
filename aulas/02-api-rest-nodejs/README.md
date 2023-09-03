# Requisitos funcionais

- [x] O usuário deve poder criar uma nova transação;
- [x] O usuário deve poder obter um resumo da sua conta;
- [x] O usuário deve poder obter o extrato da sua conta;
- [x] O usuário deve poder visualizar uma transação específica

# Regras de negócio

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito subtraindo do valor total;
- [ ] Deve ser possível identificarmos o usuário entre as requisições;
- [ ] O usuário só pode visualizar transações que são dele;

```mermaid
graph TD
Start --> A[Entrada do Usuário]

    A --> B[Novo Extrato?]
    A --> C[Obter Resumo da Conta?]
    A --> D[Obter Extrato da Conta?]
    A --> E[Visualizar Transação Específica?]

    B -->|Sim| F[Post Transação]
    B -->|Não| G[Finalizar]

    F --> H{{Valida Entrada}}
    H --> I[Gerar ID]
    H --> J[Inserir Transação no Banco]

    C -->|Sim| K[Get Resumo]
    K --> L[Sum das Transações]

    D -->|Sim| M[Get Extrato]
    M --> N[Seleciona Todas Transações]

    E -->|Sim| O[Get Transação por ID]
    O --> P{{Valida ID}}
    P --> Q[Seleciona Transação por ID]

    I --> J
    J --> G
    L --> G
    N --> G
    Q --> G

```
