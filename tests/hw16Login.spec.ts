import { test, expect } from "@playwright/test";
import { Login, PageData } from "./DTO/Data";

const login = new Login();
test.describe("Identify authorization scenarios. Only negative cases", () => {
  let data: PageData;
  test.beforeEach(async ({ page }) => {
    data = new PageData(page);
    await data.gotoBaseUrl();
  });
  test("Check Title", async ({ page }) => {
    await expect(page).toHaveTitle("Training App");
  });
  test("Signin Button is enabled", async ({ page }) => {
    await data.userInput.fill(login.username);
    await data.passInput.fill(login.password);
    await expect(data.signinButton).toBeEnabled();
  });
  test("Authorization error pop-up is displayed", async ({ page }) => {
    await data.userInput.fill(login.username);
    await data.passInput.fill(login.password);
    await data.signinButton.click();
    await expect(data.popupError).toBeVisible();
  });
});
