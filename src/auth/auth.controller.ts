import { Body, Controller, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService) {}

    @Post('/signup')
    signUp(@Body(ValidationPipe) authcredentialDto: AuthCredentialDto): Promise<void> {
        return this.authService.signUp(authcredentialDto);
    }

    @Post('/signin')
    signIn(@Body(ValidationPipe) authCredentialDto: AuthCredentialDto): Promise<{accessToken: string}> {
        return this.authService.signIn(authCredentialDto);
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    test(@Req() req) {
        console.log('req', req);
    }
}
