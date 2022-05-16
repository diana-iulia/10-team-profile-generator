const Manager = require('../lib/Manager');

// tests getGithub() and getRole()
describe ('Engineer', () => {
    let me;

    beforeEach(() => {
        me = new Engineer(
            'Diana', 
            1, 
            'diana@diana.com',
            'diana-iulia');
    });

    describe('returns github username', () => {
        it('✅ github', () => {
            const goodGithub = me.getGithub();
            expect(goodGithub).toBe('diana-iulia');
        });
    })

    describe('returns role "Engineer"', () => {
        it('✅ Role', () => {
            const goodRole = me.getRole();
            expect(goodRole).toBe('Engineer');
        });
    })

})