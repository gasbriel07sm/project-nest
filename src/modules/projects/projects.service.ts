import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  findAll() {
    return `Esta rota retorna todos os projetos`
  }

  findById(id: string) {
    return `Esta rota retorna apenas o projeto com id ${id}`
  }

  create(data: any) {
    return `Esta rota cria um projeto, com o corpo: ${data}`
  }

  update(id: string, data: any) {
    return `Esta rota atualiza um projeto, com o id ${id} e corpo: ${data}`
  }

  remove(id: string) {
    return `Esta rota deleta um projeto, com o id: ${id}`
  }
}
