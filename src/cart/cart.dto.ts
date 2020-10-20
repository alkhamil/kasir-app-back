import { ApiProperty } from '@nestjs/swagger';

export class CreateCartDto {
  qty: number;

  total_price: number;

  @ApiProperty()
  productId: number;

}

export class UpdateCartDto {

  @ApiProperty()
  qty: number;

  total_price: number;

}