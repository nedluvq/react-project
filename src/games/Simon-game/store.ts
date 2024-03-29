import { makeAutoObservable } from "mobx";

interface IData {
  colors: string[];
  isGameStarted: boolean;
  isUserMove: boolean;
  gameSteps: string[];
  userSteps: string[];
  currentRound: number;
  stepInterval: NodeJS.Timeout | string;
  levelComplexity: number;
  isActive: {
    green: boolean;
    red: boolean;
    yellow: boolean;
    blue: boolean;
  };
  mainButtonText: string;
}

class simonData {
  data: IData = {
    isGameStarted: false,
    isUserMove: false,
    gameSteps: [],
    userSteps: [],
    currentRound: 0,
    levelComplexity: 800,
    stepInterval: "",
    isActive: {
      green: false,
      red: false,
      yellow: false,
      blue: false,
    },
    colors: ["green", "red", "yellow", "blue"],
    mainButtonText: "Start the game",
  };
  constructor() {
    makeAutoObservable(this);
  }
  checkStep = () => {
    for (let i = 0; i < this.data.userSteps.length; i++) {
      if (this.data.userSteps[i] !== this.data.gameSteps[i]) {
        this.data.mainButtonText = "wrong (click to restart)";
        this.data.gameSteps = [];
        this.data.userSteps = [];
        this.data.isUserMove = false;
        this.data.isGameStarted = false;
      }
    }
  };
  onColorClick = (color: string) => {
    if (this.data.isUserMove) {
      this.data.userSteps.push(color);
      this.checkStep();
    }
    if (
      this.data.isUserMove &&
      this.data.userSteps.length === this.data.gameSteps.length
    ) {
      this.data.userSteps = [];
      this.gameMove();
    }
  };
  colorToggle = (color: string) => {
    this.data.isActive[color as keyof typeof this.data.isActive] =
      !this.data.isActive[color as keyof typeof this.data.isActive];
  };
  gameMove = () => {
    this.data.isUserMove = false;
    const color = this.data.colors[Math.floor(Math.random() * 4)];
    this.data.gameSteps.push(color);
    this.data.currentRound = this.data.gameSteps.length;
    let index = 0;
    this.data.stepInterval = setInterval(() => {
      if (index >= this.data.gameSteps.length) {
        clearInterval(this.data.stepInterval);
        this.data.isUserMove = true;
      }
      this.colorToggle(this.data.gameSteps[index]);
      setTimeout(() => {
        this.colorToggle(this.data.gameSteps[index]);
        index += 1;
      }, this.data.levelComplexity / 2);
    }, this.data.levelComplexity);
  };
  startGame = () => {
    clearInterval(this.data.stepInterval);
    this.data.mainButtonText = "restart game";
    this.data.isUserMove = false;
    this.data.isGameStarted = true;
    this.data.userSteps = [];
    this.data.gameSteps = [];
    this.data.isActive = {
      blue: false,
      green: false,
      yellow: false,
      red: false,
    };
    this.gameMove();
  };
}

export default new simonData();
