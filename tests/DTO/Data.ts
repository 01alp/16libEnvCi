import { Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
import dotenv from "dotenv";

dotenv.config();

export class Login {
  username: string;
  password: string;
  constructor() {
    this.username = faker.internet.username();
    this.password = faker.internet.password();
  }
}
export class PageData {
  page: Page;
  baseUrl: any;
  userInput: any;
  passInput: any;
  signinButton: any;
  popupError: any;
  constructor(page: Page) {
    this.page = page;
    this.baseUrl = process.env.APP_URL!;
    this.userInput = page.getByTestId("username-input");
    this.passInput = page.getByTestId("password-input");
    this.signinButton = page.getByTestId("signIn-button");
    this.popupError = page.getByTestId("authorizationError-popup");
  }
  async gotoBaseUrl() {
    await this.page.goto(this.baseUrl);
  }
}
