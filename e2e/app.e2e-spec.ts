import { Angular4HttpclientPage } from './app.po';

describe('angular4-httpclient App', () => {
  let page: Angular4HttpclientPage;

  beforeEach(() => {
    page = new Angular4HttpclientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
