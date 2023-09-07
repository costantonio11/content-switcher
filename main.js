function handleContentSwitchFromBoundData({ currentTarget }) {
  const { buttonList, contentList } = this;
  const selectedValue = currentTarget.getAttribute('data-content-selector');
  contentList.forEach(({ classList }) => classList.remove('selected'));

  const selectedContent = document.getElementById(selectedValue);
  if (selectedContent) {
    selectedContent.classList.add('selected');
  }
}

function initializeContentSwitchComponent(rootNode) {
  const buttonList = [...rootNode.querySelectorAll('.content-button')];
  const contentList = [...rootNode.querySelectorAll('[data-content-item]')];

  const handleContentSwitch = handleContentSwitchFromBoundData.bind({
    buttonList,
    contentList,
  });

  buttonList.forEach(buttonNode => {
    buttonNode.addEventListener('click', handleContentSwitch);
  });

  // 1st item default selection
  buttonList[0].click();

  rootNode.classList.add('initialized');
}

function main() {
  document.querySelectorAll('[data-content-switch]').forEach(initializeContentSwitchComponent);
}

main();
