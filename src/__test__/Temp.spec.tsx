describe('테스트 하고자 하는 컴포넌트', () => {
    beforeEach(() => {
        console.log("beforeEach");
    });

    beforeAll(() => {
        console.log("beforeAll");
    });

    afterEach(() => {
        console.log("afterEach")
    });


    afterAll(() => {
        console.log("beforeAll");
    });


    it('should test the first case', () => {
        console.log("it")
    });
    test('테스트케이스 1번', () => {
        console.log("test")
    });
});