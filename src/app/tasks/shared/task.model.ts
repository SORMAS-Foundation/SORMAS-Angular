export interface Task {
  id: string;
  associatedLink: string;
  context: string;
  type: string;
  region: string;
  district: string;
  priority: string;
  startDate: string;
  dueDate: string;
  assignee: string;
  executionComments: string;
  taskComments: string;
  creator: string;
  status: string;
}

export interface TaskApi {
  totalCount: number;
  items: Task[];
}
