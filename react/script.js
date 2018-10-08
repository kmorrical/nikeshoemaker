// //todo make back end to hold and pass the data 
// var shoeColors = [{
//         name: 'black',
//         imageSrc: 'http://res.cloudinary.com/osidekweenyasss/image/upload/v1519768752/blackswoosh.png',
//         imgSrcLace: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538668066/lacesblack.png',
//         imgSrcFlywire: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538677182/flywireblack.png',
//         imgSrcTongue: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538675823/tongueblack.png',
//         imgSrcInsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538676547/insoleblack.png',
//         imgSrcMidsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538673679/midsoleblack.png',
//         imgSrcOutsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538674455/bottomsoleblack.png',
//         imgSrcUpper: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538673135/upperblack.png',
//         imgSrcLaceholder: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538677682/laceholderblack.png',
//         hexCode: 'black'
//     },
//     {
//         name: 'green',
//         imageSrc: 'http://res.cloudinary.com/osidekweenyasss/image/upload/v1519768752/greenswoosh.png',
//         imgSrcLace: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538668066/lacesgreen.png',
//         imgSrcFlywire: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538677182/flywiregreen.png',
//         imgSrcTongue: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538675824/tonguegreen.png',
//         imgSrcInsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538676548/insolegreen.png',
//         imgSrcMidsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538673680/midsolegreen.png',
//         imgSrcOutsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538674780/bottomsolegreen.png',
//         imgSrcUpper: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538673135/uppergreen.png',
//         imgSrcLaceholder: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538677682/laceholdergreen.png',
//         hexCode: '#34A853'
//     },
//     {
//         name: 'red',
//         imageSrc: 'http://res.cloudinary.com/osidekweenyasss/image/upload/v1519768752/redswoosh.png',
//         imgSrcLace: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538668067/lacesred.png',
//         imgSrcFlywire: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538678471/redflywire.png',
//         imgSrcTongue: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538675824/tonguered.png',
//         imgSrcInsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538676548/insolered.png',
//         imgSrcMidsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538673682/misolered.png',
//         imgSrcOutsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538674427/bottomsolered.png',
//         imgSrcUpper: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538673138/upperred.png',
//         imgSrcLaceholder: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538677683/laceholderred.png',
//         hexCode: '#E50914'
//     },
//     {
//         name: 'navy',
//         imageSrc: 'http://res.cloudinary.com/osidekweenyasss/image/upload/v1519768752/blueswoosh.png',
//         imgSrcLace: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538668066/lacesnavy.png',
//         imgSrcFlywire: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538677182/flywirenavy.png',
//         imgSrcTongue: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538675824/tonguenavy.png',
//         imgSrcInsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538676547/insolenavy.png',
//         imgSrcMidsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538673680/midsolenavy.png',
//         imgSrcOutsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538674766/bottomsolenavy.png',
//         imgSrcUpper: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538673135/uppernavy.png',
//         imgSrcLaceholder: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538677682/laceholdernavy.png',
//         hexCode: '#36486b'
//     },
//     {
//         name: 'white',
//         imageSrc: 'http://res.cloudinary.com/osidekweenyasss/image/upload/v1519768752/whiteswoosh.png',
//         imgSrcLace: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538668066/laceswhite.png',
//         imgSrcFlywire: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538677182/flywirewhite.png',
//         imgSrcTongue: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538675868/tonguewhite.png',
//         imgSrcInsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538676548/insolewhite.png',
//         imgSrcMidsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538673681/midsolewhite.png',
//         imgSrcOutsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538674427/bottomsolewhite.png',
//         imgSrcUpper: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538673138/upperwhite.png',
//         imgSrcLaceholder: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538677683/laceholderwhite.png',
//         hexCode: 'white'
//     }
// ];

