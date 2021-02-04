// eslint-disable-next-line import/no-extraneous-dependencies
import { browser, by, element, WebElementPromise } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.driver.get(browser.baseUrl);
  }

  async navigateToAnguar(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.tagName('h1')).getText();
  }

  async getById(id: string): Promise<WebElementPromise> {
    return element(by.id(id)).getWebElement();
  }
}
