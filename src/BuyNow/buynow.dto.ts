export class CreateBuyNowDto {
  readonly userId: string;
  readonly productId: string;
  readonly quantity: string;
  readonly product: Object;
  readonly status: boolean;
}
