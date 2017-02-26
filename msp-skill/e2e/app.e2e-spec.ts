import { MspSkillPage } from './app.po';

describe('msp-skill App', function() {
  let page: MspSkillPage;

  beforeEach(() => {
    page = new MspSkillPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
