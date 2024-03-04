const reactHeading = React.createElement('h1', {
  className: 'head',
  children: 'Hello React !',
});
const reactImage = React.createElement('img', {
  src: 'https://files.codingninjas.in/coding-ninjas-24647.png',
  alt: 'Coding Ninjas Logo',
});

// ReactDOM.createRoot(document.getElementById('root')).render(reactHeading);
ReactDOM.createRoot(document.getElementById('root')).render(reactImage);
