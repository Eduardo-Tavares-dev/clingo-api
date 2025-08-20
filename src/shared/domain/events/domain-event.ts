import type { UniqueEntityID } from '@/shared/domain';

export interface DomainEvent {
  occurredAt: Date;
  getAggregateId(): UniqueEntityID;
}
