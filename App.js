
   let parent = React.createElement('div' , {id:'parent'}, [
    React.createElement('div' , {id:'child'},[
        React.createElement('h1', {id:'heading'}, 'Hello World'),
        React.createElement('p', {id:'para'}, 'This is a paragraph'),
    ]),
    React.createElement('div' , {id:'child1'},[
        React.createElement('h1', {id:'heading1'}, 'Hello World'),
        React.createElement('p', {id:'para1'}, 'This is a paragraph'),
    ])
   ]);
  
   let root = ReactDOM.createRoot(document.getElementById('root1'));
   console.log(parent)
    root.render(parent);  

