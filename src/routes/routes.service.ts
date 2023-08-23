import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma/prisma.service';
import { CreateRouteDto } from './dto/create-route-dto';

@Injectable()
export class RoutesService {
  constructor(private prismaService: PrismaService) {}

  async create(createRouteDto: CreateRouteDto) {
    return this.prismaService.route.create({
      data: {
        name: createRouteDto.name,
        source: {
          name: createRouteDto.name,
          location: {
            lat: createRouteDto.source.lat,
            lng: createRouteDto.source.lng,
          },
        },
        destination: {
          name: createRouteDto.name,
          location: {
            lat: createRouteDto.destination.lat,
            lng: createRouteDto.destination.lng,
          },
        },
      },
    });
  }

  findAll() {
    return this.prismaService.route.findMany();
  }
}
