export class CreateCartDto {
  readonly userId: string;
  readonly productId: string;
  readonly quantity: number;
  readonly product: Object;
}
