
describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'My First Angular 2 App';


  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    //找到h1元素并获取文本后比对是否等于期待文本My First Angular 2 App
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});
