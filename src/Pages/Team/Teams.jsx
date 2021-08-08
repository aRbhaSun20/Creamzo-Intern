import React from 'react';
import Team from '../../Components/Team/Team';
import Information from '../../Components/Team/Information';
import style from '../../Components/Team/style/style.module.css'
const Teams=  ()=>{
    let hrTeam=[{name:"name"}];
    let webTeam = [{ name: "namenmmmkjkjik" }, { name: "name" }, { name: "name" }, { name: "name" }, { name: "name" }, { name: "name" }, { name: "name" }, { name: "name" }, { name: "name" }];
    let contentTeam = [{ name: "name" }, { name: "name" }, { name: "name" }, { name: "name" }, { name: "name" }, { name: "name" }, { name: "name" }, { name: "name" }, { name: "name" }, { name: "name" }, { name: "name" }, { name: "name" }, { name: "name" }, { name: "name" }, { name: "name" }];
    let graphicTeam = [{ name: "name" }, { name: "name" }, { name: "name" }, { name: "name" }]
    return(
        <React.Fragment>
            <div className={style.container}>

            <Information/>
            <Team team="HR" members={hrTeam} bg="#4d4d4d" />
            <Team team="Content Writing" members={contentTeam} bg="none" />
            <Team team="Web Development" members={webTeam} bg="white"/>
                <Team team="Graphic" members={graphicTeam} bg="none" />
            </div>
        </React.Fragment>
    )
}

export default Teams;