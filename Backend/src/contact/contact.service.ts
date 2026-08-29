
import {
  BadRequestException,
  Injectable,
} from "@nestjs/common";

import { PrismaService } from "../prisma/prisma.service";
import { MailService } from "../mail/mail.service";

@Injectable()
export class ContactService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {}

  async createMessage(
    name: string,
    email: string,
    message: string,
  ) {
    const cleanName = name?.trim();
    const cleanEmail = email?.trim().toLowerCase();
    const cleanMessage = message?.trim();

    // Required fields
    if (!cleanName || !cleanEmail || !cleanMessage) {
      throw new BadRequestException(
        "Name, email, and message are required.",
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(cleanEmail)) {
      throw new BadRequestException(
        "Please provide a valid email address.",
      );
    }

    // Name validation
    if (cleanName.length < 2) {
      throw new BadRequestException(
        "Name must contain at least 2 characters.",
      );
    }

    // Message validation
    if (cleanMessage.length < 10) {
      throw new BadRequestException(
        "Message must contain at least 10 characters.",
      );
    }

    // Save message to MySQL
    const contactMessage =
      await this.prisma.contactMessage.create({
        data: {
          name: cleanName,
          email: cleanEmail,
          message: cleanMessage,
        },
      });

    // Send email notification
    await this.mailService.sendContactNotification(
      cleanName,
      cleanEmail,
      cleanMessage,
    );

    return {
      success: true,
      message: "Your message has been sent successfully.",
      data: {
        id: contactMessage.id,
        createdAt: contactMessage.createdAt,
      },
    };
  }
}

