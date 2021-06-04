// eslint-disable-next-line import/no-extraneous-dependencies
import { browser, by, element, WebElementPromise } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.driver.get(browser.baseUrl);
  }

  // actually checks that an angular app is loaded on the page
  async navigateToAngular(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.tagName('h1')).getText();
  }

  async getUserNameInput(): Promise<WebElementPromise> {
    return this.getById('username');
  }

  async getPwInput(): Promise<WebElementPromise> {
    return this.getById('password');
  }

  async getSubmitBtn(): Promise<WebElementPromise> {
    return this.getById('kc-login');
  }

  async getById(id: string): Promise<WebElementPromise> {
    return element(by.id(id)).getWebElement();
  }
}
