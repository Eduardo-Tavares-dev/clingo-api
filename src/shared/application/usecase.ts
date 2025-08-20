import type { Either } from '@/shared/exceptions';

export interface IUseCase<Params = unknown, Result = unknown> {
  perform(params: Params): Promise<Either<unknown, Result>>;
}
