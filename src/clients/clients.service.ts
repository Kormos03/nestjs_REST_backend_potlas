import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class ClientsService {
  constructor (private db: PrismaService) {}
  create(createClientDto: CreateClientDto) {
    return this.db.client.create({
      data: createClientDto
    });
  }

  findAll() {
    return this.db.client.findMany();
  }

  findOne(id: number) {
    return this.db.client.findUnique({
      where: { id }
    });
  }

  update(id: number, updateClientDto: UpdateClientDto) {
    return this.db.client.update({
      where: { id },
      data: updateClientDto
    });
  }

  remove(id: number) {
    return this.db.client.delete({
      where: { id }
    });
  }
}
