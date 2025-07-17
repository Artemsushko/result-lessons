import { createChangeColorBtn } from './utils';

export default function initApp() {
  const changeColorBtn = createChangeColorBtn();
  document.body.append(changeColorBtn);
}
