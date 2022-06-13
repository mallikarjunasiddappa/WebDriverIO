class MenuPage{

    get buyButton() { return $('//*[@role="listitem"]//*[contains(text(), "Buy")]') }
    get ownButton() { return $('//*[@role="listitem"]//*[contains(text(), "Own")]') }
    get aboutVolvoButton() { return $('//*[@role="listitem"]//*[contains(text(), "About Volvo")]') }
    get exploreButton() { return $('//*[@role="listitem"]//*[contains(text(), "Explore")]') }
    get moreButton() { return $('//*[@role="listitem"]//*[contains(text(), "More")]') }

    async clickOnBuy(){
        await this.buyButton.click();
    }
}

module.exports= new MenuPage()