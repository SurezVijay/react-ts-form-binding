import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import IUser from './IUser';

interface IProps {};

interface IState {
  users : IUser 
};

class Form extends React.Component<IProps,IState> {
  constructor(props:IProps){
    super(props);
    this.state = {
      users : {} as IUser
    }
  }

inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
   this.setState({
     users : {
       ...this.state.users,
       [event.target.name] : event.target.value
     }
   })
}

handleChanges = () => {
    e.preventdefault()
    console.log(` State : ${JSON.stringify(this.state.users)}`)
}

  render(){
    return(
      <div>
      <pre>{JSON.stringify(this.state.users)} </pre>
       <section className="mt-5">
          <div className="container">
             <div className="row">
             <div className="col-md-6">
               <div className="card">
                <div className="card-header bg-primary text-white">
                  <h3 className="card-title"> React Form Binding </h3>
                </div>   
                <div className="card-body">
                  <form onSubmit={this.handleChanges}>
                   <div className="form-control-group">
                   <label className="form-control-item mr-4 mb-3"> UserName </label>
                   <input type="text" name="username" 
                   value={this.state.users.username}
                   onChange={this.inputChange}
                   className="form-control-item"/>
                   </div>
                    <div className="form-control-group">
                   <label className="form-control-item mr-2 "> Email Address </label>
                   <input type="text" name="email" 
                   value={this.state.users.email}
                   onChange={this.inputChange}
                   className="form-control-item"/>
                   </div>
                   <button 
                   className="btn btn-primary mt-2"
                   type="submit"> Submit </button>
                   <button 
                   className="btn btn-primary mt-2 ml-3"
                   type="submit"> Cancel </button>
                  </form>
                </div>              
               </div>
               </div>
             </div>
          </div>
       </section>
      </div>
    );
  }
}

export default Form ;