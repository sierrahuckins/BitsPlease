import { PracticeRoutingAndAuthTutorialPage } from './app.po';

describe('practice-routing-and-auth-tutorial App', function() {
  let page: PracticeRoutingAndAuthTutorialPage;

  beforeEach(() => {
    page = new PracticeRoutingAndAuthTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
