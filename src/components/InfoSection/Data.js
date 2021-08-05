export const homeObjOne = {
  id: "about me",
  lightBg: false,
  lightText: true,
  lightTextDesc: false,
  topLine: " About Me ",
  headline: "Sankalp Wahane",
  description:
    " Future Software Engineer /Web Developer /Machine Learning Enthusiast  currently pursuing my btech from KIIT University Bhubaneswar, I love to watch and  play football , Cooking is also one of my hobbies ",
  imgStart: false,
  img: require("../../images/damn.jpg").default,
  button: false,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "resume",
  lightBg: false,
  lightText: true,
  lightTextDesc: false,
  topLine: " Skills and Projects ",
  headline:
    "C       ,       JAVASCRIPT      ,       HTML   ,      CSS        ,      REACT      ,       NODEJS      ,       PYTHON , PHOTOSHOP",
  description: (
    <p>
      <a href="https://dcjusticeposting.herokuapp.com/ ">
        {" "}
        <em>Dynamic Website Project(News Journal)</em> <br />
        <br />
      </a>{" "}
      <a href="https://sankalpwr.github.io/Payment-Gateway-/">
        <em>Payment Gateway Integration(TSP)</em>
        <br /> <br />
      </a>{" "}
      <a href="https://github.com/SankalpWr/SNAKE-GAME-">
        <em>Snake Game</em>
      </a>{" "}
      <br /> <br />
      <br /> <br />
      <br />
      <em>
        {" "}
        Former Intern at -<br />
        :Chhattisgarh Software Solutions
        <br />
        :<a href="https://drive.google.com/file/d/1kRbaKBL24GB8vD3jhf2gKMaYBg3bU-n5/view" > The Sparks Foundation </a>
      </em>
    </p>
  ),

  imgStart: false,
  img: require("../../images/gvcg.svg").default,

  button: true,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjThree = {
  id: "connect",
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: " Connect  ",
  headline: "Connect with me Via Linkedin ,Instagram & Github ",
  description: (
    <p>
      <br />
      <br />{" "}
      <em>
        The modern way of keeping in touch with people we know and being aware
        of current is through social media. The demand for social media has
        grown worldwide, and it has brought some significant changes in our
        lives. Even though the effects of social media are debatable, but one
        thing that everyone would agree that social media is certainly
        enjoyable.
        <br />
        <br />
        click the icons down below
      </em>
    </p>
  ),
  img: require("../../images/svg-6.svg").default,
  imgStart: false,
  button: false,
  alt: "Car",
  dark: true,
  primary: true,
  darkText: false,
};
