import { Locator, Page } from "@playwright/test";
export class Home {
  readonly page: Page;
  readonly text: Locator;
  readonly header: Locator;
  readonly homeButton: Locator;
  readonly productButton: Locator;
  readonly contactButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.text = page.locator("p", { hasText: "this is a home section" });
    this.header = page.getByText("My Website", { exact: true });
    this.homeButton = page.locator("button", { hasText: "HOME" });
    this.productButton = page.locator("button", { hasText: "PRODUCTS" });
    this.contactButton = page.locator("button", { hasText: "CONTACT" });
  }

  async goto() {
    await this.page.goto("/");
  }
}
