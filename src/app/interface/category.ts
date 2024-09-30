export interface ICategory {
  id:	string;
  name:	string;
  nullable: true;
  parentId:	string;
  childs:	[{
    nullable: true;
    description: string;
    id:	string;
    parentId:	string;
    name:	string;
  }]
}