// var shoeColors2 = [{
//         name: 'cheetah',
//         imageSrc: 'http://res.cloudinary.com/osidekweenyasss/image/upload/v1519768958/cheetahswoosh.png',
//         imgSrcLace: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538672211/lacescheetah.png',
//         imgSrcFlywire: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538677231/cheetahflywire.png',
//         imgSrcTongue: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538675824/tonguecheetah.png',
//         imgSrcInsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538676547/insolecheetah.png',
//         imgSrcMidsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538673680/midsolecheetah.png',
//         imgSrcOutsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538674426/bottomsolecheetah.png',
//         imgSrcUpper: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538673137/uppercheetah.png',
//         imgSrcLaceholder: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538677682/laceholdercheetah.png',
//         hexCode: 'cheetah'
//     },
//     {
//         name: 'yellow',
//         imageSrc: 'http://res.cloudinary.com/osidekweenyasss/image/upload/v1519768752/yellowswoosh.png',
//         imgSrcLace: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538668067/lacesyellow.png',
//         imgSrcFlywire: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538677183/flywireyellow.png',
//         imgSrcTongue: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538675825/tongueyellow.png',
//         imgSrcInsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538676548/insoleyellow.png',
//         imgSrcMidsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538673772/midsoleyellow.png',
//         imgSrcOutsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538674426/bottomsoleyellow.png',
//         imgSrcUpper: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538673138/upperyellow.png',
//         imgSrcLaceholder: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538677742/laceholderyellow.png',
//         hexCode: '#FFCC00'
//     },
//     {
//         name: 'ltblue',
//         imageSrc: 'http://res.cloudinary.com/osidekweenyasss/image/upload/v1519768752/lightblueswoosh.png',
//         imgSrcLace: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538668066/lacesltblue.png',
//         imgSrcFlywire: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538677183/flywireltblue.png',
//         imgSrcTongue: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538675825/tonguelightblue.png',
//         imgSrcInsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538676547/insoleltblue.png',
//         imgSrcMidsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538673680/midsoleltblue.png',
//         imgSrcOutsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538674766/bottomsoleltblue.png',
//         imgSrcUpper: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538673134/upperlightblue.png',
//         imgSrcLaceholder: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538677683/laceholderltblue.png',
//         hexCode: '#2196F3'
//     },
//     {
//         name: 'grey',
//         imageSrc: 'http://res.cloudinary.com/osidekweenyasss/image/upload/v1519768752/grayswoosh.png',
//         imgSrcLace: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538671781/lacesgrey.png',
//         imgSrcFlywire: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538677182/flywiregrey.png',
//         imgSrcTongue: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538675824/tonguegrey.png',
//         imgSrcInsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538676548/insolegrey.png',
//         imgSrcMidsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538688057/midsolegrey2.png',
//         imgSrcOutsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538674426/bottomsolegrey.png',
//         imgSrcUpper: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538673137/uppergray.png',
//         imgSrcLaceholder: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538677682/laceholdergrey.png',
//         hexCode: 'grey'
//     },
//     {
//         name: 'orange',
//         imageSrc: 'http://res.cloudinary.com/osidekweenyasss/image/upload/v1519761746/orangeswoosh.png',
//         imgSrcLace: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538668066/lacesorange.png',
//         imgSrcFlywire: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538677182/flywireorange.png',
//         imgSrcTongue: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538675824/tongueorange.png',
//         imgSrcInsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538676548/insoleorange.png',
//         imgSrcMidsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538673681/midsoleorange.png',
//         imgSrcOutsole: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538674767/bottomsoleorange.png',
//         imgSrcUpper: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538673138/upperorange.png',
//         imgSrcLaceholder: 'https://res.cloudinary.com/osidekweenyasss/image/upload/v1538677682/laceholderorange.png',
//         hexCode: '#ff5722'
//     }
// ];

// var shoeColorsTotal = shoeColors.concat(shoeColors2);

// console.log(shoeColors);
// console.log(shoeColors2);
// console.log(shoeColorsTotal);

// class ColorSquares extends React.Component {
//     constructor(props) {
//         super(props);


//         this.state = {
//             imgSrcLace: '',
//             imgSrcFlywire: '',
//             imgSrcTongue: '',
//             imgSrcLaceholder: '',
//             imgSrcUpper: '',
//             imgSrcMidsole: '',
//             imgSrcOutsole: '',
//             imgSrcInsole: '',
//             shoes: ['redShoe', 'blackShoe', 'cheetahShoe'],
//             nikeSrc: 'http://res.cloudinary.com/osidekweenyasss/image/upload/v1519761746/orangeswoosh.png',
//             shoeSelectionRight: shoeColors,
//             shoeSelectionLeft: shoeColors2,
//             shoeSelectionTotal: shoeColorsTotal,
//             shoePart: "SWOOSH",
//             shoeParts: ['SWOOSH', 'TONGUE', 'FLYWIRE', 'SOLE', 'MIDSOLE', 'LACES', 'OUTER', 'INSOLE', 'EYELETS'],
//         };
//         this.changeColor = this.changeColor.bind(this);
//         this.changeShoePart = this.changeShoePart.bind(this);
//     }

//     //change this to go between components
//     changeColor(event) {
//         console.log(event.currentTarget.id);
//         var targetName = event.currentTarget.id;
//         console.log(targetName)
//         const shoes = this.state.shoeSelectionTotal.slice();
//         console.log(shoes);

//         var shoeResult = _.find(shoes, function(o) { return o.name == targetName });
//         console.log(shoeResult);

//         const part = this.state.shoePart;
//         let newSource;
//         console.log(part);
//         switch (part) {
//             case "SWOOSH":
//                 newSource = shoeResult.imageSrc;
//                 console.log(newSource);
//                 this.setState({ nikeSrc: newSource });
//                 break;

