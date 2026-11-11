import { Injectable } from '@nestjs/common';




import { ConfigService } from '@nestjs/config';
@Injectable()
export class AppService {
constructor(private readonly config: ConfigService) {}
getAppName(): string {
return this.config.get<string>('APP_NAME', 'Nest Application');
}
}


