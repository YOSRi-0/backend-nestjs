import { SetMetadata } from '@nestjs/common';

export const jwtContants = {
  secret: 'ZET2TJ32JT2JT3JT2ZEJTHTR4634693JKJT3490?TT22?T?2T?T23KR',
};

export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