//             case "LACES":
//                 newSource = shoeResult.imgSrcLace;
//                 console.log(newSource);
//                 this.setState({ imgSrcLace: newSource });
//                 break;

//             case "TONGUE":
//                 newSource = shoeResult.imgSrcTongue;
//                 console.log(newSource);
//                 this.setState({ imgSrcTongue: newSource });
//                 break;

//             case "FLYWIRE":
//                 newSource = shoeResult.imgSrcFlywire;
//                 console.log(newSource);
//                 this.setState({ imgSrcFlywire: newSource });
//                 break;

//             case "OUTER":
//                 newSource = shoeResult.imgSrcUpper;
//                 console.log(newSource);
//                 this.setState({ imgSrcUpper: newSource });
//                 break;

//             case "INSOLE":
//                 newSource = shoeResult.imgSrcInsole;
//                 console.log(newSource);
//                 this.setState({ imgSrcInsole: newSource });
//                 break;

//             case "MIDSOLE":
//                 newSource = shoeResult.imgSrcMidsole;
//                 console.log(newSource);
//                 this.setState({ imgSrcMidsole: newSource });
//                 break;

//             case "EYELETS":
//                 newSource = shoeResult.imgSrcLaceholder;
//                 console.log(newSource);
//                 this.setState({ imgSrcLaceholder: newSource });
//                 break;

//             case "SOLE":
//                 newSource = shoeResult.imgSrcOutsole;
//                 console.log(newSource);
//                 this.setState({ imgSrcOutsole: newSource });
//                 break;

//             default:
//                 newSource = shoeResult.imageSrc;
//                 console.log(newSource);
//                 this.setState({ nikeSrc: newSource });
//                 break;
//         }

//     };

//     changeShoePart(event) {
//         console.log("hey");
//         console.log(event.currentTarget.id);
//         const targetPart = event.currentTarget.id;
//         this.setState({ shoePart: targetPart });
//         console.log(this.state.shoePart);

//     }

//     // blackShoe() {
//     //     this.setState({nikeSrc: "http://res.cloudinary.com/osidekweenyasss/image/upload/v1519768752/blackswoosh.png"});
//     //     console.log("here");
//     // };
//     // redShoe() {

//     //      this.setState({nikeSrc:               "http://res.cloudinary.com/osidekweenyasss/image/upload/v1519768752/redswoosh.png"})
//     // }
//     //   whiteShoe() {
//     //      this.setState({nikeSrc:               "http://res.cloudinary.com/osidekweenyasss/image/upload/v1519768752/whiteswoosh.png"})
//     // }
//     //    yellowShoe() {
//     //             this.setState({nikeSrc:               " http://res.cloudinary.com/osidekweenyasss/image/upload/v1519768752/yellowswoosh.png"})

//     //  }
//     //  grayShoe() {
//     //      this.setState({nikeSrc:               "http://res.cloudinary.com/osidekweenyasss/image/upload/v1519768752/grayswoosh.png"})
//     //  }
//     //   greenShoe() {
//     //      this.setState({nikeSrc:               "http://res.cloudinary.com/osidekweenyasss/image/upload/v1519768752/greenswoosh.png"})
//     // }
//     //     blueShoe() {
//     //           this.setState({nikeSrc:               "http://res.cloudinary.com/osidekweenyasss/image/upload/v1519768752/blueswoosh.png"})
//     // }
//     //     cheetahShoe() {
//     //           this.setState({nikeSrc:               "http://res.cloudinary.com/osidekweenyasss/image/upload/v1519768958/cheetahswoosh.png"})
//     // }
//     //       lightblueShoe() {
//     //           this.setState({nikeSrc:               "http://res.cloudinary.com/osidekweenyasss/image/upload/v1519768752/lightblueswoosh.png"})
//     // }
//     //        orangeShoe() {
//     //      this.setState({nikeSrc:               "http://res.cloudinary.com/osidekweenyasss/image/upload/v1519761746/orangeswoosh.png"})
//     //  }

//     render() {
//         var leftShoes = this.state.shoeSelectionLeft;
//         var rightShoes = this.state.shoeSelectionRight;
//         var self = this;
//         //this.colorch = this.changeColor.bind(this);
//         // this.redShoe = this.redShoe.bind(this);
//         // this.greenShoe = this.greenShoe.bind(this);
//         // this.cheetahShoe = this.cheetahShoe.bind(this);
//         // this.blueShoe = this.blueShoe.bind(this);
//         // this.whiteShoe = this.whiteShoe.bind(this);
//         // this.grayShoe = this.grayShoe.bind(this);
//         // this.orangeShoe = this.orangeShoe.bind(this);
//         // this.lightblueShoe = this.lightblueShoe.bind(this);
//         // this.yellowShoe = this.yellowShoe.bind(this);

