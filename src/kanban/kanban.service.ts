import { Injectable } from '@nestjs/common';
import { KanbanRepository } from './kanban.repository';
import { readOnlyBoard } from './kanban.schema';

@Injectable()
export class KanbanService {
  constructor(private readonly kanbanRepository: KanbanRepository) {}

  /** controller */
  /**
 * 
  // 보드 조회 API
  // GET /kanban/boards
  // GET /kanban/boards/:id
  @Get()
  async findAll(): Promise<any> {
    return await this.kanbanService.findAll();
  }
  **/
  async findAll(params: any): Promise<readOnlyBoard[]> {
    return await this.kanbanRepository.findAll(params);
  }

  // 보드 개별 조회 API
  // GET /kanban/boards/:id
  // @Get(':id')
  // async findOne(): Promise<any> {
  //   return await this.kanbanService.findOne();
  // }

  // 보드 추가 API
  // POST /kanban/boards
  // @Post()
  // async create(): Promise<any> {
  //   return await this.kanbanService.create();
  // }

  // 보드 삭제 API
  // DELETE /kanban/boards/:id
  // @Delete(':id')
  // async delete(): Promise<any> {
  //   return await this.kanbanService.delete();
  // }

  // 카드 조회 API
  // GET /kanban/cards
  // GET /kanban/cards/:id
  // @Get()
  // async findAllCards(): Promise<any> {
  //   return await this.kanbanService.findAllCards();
  // }

  // 카드 개별 조회 API
  // GET /kanban/cards/:id
  // @Get(':id')
  // async findOneCard(): Promise<any> {
  //   return await this.kanbanService.findOneCard();
  // }

  // 카드 추가 API
  // POST /kanban/cards
  // @Post()
  // async createCard(): Promise<any> {
  //   return await this.kanbanService.createCard();
  // }

  // 카드 삭제 API
  // DELETE /kanban/cards/:id
  // @Delete(':id')
  // async deleteCard(): Promise<any> {
  //   return await this.kanbanService.deleteCard();
  // }

  // 카드 이동 API
  // PUT /kanban/cards/:id
  // @Put(':id')
  // async moveCard(): Promise<any> {
  //   return await this.kanbanService.moveCard();
  // }

  // 카드 수정 API
  // PATCH /kanban/cards/:id
  // @Patch(':id')
  // async updateCard(): Promise<any> {
  //   return await this.kanbanService.updateCard();
  // }

  // 카드 상태 변경 API
  // PATCH /kanban/cards/:id/status
  // @Patch(':id/status')
  // async updateCardStatus(): Promise<any> {
  //   return await this.kanbanService.updateCardStatus();
  // }
}
