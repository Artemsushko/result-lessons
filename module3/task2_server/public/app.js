document.addEventListener('click', async (event) => {
  const $target = event.target;
  const $button = $target.closest('[data-type]');

  if (!$button) return;

  const id = $button.dataset.id;
  const type = $button.dataset.type;
  const $li = $target.closest('li');

  if (type === 'remove') {
    const response = await fetch(`/${id}`, { method: 'DELETE' });
    if (response.ok) {
      $li.remove();
    }
  }

  if (type === 'edit') {
    const $titleSpan = $li.querySelector('span');
    const oldTitle = $titleSpan.textContent;

    $li.dataset.oldLayout = $li.innerHTML;

    $li.innerHTML = `
      <input type="text" class="form-control me-3" value="${oldTitle}" id="input-${id}">
      <div class="d-flex">
        <button class="btn btn-success me-2" data-type="save" data-id="${id}">Save</button>
        <button class="btn btn-danger" data-type="cancel" data-id="${id}">Cancel</button>
      </div>
    `;
  }

  if (type === 'cancel') {
    $li.innerHTML = $li.dataset.oldLayout;
  }

  if (type === 'save') {
    const $input = $li.querySelector(`#input-${id}`);
    const newTitle = $input.value.trim();

    if (newTitle !== '') {
      try {
        const response = await fetch(`/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title: newTitle }),
        });

        if (response.ok) {
          $li.innerHTML = `
            <span>${newTitle}</span>
            <div>
              <button class="btn btn-primary" data-type="edit" data-id="${id}">Edit</button>
              <button class="btn btn-danger" data-type="remove" data-id="${id}">Delete</button>
            </div>
          `;
        }
      } catch (e) {
        alert('Ошибка при сохранении!', e);
      }
    }
  }
});
