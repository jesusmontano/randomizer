import React from 'react';
import approval from './images/approval.png';
import disapproval from './images/disapproval.png';
import questioning from './images/questioning.png';
import './App.css';
import { CardMedia, Button, Card, CardActionArea, CircularProgress } from '@mui/material';

const DECISIONS_MAP = {
  true: approval,
  false: disapproval,
  undefined: questioning,
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        decision: undefined,
        isLoading: false
    };
  };

  sleep(ms) {
    return new Promise(
      resolve => setTimeout(resolve, ms)
    );
  }

  async generateDecision() {
    const randomNumber = Math.floor(Math.random() * 9);

    this.setState({isLoading: true});

    await this.sleep(500);

    this.setState({ isLoading: false });

    if (randomNumber < 5) {
      this.setState({decision: false});
    } else {
      this.setState({decision: true});
    }
  }

  render() {
    return (
      <div className="">
        <div className="centered">
          <Card sx={{width: 300, height: 300}}>
            <CardActionArea>
              {this.state.isLoading ? 
              
            <CircularProgress sx={{ p: "45%" }} /> 
              : 
              <CardMedia
                component={"img"}
                image={DECISIONS_MAP[this.state.decision]}
              />}
            </CardActionArea>
          </Card>
          <Button sx={{ m: 2}} variant="contained" color="primary" disabled={this.state.isLoading} onClick={() => 
                this.generateDecision()
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