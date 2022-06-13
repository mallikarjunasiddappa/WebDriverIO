class BuyPage{

    get carConfiguratorButton() { return $('//*[@role="listitem"]//*[contains(text(), "Car Configurator")]') }
    get fleetSalesButton() { return $('//*[@role="listitem"]//*[contains(text(), "Fleet sales")]') }
    get specialVehiclesButton() { return $('//*[@role="listitem"]//*[contains(text(), "Special Vehicles")]') }
    get usedCarsButton() { return $('//*[@role="listitem"]//*[contains(text(), "Used cars")]') }
    get dolomaticSalesButton() { return $('//*[@role="listitem"]//*[contains(text(), "Diplomatic sales")]') }
    get childSeatsButton() { return $('//*[@role="listitem"]//*[contains(text(), "Child seats")]') }

    async clickOnBuy(){
        await this.buyButton.click();
    }
}

module.exports= new BuyPage()