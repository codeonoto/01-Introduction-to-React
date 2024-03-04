// <-- React With JS -->
// const reactHeading = React.createElement('h1', {
//   className: 'head',
//   children: 'Hello React !',
// });
// const reactImage = React.createElement('img', {
//   src: 'https://files.codingninjas.in/coding-ninjas-24647.png',
//   alt: 'Coding Ninjas Logo',
// });

// ReactDOM.createRoot(document.getElementById('root')).render(reactHeading);
// ReactDOM.createRoot(document.getElementById('root')).render(reactImage);

// <-- React With JSX -->
// const jsxHeading = (
//   <>
//     <h1>About React</h1>
//     <p>There are some features of React</p>
//     <ul>
//       <li>React is Compasable.</li>
//       <li>React have better Code Reusability.</li>
//       <li>React is Declareative.</li>
//     </ul>
//   </>
// );

function App() {
  return (
    <>
      <h1>About React</h1>
      <p>There are some features of React</p>
      <ul>
        <li>React is Compasable.</li>
        <li>React have better Code Reusability.</li>
        <li>React is Declareative.</li>
      </ul>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
