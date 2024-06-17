export function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add('focus');
}

export function blurFunc() {
  let parent = this.parentNode;
  if (this.value === '') {
    parent.classList.remove('focus');
  }
}
