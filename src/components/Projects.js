// the component function
const Projects = (props) => {
  //The Components Returned JSX
  return (
    <div className="Projects">
      <div className="example">
        <h2>Potluck</h2>
        <img src="https://i.imgur.com/Lehmmpz.png" />
        <div className="links">
          <a href="https://potluck.onrender.com/">Live Site |</a>
          <a href="https://github.com/mackwick/potluck">| GitHub</a>
        </div>
        <p>
          Technologies Used: JavaScript, MongoDB, Mongoose, Express, Node, EJS,
          CSS, Google Fonts
        </p>
      </div>
      <div className="example">
        <h2>What Are We Drinking Tonight?</h2>
        <img src="https://i.imgur.com/ylXzr6s.png" />
        <div className="links">
          <a href="https://ga-unit1-project.vercel.app/">Live Site |</a>
          <a href="https://github.com/mackwick/GA-Unit1_Project">| GitHub</a>
        </div>
        <p>
          Technologies Used: Javascript, jQuery, HTML, CSS, The Cocktail DB API,
          Google Fonts
        </p>
      </div>
    </div>
  );
};

// export the component
export default Projects;
