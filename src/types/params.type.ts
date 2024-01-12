export type getProjectParams = {
  groupId?: number;
  projectId?: number;
  isDeleted?: boolean;
};

export type getTeamPrams = {
  groupId?: number;
  teamId?: number;
  isDeleted?: boolean;
};

export type getGroupPrams = {
  groupId?: number;
  isDeleted?: boolean;
};

export type getMemberPrams = {
  groupId?: number;
  member_id?: number;
  isDeleted?: boolean;
};