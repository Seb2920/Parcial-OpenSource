export class ServiceOrderEntity {
  constructor(public id: number, public equipmentID: number, public IssueID: number, public neededAction: string , public priority: string, public registreredAt:string, public completedAt:string | null)
  {
  }
}
