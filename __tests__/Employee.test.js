const Employee = require('../lib/Employee');

const meTest = new Employee ('Diana', 1, 'diana@mail.com');

// checks if employee object is created with name, id, email, and role
describe ('Employee', () => {
    let me;

    beforeEach(() => {
        me = new Employee('Diana', 1, 'diana@diana.com');
    });

    describe ('returns name', () => {
        it('✅ name', () => {
            const goodName = me.getName();
            expect(goodName).toBe('Diana');
        });
    });
    
    // checks if getId() returns ID
    describe ('returns ID', () => {
        it('✅ ID', () => {
            const goodId = me.getId();
            expect(goodId).toBe(1);
        })
    });
    
    // checks if getEmail() returns email
    describe ('returns Email', () => {
        it('✅Email', () => {
            const goodEmail = me.getEmail();
            expect(goodEmail).toBe('diana@diana.com')
        })
    });
    
    // checks if getRole returns role `employee
    describe ('returns Role', () => {
        it('✅ Role', () => {
            const goodRole = me.getRole();
            expect(goodRole).toBe('Employee');
        })
    });
});
