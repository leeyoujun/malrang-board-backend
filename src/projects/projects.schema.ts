import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { IsString, IsNotEmpty } from 'class-validator';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/users.schema';

const options: SchemaOptions = {
  timestamps: true,
};

export interface readOnlyProject {
  name: string;
  teams?: Team[];
  groupId?: string;
  projectId?: string;
  users?: User[];
  createUserId: string;
}

export interface readOnlyTeam {
  name: string;
  users?: User[];
  projectId?: string;
  createUserId: string;
}

@Schema(options)
export class Project extends Document {
  @ApiProperty({
    example: 'name',
    description: '이름',
    required: true,
  })
  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'groupId',
    description: '그룹 아이디',
    required: true,
  })
  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  groupId: string;
  teams: Team[];
  createUserId: string;
  isDeleted: boolean;

  readonly readOnlyProject: readOnlyProject;
}

@Schema(options)
export class Team extends Document {
  @ApiProperty({
    example: 'name',
    description: '이름',
    required: true,
  })
  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    example: 'users',
    description: '팀 유저',
    required: true,
  })
  @Prop({})
  users: User[];

  @ApiProperty({
    example: 'projectId',
    description: '팀이 속한 프로젝트',
    required: true,
  })
  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  projectId: string;

  @ApiProperty({
    example: 'createUserId',
    description: '팀 생성 유저',
    required: true,
  })
  @Prop({ required: true })
  @IsNotEmpty()
  @IsString()
  createUserId: string;
  isDeleted: boolean;

  readonly readOnlyTeam: readOnlyTeam;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
export const TeamSchema = SchemaFactory.createForClass(Team);

ProjectSchema.virtual('readOnlyProject').get(function (
  this: Project,
): readOnlyProject {
  return {
    name: this.name,
    teams: this.teams ? this.teams : null,
    groupId: this.groupId,
    createUserId: this.createUserId,
  };
} as any);

TeamSchema.virtual('readOnlyTeam').get(function (this: Team): readOnlyTeam {
  return {
    name: this.name,
    users: this.users ? this.users : null,
    projectId: this.projectId,
    createUserId: this.createUserId,
  };
} as any);
