export class CreateProductDto {
  readonly title: string;
  readonly description: string;
  readonly price: number;
  readonly discount: number;
  readonly category: string;
  readonly images: string[];
  readonly quantity: number;
}
