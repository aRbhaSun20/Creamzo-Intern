import React,{Component} from 'react';
import "./Menu.css";
import {MenuItems} from "./MenuItems";
import Option1 from '../Content/Option1';
import Option2 from '../Content/Option2';
import Option3 from '../Content/Option3';
import Option4 from '../Content/Option4';
import {Link} from 'react-router-dom';

class Menu extends Component{
    constructor() {
        super();
        this.state = {
          active : 1,
          color : ["pink","#85FF9D","#85FF9D","#85FF9D"]
        };
    };

    setColor(index){
        // eslint-disable-next-line
        this.state.color[index-1]="pink";
        for (let i=0;i<4;i++){
            if (i!==index-1){
                // eslint-disable-next-line
                this.state.color[i]="#85FF9D";
            }
        }
    }

    

    render() {
      
        
        return(
            <React.Fragment>
                <div class="Menu">
                    {MenuItems.map((item,index) => {
                        return(
                            <div key={index} className="menu-list">
                                <svg id="circle">
                                    <g>
                                        
                                        <Link to={item.url} className={item.cName} target="_top"  onClick={()=>{this.setState({active : item.select});this.setColor(item.select)}}>
                                        <circle cx="125" cy="125" r="100" fill={this.state.color[item.select-1]} className={item.select===this.state.active} />
                                            <text x="50%" y="50%" style={{textAnchor: "middle"}}>{item.title}</text>
                                        </Link>
                                    </g>
                                </svg>
                            </div>
                        )

                        
                    })}
                    
                </div>
                <div class="Content">
                    {this.state.active === 1 && <Option1 />}
                    {this.state.active === 2 && <Option2 />}
                    {this.state.active === 3 && <Option3 />}
                    {this.state.active === 4 && <Option4 />}
                </div>
                
                
            </React.Fragment>
        )
    }
}

export default Menu;