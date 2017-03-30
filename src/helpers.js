export function formatPrice(pence) {
  return `£${(pence / 100).toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

export function makePubName() {
  const word1 = ['Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']
  const word2 = ['Lonely', 'Drunk', 'Quiet', 'Noble', 'Hungry', 'Thirsty', 'Restless', 'Pensive', 'Wishful'];
  const word3 = ['Queens', 'Kings', 'Kinghts', 'Scholars', 'Poets', 'Bankers', 'Lords'];

  return `The-${rando(word1)}-${rando(word2)}-${rando(word3)}`;
}