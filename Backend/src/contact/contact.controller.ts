
import {
  Body,
  Controller,
  Post,
} from "@nestjs/common";
import { ContactService } from "./contact.service";

@Controller("api/contact")
export class ContactController {
  constructor(
    private readonly contactService: ContactService,
  ) {}

  @Post()
  async createMessage(
    @Body()
    body: {
      name: string;
      email: string;
      message: string;
    },
  ) {
    return this.contactService.createMessage(
      body.name,
      body.email,
      body.message,
    );
  }
}

