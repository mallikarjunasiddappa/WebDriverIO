class HomePage
{
    get acceptCoocies() { return $('//*[contains(text(), "Accept")]') }
    get ourCarsLink() { return $('//*[contains(@id, "topNavCarMenu")]')  }
    get menuLink() { return $('//*[@id="sitenav-sidenav-toggle"]')}

    async clickOnAcceptCoockies(){
        await this.acceptCoocies.click();
    }

    async clickOnMenu(){
        await this.menuLink.click();
    }

}

module.exports= new HomePage()