import Mailgun from "mailgun.js";
import { default as formData } from "form-data";
import { IMailgunClient } from "mailgun.js/Interfaces";

export class Mail {
  private mailClient: IMailgunClient;

  constructor() {
    const mailgun = new Mailgun(formData);
    this.mailClient = mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API_KEY as string,
    });
  }

  public async send(subject: string, text: string, isTest = false) {
    const params = {
      from: process.env.MAIL_FROM as string,
      to: isTest ? "abc@olamileke.dev" : (process.env.MAIL_TO as string),
      subject,
      text,
    };
    await this.mailClient.messages.create(
      process.env.MAIL_DOMAIN as string,
      params
    );
  }
}
