import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Get('/user')
    async getUserToken() {
        const token = await this.authService.swapTokenForUserCredentials('hayden', 'admin');
        return { access_token: token };
    }
}