//         return (

//             <div>
//       <div className="row col-md-12">
//         <div className="col-md-8">
//         <Nike imgSrc={this.state.nikeSrc} 
//         imgSrcLace={this.state.imgSrcLace}
//         imgSrcTongue={this.state.imgSrcTongue}
//         imgSrcLaceholder={this.state.imgSrcLaceholder}
//         imgSrcMidsole={this.state.imgSrcMidsole}
//         imgSrcOutsole={this.state.imgSrcOutsole}
//         imgSrcInsole={this.state.imgSrcInsole}
//         imgSrcUpper={this.state.imgSrcUpper}
//         imgSrcFlywire={this.state.imgSrcFlywire}/>
//         </div>
//       <div className="col-md-4">
  
//         <Colors shoeSelectionLeft={this.state.shoeSelectionLeft} 
//         shoeSelectionRight={this.state.shoeSelectionRight}
//         changeColor={this.changeColor}/>
     
//       </div>
//     </div>
//     <div className="row">
//       <div className="col-md-1"></div>
//       <div className="col-md-6 shoeboxdiv">
//       <Parts shoeParts={this.state.shoeParts} changeShoePart={this.changeShoePart}/>
//     </div>
//     </div>
//     </div>
//         )
//     }
// }

// class Nike extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             redshoe: true
//         }
//     }

//     /*would add component will recieve props here, but seems to be updating fine without it*/

//     render() {
    
//         return (

//             <div>
//           <h1 className="nike-headline">Nike</h1>
//           <div className="container"><img src="http://res.cloudinary.com/osidekweenyasss/image/upload/v1519684600/whitenike.png" className="nikeShoe img1"/>
//           <img src={this.props.imgSrc} className="nikeShoe img2"/>
//           <img src={this.props.imgSrcLace} className="nikeShoe img-lace"/>
//           <img src={this.props.imgSrcUpper} className="nikeShoe img-upper"/>
//           <img src={this.props.imgSrcLaceholder} className="nikeShoe img-laceholder"/>
//           <img src={this.props.imgSrcFlywire} className="nikeShoe img-flywire"/>
//           <img src={this.props.imgSrcTongue} className="nikeShoe img-tongue"/>
//           <img src={this.props.imgSrcInsole} className="nikeShoe img-insole"/>
//           <img src={this.props.imgSrcMidsole} className="nikeShoe img-midsole"/>
//           <img src={this.props.imgSrcOutsole} className="nikeShoe img-outsole"/>

//           </div>
//       </div>
//         )
//     }
// }

// class Colors extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {

//     }
//   }

// /*would add component will recieve props here, but seems to be updating fine without it*/

//   render(){
//     var self = this;
//     return (
//           <div>
//           <div className="col-md-2">
//           <div className="col-md-6 text-center topCircles">
//           {self.props.shoeSelectionLeft.map(function(item){
//             return(
//               <div>
//                 {(item.hexCode !== "white") && (item.hexCode !== "cheetah") ?
//                 <div key={item.id} id={item.name} className="colorCircle" style={{backgroundColor: item.hexCode}} onClick={self.props.changeColor}/>
//                 : <div key={item.id} id={item.name} className="colorCircle-cheetah" style={{backgroundColor: item.hexCode}} onClick={self.props.changeColor}/>
//                 }              
//               </div>
//             )
//           })
//           }
//           </div>
//           </div>
//         <div className="col-md-2">
//           <div className="col-md-6 text-center topCircles">
//           {self.props.shoeSelectionRight.map(function(item){
//             return(
//               <div>
//                 {(item.hexCode !== "white") && (item.hexCode !== "cheetah") ?
//                 <div key={item.id} id={item.name} className="colorCircle" style={{backgroundColor: item.hexCode}} onClick={self.props.changeColor}/>
//                 : (<div key={item.id} id={item.name} className="colorCircle-white" style={{backgroundColor: item.hexCode}} onClick={self.props.changeColor}/>)
//                 }
//             </div>
//             )})
//           }
//           </div>
//           </div>
//           </div>
        
//     )
//   }
// }


// class Parts extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     }
//   }

//   render() {
//     var self = this;
//     return (
//     <div>
//         {self.props.shoeParts.map(function(item){
//         return(
//           <div className="col-md-2 colorCircle whiteCircle bottomCircle" id={item} onClick={self.props.changeShoePart}>
//             <span className="shoePartText">{item}</span>
//           </div>
//           )
//         })
//       }
//     </div>
//     )

//   }
// }

// ReactDOM.render(
// <ColorSquares />,
//   document.getElementById('container1')
// );

