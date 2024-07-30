const pageList = document.querySelector('.list');


const getString = () => prompt('Введите текст:');

const addListItem = (list, text) => {
  const listItem = document.createElement('li');
  listItem.textContent = text;

  list.append(listItem);
};

const removeLastItem = (list) => {
  list.lastElementChild.remove();
};

const clearList = (list) => {
  list.innerHTML = '';
};

const start = (list) => {
  const mainList = list;
  const userText = getString();
  console.log(userText, typeof userText);

  if (userText === 'exit' || userText === null) return;
  
  if (userText.trim() === '') return start(list);

  if (userText === 'del') {
    removeLastItem(mainList);
    return start(list);
  };

  if (userText === 'clear') {
    clearList(mainList);
    return start(list);
  };

  addListItem(mainList, userText);
  return start(list);
};

start(pageList);
