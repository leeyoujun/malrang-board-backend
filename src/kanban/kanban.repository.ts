import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Board, readOnlyBoard } from './kanban.schema';

@Injectable()
export class KanbanRepository {
  constructor(
    @InjectModel(Board.name) private readonly boardModal: Model<Board>,
    // @InjectModel(Card.name) private readonly cardModel: Model<Card>,
  ) {}

  // readOnlyData (readOnlyBaord, readOnlyCard)

  async findAll(params: any): Promise<readOnlyBoard[]> {
    const boards = await this.boardModal.find(params).exec();

    // readOnlyBoard[]; 로 바꿈
    return boards.map((board) => board.readOnlyData);
  }

  async findOne(id: string) {
    const board = await this.boardModal.findById(id).exec();
    return board;
  }

  async create() {
    const createdBoard = new this.boardModal();
    return createdBoard.save();
  }

  async delete() {
    return 'This action removes a #${id} board';
  }
}
