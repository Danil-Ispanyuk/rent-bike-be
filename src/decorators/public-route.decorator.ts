import { SetMetadata } from '@nestjs/common';

import { PUBLIC_ROUTE_KEY } from '../constants/common.constant';

export const PublicRoute = () => SetMetadata(PUBLIC_ROUTE_KEY, true);
