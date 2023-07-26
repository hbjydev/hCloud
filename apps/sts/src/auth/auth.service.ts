import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { createId } from '@paralleldrive/cuid2';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private configService: ConfigService,
    ) {}

    async swapTokenForUserCredentials(username: string, password: string) {
        if (username != 'hayden') throw new UnauthorizedException();
        if (password != 'admin') throw new UnauthorizedException();

        const payload = {
            sub: createId(),
            username: 'hayden',
        };

        return await this.jwtService.signAsync(payload, {
            expiresIn: this.configService.getOrThrow('jwt.expiry'),
            secret: this.configService.getOrThrow('jwt.secret'),
        });
    }
}
