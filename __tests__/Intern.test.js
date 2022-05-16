const Intern = require('../lib/Intern');

// tests getSchool() and getRole()
describe ('Intern', () => {
    let me;

    beforeEach(() => {
        me = new Intern(
            'Diana', 
            1, 
            'diana@diana.com',
            'University of Washington');
    });

    describe('returns school name', () => {
        it('✅ School', () => {
            const goodSchool = me.getSchool();
            expect(goodSchool).toBe('diana-iulia');
        });
    })

    describe('returns role "Intern"', () => {
        it('✅ Role', () => {
            const goodRole = me.getRole();
            expect(goodRole).toBe('Intern');
        });
    })

})