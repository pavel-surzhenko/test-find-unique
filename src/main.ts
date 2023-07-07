import { findUniqueCharacterArray } from './findUniqueCharacterArray';
import './style.css'

function handleSubmit(event: Event) {
  event.preventDefault();

  const textInput = document.getElementById('text-input') as HTMLTextAreaElement;
  const resultDisplay = document.getElementById('result-display') as HTMLDivElement;

  const text = textInput.value;
  const uniqueChar = findUniqueCharacterArray(text);

  resultDisplay.textContent = uniqueChar;
}


const form = document.getElementById('text-form');
form?.addEventListener('submit', handleSubmit)