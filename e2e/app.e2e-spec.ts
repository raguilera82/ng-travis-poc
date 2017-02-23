import { NgTravisPocPage } from './app.po';

describe('ng-travis-poc App', () => {
  let page: NgTravisPocPage;

  beforeEach(() => {
    page = new NgTravisPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
