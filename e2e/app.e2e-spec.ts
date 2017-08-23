import { Resume2Page } from './app.po';

describe('resume2 App', () => {
  let page: Resume2Page;

  beforeEach(() => {
    page = new Resume2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
