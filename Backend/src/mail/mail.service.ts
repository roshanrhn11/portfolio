
import {
  Injectable,
  InternalServerErrorException,
} from "@nestjs/common";

import { ConfigService } from "@nestjs/config";
import * as nodemailer from "nodemailer";

@Injectable()
export class MailService {
  private readonly transporter: nodemailer.Transporter;

  private readonly emailUser: string;
  private readonly contactReceiver: string;

  constructor(
    private readonly configService: ConfigService,
  ) {
    this.emailUser =
      this.configService.get<string>("EMAIL_USER") ?? "";

    const emailPassword =
      this.configService.get<string>("EMAIL_APP_PASSWORD") ?? "";

    this.contactReceiver =
      this.configService.get<string>("CONTACT_RECEIVER") ?? "";

    // Check configuration without exposing credentials
    console.log(
      "EMAIL_USER configured:",
      Boolean(this.emailUser),
    );

    console.log(
      "EMAIL_APP_PASSWORD configured:",
      Boolean(emailPassword),
    );

    console.log(
      "CONTACT_RECEIVER configured:",
      Boolean(this.contactReceiver),
    );

    if (
      !this.emailUser ||
      !emailPassword ||
      !this.contactReceiver
    ) {
      console.error(
        "Email configuration is incomplete. Check your Backend/.env file.",
      );
    }

    this.transporter =
      nodemailer.createTransport({
        service: "gmail",

        auth: {
          user: this.emailUser,
          pass: emailPassword,
        },
      });
  }

  async sendContactNotification(
    name: string,
    email: string,
    message: string,
  ): Promise<boolean> {
    try {
      await this.transporter.sendMail({
        from: `"Portfolio Website" <${this.emailUser}>`,

        to: this.contactReceiver,

        replyTo: email,

        subject:
          `New Portfolio Contact Message from ${name}`,

        text: `
New message received from your portfolio website.

Name: ${name}
Email: ${email}

Message:
${message}

--------------------------------
Portfolio Contact Form
        `.trim(),

        html: `
          <div
            style="
              font-family: Arial, sans-serif;
              line-height: 1.6;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            "
          >

            <h2>
              New Portfolio Contact Message
            </h2>

            <p>
              You received a new message
              through your portfolio website.
            </p>

            <hr />

            <p>
              <strong>Name:</strong>
              ${this.escapeHtml(name)}
            </p>

            <p>
              <strong>Email:</strong>
              ${this.escapeHtml(email)}
            </p>

            <p>
              <strong>Message:</strong>
            </p>

            <div
              style="
                background: #f5f5f5;
                padding: 15px;
                border-radius: 8px;
                white-space: pre-wrap;
              "
            >
              ${this.escapeHtml(message)}
            </div>

            <hr />

            <p
              style="
                color: #777;
                font-size: 13px;
              "
            >
              Sent from your portfolio contact form.
            </p>

          </div>
        `,
      });

      console.log(
        "Contact email sent successfully.",
      );

      return true;
    } catch (error) {
      console.error(
        "Email sending failed:",
        error,
      );

      throw new InternalServerErrorException(
        "Message was saved, but email notification could not be sent.",
      );
    }
  }

  private escapeHtml(
    value: string,
  ): string {
    return value
      .replace(
        /&/g,
        "&amp;",
      )
      .replace(
        /</g,
        "&lt;",
      )
      .replace(
        />/g,
        "&gt;",
      )
      .replace(
        /"/g,
        "&quot;",
      )
      .replace(
        /'/g,
        "&#039;",
      );
  }
}

