describe("User Interface", function() {

    it('should have a user interface', function() {
        let body = document.getElementsByTagName('body').length;
        expect(body).toBe(1);
    })

    it('should have a nav menu', function() {
        let nav = document.getElementById('main-nav');
        expect(nav).toBeTruthy();
    })

    it('should have a title to Equal Guillaume David', function() {
        let title = document.getElementById('title');
        expect(title.innerHTML).toBe('Guillaume David');
    })

    it('should have a subtitle to Equal Développeur Front End / Javascript / React', function() {
        let subtitle = document.getElementById('subtitle');
        expect(subtitle.innerHTML).toBe('Développeur Front End / Javascript / React');
    })

    it('should have a introduction section', function() {
        let section = document.getElementsByClassName('introduction').length;
        expect(section).toBe(1);
    })

    it('should have a portfolio section', function() {
        let portfolio = document.getElementsByClassName('portfolio').length;
        expect(portfolio).toBe(1);
    })

    it('should have 5 project in portfolio section', function() {
        let portfolio = document.getElementsByClassName('mix').length;
        expect(portfolio).toBe(5);
    })

    /// test au click de la section portfolio

    it('should have a skills section', function() {
        let skills = document.getElementsByClassName('cont_skills').length;
        expect(skills).toBe(1);
    })

    it('should have a choose section', function() {
        let choose = document.getElementsByClassName('choose').length;
        expect(choose).toBe(1);
    })
/*
    it('should have 6 elements in choose section', function() {
        let choose = document.getElementsByClassName('single_choose_text').length;
        expect(choose).toBe(6);
    })*/

    it('should have a contact section', function() {
        let contact = document.getElementsByClassName('contact').length;
        expect(contact).toBe(1);
    })

    it('should have a footer section', function() {
        let footer = document.getElementsByClassName('footer').length;
        expect(footer).toBe(1);
    })
    

});
