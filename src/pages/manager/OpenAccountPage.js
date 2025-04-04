const { expect } = require('@playwright/test');

export class AddCustomerPage {
  constructor(page) {
    this.page = page; 
    this.currencyDropDown = page.locator('#currency');
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager/openAccount');
    
  }

  async selectCurrency(currencyName) {
    await this.currencyDropDown.selectOption(currencyName);
  }

  async assertSelectCurrencyDropdownContainsValue(value) {
    const currentOptionText = await this.currencyDropDown.inputValue();
    expect(currentOptionText).toBe(value);
  }
}