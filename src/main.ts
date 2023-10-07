import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.use(
    session({
      secret: 'ZJETEJ2hHJTE3HJHEJHJE',
      saveUninitialized: false,
      resave: false,
      cookie: {
        maxAge: 60000,
      },
    }),
  );
  app.use(passport.initialize());
  app.useGlobalPipes(new ValidationPipe());
  //define useContainer in main.ts file
  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  await app.listen(3001);
}
bootstrap();
