/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateEventDto } from './create-event-dto';
import { Event } from './event.entity';
import { UpdateEventDto } from './update-event-dto';

@Controller('events')
export class EventController {
  private events: Event[] = [];

  @Get()
  findAll() {
    return this.events;
  }

  @Get(':id')
  findOne(@Param('id') id) {
    const event = this.events.find((e) => e.id === parseInt(id));
    return event;
  }

  @Post()
  create(@Body() input: CreateEventDto) {
    const event = {
      ...input,
      when: new Date(input.when),
      id: Math.max(this.events.length) + 1,
    };

    this.events.push(event);

    return event;
  }

  @Put(':id')
  update(@Param('id') id, @Body() input: UpdateEventDto) {
    const index = this.events.findIndex((e) => e.id === parseInt(id));

    this.events[index] = {
      ...this.events[index],
      ...input,
      when: input.when ? new Date(input.when) : this.events[index].when,
    };

    return this.events[index];
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id) {
    return this.events.filter((e) => e.id !== parseInt(id));
  }
}
