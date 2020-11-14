import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        emoji: '🤔',
        probability: 50,
        outcome: 'Perhaps...'
    };
  };

  generateEmoji(previousEmoji, probability) {
    const badEmojis = ['🥺', '👎', '😞'];
    const goodEmojis = ['👍', '🤗', '😛'];

    const randomNumber = Math.floor(Math.random() * 100);

    let selectedEmojis = [];

    if (randomNumber > probability) {
      selectedEmojis.push(...badEmojis);
    } else {
      selectedEmojis.push(...goodEmojis);
    }

    const selectedEmoji = selectedEmojis[Math.floor(Math.random() * selectedEmojis.length)];

    if (previousEmoji === selectedEmoji) {
        return this.generateEmoji(previousEmoji, probability);
    };

    if (badEmojis.includes(selectedEmoji)) {
      this.setState({ outcome: 'No' })
    } else {
      this.setState({ outcome: 'Yes '})
    };

    this.setState({emoji: selectedEmoji});
  };
  
  adjustProbability(event, newValue) {
    console.log(event);

    this.setState({probability: Number(newValue)})
  }

  useStyles() {
    return makeStyles({
      root: {
        maxWidth: 345,
      },
      media: {
        height: 140,
      },
    });
  }

  handleChange = (event, value) => this.setState({ probability: value });

  render() {
    const classes = this.useStyles();

    return (
      <div className="">
        <div className="centered">
          <Slider
            value={this.state.probability}
            aria-labelledby="discrete-slider-always"
            step={1}
            marks={true}
            valueLabelDisplay="on"
            onChange={this.handleChange}
          />
          <Typography id="discrete-slider-always" gutterBottom>
            Adjust your luck above.
          </Typography>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="./logo.svg"
                title="Contemplative Reptile"
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {`${this.state.emoji} ${this.state.outcome}`}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Button variant="contained" color="primary" onClick={() => 
                this.generateEmoji(this.state.emoji, this.state.probability)
              }>
            <span role="img" aria-label="queston-mark">
            ❓❓❓❓❓
            </span>
          </Button>
        </div>
      </div>
    );
  }
}

export default App;