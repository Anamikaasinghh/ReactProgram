


     const heading = React.createElement("h1",{id:"heading"},"hello word");
    const divElement1 = React.createElement("h1",{id:"child1"},{
  
    heading,
    heading,
   });
    const heading = React.createElement("h1",{id:"heading"},"hello word");
    const divElement2 = React.createElement("h1",{id:"child2"}, {
        heading,
        heading,
    });
    const parentDivElement = React.createElement("div",{id:"parent"},{
        divElement1,
        divElement2,
    });
    console.log(heading);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parentDivElement);


