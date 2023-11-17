import { test, expect } from "@playwright/test";
import { Home } from "./Home";

test("Has a home section description text", async ({ page }) => {
  const home = new Home(page);

  //render the home page by calling url
  await home.goto();
});

test("render a navbar in home page", async ({ page }) => {
  const home = new Home(page);

  //render the page by calling url
  await home.goto();

  //check wether the navbar header is visible or not
  await expect(home.header).toBeVisible();

  //check navbar button are visible are not
  await expect(home.homeButton).toBeVisible();
  await expect(home.productButton).toBeVisible();
  await expect(home.contactButton).toBeVisible();
});
