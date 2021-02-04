// eslint-disable-next-line import/no-extraneous-dependencies
import { browser, protractor } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('can login', async () => {
    await browser.waitForAngularEnabled(false);
    await page.navigateTo();

    // wait to be redirected to keycloak
    expect(
      await browser.wait(protractor.ExpectedConditions.urlContains('keycloak'), 5000).catch(() => {
        return false;
      })
    ).toBeTruthy();

    expect(await page.getTitleText()).toEqual('SORMAS');

    const username = await page.getById('username');
    const pw = await page.getById('password');

    username.sendKeys('SurvSup');
    pw.sendKeys('SurvSup');

    const submitBtn = await page.getById('kc-login');
    submitBtn.click();

    await browser.wait(protractor.ExpectedConditions.urlContains('4200'), 5000).catch(() => {
      return false;
    });

    await page.navigateToAnguar();
  });
});
