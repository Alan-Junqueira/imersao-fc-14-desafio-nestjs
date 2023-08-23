import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route-dto';
import { RoutesService } from './routes.service';

@Controller('api/routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Post()
  async create(@Body() createRouteDto: CreateRouteDto) {
    const route = await this.routesService.create(createRouteDto);
    return route;
  }

  @Get()
  async findAll() {
    const routes = await this.routesService.findAll();
    return routes;
  }
}
