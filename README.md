# Bookify

Sistema de agendamento desenvolvido com Node.js, Express, Prisma e PostgreSQL.

## Tecnologias

- Node.js
- Express
- PostgreSQL
- Prisma ORM

## Como executar

```bash
npm install

## Backend - Sistema de Agendamento

## Status do Projeto

### Autenticação e Usuários

### Concluído

- [x] Cadastro de usuário
  - [x] Criar usuário
  - [x] Validar email duplicado
  - [x] Criptografar senha com bcrypt
  - [x] Retornar usuário sem senha

- [x] Login
  - [x] Buscar usuário por email
  - [x] Comparar senha com bcrypt
  - [x] Gerar token JWT
  - [x] Retornar token de autenticação

- [x] Middleware de autenticação JWT
  - [x] Verificar existência do token
  - [x] Validar formato Bearer
  - [x] Validar token JWT
  - [x] Adicionar usuário autenticado no req.user

- [x] Perfil do usuário
  - [x] Criar rota GET /users/me
  - [x] Buscar usuário pelo ID do token
  - [x] Retornar dados seguros sem password


# Usuários

## Em desenvolvimento

- [ ] Atualização de perfil
  - [ ] Alterar nome
  - [ ] Alterar email
  - [ ] Alterar senha

- [ ] Deletar conta

- [ ] Melhorar listagem de usuários
  - [ ] Restrição para administradores
  - [ ] Paginação
  - [ ] Filtros


# Autorização

## Pendente

- [ ] Criar middleware de autorização por role

- [ ] Criar ensureAdmin

- [ ] Permitir ações diferentes para cada usuário

CLIENT:
- Visualizar perfil
- Criar agendamento
- Visualizar próprios agendamentos

ADMIN:
- Criar horários
- Editar horários
- Excluir horários
- Visualizar todos os agendamentos


# Sistema de Horários (Slots)

## Pendente

Criar entidade Slot

Campos:

- id
- date
- time
- available
- createdAt


## Rotas

### Administração

- [ ] POST /slots
  - Criar horários disponíveis

- [ ] GET /slots
  - Listar horários disponíveis

- [ ] PUT /slots/:id
  - Atualizar horário

- [ ] DELETE /slots/:id
  - Remover horário


# Sistema de Agendamentos

## Pendente

Criar entidade Appointment

Relacionamento:

User

1:N

Appointment

N:1

Slot


## Cliente

- [ ] POST /appointments
  - Criar agendamento
  - Verificar disponibilidade
  - Associar usuário ao horário
  - Bloquear horário escolhido


- [ ] GET /appointments
  - Buscar agendamentos do usuário logado


- [ ] DELETE /appointments/:id
  - Cancelar agendamento
  - Liberar horário


# Administração de Agendamentos

## Pendente

- [ ] Visualizar todos os agendamentos

- [ ] Filtrar agendamentos por data

- [ ] Confirmar agendamento

PATCH /appointments/:id/confirm

- [ ] Cancelar agendamento

PATCH /appointments/:id/cancel


Status:

- PENDING
- CONFIRMED
- CANCELLED


# Validações

## Pendente

- [ ] Validar dados recebidos
- [ ] Validar email
- [ ] Validar senha mínima
- [ ] Validar horários
- [ ] Impedir agendamento duplicado
- [ ] Verificar existência de usuário
- [ ] Verificar existência de horário


# Tratamento de Erros

## Pendente

Criar middleware global de erros.

- [ ] Erro 400 - Bad Request
- [ ] Erro 401 - Unauthorized
- [ ] Erro 403 - Forbidden
- [ ] Erro 404 - Not Found
- [ ] Erro 500 - Internal Server Error


# Banco de Dados

## Concluído

- [x] Prisma configurado
- [x] PostgreSQL conectado
- [x] Model User criado


## Pendente

- [ ] Criar model Slot
- [ ] Criar model Appointment
- [ ] Criar relacionamentos
- [ ] Criar migrations


# Documentação

## Pendente

- [ ] Melhorar README
- [ ] Documentar endpoints
- [ ] Criar documentação Swagger
- [ ] Criar exemplos de requisições


# Deploy

## Pendente

- [ ] Configurar ambiente de produção
- [ ] Configurar variáveis de ambiente
- [ ] Hospedar API
- [ ] Hospedar banco de dados
- [ ] Realizar testes finais


# Progresso Atual

Autenticação: 100%

Usuários: 70%

Autorização: 20%

Horários: 0%

Agendamentos: 0%

Validações: 20%

Deploy: 0%


# Próximos Passos

1. Implementar middleware ensureAdmin
2. Criar sistema de horários
3. Criar sistema de agendamentos
4. Implementar validações
5. Refatorar e preparar para deploy