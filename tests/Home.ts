import { Locator, Page } from "@playwright/test";
export class Home {
  readonly page: Page;
  readonly header: Locator;
  readonly homeButton: Locator;
  readonly productButton: Locator;
  readonly contactButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.header = page.getByText("Aers Premium Coolers", { exact: true });
    this.homeButton = page.locator("button", { hasText: "HOME" });
    this.productButton = page.locator("button", { hasText: "PRODUCT" });
    this.contactButton = page.locator("button", { hasText: "CONTACT" });
  }

  async goto() {
    await this.page.goto("/");
  }
}
