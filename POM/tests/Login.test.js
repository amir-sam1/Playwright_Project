import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";


let loginPage;
let homePage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  homePage = new HomePage(page);
  await loginPage.navigate();
});

test.describe("login user", () => {
  //local configuration
  //test.use({viewport:{width: 600, height: 900}});
  test("login with correct email and password", async () => {
    await loginPage.login(process.env.LOGIN_EMAIL, process.env.LOGIN_PASS);

    // verify that logged in as username is visible
    await expect(await
      homePage.getElementByText(' Logged in as amir')).toBeVisible();
  });

  test("login with incorrect email and password", async () => {
    await loginPage.login("amir.sami@bit68.com", "Am@22113611");

    // verify that your email and password is incorrect is visible
    await expect(await
      loginPage.getElementByText("Your email or password is incorrect!")
    ).toBeVisible();
  });
});
