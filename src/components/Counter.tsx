import * as React from 'react';;
export interface IProps{
  name: string
}
export interface IState{
  number: number,
  amount:number
}
export default class Counter extends React.Component<IProps,IState>{
  state = {number:0,amount:0}
  handleChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    this.setState({amount:parseInt(event.target.value)});
  }
  render() {
    const {name}=this.props;
    const {number,amount}=this.state;
    const container:React.CSSProperties = {
      color:'green',
      border:'1px solid red'
    }
    return (
      <div style={container}>
        <p>{name}:{number}</p>
        <input value={amount} onChange={event=>this.handleChange(event)}/>
        <button onClick={()=>this.setState({number:number+amount})}>+</button>
      </div>
    )
  }
}