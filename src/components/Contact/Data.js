// // import { Component } from "react";
// // import axios from 'axios'

// // export default class index extends Component {


// // state= {
// //     name:'',
// //     email:'',
// //     message:'',
// //     sent:False,
// // }

// //     // handle input
// //     handleName=(e)=>{
// //         this.setState({
// //             name: e.target.value
// //         })
// //     }
// //     handleEmail=(e)=>{
// //         this.setState({
// //             name: e.target.value
// //         })
// //     }
// //     handleMessage=(e)=>{
// //         this.setState({
// //             name: e.target.value
// //         })
// //     }

// //     formSubmit=(e)=>{
// //     e.preventDefault();

// //     let data = {
// //         name:this.state.name,
// //         email:this.state.email,
// //         message:this.state.message
// //     }

// //     axios.post('/api/forma',data)
// //     .then(res=>{
// //         this.setState({
// //             sent:true,
// //         },this.resetForm())
// //     }).catch(()=>{
// //         console.log('message not sent')
// //     })

// // }
// // }



// // //for reseting initial data 
// // resetForm=()=>{
// //     this.setState({
// //         name:'',
// //         email:'',
// //         message:''
// //     })

// //     setTimeout(()=>{
// //         this.setState({
// //             sent:false,
// //         })
// //     },3000)
// // }


// export default class index extends Component {

    

// state= {
//     name:'',
//     email:'',
//     message:'',
//     sent:false,
// }

//     // handle input
//     handleName=(e)=>{
//         this.setState({
//             name:e.target.value
//         })
//     }
//     handleEmail=(e)=>{
//         this.setState({
//             email:e.target.value
//         })
//     }
//     handleMessage=(e)=>{
//         this.setState({
//             message:e.target.value
//         })
//     }

//     formSubmit=(e)=>{
//     e.preventDefault();

//     let data = {
//         name:this.state.name,
//         email:this.state.email,
//         message:this.state.message
//     }

//     axios.post('/api/forma',data)
//     .then(res=>{
//         this.setState({
//             sent:true,
//         },this.resetForm())
//     }).catch(()=>{
//         console.log('message not sent')
//     })

//     }

// //for reseting initial data 
// resetForm=()=>{
//     this.setState({
//         name:'',
//         email:'',
//         message:''
//     })

//     setTimeout(()=>{
//         this.setState({
//             sent:false,
//         })
//     },3000)
// }


// render()

 // value={this.state.message}
                            // onChange = {(e)=>this.handleMessage(e)}