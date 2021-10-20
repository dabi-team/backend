import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthSchema } from './auth.schema';
import { JwtModule } from '@nestjs/jwt';
import { UserSchema } from 'src/User/schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Auth', schema: AuthSchema },
      { name: 'Users', schema: UserSchema },
    ]),
    JwtModule.register({
      secret: 'hackathon',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
