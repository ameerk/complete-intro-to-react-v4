const pet = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed)
  ]);
};
const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopet Me!"),
    React.createElement(pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanies"
    }),
    React.createElement(pet, {
      name: "Brian",
      animal: "Dog",
      breed: "Mastive"
    }),
    React.createElement(pet, {
      name: "Chocho",
      animal: "Dog",
      breed: "podel"
    })
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
