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

});
