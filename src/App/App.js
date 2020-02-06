import React from 'react';
import Form from '../Form/Form';
import Button from '../Button/Button';

class App extends React.Component {

  state = {
    feildsetList : [],
    id: 0
  }

  onDelete = (i) => { 
		const { feildsetList } = this.state;
		feildsetList.splice(i, 1);
		this.setState({ feildsetList: feildsetList });
	};


  onButtonClick = () => {
    const { feildsetList, id } = this.state;
    const fieldsetListValues = feildsetList;
    fieldsetListValues.push({id: id + 1});
    this.setState({id: id});
	};

  render() {
    const { feildsetList } = this.state;
    return(
      <div>
        {
          feildsetList.map((i) => <Form onDelete={()=>this.onDelete(i)} />)
        }
        <Button
          title="Add invitation"
          onClick={this.onButtonClick}
        />
      </div>
    );
  }
}

export default App;
 