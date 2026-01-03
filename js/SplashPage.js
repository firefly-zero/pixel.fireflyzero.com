const SplashPage = (() => {
  initSplashPage();

  function initSplashPage() {
    Dialogue.showDialogue("splash", false);
  }

  function SplashCoverImage(path, author, link) {
    this.path = path;
    this.author = author;
    this.link = link;
  }

  return {};
})();
