const { expect } = require('@playwright/test');

export class AddCustomerPage {
  constructor(page, firstName, lastName, postCode) {
    this.page = page; 
    this.currencyDropDown = page.locator('#currency');
    this.customerDropDown = page.locator('#userSelect');
    this.customerName = `${firstName} ${lastName}`;
    this.btnProcess = page.getByRole('button', { name: 'Process' });
    this.btnCustomers = page.getByRole('button', { name: 'Customers' });
    this.myLocator = page.getByRole('table').getByRole('rowgroup').nth(1).getByRole('row').last();
  }

  async open() {
    await this.page.goto('/angularJs-protractor/BankingProject/#/manager/openAccount');
    
  }

  async selectCurrency(currencyName) {
    await this.currencyDropDown.selectOption(currencyName);
  }

  async selectCustomer() {
    await this.customerDropDown.selectOption(this.customerName);
  }

  async clickProcessBtn(){
    await this.btnProcess.click();
  }

  async assertSelectCurrencyDropdownContainsValue(value) {
    const currentOptionText = await this.currencyDropDown.inputValue();
    expect(currentOptionText).toBe(value);
  }
}